'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cookie from 'react-cookie'

// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers'
var trainingactions = {

  createTrainingInit: function createTrainingInit(representTraining) {
    // console.log('Actions. Init registration: ')
    // var newTraining = Immutable.Map({"id":-1,"title":text,"userId":-1, "isCompleted":false})
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
  updateTraining: function updateTraining(training) {
    console.log('training actions update training');
    console.log(training);
    return {
      type: 'UPDATE_TRAINING',
      training: training
    };
  },
  uploadingTrainingImg: function uploadingTrainingImg(training, isUploading) {
    // console.log('training actions upload training file')
    return {
      type: 'UPLOADING_TRAINING_IMAGE',
      training: training,
      isUploading: isUploading
    };
  },
  // loadingTrainingFileOff: function() {
  //   console.log('training actions upload training file')
  //   return {
  //     type: 'FINISH_LOADING_TRAINING_FILE'
  //   }
  // },
  loadingTraining: function loadingTraining(training) {
    // training = training.set('loading', true)
    return {
      type: 'LOADING_TRAINING',
      training: training
    };
  },

  createTraining: function createTraining(title) {
    // console.log('actions. AddTraining')

    return function (dispatch) {
      var representTraining = _immutable2.default.Map({
        // "id": -1
        title: title,
        shortDescription: title,
        longDescription: title,

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
          // var error = data.error
          var errorDescription = data.error_description;
          console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
          dispatch(_actions2.default.receiveLogout());
        } else if (data.error) {
          // var error = data.error
          var errorDescription = data.error_description;
          console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
          dispatch(trainingactions.rejectTraining(representTraining));
        } else {
          console.log('Status looks good training version: ' + data.version);
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
        }
      }, function (err) {
        console.log('Status looks not good at all!' + err);
        dispatch(trainingactions.rejectTraining(representTraining));
      });
    };

    // return {
    //   type: 'ADD_TRAINING',
    //   text: text
    // }
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
        trainingold = trainingold.set('error', 'No file parameter provided');
        dispatch(trainingactions.updateTraining(trainingold));
        trainingold = trainingold.delete('error');
        setTimeout(function () {
          dispatch(trainingactions.updateTraining(trainingold));
        }, 2500);
        return;
      }
      if (fileinput.size > 500000) {
        trainingold = trainingold.set('error', 'File too large (200kb max)');
        dispatch(trainingactions.updateTraining(trainingold));
        trainingold = trainingold.delete('error');
        setTimeout(function () {
          dispatch(trainingactions.updateTraining(trainingold));
        }, 2500);
        return;
      }

      if (training.get('loading') || training.get('error')) {
        // console.log('training actions toggle training. Is loading or Error displaying. So no action')
        return;
      }
      dispatch(trainingactions.loadingTraining(training));
      console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'));
      _actions2.default.uploadTrainingFileService(training, fileinput).then(function (_ref2) {
        var status = _ref2.status,
            data = _ref2.data;

        if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 413) {
          console.log('Status file too large. ' + status);
          trainingold = trainingold.set('error', 'File is too large');
          dispatch(trainingactions.updateTraining(trainingold));
          trainingold = trainingold.delete('error');
          setTimeout(function () {
            dispatch(trainingactions.updateTraining(trainingold));
          }, 2500);
        } else if (status >= 400) {
          // var error = data
          // console.log('Status looks bad. ' + status + '. error message = ' + error.message)
          trainingold = trainingold.set('error', 'System error');
          dispatch(trainingactions.updateTraining(trainingold));
          trainingold = trainingold.delete('error');
          setTimeout(function () {
            dispatch(trainingactions.updateTraining(trainingold));
          }, 2500);
        } else if (data.error) {
          // var error = data.error
          var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
          console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
          console.log(data);
          trainingold = trainingold.set('error', errorDescription);
          dispatch(trainingactions.updateTraining(trainingold));
          trainingold = trainingold.delete('error');
          setTimeout(function () {
            dispatch(trainingactions.updateTraining(trainingold));
          }, 2500);
        } else {
          console.log('Upload image is ok. Now get it');
          dispatch(trainingactions.updateTraining(training));
          dispatch(trainingactions.uploadingTrainingImg(training, true));
          dispatch(trainingactions.uploadingTrainingImg(training, false));
          // setTimeout(function() {
          //   dispatch(trainingactions.uploadingTrainingImg(training,false))
          // },(2000) )
          // dispatch(trainingactions.loadingTrainingFileOn())
        }
        // dispatch(trainingactions.uploadingTrainingImg(training,false))
      }, function (err) {
        console.log('Status looks not good at all!' + err);
        console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'));
        trainingold = trainingold.set('error', 'System error');
        dispatch(trainingactions.updateTraining(trainingold));
        trainingold = trainingold.delete('error');
        // dispatch(trainingactions.uploadingTrainingImg(training,false))
        setTimeout(function () {
          dispatch(trainingactions.updateTraining(trainingold));
        }, 2500);
      });
    };
  },
  updateTrainingDispatcher: function updateTrainingDispatcher(training, trainingold) {
    console.log('trainingactions. updateTrainingDispatcher');
    return function (dispatch) {
      // console.log('trainingactions. updateTrainingDispatcher assi')
      if (training.get('loading') || training.get('error')) {
        // console.log('training actions toggle training. Is loading or Error displaying. So no action')
        return;
      }
      // dispatch(trainingactions.loadingTrainingFileOff())
      dispatch(trainingactions.loadingTraining(training));
      console.log('actions. update Training version old: ' + trainingold.get('userId') + '. new: ' + training.get('version'));
      // dispatch(trainingactions.createTrainingInit(representTraining))
      // var headers = {
      //   // 'Content-Type': 'application/x-www-form-urlencoded'
      //   'Content-Type': 'application/json' //for json paramter
      // // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // // 'Authorization': 'Bearer '+id_token
      // }
      // var id_token = cookie.load('jwt')
      // console.log('Ya trainings save Data.  auth id token: ' + id_token)
      // if (id_token !== '') {
      //   headers.Authorization = 'Bearer ' + id_token
      // }
      // // else
      // //   console.log('trainings action. Wahnsinn: no id_token')

      // // var body = JSON.stringify({
      // //   id: training.get('id'),
      // //   title: training.get('title'),
      // //   // userid: -1
      // //   completed: training.get('completed')
      // // })
      // // training = training.set('title', null)
      // var body = JSON.stringify(training)
      // //&scope=read%20write
      // // console.log('body ' + body)
      // const config = {
      //   method: 'POST',
      //   headers,
      //   body: body
      // }
      // // console.log('config ')
      // // console.log(config)
      // // var training = null;
      // fetch('http://127.0.0.1:8083/api/training/updatetraining', config).then(response => response.json()
      //   .then(data => ({
      //     status: response.status,
      //     data
      //   })
      // ))
      _actions2.default.updateTrainingService(training).then(function (_ref3) {
        var status = _ref3.status,
            data = _ref3.data;

        if (_actions2.default.disconnect(dispatch, status, data)) return;

        // if (status === 401) {
        //   dispatch(actions.receiveLogout())
        // } 
        else if (status >= 400) {
            var errorDescription;
            if (data.error) {
              console.log('Status looks bad. ' + status + '. error message = ' + data.error);
              errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
            }

            trainingold = trainingold.set('error', errorDescription);
            dispatch(trainingactions.updateTraining(trainingold));
            trainingold = trainingold.delete('error');
            setTimeout(function () {
              dispatch(trainingactions.updateTraining(trainingold));
            }, 2500);
            // console.log('Training action error loop. ' + i)
            // }
            // dispatch(trainingactions.updateTraining(trainingold))
          }
          // else if (data.error === 'invalid_token') {
          //   // var error = data.error
          //   var errorDescription = data.error_description
          //   console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
          //   dispatch(actions.receiveLogout())
          // } 
          else if (data.error) {
              // var error = data.error
              errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
              console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription);
              console.log(data);
              trainingold = trainingold.set('error', errorDescription);
              dispatch(trainingactions.updateTraining(trainingold));
              trainingold = trainingold.delete('error');
              setTimeout(function () {
                dispatch(trainingactions.updateTraining(trainingold));
              }, 2500);
            }
            // else if(data.exception !== undefined){
            //   // console.log('Status looks good. See if there is an exception message'+data.message)
            //   // if(data.exception !== undefined)
            //   //   console.log(data.message)
            //   trainingold = trainingold.set('error', data.message)
            //   dispatch(trainingactions.updateTraining(trainingold))
            //   trainingold = trainingold.delete('error')
            //   setTimeout(() => {
            //     dispatch(trainingactions.updateTraining(trainingold))
            //   }, 2500)
            //   // var newtrainings = trainings.push(Immutable.Map(data))
            //   // console.log('New trainings ')
            //   // console.log(newtrainings)
            //   // trainings = trainings.push(Immutable.Map({
            //   //   title: action.text,
            //   //   isCompleted: false,
            //   //   id: maxid
            //   // }))
            //   // console.log('training actions. training representant : ')
            //   // console.log(representTraining)

            //   dispatch(trainingactions.updateTraining(Immutable.Map(data)))
            // // return newtrainings;
            // } 
            else {
                // console.log('Status looks good. See if there is an exception message')
                // if(data.exception !== undefined)
                //   console.log(data.message)
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

                dispatch(trainingactions.updateTraining(_immutable2.default.Map(data)));
                // return newtrainings;
              }
      }, function (err) {
        console.log('Status looks not good at all!' + err);
        console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'));
        trainingold = trainingold.set('error', 'System error');
        dispatch(trainingactions.updateTraining(trainingold));
        trainingold = trainingold.delete('error');
        setTimeout(function () {
          dispatch(trainingactions.updateTraining(trainingold));
        }, 2500);
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
  retrieveTrainingsDispatcher: function retrieveTrainingsDispatcher() {
    return function (dispatch) {
      _actions2.default.retrieveTrainingsService().then(function (_ref4) {
        var status = _ref4.status,
            data = _ref4.data;

        if (status === 401) {
          console.log('Status looks bad. Unauthorized');
          // dispatch(actions.receiveLogout())
          dispatch(_actions2.default.loadTrainings([]));
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
      })
      // .then(data => {
      //     console.log('trainingapp. data fetch ')
      //     console.log(data)
      //     if (data.error == 'invalid_token')
      //       actions.receiveLogout()
      //     else
      //       actions.loadTrainings(data)
      //     // actions.addTrainings(data.trainings)
      // })
      .catch(function (err) {
        // dispatch(actions.receiveLogout())
        console.log('trainingactions.js Error retrieving data. Status = ' + status + ', error = ' + err);
      });
    };
  },
  deleteTrainingSrv: function deleteTrainingSrv(training) {
    return function (dispatch) {
      if (training.get('loading') || training.get('error')) {
        console.log('training actions toggle training. Is loading or Error displaying. So no action');
        return;
      }
      dispatch(trainingactions.loadingTraining(training));
      console.log('actions. toggleTraining Training 1');
      _actions2.default.deleteTrainingService(training).then(function (_ref5) {
        var status = _ref5.status,
            data = _ref5.data;

        if (_actions2.default.disconnect(dispatch, status, data)) return;
        if (status >= 400) {
          var error = data;
          console.log('Status looks bad. ' + status + '. error message = ' + error.message);
          // for (var i = 0; i < 3; i++) {

          training = training.set('error', 'System error');
          dispatch(trainingactions.updateTraining(training));
          training = training.delete('error');
          setTimeout(function () {
            dispatch(trainingactions.updateTraining(training));
          }, 2500);
          // console.log('Training action error loop. ' + i)
          // }
          // dispatch(trainingactions.updateTraining(training))
        } else if (data.error) {
          training = training.set('error', 'System error');
          dispatch(trainingactions.updateTraining(training));
          training = training.delete('error');
          setTimeout(function () {
            dispatch(trainingactions.updateTraining(training));
          }, 2500);
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

          dispatch(trainingactions.deleteTraining(training.get('id')));
          // return newtrainings;
        }
      }, function (err) {
        console.log('Status looks not good at all!' + err);
        console.log('Status looks not good at all! training completed? ' + training.get('completed'));
        training = training.set('error', 'System error');
        dispatch(trainingactions.updateTraining(training));
        training = training.delete('error');
        setTimeout(function () {
          dispatch(trainingactions.updateTraining(training));
        }, 2500);
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

exports.default = trainingactions;