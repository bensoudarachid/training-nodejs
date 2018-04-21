'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trainingactions = {
    createTrainingInit: function createTrainingInit(representTraining) {
        return {
            type: 'CREATE_TRAINING_INIT',
            training: representTraining
        };
    },
    rejectTraining: function rejectTraining(representTraining) {
        console.log('Actions. Init registration: ');
        return {
            type: 'REJECT_TRAINING_INIT',
            representTraining: representTraining
        };
    },
    updateTrainingInList: function updateTrainingInList(training) {
        return {
            type: 'UPDATE_TRAINING_IN_LIST',
            training: training
        };
    },
    uploadingTrainingImg: function uploadingTrainingImg(training, isUploading) {
        return {
            type: 'UPLOADING_TRAINING_IMAGE',
            training: training,
            isUploading: isUploading
        };
    },

    handleTrainingEditChange: function handleTrainingEditChange(attribute, value) {
        return {
            type: 'HANDLE_TRAINING_CHANGE',
            attribute: attribute,
            value: value
        };
    },

    handleTrainingEditEventsChange: function handleTrainingEditEventsChange(events) {
        return {
            type: 'HANDLE_TRAINING_EVENTS_CHANGE',
            events: events
        };
    },
    newTraining: function newTraining() {
        return function (dispatch) {
            var newTraining = {
                // id: -1,
                title: '',
                shortDescription: '',
                longDescription: '',
                duration: 0,
                loading: false
            };
            console.log('loadEditTraining newTraining=' + require('util').inspect(newTraining, false, null));
            dispatch(_actions2.default.loadEditTraining(newTraining));
            window.routerHistory.push('admin/trainings/item/new');
        };
    },
    createTraining: function createTraining(title) {
        console.log('createTraining');
        return function (dispatch) {
            var representTraining = _immutable2.default.Map({
                id: -1,
                title: title,
                shortDescription: title,
                longDescription: title,
                loading: true
            });
            dispatch(trainingactions.createTrainingInit(representTraining));
            _actions2.default.updateTrainingService(representTraining).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status == 401) {
                    dispatch(_actions2.default.receiveLogout());
                } else if (status == 422) {
                    dispatch(trainingactions.savingEditTraining(training, false));
                    dispatch(trainingactions.setTrainingUserInputError(data.validation));
                } else if (status > 401) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    dispatch(trainingactions.rejectTraining(representTraining));
                } else if (data.error === 'invalid_token') {

                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    dispatch(_actions2.default.receiveLogout());
                } else if (data.error) {
                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    dispatch(trainingactions.rejectTraining(representTraining));
                } else {
                    console.log('Status looks good training version: ' + data.version);
                    dispatch(trainingactions.addTraining(_immutable2.default.Map(data), representTraining));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                dispatch(trainingactions.rejectTraining(representTraining));
            });
        };
    },

    addTraining: function addTraining(training, representTraining) {
        console.log('actions. AddTraining completed? ' + training.get('completed'));
        return {
            type: 'ADD_TRAINING',
            training: training,
            representTraining: representTraining
        };
    },

    addTrainings: function addTrainings(trainings) {
        console.log('actions. AddTrainings');
        return {
            type: 'ADD_TRAININGS',
            trainings: trainings
        };
    },

    completeTraining: function completeTraining(id) {
        return {
            type: 'COMPLETE_TRAINING',
            id: id
        };
    },
    uploadTrainingFileDispatcher: function uploadTrainingFileDispatcher(training, trainingold, fileinput) {
        console.log('trainingactions. uploadTrainingFileDispatcher');
        return function (dispatch) {
            if (fileinput == undefined) {
                return handleError(dispatch, 'No file parameter provided', training, trainingold);
            }
            if (fileinput.size > 500000) {
                return handleError(dispatch, 'File too large (200kb max)', training, trainingold);
            }
            if (training.get('loading') || training.get('error')) {
                return;
            }
            console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'));
            _actions2.default.uploadTrainingFileService(training, fileinput).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 413) {
                    console.log('Status file too large. ' + status);
                    return handleError(dispatch, 'File too large (200kb max)', training, trainingold);
                } else if (status >= 400) {
                    return handleError(dispatch, 'System error', training, trainingold);
                } else if (data.error) {
                    var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    console.log(data);
                    return handleError(dispatch, errorDescription, training, trainingold);
                } else {
                    console.log('Upload image is ok. Now get it');
                    dispatch(trainingactions.updateTrainingInList(training));
                    dispatch(trainingactions.uploadingTrainingImg(training, true));
                    dispatch(trainingactions.uploadingTrainingImg(training, false));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'));
                return handleError(dispatch, 'System error', training, trainingold);
            });
        };
    },
    updateTrainingDispatcher: function updateTrainingDispatcher(training, trainingold, fileinput) {
        return function (dispatch, getState) {
            if (fileinput != undefined && fileinput.size > 250000) {
                return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold);
            }
            if (training.get('loading') || training.get('error')) {
                return;
            }
            dispatch(_actions2.default.validateEditTraining(training));
            var trainingEditError = getState().trainingappmap.get('trainingEditError');
            if (trainingEditError.get('title') != undefined || trainingEditError.get('shortDescription') != undefined) {
                console.log('trainingEditError.get(title)=' + require('util').inspect(trainingEditError.get('title'), false, null));
                console.log('trainingEditError.get(shortDescription)=' + require('util').inspect(trainingEditError.get('shortDescription'), false, null));
                return;
            }
            dispatch(trainingactions.savingEditTraining(training, true));
            training = training.set('duration', 12);
            _actions2.default.updateTrainingService(training, fileinput).then(function (_ref3) {
                var status = _ref3.status,
                    data = _ref3.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 422) {
                    dispatch(trainingactions.savingEditTraining(training, false));
                    dispatch(trainingactions.setTrainingUserInputError(data.validation));
                } else if (status == 413) {
                    return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold);
                } else if (status >= 400) {
                    var errorDescription = 'Error status ' + status + ' ';
                    if (data.error) {
                        console.log('Status looks bad. ' + status + '. error message = ' + data.error);
                        errorDescription = errorDescription + data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    }
                    return handleError(dispatch, errorDescription, training, trainingold);
                } else if (data.error) {
                    errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    console.log(data);
                    return handleError(dispatch, errorDescription, training, trainingold);
                } else {
                    var updEditTraining = data;
                    dispatch(trainingactions.loadEditTraining(updEditTraining));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                return handleError(dispatch, 'System error', training, trainingold);
            });
        };
    },
    deleteTraining: function deleteTraining(id) {
        return {
            type: 'DELETE_TRAINING',
            id: id
        };
    },
    loadTrainings: function loadTrainings(trainingsraw) {
        return {
            type: 'TRAININGS_LOADED',
            trainings: trainingsraw
        };
    },
    loadTraining: function loadTraining(trainingraw) {
        return {
            type: 'TRAINING_LOADED',
            training: trainingraw
        };
    },
    savingEditTraining: function savingEditTraining(trainingraw, saving) {
        return {
            type: 'EDIT_TRAINING_SAVING',
            training: trainingraw,
            saving: saving
        };
    },
    loadEditTraining: function loadEditTraining(trainingraw) {
        if (trainingraw != undefined) trainingraw.events = trainingraw.events != undefined ? _immutable2.default.fromJS(trainingraw.events) : _immutable2.default.List([]);
        return {
            type: 'EDIT_TRAINING_LOADED',
            training: trainingraw
        };
    },
    validateEditTraining: function validateEditTraining(editTraining) {
        return {
            type: 'EDIT_TRAINING_VALIDATE',
            editTraining: editTraining
        };
    },
    setTrainingUserInputError: function setTrainingUserInputError(validationError) {
        return {
            type: 'SET_TRAINING_VALIDATION_ERROR',
            validationError: validationError
        };
    },

    retrieveTrainingsDispatcher: function retrieveTrainingsDispatcher() {
        return function (dispatch, getState) {
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;
            return _actions2.default.retrieveTrainingsService().then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;

                if (status === 401) {
                    dispatch(_actions2.default.loginProcessStart('No access rights!', _actions2.default.retrieveTrainingsDispatcher));
                } else if (status >= 400) {
                    var error = data;
                    dispatch(_actions2.default.loadTrainings([]));
                } else if (data.error) {
                    var errorDescription = data.error_description;
                    dispatch(_actions2.default.loadTrainings([]));
                } else {
                    dispatch(_actions2.default.loadTrainings(data));
                }
            }).catch(function (err) {
                // console.log('trainingactions.js retrieveTrainingsDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                if (err.code == 'ENOENT') {
                    dispatch(_actions2.default.serverDataFetch(false));
                }
            });
        };
    },

    retrieveTrainingDispatcher: function retrieveTrainingDispatcher(params) {
        console.log('retrieveTrainingDispatcher params=' + require('util').inspect(params, false, null));
        return function (dispatch, getState) {
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;
            if (params == undefined || isNaN(params.id)) {
                return;
            }
            return _actions2.default.retrieveTrainingService(params.id).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

                if (status == 401) {
                    if (!process.env.BROWSER) dispatch(_actions2.default.serverDataFetch(false));

                    dispatch(_actions2.default.loadEditTraining({}));
                    dispatch(_actions2.default.loginProcessStart('No access rights!', _actions2.default.retrieveTrainingDispatcher, params));
                } else if (status >= 400) {
                    var error = data;
                    dispatch(_actions2.default.loadEditTraining({}));
                } else if (data.error) {
                    var errorDescription = data.error_description;
                    dispatch(_actions2.default.loadEditTraining({}));
                } else {
                    dispatch(_actions2.default.loadEditTraining(data));
                }
            }).catch(function (err) {
                if (err.code == 'ENOENT') {
                    dispatch(_actions2.default.serverDataFetch(false));
                }
            });
        };
    },

    deleteEditTrainingDispatcher: function deleteEditTrainingDispatcher() {

        return function (dispatch, getState) {
            var training = getState().trainingappmap.get('edittraining');
            if (training.get('loading') || training.get('error')) {
                return;
            }
            dispatch(trainingactions.loadEditTraining(training));
            _actions2.default.deleteTrainingService(training).then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;
                if (status >= 400) {
                    var error = data;
                    return handleError(dispatch, 'System error', training, training);
                } else if (data.error) {
                    return handleError(dispatch, 'System error', training, training);
                } else {
                    console.log(data);
                    window.routerHistory.push('/admin/trainings');
                }
            }, function (err) {
                return handleError(dispatch, 'System error', training, training);
            });
        };
    },

    filterTrainingsOpen: function filterTrainingsOpen(filterTrainings) {
        return {
            type: 'FILTER_TRAININGS_OPEN',
            filterOpen: filterTrainings
        };
    },

    filterTrainingsClosed: function filterTrainingsClosed(filterTrainings) {
        return {
            type: 'FILTER_TRAININGS_CLOSED',
            filterClosed: filterTrainings
        };
    }
};

function handleError(dispatch, errormsg, training, trainingold) {
    training = training.set('error', errormsg);
    dispatch(trainingactions.loadEditTraining(training));
    console.log('training=' + require('util').inspect(training.get('title'), false, null));

    setTimeout(function () {
        dispatch(trainingactions.loadEditTraining(trainingold));
    }, 2500);
    return;
}

exports.default = trainingactions;