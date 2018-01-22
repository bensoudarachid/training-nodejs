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
<<<<<<< HEAD
        trainings: undefined,
=======
        // loadTrainingImages: false,
        trainings: undefined, //Immutable.List([])
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        trainingEditError: _immutable2.default.Map({}),
        isTrainingEditFetching: false
    });
    var action = arguments[1];

<<<<<<< HEAD

=======
    // let trainingReducer = function(trainingappmap = new Immutable.Map({}), action) {
    // console.log('Training reducer. is Map ' + (trainingappmap instanceof Immutable.Map) )
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    if (!(trainingappmap instanceof _immutable2.default.Map)) {
        console.log('Training reducer. Init Map. Need to find out why it s not a map');
        trainingappmap = new _immutable2.default.Map({
            filterOpen: true,
            filterClosed: true,
<<<<<<< HEAD

            trainings: undefined,
=======
            // loadTrainingImages: false,
            trainings: undefined, //Immutable.List([])
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            trainingEditError: _immutable2.default.Map({}),
            isTrainingEditFetching: false
        });
    }
<<<<<<< HEAD

=======
    // console.log('Training reducer. Filter open: ' + trainingappmap.get('filterOpen'))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    var trainings = trainingappmap.get('trainings');
    var edittraining = trainingappmap.get('edittraining');
    var index = void 0;
    switch (action.type) {
        case 'CREATE_TRAINING_INIT':
<<<<<<< HEAD

            trainingappmap = trainingappmap.set('trainings', trainings.push(action.training));
            return trainingappmap;

        case 'REJECT_TRAINING_INIT':

=======
            // console.log('training reducer. init create training : ')
            // console.log(action.training)
            trainingappmap = trainingappmap.set('trainings', trainings.push(action.training));
            return trainingappmap;
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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            trainings = trainings.filter(function (element) {
                return element !== action.representTraining;
            });
            trainingappmap = trainingappmap.set('trainings', trainings);
            return trainingappmap;
        case 'ADD_TRAINING':
<<<<<<< HEAD
=======
            console.log('training reducer. add training : completed? ' + action.training.get('completed'));
            // console.log(action.training)
            // console.log('training reducer. add training, remove representant : ')
            // console.log(action.representTraining)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            index = trainings.findIndex(function (item) {
                return item === action.representTraining;
            });
            trainings = trainings.set(index, action.training);
<<<<<<< HEAD
            trainingappmap = trainingappmap.set('trainings', trainings);
            return trainingappmap;
        case 'TRAINING_LOADED':
            return trainingappmap;
        case 'HANDLE_TRAINING_CHANGE':
=======
            // trainings = trainings.filter(function(element) {
            //   return element !== action.representTraining
            // }).push(action.training)
            trainingappmap = trainingappmap.set('trainings', trainings);
            return trainingappmap;
        case 'TRAINING_LOADED':

            // trainingappmap = trainingappmap.set('trainings', Immutable.List(action.trainings.map((training) => {
            //   return Immutable.Map(training)
            // })))
            // console.log('trainings reducer. training loaded. Do something with it' )
            return trainingappmap;
        case 'HANDLE_TRAINING_CHANGE':

            console.log('HANDLE_TRAINING_CHANGE. I m here damn!');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            edittraining = trainingappmap.get('edittraining');
            edittraining = edittraining.set(action.attribute, action.value);
            trainingappmap = trainingappmap.set('edittraining', edittraining);
            return trainingappmap;
        case 'HANDLE_TRAINING_EVENTS_CHANGE':
<<<<<<< HEAD
            trainingappmap = trainingappmap.set('edittrainingevents', action.events);
            return trainingappmap;
        case 'EDIT_TRAINING_SAVING':
            var editTraining = action.training;
            editTraining = editTraining.set('saving', true);
            trainingappmap = trainingappmap.set('edittraining', editTraining);
            return trainingappmap;
        case 'EDIT_TRAINING_LOADED':
