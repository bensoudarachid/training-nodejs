import Immutable from 'immutable'
import validator from 'validator'

require('es6-promise').polyfill()
require('isomorphic-fetch')

var util = require('util')

let trainingReducer = function (trainingappmap = new Immutable.Map({
    trainings: undefined,
    trainingEditError: Immutable.Map({}),
    isTrainingEditFetching: false
}), action) {

    if (!(trainingappmap instanceof Immutable.Map)) {
        console.log('Training reducer. Init Map. Need to find out why it s not a map')
        trainingappmap = new Immutable.Map({
            filterOpen: true,
            filterClosed: true,

            trainings: undefined,
            trainingEditError: Immutable.Map({}),
            isTrainingEditFetching: false
        })
    }

    var trainings = trainingappmap.get('trainings')
    var edittraining = trainingappmap.get('edittraining')
    let index
    switch (action.type) {
        case 'CREATE_TRAINING_INIT':


            trainingappmap = trainingappmap.set('trainings', trainings.push(action.training))
            return trainingappmap


        case 'REJECT_TRAINING_INIT':


            trainings = trainings.filter(function (element) {
                return element !== action.representTraining
            })
            trainingappmap = trainingappmap.set('trainings', trainings)
            return trainingappmap
        case 'ADD_TRAINING':
            index = trainings.findIndex(function (item) {
                return item === action.representTraining
            })
            trainings = trainings.set(index, action.training)
            trainingappmap = trainingappmap.set('trainings', trainings)
            return trainingappmap
        case 'TRAINING_LOADED':
            return trainingappmap
        case 'HANDLE_TRAINING_CHANGE':
            edittraining = trainingappmap.get('edittraining')
            edittraining = edittraining.set(action.attribute, action.value)
            trainingappmap = trainingappmap.set('edittraining', edittraining)
            return trainingappmap
        case 'HANDLE_TRAINING_EVENTS_CHANGE':
            trainingappmap = trainingappmap.set('edittrainingevents', action.events)
            return trainingappmap
        case 'EDIT_TRAINING_SAVING':
            var editTraining = action.training
            editTraining = editTraining.set('saving', true)
            trainingappmap = trainingappmap.set('edittraining', editTraining)
            return trainingappmap
        case 'EDIT_TRAINING_LOADED':
            if (action.training == undefined) {
                trainingappmap = trainingappmap.set('edittraining', undefined)
                trainingappmap = trainingappmap.set('edittrainingevents', Immutable.List([]))
            } else {
                trainingappmap = trainingappmap.set('edittraining', Immutable.Map(action.training))
                trainingappmap = trainingappmap.set('edittrainingevents', Immutable.List(trainingappmap.get('edittraining').get('events').toJS()))
            }
            return trainingappmap
        case 'EDIT_TRAINING_VALIDATE':
            var userInputErrors = {}
            if (action.editTraining.get('title').length == 0)
                userInputErrors.title = 'required'
            if (action.editTraining.get('shortDescription').length == 0) {
                userInputErrors.shortDescription = 'required'
            }
            if (!validator.isLength(action.editTraining.get('title').trim(), 0, 40))
                userInputErrors.title = 'too long (40 chars max)'

            if (!validator.isLength(action.editTraining.get('shortDescription').trim(), 0, 255))
                userInputErrors.shortDescription = 'too long (255 chars max)'

            trainingappmap = trainingappmap.set('trainingEditError', new Immutable.Map(userInputErrors))
            return trainingappmap
        case 'TRAININGS_LOADED':
            if (action.trainings == undefined)
                trainingappmap = trainingappmap.set('trainings', undefined)
            else
                trainingappmap = trainingappmap.set('trainings', Immutable.List(action.trainings.map((training) => {
                    return Immutable.Map(training)
                })))
            return trainingappmap

        case 'SAVE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.map((training) => {
                return training.get('id') === action.id ?
                    training.set('title', action.text)
                    : training
            }))
            return trainingappmap
        case 'COMPLETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.map((training) => {
                return training.id === action.id ?
                    Object.assign({}, training, {
                        completed: !training.completed
                    }) : training
            }))
            return trainingappmap

        case 'UPDATE_TRAINING_IN_LIST':
            if (trainings == undefined)
                return trainingappmap
            index = trainings.findIndex(function (item) {
                return item.get('id') === action.training.get('id')
            })
            trainingappmap = trainingappmap.set('trainings', trainings.set(index, action.training))
            trainingappmap = trainingappmap.set('loadTrainingImages', true)
            return trainingappmap

        case 'DELETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.filter((training) => {
                return training.get('id') !== action.id
            }))
            return trainingappmap

        default:
            return trainingappmap

    }
}

export default trainingReducer
