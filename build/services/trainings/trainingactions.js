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
<<<<<<< HEAD
    createTrainingInit: function createTrainingInit(representTraining) {
=======

    createTrainingInit: function createTrainingInit(representTraining) {
        // console.log('Actions. Init registration: ')
        // var newTraining = Immutable.Map({"id":-1,"title":text,"userId":-1, "isCompleted":false})
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
        // console.log('training actions update training')
        // console.log(training)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return {
            type: 'UPDATE_TRAINING_IN_LIST',
            training: training
        };
    },
    uploadingTrainingImg: function uploadingTrainingImg(training, isUploading) {
<<<<<<< HEAD
=======
        // console.log('training actions upload training file')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======

    // loadingTrainingFileOff: function() {
    //   console.log('training actions upload training file')
    //   return {
    //     type: 'FINISH_LOADING_TRAINING_FILE'
    //   }
    // },
    // loadingTraining: function(training) {
    //   // training = training.set('loading', true)
    //   return {
    //     type: 'LOADING_TRAINING',
    //     training
    //   }
    // },

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    newTraining: function newTraining() {
        return function (dispatch) {
            var newTraining = {
                id: -1,
                title: '',
                shortDescription: '',
                longDescription: '',
                duration: 0,
<<<<<<< HEAD
=======
                // "userId": -1,
                // "completed": false
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                loading: false
            };
            console.log('loadEditTraining newTraining=' + require('util').inspect(newTraining, false, null));
            dispatch(_actions2.default.loadEditTraining(newTraining));
            window.routerHistory.push('admin/trainings/item/new');
        };
    },
    createTraining: function createTraining(title) {
<<<<<<< HEAD
=======
        // console.log('actions. AddTraining')

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return function (dispatch) {
            var representTraining = _immutable2.default.Map({
                id: -1,
                title: title,
                shortDescription: title,
                longDescription: title,
<<<<<<< HEAD
                loading: true
            });
            dispatch(trainingactions.createTrainingInit(representTraining));
=======

                // "userId": -1,
                // "completed": false
                loading: true
            });
            // dispatch(actions.loadingTrainingFileOff())
            dispatch(trainingactions.createTrainingInit(representTraining));

            // var headers = {
            //   // 'Content-Type': 'application/x-www-form-urlencoded' //for normal paramter
            //   'Content-Type': 'application/json' //for json paramter
            // // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // // 'Authorization': 'Bearer '+id_token
            // }
            // var id_token = cookie.load('jwt')
            // console.log('Ya trainings save Data.  auth id token: ' + id_token)
            // if (id_token !== '') {
            //   headers.Authorization = 'Bearer ' + id_token
            // }
            // else
            //   console.log('Ya trainings save. Wahnsinn: no id_token')

            // // var body='title='+text
            // var body = JSON.stringify({
            //   // id: -1,
            //   title: text,
            //   abbas: 12
            // // userid: -1
            // // ,completed: true
            // })
            // //&scope=read%20write
            // console.log('body ' + body)
            // let config = {
            //   method: 'POST',
            //   headers,
            //   body: body
            // }
            // console.log('config ')
            // console.log(config)
            // // var training = null;

            // fetch('http://127.0.0.1:8083/api/training/savetraining', config)
            //   .then(response => response.json().then(data => ({
            //     status: response.status,
            //     data
            //   })
            //   ))

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            _actions2.default.updateTrainingService(representTraining).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status === 401) {
                    dispatch(_actions2.default.receiveLogout());
                } else if (status >= 400) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    dispatch(trainingactions.rejectTraining(representTraining));
                } else if (data.error === 'invalid_token') {
<<<<<<< HEAD

=======
                    // var error = data.error
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    dispatch(_actions2.default.receiveLogout());
                } else if (data.error) {
<<<<<<< HEAD

=======
                    // var error = data.error
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    dispatch(trainingactions.rejectTraining(representTraining));
                } else {
                    console.log('Status looks good training version: ' + data.version);
<<<<<<< HEAD
                    dispatch(trainingactions.addTraining(_immutable2.default.Map(data), representTraining));
=======
                    // console.log(data)
                    // var newtrainings = trainings.push(Immutable.Map(data))
                    // console.log('New trainings ')
                    // console.log(newtrainings)
                    // trainings = trainings.push(Immutable.Map({
                    //   title: action.text,
                    //   isCompleted: false,
                    //   id: maxid
                    // }))
                    // console.log('training actions. training representant : ')
                    // console.log(representTraining)

                    dispatch(trainingactions.addTraining(_immutable2.default.Map(data), representTraining));
                    // return newtrainings;
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                dispatch(trainingactions.rejectTraining(representTraining));
            });
        };
