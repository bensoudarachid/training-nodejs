// import _ from 'lodash'
import Immutable from 'immutable'
import validator from 'validator'
// import cookie from 'react-cookie'
require('es6-promise').polyfill()
require('isomorphic-fetch')

var util = require('util')

// function getId(trainings) {
//   return trainings.reduce((maxId, training) => {
//       return Math.max(training.get('id'), maxId)
//     }, -1) + 1
// }

// function getFilteredItems(trainings,filteropen,filterclosed) {
//     if (trainings) {
//       return trainings.filter(
//         (item) => { 
//             console.log('*****************')
//             // console.log('title '+item.get('title')+' is completed 1: '+item.get('completed') +' passing? '+
//             //     (item.get('completed') === 'true' && this.props.filter === 'closed')) 
//             // console.log('title '+item.get('title')+' is not completed: '+ !item.get('completed')  +'. Filter: '+this.props.filteropen+'. Passing? '+
//             //     !(item.get('completed')  && this.props.filterclosed ) )
//             return item.get('completed') && filterclosed  ||
//                 !item.get('completed') && filteropen 
//         }
//         // (item) => item.get('completed') === 'true' && this.props.filter === 'closed' ||
//         //   item.get('completed') === 'false' && this.props.filter === 'open' ||
//         //   this.props.filter === 'all'
//       );
//     }
//     return Immutable.List([]);
//   }