=======
            // console.log('Reducer .events='+require('util').inspect(action.events, false, null))
            trainingappmap = trainingappmap.set('edittrainingevents', action.events);
            return trainingappmap;
        case 'EDIT_TRAINING_SAVING':
            var editTraining = action.training; //trainingappmap.get('edittraining')
            editTraining = editTraining.set('saving', true);
            console.log('Training reducer edit training is being saved. Check: ' + require('util').inspect(editTraining, false, null));
            trainingappmap = trainingappmap.set('edittraining', editTraining);
            return trainingappmap;
        case 'EDIT_TRAINING_LOADED':
            //            console.log('trainings reducer EDIT_TRAINING_LOADED  <-----------------------------')
            //            console.log('action.training='+require('util').inspect(action.training.events.toIndexedSeq().toArray(), false, null))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            if (action.training == undefined) {
                trainingappmap = trainingappmap.set('edittraining', undefined);
                trainingappmap = trainingappmap.set('edittrainingevents', _immutable2.default.List([]));
            } else {
                trainingappmap = trainingappmap.set('edittraining', _immutable2.default.Map(action.training));
                trainingappmap = trainingappmap.set('edittrainingevents', _immutable2.default.List(trainingappmap.get('edittraining').get('events').toJS()));
<<<<<<< HEAD
            }
            return trainingappmap;
        case 'EDIT_TRAINING_VALIDATE':
            var userInputErrors = {};
            if (action.editTraining.get('title').length == 0) userInputErrors.title = 'required';
            if (action.editTraining.get('shortDescription').length == 0) {
=======
                //                console.log('trainings reducer. training loaded. Do something with it' + util.inspect(action.training.events.toIndexedSeq().toArray(), false, null))
            }
            return trainingappmap;

        case 'EDIT_TRAINING_VALIDATE':
            var userInputErrors = {};
            // console.log('action.editTraining='+require('util').inspect(action.editTraining, false, null))
            if (action.editTraining.get('title').length == 0)
                // registrationError = registrationError.set('email','email required')
                userInputErrors.title = 'required';

            if (action.editTraining.get('shortDescription').length == 0) {
                console.log('required');
                // registrationError = registrationError.set('username','user name required')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                userInputErrors.shortDescription = 'required';
            }
            if (!_validator2.default.isLength(action.editTraining.get('title').trim(), 0, 40)) userInputErrors.title = 'too long (40 chars max)';

            if (!_validator2.default.isLength(action.editTraining.get('shortDescription').trim(), 0, 255)) userInputErrors.shortDescription = 'too long (255 chars max)';

<<<<<<< HEAD
            trainingappmap = trainingappmap.set('trainingEditError', new _immutable2.default.Map(userInputErrors));
            return trainingappmap;
=======
            // console.log('Training reducer userInputErrors.title'+userInputErrors.title)
            // console.log('Training reducer userInputErrors.shortDescription'+userInputErrors.shortDescription)

            trainingappmap = trainingappmap.set('trainingEditError', new _immutable2.default.Map(userInputErrors));
            return trainingappmap;

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        case 'TRAININGS_LOADED':
            if (action.trainings == undefined) trainingappmap = trainingappmap.set('trainings', undefined);else trainingappmap = trainingappmap.set('trainings', _immutable2.default.List(action.trainings.map(function (training) {
                return _immutable2.default.Map(training);
            })));
<<<<<<< HEAD
            return trainingappmap;

        case 'SAVE_TRAINING':
=======
            // trainingappmap = trainingappmap.set('edittraining', undefined)
            // console.log('trainings reducer. trainings loaded '+trainingappmap.get('trainings').size )
            return trainingappmap;
        // return action.trainings
        case 'SAVE_TRAINING':
            console.log('Training reducer. SaveTraining id=' + action.id + 'title = ' + action.text);
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
            // console.log('training reducer. update training : completed? ' + action.training.get('completed'))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            if (trainings == undefined) return trainingappmap;
            index = trainings.findIndex(function (item) {
                return item.get('id') === action.training.get('id');
            });
            trainingappmap = trainingappmap.set('trainings', trainings.set(index, action.training));
            trainingappmap = trainingappmap.set('loadTrainingImages', true);
            return trainingappmap;
<<<<<<< HEAD

=======
        // case 'UPDATE_TRAINING_FILE':
        //   console.log('training reducer. Upload file')
        //   trainingappmap = trainingappmap.set('loadTrainingImages', false)
        //   return trainingappmap
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        case 'DELETE_TRAINING':
            trainingappmap = trainingappmap.set('trainings', trainings.filter(function (training) {
                return training.get('id') !== action.id;
            }));
            return trainingappmap;
<<<<<<< HEAD

=======
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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        default:
            return trainingappmap;

    }
};

exports.default = trainingReducer;