// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers'
import Immutable from 'immutable'
import actions from '../actions'
// import cookie from 'react-cookie'

const trainingactions = {

  createTrainingInit: function(representTraining) {
    // console.log('Actions. Init registration: ')
    // var newTraining = Immutable.Map({"id":-1,"title":text,"userId":-1, "isCompleted":false})
    return {
      type: 'CREATE_TRAINING_INIT',
      training: representTraining
    }
  },
  rejectTraining: function(representTraining) {
    console.log('Actions. Init registration: ')
    return {
      type: 'REJECT_TRAINING_INIT',
      representTraining: representTraining
    }
  },
  updateTraining: function(training) {
    console.log('training actions update training')
    console.log(training)
    return {
      type: 'UPDATE_TRAINING',
      training
    }
  },
  uploadingTrainingImg: function(training, isUploading) {
    // console.log('training actions upload training file')
    return {
      type: 'UPLOADING_TRAINING_IMAGE',
      training,
      isUploading
    }
  },
  // loadingTrainingFileOff: function() {
  //   console.log('training actions upload training file')
  //   return {
  //     type: 'FINISH_LOADING_TRAINING_FILE'
  //   }
  // },
  loadingTraining: function(training) {
    // training = training.set('loading', true)
    return {
      type: 'LOADING_TRAINING',
      training
    }
  },

  createTraining: function(title) {
    // console.log('actions. AddTraining')

    return (dispatch) => {
      var representTraining = Immutable.Map({
        // "id": -1
        title: title,
        shortDescription: title,
        longDescription: title,

        // "userId": -1,
        // "completed": false
        loading: true
      })
      // dispatch(actions.loadingTrainingFileOff())
      dispatch(trainingactions.createTrainingInit(representTraining))

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

      actions.updateTrainingService(representTraining).then(
        ({status, data}) => {
          if (status === 401) {
            dispatch(actions.receiveLogout())
          } else if (status >= 400) {
            var error = data
            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
            dispatch(trainingactions.rejectTraining(representTraining))
          } else if (data.error === 'invalid_token') {
            // var error = data.error
            var errorDescription = data.error_description
            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
            dispatch(actions.receiveLogout())
          } else if (data.error) {
            // var error = data.error
            var errorDescription = data.error_description
            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
            dispatch(trainingactions.rejectTraining(representTraining))
          } else {
            console.log('Status looks good training version: ' + data.version)
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

            dispatch(trainingactions.addTraining(Immutable.Map(data), representTraining))
          // return newtrainings;
          }
        },
        err => {
          console.log('Status looks not good at all!' + err)
          dispatch(trainingactions.rejectTraining(representTraining))
        }
      )
    }

  // return {
  //   type: 'ADD_TRAINING',
  //   text: text
  // }
  },

  addTraining: function(training, representTraining) {
    console.log('actions. AddTraining completed? ' + training.get('completed'))
    return {
      type: 'ADD_TRAINING',
      training: training,
      representTraining: representTraining
    }
  },

  addTrainings: function(trainings) {
    console.log('actions. AddTrainings')
    return {
      type: 'ADD_TRAININGS',
      trainings: trainings
    }
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

  completeTraining: function(id) {
    return {
      type: 'COMPLETE_TRAINING',
      id: id
    }
  },
  uploadTrainingFileDispatcher: function(training, trainingold, fileinput) {
    console.log('trainingactions. uploadTrainingFileDispatcher')
    return (dispatch) => {
      if( fileinput== undefined){
        trainingold = trainingold.set('error', 'No file parameter provided')
        dispatch(trainingactions.updateTraining(trainingold))
        trainingold = trainingold.delete('error')
        setTimeout(() => {
          dispatch(trainingactions.updateTraining(trainingold))
        }, 2500)
        return
      }
      if( fileinput.size > 500000){
        trainingold = trainingold.set('error', 'File too large (200kb max)')
        dispatch(trainingactions.updateTraining(trainingold))
        trainingold = trainingold.delete('error')
        setTimeout(() => {
          dispatch(trainingactions.updateTraining(trainingold))
        }, 2500)
        return
      }


      if (training.get('loading') || training.get('error')) {
        // console.log('training actions toggle training. Is loading or Error displaying. So no action')
        return
      }
      dispatch(trainingactions.loadingTraining(training))
      console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'))
      actions.uploadTrainingFileService(training,fileinput)
        .then(
          ({status, data}) => {
            if (actions.disconnect(dispatch, status, data))
              return
            else if (status == 413) {
              console.log('Status file too large. ' + status  )
              trainingold = trainingold.set('error', 'File is too large')
              dispatch(trainingactions.updateTraining(trainingold))
              trainingold = trainingold.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(trainingold))
              }, 2500)
            }else if (status >= 400) {
              // var error = data
              // console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              trainingold = trainingold.set('error', 'System error')
              dispatch(trainingactions.updateTraining(trainingold))
              trainingold = trainingold.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(trainingold))
              }, 2500)
            } else if (data.error) {
              // var error = data.error
              var errorDescription = data.errorDescription!==undefined?data.errorDescription:'System error'
              console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
              console.log(data)
              trainingold = trainingold.set('error', errorDescription)
              dispatch(trainingactions.updateTraining(trainingold))
              trainingold = trainingold.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(trainingold))
              }, 2500)
            } 
            else {
              console.log('Upload image is ok. Now get it')
              dispatch(trainingactions.updateTraining(training))
              dispatch(trainingactions.uploadingTrainingImg(training,true))
              dispatch(trainingactions.uploadingTrainingImg(training,false))
              // setTimeout(function() {
              //   dispatch(trainingactions.uploadingTrainingImg(training,false))
              // },(2000) )
              // dispatch(trainingactions.loadingTrainingFileOn())
            }
            // dispatch(trainingactions.uploadingTrainingImg(training,false))
          },
          err => {
            console.log('Status looks not good at all!' + err)
            console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'))
            trainingold = trainingold.set('error', 'System error')
            dispatch(trainingactions.updateTraining(trainingold))
            trainingold = trainingold.delete('error')
            // dispatch(trainingactions.uploadingTrainingImg(training,false))
            setTimeout(() => {
              dispatch(trainingactions.updateTraining(trainingold))
            }, 2500)
          }
      )

    }
  },
  updateTrainingDispatcher: function(training, trainingold) {
    console.log('trainingactions. updateTrainingDispatcher')
    return (dispatch) => {
      // console.log('trainingactions. updateTrainingDispatcher assi')
      if (training.get('loading') || training.get('error')) {
        // console.log('training actions toggle training. Is loading or Error displaying. So no action')
        return
      }
      // dispatch(trainingactions.loadingTrainingFileOff())
      dispatch(trainingactions.loadingTraining(training))
      console.log('actions. update Training version old: ' + trainingold.get('userId') + '. new: ' + training.get('version'))
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
      actions.updateTrainingService(training)
        .then(
          ({status, data}) => {
            if (actions.disconnect(dispatch, status, data))
              return

            // if (status === 401) {
            //   dispatch(actions.receiveLogout())
            // } 
            else if (status >= 400) {
              var errorDescription
              if(data.error){
                console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                errorDescription = data.errorDescription!==undefined?data.errorDescription:'System error'
              }

              trainingold = trainingold.set('error', errorDescription)
              dispatch(trainingactions.updateTraining(trainingold))
              trainingold = trainingold.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(trainingold))
              }, 2500)
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
              errorDescription = data.errorDescription!==undefined?data.errorDescription:'System error'
              console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
              console.log(data)
              trainingold = trainingold.set('error', errorDescription)
              dispatch(trainingactions.updateTraining(trainingold))
              trainingold = trainingold.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(trainingold))
              }, 2500)
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

              dispatch(trainingactions.updateTraining(Immutable.Map(data)))
            // return newtrainings;
            }
          },
          err => {
            console.log('Status looks not good at all!' + err)
            console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'))
            trainingold = trainingold.set('error', 'System error')
            dispatch(trainingactions.updateTraining(trainingold))
            trainingold = trainingold.delete('error')
            setTimeout(() => {
              dispatch(trainingactions.updateTraining(trainingold))
            }, 2500)
          }
      )
    }
  },
  deleteTraining: function(id) {
    return {
      type: 'DELETE_TRAINING',
      id: id
    }
  },
  loadTrainings: function(trainingsraw) {
    return {
      type: 'TRAININGS_LOADED',
      trainings: trainingsraw
    }
  },
  retrieveTrainingsDispatcher: function() {
    return (dispatch) => {
      actions.retrieveTrainingsService()
        .then(
          ({status, data}) => {
            if (status === 401) {
              console.log('Status looks bad. Unauthorized')
              // dispatch(actions.receiveLogout())
              dispatch(actions.loadTrainings([]))
            } else if (status >= 400) {
              var error = data
              console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              // dispatch(actions.receiveLogout())
              dispatch(actions.loadTrainings([]))
            } else if (data.error) {
              // var error = data.error
              var errorDescription = data.error_description
              console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
              // dispatch(actions.receiveLogout())
              dispatch(actions.loadTrainings([]))
            } else {
              dispatch(actions.loadTrainings(data))
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
        .catch(err => {
          // dispatch(actions.receiveLogout())
          console.log('trainingactions.js Error retrieving data. Status = ' + status + ', error = ' + err)
          
        })
    }
  },
  deleteTrainingSrv: function(training) {
    return (dispatch) => {
      if (training.get('loading') || training.get('error')) {
        console.log('training actions toggle training. Is loading or Error displaying. So no action')
        return
      }
      dispatch(trainingactions.loadingTraining(training))
      console.log('actions. toggleTraining Training 1')
      actions.deleteTrainingService(training)
        .then(
          ({status, data}) => {
            if (actions.disconnect(dispatch, status, data))
              return
            if (status >= 400) {
              var error = data
              console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              // for (var i = 0; i < 3; i++) {

              training = training.set('error', 'System error')
              dispatch(trainingactions.updateTraining(training))
              training = training.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(training))
              }, 2500)
            // console.log('Training action error loop. ' + i)
            // }
            // dispatch(trainingactions.updateTraining(training))
            } else if (data.error) {
              training = training.set('error', 'System error')
              dispatch(trainingactions.updateTraining(training))
              training = training.delete('error')
              setTimeout(() => {
                dispatch(trainingactions.updateTraining(training))
              }, 2500)
            } else {
              console.log('Status looks good ')
              console.log(data)
              // var newtrainings = trainings.push(Immutable.Map(data))
              // console.log('New trainings ')
              // console.log(newtrainings)
              // trainings = trainings.push(Immutable.Map({
              //   title: action.text,
              //   isCompleted: false,
              //   id: maxid
              // }))
              console.log('training actions. training representant : ')
              // console.log(representTraining)

              dispatch(trainingactions.deleteTraining(training.get('id')))
            // return newtrainings;
            }
          },
          err => {
            console.log('Status looks not good at all!' + err)
            console.log('Status looks not good at all! training completed? ' + training.get('completed'))
            training = training.set('error', 'System error')
            dispatch(trainingactions.updateTraining(training))
            training = training.delete('error')
            setTimeout(() => {
              dispatch(trainingactions.updateTraining(training))
            }, 2500)

          }
      )
    }


  },
  filterTrainingsOpen: function(filterTrainings) {
    return {
      type: 'FILTER_TRAININGS_OPEN',
      filterOpen: filterTrainings
    }

  },
  filterTrainingsClosed: function(filterTrainings) {
    return {
      type: 'FILTER_TRAININGS_CLOSED',
      filterClosed: filterTrainings
    }

  }


}

export default trainingactions