<<<<<<< HEAD
=======

        // return {
        //   type: 'ADD_TRAINING',
        //   text: text
        // }
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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

<<<<<<< HEAD
=======
    // saveTraining: function(id, text) {
    //   console.log('actions. SaveTraining')
    //   return {
    //     type: 'SAVE_TRAINING',
    //     id: id,
    //     text: text
    //   }
    // },

    // saveTrainingAsync: function(training) {
    //   console.log('trainingactions. update training' + training.get('title'))
    //   return (dispatch) => {
    //     // setTimeout(() => {
    //     fetch('http://127.0.0.1:8083/api/updatetraining', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    //       },
    //       // body: 'testparam='+test //if no json in header
    //       body: JSON.stringify(training)
    //       // body: JSON.stringify({
    //       //   id
    //       //   title: text
    //       // })
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('trainingapp. component mounted ' + data.trainings[0].title)
    //         actions.addTrainings(data.trainings)
    //       })
    //       .catch(err => console.log('Hooooo' + err))

    //     dispatch(actions.saveTraining(id, text))
    //   // }, 2500)
    //   }
    // },

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
            }
            if (fileinput.size > 500000) {
                return handleError(dispatch, 'File too large (200kb max)', training, trainingold);
            }
            if (training.get('loading') || training.get('error')) {
                return;
            }
=======
                // trainingold = trainingold.set('error', 'No file parameter provided')
                // dispatch(trainingactions.updateTrainingInList(trainingold))
                // trainingold = trainingold.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(trainingold))
                // }, 2500)
                // return
            }
            if (fileinput.size > 500000) {
                return handleError(dispatch, 'File too large (200kb max)', training, trainingold);
                // trainingold = trainingold.set('error', 'File too large (200kb max)')
                // dispatch(trainingactions.updateTrainingInList(trainingold))
                // trainingold = trainingold.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(trainingold))
                // }, 2500)
                // return
            }

            if (training.get('loading') || training.get('error')) {
                // console.log('training actions toggle training. Is loading or Error displaying. So no action')
                return;
            }
            // dispatch(trainingactions.loadingTraining(training))
            // dispatch(trainingactions.savingEditTraining())

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'));
            _actions2.default.uploadTrainingFileService(training, fileinput).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 413) {
                    console.log('Status file too large. ' + status);
                    return handleError(dispatch, 'File too large (200kb max)', training, trainingold);
<<<<<<< HEAD
                } else if (status >= 400) {
                    return handleError(dispatch, 'System error', training, trainingold);
                } else if (data.error) {
=======
                    // trainingold = trainingold.set('error', 'File is too large')
                    // dispatch(trainingactions.updateTrainingInList(trainingold))
                    // trainingold = trainingold.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(trainingold))
                    // }, 2500)
                } else if (status >= 400) {
                    return handleError(dispatch, 'System error', training, trainingold);
                    // trainingold = trainingold.set('error', 'System error')
                    // dispatch(trainingactions.updateTrainingInList(trainingold))
                    // trainingold = trainingold.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(trainingold))
                    // }, 2500)
                } else if (data.error) {
                    // var error = data.error
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    console.log(data);
                    return handleError(dispatch, errorDescription, training, trainingold);
<<<<<<< HEAD
=======
                    // trainingold = trainingold.set('error', errorDescription)
                    // dispatch(trainingactions.updateTrainingInList(trainingold))
                    // trainingold = trainingold.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(trainingold))
                    // }, 2500)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                } else {
                    console.log('Upload image is ok. Now get it');
                    dispatch(trainingactions.updateTrainingInList(training));
                    dispatch(trainingactions.uploadingTrainingImg(training, true));
                    dispatch(trainingactions.uploadingTrainingImg(training, false));
<<<<<<< HEAD
                }
=======
                    // setTimeout(function() {
                    //   dispatch(trainingactions.uploadingTrainingImg(training,false))
                    // },(2000) )
                    // dispatch(trainingactions.loadingTrainingFileOn())
                }
                // dispatch(trainingactions.uploadingTrainingImg(training,false))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'));
                return handleError(dispatch, 'System error', training, trainingold);
