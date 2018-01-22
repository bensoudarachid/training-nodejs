'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();
require('isomorphic-fetch');

var util = require('util');

var trainingReducer = function trainingReducer() {
    var trainingappmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _immutable2.default.Map({
        trainings: undefined,
        trainingEditError: _immutable2.default.Map({}),
        isTrainingEditFetching: false
    });
    var action = arguments[1];


    if (!(trainingappmap instanceof _immutable2.default.Map)) {
        console.log('Training reducer. Init Map. Need to find out why it s not a map');
        trainingappmap = new _immutable2.default.Map({
            filterOpen: true,
            filterClosed: true,

            trainings: undefined,
            trainingEditError: _immutable2.default.Map({}),
            isTrainingEditFetching: false
        });
    }

    var trainings = trainingappmap.get('trainings');
    var edittraining = trainingappmap.get('edittraining');
    var index = void 0;
    switch (action.type) {
        case 'CREATE_TRAINING_INIT':

            trainingappmap = trainingappmap.set('trainings', trainings.push(action.training));
            return trainingappmap;

        case 'REJECT_TRAINING_INIT':

            trainings = trainings.filter(function (element) {
                return element !== action.representTraining;
            });
            trainingappmap = trainingappmap.set('trainings', trainings);
            return trainingappmap;
        case 'ADD_TRAINING':
            index = trainings.findIndex(function (item) {
                return item === action.representTraining;
            });
            trainings = trainings.set(index, action.training);
            trainingappmap = trainingappmap.set('trainings', trainings);
            return trainingappmap;
        case 'TRAINING_LOADED':
            return trainingappmap;
        case 'HANDLE_TRAINING_CHANGE':
            edittraining = trainingappmap.get('edittraining');
            edittraining = edittraining.set(action.attribute, action.value);
            trainingappmap = trainingappmap.set('edittraining', edittraining);
            return trainingappmap;
        case 'HANDLE_TRAINING_EVENTS_CHANGE':
            trainingappmap = trainingappmap.set('edittrainingevents', action.events);
            return trainingappmap;
        case 'EDIT_TRAINING_SAVING':
            var editTraining = action.training;
            editTraining = editTraining.set('saving', true);
            trainingappmap = trainingappmap.set('edittraining', editTraining);
            return trainingappmap;
        case 'EDIT_TRAINING_LOADED':
            if (action.training == undefined) {
                trainingappmap = trainingappmap.set('edittraining', undefined);
                trainingappmap = trainingappmap.set('edittrainingevents', _immutable2.default.List([]));
            } else {
                trainingappmap = trainingappmap.set('edittraining', _immutable2.default.Map(action.training));
                trainingappmap = trainingappmap.set('edittrainingevents', _immutable2.default.List(trainingappmap.get('edittraining').get('events').toJS()));
            }
            return trainingappmap;
        case 'EDIT_TRAINING_VALIDATE':
            var userInputErrors = {};
            if (action.editTraining.get('title').length == 0) userInputErrors.title = 'required';
            if (action.editTraining.get('shortDescription').length == 0) {
                userInputErrors.shortDescription = 'required';
            }
            if (!_validator2.default.isLength(action.editTraining.get('title').trim(), 0, 40)) userInputErrors.title = 'too long (40 chars max)';

            if (!_validator2.default.isLength(action.editTraining.get('shortDescription').trim(), 0, 255)) userInputErrors.shortDescription = 'too long (255 chars max)';

            trainingappmap = trainingappmap.set('trainingEditError', new _immutable2.default.Map(userInputErrors));
            return trainingappmap;
        case 'TRAININGS_LOADED':
            if (action.trainings == undefined) trainingappmap = trainingappmap.set('trainings', undefined);else trainingappmap = trainingappmap.set('trainings', _immutable2.default.List(action.trainings.map(function (training) {
                return _immutable2.default.Map(training);
            })));
            return trainingappmap;

        case 'SAVE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.map(function (training) {
                return training.get('id') === action.id ? training.set('title', action.text) : training;
            }));
            return trainingappmap;
        case 'COMPLETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.map(function (training) {
                return training.id === action.id ? Object.assign({}, training, {
                    completed: !training.completed
                }) : training;
            }));
            return trainingappmap;

        case 'UPDATE_TRAINING_IN_LIST':
            if (trainings == undefined) return trainingappmap;
            index = trainings.findIndex(function (item) {
                return item.get('id') === action.training.get('id');
            });
            trainingappmap = trainingappmap.set('trainings', trainings.set(index, action.training));
            trainingappmap = trainingappmap.set('loadTrainingImages', true);
            return trainingappmap;

        case 'DELETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.filter(function (training) {
                return training.get('id') !== action.id;
            }));
            return trainingappmap;

        default:
            return trainingappmap;

    }
};

exports.default = trainingReducer;