let trainingReducer = function (trainingappmap = new Immutable.Map({
    // loadTrainingImages: false,
    trainings: undefined,//Immutable.List([])
    trainingEditError: Immutable.Map({}),
    isTrainingEditFetching: false
}), action) {
    // let trainingReducer = function(trainingappmap = new Immutable.Map({}), action) {
    // console.log('Training reducer. is Map ' + (trainingappmap instanceof Immutable.Map) )
    if (!(trainingappmap instanceof Immutable.Map)) {
        console.log('Training reducer. Init Map. Need to find out why it s not a map')
        trainingappmap = new Immutable.Map({
            filterOpen: true,
            filterClosed: true,
            // loadTrainingImages: false,
            trainings: undefined,//Immutable.List([])
            trainingEditError: Immutable.Map({}),
            isTrainingEditFetching: false
        })
    }
    // console.log('Training reducer. Filter open: ' + trainingappmap.get('filterOpen'))
    var trainings = trainingappmap.get('trainings')
    var edittraining = trainingappmap.get('edittraining')
    let index
    switch (action.type) {
        case 'CREATE_TRAINING_INIT':
            // console.log('training reducer. init create training : ')
            // console.log(action.training)
            trainingappmap = trainingappmap.set('trainings', trainings.push(action.training))
            return trainingappmap
        // case 'LOADING_TRAINING':
        //   if( trainings == undefined)
        //     return trainingappmap
        //   index = trainings.findIndex(function(item) {
        //     return item.get('id') === action.training.get('id')
        //   })
        //   training = action.training.set('loading', true)
        //   trainings = trainings.set(index, training)
        //   trainingappmap = trainingappmap.set('trainings', trainings)
        //   return trainingappmap
        // case 'UPLOADING_TRAINING_IMAGE':
        //   index = trainings.findIndex(function(item) {
        //     return item.get('id') === action.training.get('id')
        //   })
        //   // console.log('trainingreducer uploading image. training index = '+index)
        //   var training = action.training.set('isUploading',action.isUploading)
        //   // console.log('trainingreducer uploading image: '+training.get('isUploading')+' action isUploading = '+action.isUploading)
        //   trainings = trainings.set(index, training)
        //   trainingappmap = trainingappmap.set('trainings', trainings)
        //   // console.log('trainingreducer uploading image. training isUploading from trainings = '+trainings.get(index).get('isUploading') )
        //   return trainingappmap
        // case 'FINISH_LOADING_TRAINING_FILE':
        //   trainingappmap = trainingappmap.set('loadTrainingImages', false)
        //   return trainingappmap

        case 'REJECT_TRAINING_INIT':
            // console.log('training reducer. reject create training : '+action.text)
            // console.log(action.text)
            trainings = trainings.filter(function (element) {
                return element !== action.representTraining
            })
            trainingappmap = trainingappmap.set('trainings', trainings)
            return trainingappmap
        case 'ADD_TRAINING':
            console.log('training reducer. add training : completed? ' + action.training.get('completed'))
            // console.log(action.training)
            // console.log('training reducer. add training, remove representant : ')
            // console.log(action.representTraining)
            index = trainings.findIndex(function (item) {
                return item === action.representTraining
            })
            trainings = trainings.set(index, action.training)
            // trainings = trainings.filter(function(element) {
            //   return element !== action.representTraining
            // }).push(action.training)
            trainingappmap = trainingappmap.set('trainings', trainings)
            return trainingappmap
        case 'TRAINING_LOADED':

            // trainingappmap = trainingappmap.set('trainings', Immutable.List(action.trainings.map((training) => {
            //   return Immutable.Map(training)
            // })))
            // console.log('trainings reducer. training loaded. Do something with it' )
            return trainingappmap
        case 'HANDLE_TRAINING_CHANGE':

            console.log('HANDLE_TRAINING_CHANGE. I m here damn!')
            edittraining = trainingappmap.get('edittraining')
            edittraining = edittraining.set(action.attribute, action.value)
            trainingappmap = trainingappmap.set('edittraining', edittraining)
            return trainingappmap
        case 'HANDLE_TRAINING_EVENTS_CHANGE':
            console.log('Reducer .events='+require('util').inspect(action.events, false, null))
            trainingappmap = trainingappmap.set('edittrainingevents', action.events)
            return trainingappmap
        case 'EDIT_TRAINING_SAVING':
            var editTraining = action.training //trainingappmap.get('edittraining')
            editTraining = editTraining.set('saving', true)
            console.log('Training reducer edit training is being saved. Check: ' + require('util').inspect(editTraining, false, null))
            trainingappmap = trainingappmap.set('edittraining', editTraining)
            return trainingappmap
        case 'EDIT_TRAINING_LOADED':
<<<<<<< HEAD
            if (action.training == undefined)
                trainingappmap = trainingappmap.set('edittraining', undefined)
            else
                trainingappmap = trainingappmap.set('edittraining', Immutable.Map(action.training))
            // console.log('trainings reducer. training loaded. Do something with it' +util.inspect( action.training, false, null))
=======
            console.log('trainings reducer EDIT_TRAINING_LOADED  <-----------------------------')
            console.log('action.training='+require('util').inspect(action.training.events.toIndexedSeq().toArray(), false, null))
            if (action.training == undefined)
                trainingappmap = trainingappmap.set('edittraining', undefined)
            else {
                // let events = Immutable.List([
                //     Immutable.Map({
                //         'number': 2,
                //         // 'title': 'React 2',
                //         // 'date': Date.now(),
                //         'start': new Date(2001, 0, 2, 9, 30, 0, 0),
                //         'end': new Date(2001, 0, 2, 11, 30, 0, 0)
                //         // 'allDay': true
                //     }),
                //     Immutable.Map({
                //         'number': 3,
                //         // 'title': 'React 2',
                //         // 'date': Date.now(),
                //         'start': new Date(2001, 0, 3, 10, 30, 0, 0),
                //         'end': new Date(2001, 0, 3, 14, 0, 0, 0)
                //         // 'allDay': true
                //     })
                // ])
                // let events = Immutable.List( [
                //     // {
                //     //     number: 2,
                //     //     start: 978337800000,
                //     //     end: 978348600000,
                //     //     version: 0,
                //     //     training: null
                //     // },
                //     {
                //         'number': 2,
                //         // 'title': 'React 2',
                //         // 'date': Date.now(),
                //         'start': new Date(2001, 0, 2, 9, 30, 0, 0),
                //         'end': new Date(2001, 0, 2, 11, 30, 0, 0)
                //         // 'allDay': true
                //     },
                //     {
                //         'number': 3,
                //         // 'title': 'React 2',
                //         // 'date': Date.now(),
                //         'start': new Date(2001, 0, 3, 10, 30, 0, 0),
                //         'end': new Date(2001, 0, 3, 14, 0, 0, 0)
                //         // 'allDay': true
                //     }
                // ])
                // action.training.events=events
                trainingappmap = trainingappmap.set('edittraining', Immutable.Map(action.training))
                trainingappmap = trainingappmap.set('edittrainingevents', Immutable.List(trainingappmap.get('edittraining').get('events').toJS()) )
                console.log('trainings reducer. training loaded. Do something with it' + util.inspect(action.training.events.toIndexedSeq().toArray(), false, null))
            }
>>>>>>> 6e3ff02... webstorm big changes crash
            return trainingappmap


        case 'EDIT_TRAINING_VALIDATE':
            var userInputErrors = {}
            // console.log('action.editTraining='+require('util').inspect(action.editTraining, false, null))
            if (action.editTraining.get('title').length == 0)
            // registrationError = registrationError.set('email','email required')
                userInputErrors.title = 'required'

            if (action.editTraining.get('shortDescription').length == 0) {
                console.log('required')
                // registrationError = registrationError.set('username','user name required')
                userInputErrors.shortDescription = 'required'
            }
            if (!validator.isLength(action.editTraining.get('title').trim(), 0, 40))
                userInputErrors.title = 'too long (40 chars max)'

            if (!validator.isLength(action.editTraining.get('shortDescription').trim(), 0, 255))
                userInputErrors.shortDescription = 'too long (255 chars max)'

            // console.log('Training reducer userInputErrors.title'+userInputErrors.title)
            // console.log('Training reducer userInputErrors.shortDescription'+userInputErrors.shortDescription)

            trainingappmap = trainingappmap.set('trainingEditError', new Immutable.Map(userInputErrors))
            return trainingappmap

        case 'TRAININGS_LOADED':
            if (action.trainings == undefined)
                trainingappmap = trainingappmap.set('trainings', undefined)
            else
                trainingappmap = trainingappmap.set('trainings', Immutable.List(action.trainings.map((training) => {
                    return Immutable.Map(training)
                })))
            // trainingappmap = trainingappmap.set('edittraining', undefined)
            // console.log('trainings reducer. trainings loaded '+trainingappmap.get('trainings').size )
            return trainingappmap
        // return action.trainings
        case 'SAVE_TRAINING':
            console.log('Training reducer. SaveTraining id=' + action.id + 'title = ' + action.text)
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
            // console.log('training reducer. update training : completed? ' + action.training.get('completed'))
            if (trainings == undefined)
                return trainingappmap
            index = trainings.findIndex(function (item) {
                return item.get('id') === action.training.get('id')
            })
            trainingappmap = trainingappmap.set('trainings', trainings.set(index, action.training))
            trainingappmap = trainingappmap.set('loadTrainingImages', true)
            return trainingappmap
        // case 'UPDATE_TRAINING_FILE':
        //   console.log('training reducer. Upload file')
        //   trainingappmap = trainingappmap.set('loadTrainingImages', false)
        //   return trainingappmap
        case 'DELETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.filter((training) => {
                return training.get('id') !== action.id
            }))
            return trainingappmap
        // case 'FILTER_TRAININGS':
        //   trainingappmap = trainingappmap.set('trainings', trainings.filter((training) => {
        //     return action.filterTrainings === undefined || training.get('completed') && action.filterTrainings === 'closed' ||
        //         training.get('open') && action.filterTrainings === 'open'
        //   }))
        //   return trainingappmap
        // case 'FILTER_TRAININGS_OPEN':
        //   trainingappmap = trainingappmap.set('filterOpen', action.filterOpen)
        //   return trainingappmap
        // case 'FILTER_TRAININGS_CLOSED':
        //   trainingappmap = trainingappmap.set('filterClosed', action.filterClosed)
        //   return trainingappmap
        default:
            return trainingappmap

    }
}

export default trainingReducer