<<<<<<< HEAD
=======
                // trainingold = trainingold.set('error', 'System error')
                // dispatch(trainingactions.updateTrainingInList(trainingold))
                // trainingold = trainingold.delete('error')
                // // dispatch(trainingactions.uploadingTrainingImg(training,false))
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(trainingold))
                // }, 2500)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            });
        };
    },
    updateTrainingDispatcher: function updateTrainingDispatcher(training, trainingold, fileinput) {
<<<<<<< HEAD
        return function (dispatch, getState) {
            if (fileinput != undefined && fileinput.size > 250000) {
                return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold);
            }
            if (training.get('loading') || training.get('error')) {
                return;
            }
=======
        // console.log('trainingactions. updateTrainingDispatcher old title' + trainingold.get('title'))
        return function (dispatch, getState) {
            if (fileinput != undefined && fileinput.size > 250000) {
                return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold);

                // training = training.set('error', 'File is too large')
                // dispatch(trainingactions.loadEditTraining(training))
                // // training = training.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.loadEditTraining(trainingold))
                // }, 2500)
                // return
            }

            // console.log('trainingactions. updateTrainingDispatcher assi')
            if (training.get('loading') || training.get('error')) {
                // console.log('training actions toggle training. Is loading or Error displaying. So no action')
                return;
            }

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            dispatch(_actions2.default.validateEditTraining(training));
            var trainingEditError = getState().trainingappmap.get('trainingEditError');
            if (trainingEditError.get('title') != undefined || trainingEditError.get('shortDescription') != undefined) {
                console.log('trainingEditError.get(title)=' + require('util').inspect(trainingEditError.get('title'), false, null));
                console.log('trainingEditError.get(shortDescription)=' + require('util').inspect(trainingEditError.get('shortDescription'), false, null));
                return;
            }
<<<<<<< HEAD
            dispatch(trainingactions.savingEditTraining(training));
            training = training.set('duration', 12);
=======

            // dispatch(trainingactions.loadingTraining(training))
            // console.log('--------------training actions update on server now. title ='+require('util').inspect(training.get('title'), false, null))
            dispatch(trainingactions.savingEditTraining(training));
            // console.log('actions. update Training version old: ' + trainingold.get('userId') + '. new: ' + training.get('version'))

            //Needs to be done correctly
            training = training.set('duration', 12);

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            _actions2.default.updateTrainingService(training, fileinput).then(function (_ref3) {
                var status = _ref3.status,
                    data = _ref3.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 413) {
                    return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold);
<<<<<<< HEAD
                } else if (status >= 400) {
=======
                    // training = training.set('error', 'File is too large')
                    // dispatch(trainingactions.loadEditTraining(training))
                    // // training = training.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.loadEditTraining(trainingold))
                    // }, 2500)
                } else if (status >= 400) {
                    // console.log('------------------------Error. status = ' + status + '. error message = ' + data.error)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    var errorDescription = 'Error status ' + status + ' ';
                    if (data.error) {
                        console.log('Status looks bad. ' + status + '. error message = ' + data.error);
                        errorDescription = errorDescription + data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    }
                    return handleError(dispatch, errorDescription, training, trainingold);
<<<<<<< HEAD
                } else if (data.error) {
=======

                    // training = training.set('error', errorDescription)
                    // console.log('-------------------------trainingactions. error set old title' + trainingold.get('title'))
                    // dispatch(trainingactions.loadEditTraining(training))
                    // // training = training.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.loadEditTraining(trainingold))
                    // }, 2500)
                } else if (data.error) {
                    // var error = data.error
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    console.log(data);
                    return handleError(dispatch, errorDescription, training, trainingold);
<<<<<<< HEAD
                } else {
                    var updEditTraining = data;
                    dispatch(trainingactions.loadEditTraining(updEditTraining));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                return handleError(dispatch, 'System error', training, trainingold);
=======
                    // trainingold = trainingold.set('error', errorDescription)
                    // dispatch(trainingactions.updateTrainingInList(trainingold))
                    // trainingold = trainingold.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(trainingold))
                    // }, 2500)
                } else {
                    var updEditTraining = data;
                    // var updEditTraining = Immutable.Map(data)
                    //                            console.log('Training actions. updEditTraining='+require('util').inspect(updEditTraining.events, false, null))
                    // dispatch(trainingactions.updateTrainingInList(updEditTraining))
                    dispatch(trainingactions.loadEditTraining(updEditTraining));
                    // return newtrainings;
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'));
                return handleError(dispatch, 'System error', training, trainingold);
                // trainingold = trainingold.set('error', 'System error')
                // dispatch(trainingactions.updateTrainingInList(trainingold))
                // trainingold = trainingold.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(trainingold))
                // }, 2500)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
    savingEditTraining: function savingEditTraining(trainingraw) {
        return {
            type: 'EDIT_TRAINING_SAVING',
            training: trainingraw
        };
    },
    loadEditTraining: function loadEditTraining(trainingraw) {
        if (trainingraw != undefined) trainingraw.events = trainingraw.events != undefined ? _immutable2.default.fromJS(trainingraw.events) : _immutable2.default.List([]);
<<<<<<< HEAD
=======
        //        console.log('loadEditTraining action, events: '+require('util').inspect(trainingraw.events, false, null))

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return {
            type: 'EDIT_TRAINING_LOADED',
            training: trainingraw
        };
    },
    validateEditTraining: function validateEditTraining(editTraining) {
<<<<<<< HEAD
=======
        // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++registrationactions validate user')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return {
            type: 'EDIT_TRAINING_VALIDATE',
            editTraining: editTraining
        };
    },

<<<<<<< HEAD
    // retrieveTrainingsDispatcher: function () {
    //
    //     return (dispatch, getState) => {
    //
    //         if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
    //             return
    //         try{
    //             var results = actions.retrieveTrainingsService()
    //             if (results.status === 401) {
    //                 dispatch(actions.loginProcessStart('No access rights!', actions.retrieveTrainingsDispatcher))
    //             } else if (status >= 400) {
    //                 var error = results.data
    //                 dispatch(actions.loadTrainings([]))
    //             } else if (results.data.error) {
    //                 var errorDescription = results.data.error_description
    //                 dispatch(actions.loadTrainings([]))
    //             } else {
    //                 dispatch(actions.loadTrainings(results.data))
    //             }
    //
    //         }catch (err){
    //             if (err.code == 'ENOENT') {
    //                 dispatch(actions.serverDataFetch(false))
    //             }
    //         }
    //     }
    // },

    retrieveTrainingsDispatcher: function retrieveTrainingsDispatcher() {

        return function (dispatch, getState) {

            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;
=======
    retrieveTrainingsDispatcher: function retrieveTrainingsDispatcher() {
        //        console.log('actions. retrieveTrainingsDispatcher ' )
        return function (dispatch, getState) {
            // if(!process.env.BROWSER || (process.env.BROWSER && getState().app.get('previouslocation')!=undefined))
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;

            //      console.log('actions. retrieveTrainingsDispatcher calls service now')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            return _actions2.default.retrieveTrainingsService().then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;

                if (status === 401) {
<<<<<<< HEAD
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
=======

                    console.log('Status looks bad. Unauthorized');
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loginProcessStart('No access rights!', _actions2.default.retrieveTrainingsDispatcher));
                    // dispatch(actions.loadTrainings([]))
                } else if (status >= 400) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loadTrainings([]));
                } else if (data.error) {
                    // var error = data.error
                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loadTrainings([]));
                } else {
                    dispatch(_actions2.default.loadTrainings(data));
                    // dispatch(actions.loadingTrainingFileOff())
                }
            }).catch(function (err) {
                console.log('trainingactions.js retrieveTrainingsDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null));
                if (err.code == 'ENOENT') {
                    console.log('trainingactions.js. YEAH! getaddrinfo ENOENT error is there');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    dispatch(_actions2.default.serverDataFetch(false));
                }
            });
        };
    },

    retrieveTrainingDispatcher: function retrieveTrainingDispatcher(params) {
<<<<<<< HEAD
        return function (dispatch, getState) {
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;
            if (params == undefined || isNaN(params.id)) {
=======
        //        console.log('Call retrieveTrainingDispatcher  <-----------------------------')
        // console.log('training actions. retrieveTrainingDispatcher')
        // console.log('rootreducer='+require('util').inspect(rootreducer, false, null))
        return function (dispatch, getState) {
            // if(!process.env.BROWSER || (process.env.BROWSER && getState().app.get('previouslocation')!=undefined))
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched')) return;
            if (params == undefined || isNaN(params.id)) {
                console.log('training actions. retrieveTrainingDispatcher do nothing');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                return;
            }
            return _actions2.default.retrieveTrainingService(params.id).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

                if (status == 401) {
<<<<<<< HEAD
                    if (!process.env.BROWSER) dispatch(_actions2.default.serverDataFetch(false));

=======
                    console.log('Status looks bad. Unauthorized');
                    if (!process.env.BROWSER) dispatch(_actions2.default.serverDataFetch(false));
                    // dispatch(actions.receiveLogout())
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    dispatch(_actions2.default.loadEditTraining({}));
                    dispatch(_actions2.default.loginProcessStart('No access rights!', _actions2.default.retrieveTrainingDispatcher, params));
                } else if (status >= 400) {
                    var error = data;
<<<<<<< HEAD
                    dispatch(_actions2.default.loadEditTraining({}));
                } else if (data.error) {
                    var errorDescription = data.error_description;
                    dispatch(_actions2.default.loadEditTraining({}));
                } else {
                    dispatch(_actions2.default.loadEditTraining(data));
                }
            }).catch(function (err) {
                if (err.code == 'ENOENT') {
=======
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loadEditTraining({}));
                } else if (data.error) {
                    // var error = data.error
                    var errorDescription = data.error_description;
                    console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loadEditTraining({}));
                } else {
                    dispatch(_actions2.default.loadEditTraining(data));
                    // dispatch(actions.loadingTrainingFileOff())
                }
            }).catch(function (err) {
                console.log('trainingactions.js retrieveTrainingDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null));
                if (err.code == 'ENOENT') {
                    console.log('trainingactions.js. YEAH! getaddrinfo ENOENT error is there');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    dispatch(_actions2.default.serverDataFetch(false));
                }
            });
        };
    },
<<<<<<< HEAD

=======
    // callActionConfirmation: function(boolValue, actionFunction,actionParams){
    //   return (dispatch,getState) => {
    //     const func = getState().trainingappmap.get('confirmationActionFunction')
    //     const params = getState().trainingappmap.get('confirmationActionParams')
    //     func(params)
    //     dispatch(trainingactions.needActionConfirmation(false))
    //   }
    // },
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    deleteEditTrainingDispatcher: function deleteEditTrainingDispatcher() {

        return function (dispatch, getState) {
            var training = getState().trainingappmap.get('edittraining');
            if (training.get('loading') || training.get('error')) {
<<<<<<< HEAD
                return;
            }
            dispatch(trainingactions.loadEditTraining(training));
=======
                console.log('training actions toggle training. Is loading or Error displaying. So no action');
                return;
            }
            // dispatch(actions.loginProcessStart('No access rights!',actions.retrieveUserTodosDispatcher))

            dispatch(trainingactions.loadEditTraining(training));
            console.log('actions. toggleTraining Training 1');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            _actions2.default.deleteTrainingService(training).then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;
                if (status >= 400) {
                    var error = data;
<<<<<<< HEAD
                    return handleError(dispatch, 'System error', training, training);
                } else if (data.error) {
                    return handleError(dispatch, 'System error', training, training);
                } else {
                    console.log(data);
                    window.routerHistory.push('/admin/trainings');
                }
            }, function (err) {
                return handleError(dispatch, 'System error', training, training);
=======
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    // for (var i = 0; i < 3; i++) {
                    return handleError(dispatch, 'System error', training, training);
                    // training = training.set('error', 'System error')
                    // dispatch(trainingactions.updateTrainingInList(training))
                    // training = training.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(training))
                    // }, 2500)
                } else if (data.error) {
                    return handleError(dispatch, 'System error', training, training);
                    // training = training.set('error', 'System error')
                    // dispatch(trainingactions.updateTrainingInList(training))
                    // training = training.delete('error')
                    // setTimeout(() => {
                    //   dispatch(trainingactions.updateTrainingInList(training))
                    // }, 2500)
                } else {
                    console.log('Status looks good ');
                    console.log(data);
                    // var newtrainings = trainings.push(Immutable.Map(data))
                    // console.log('New trainings ')
                    // console.log(newtrainings)
                    // trainings = trainings.push(Immutable.Map({
                    //   title: action.text,
                    //   isCompleted: false,
                    //   id: maxid
                    // }))
                    console.log('training actions. training representant : ');
                    // console.log(representTraining)

                    // dispatch(trainingactions.deleteTraining(training.get('id')))
                    window.routerHistory.push('/admin/trainings');
                    // return newtrainings;
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                console.log('Status looks not good at all! training completed? ' + training.get('completed'));
                return handleError(dispatch, 'System error', training, training);
                // training = training.set('error', 'System error')
                // dispatch(trainingactions.updateTrainingInList(training))
                // training = training.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(training))
                // }, 2500)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
};
=======

}; // export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers'

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985

function handleError(dispatch, errormsg, training, trainingold) {
    training = training.set('error', errormsg);
    dispatch(trainingactions.loadEditTraining(training));
    console.log('training=' + require('util').inspect(training.get('title'), false, null));
<<<<<<< HEAD

=======
    // training = training.delete('error')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    setTimeout(function () {
        dispatch(trainingactions.loadEditTraining(trainingold));
    }, 2500);
    return;
}

exports.default = trainingactions;