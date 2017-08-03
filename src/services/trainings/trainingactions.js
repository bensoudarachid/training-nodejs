// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers'
import Immutable from 'immutable'
import actions from '../actions'
import rootreducer from '../rootreducer'
// import cookie from 'react-cookie'

const trainingactions = {

    createTrainingInit: function (representTraining) {
        // console.log('Actions. Init registration: ')
        // var newTraining = Immutable.Map({"id":-1,"title":text,"userId":-1, "isCompleted":false})
        return {
            type: 'CREATE_TRAINING_INIT',
            training: representTraining
        }
    },
    rejectTraining: function (representTraining) {
        console.log('Actions. Init registration: ')
        return {
            type: 'REJECT_TRAINING_INIT',
            representTraining: representTraining
        }
    },
    updateTrainingInList: function (training) {
        // console.log('training actions update training')
        // console.log(training)
        return {
            type: 'UPDATE_TRAINING_IN_LIST',
            training
        }
    },
    uploadingTrainingImg: function (training, isUploading) {
        // console.log('training actions upload training file')
        return {
            type: 'UPLOADING_TRAINING_IMAGE',
            training,
            isUploading
        }
    },

    handleTrainingEditChange: function (attribute, value) {
        return {
            type: 'HANDLE_TRAINING_CHANGE',
            attribute,
            value
        }
    },
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

    newTraining: function () {
        return (dispatch) => {
            var newTraining = {
                id: -1,
                title: '',
                shortDescription: '',
                longDescription: '',
                duration: 0,
                // "userId": -1,
                // "completed": false
                loading: false
            }
            console.log('loadEditTraining newTraining=' + require('util').inspect(newTraining, false, null))
            dispatch(actions.loadEditTraining(newTraining))
            window.routerHistory.push('admin/trainings/item/new')
        }
    },
    createTraining: function (title) {
        // console.log('actions. AddTraining')

        return (dispatch) => {
            var representTraining = Immutable.Map({
                id: -1,
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

    addTraining: function (training, representTraining) {
        console.log('actions. AddTraining completed? ' + training.get('completed'))
        return {
            type: 'ADD_TRAINING',
            training: training,
            representTraining: representTraining
        }
    },

    addTrainings: function (trainings) {
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

    completeTraining: function (id) {
        return {
            type: 'COMPLETE_TRAINING',
            id: id
        }
    },
    uploadTrainingFileDispatcher: function (training, trainingold, fileinput) {
        console.log('trainingactions. uploadTrainingFileDispatcher')
        return (dispatch) => {
            if (fileinput == undefined) {
                return handleError(dispatch, 'No file parameter provided', training, trainingold)
                // trainingold = trainingold.set('error', 'No file parameter provided')
                // dispatch(trainingactions.updateTrainingInList(trainingold))
                // trainingold = trainingold.delete('error')
                // setTimeout(() => {
                //   dispatch(trainingactions.updateTrainingInList(trainingold))
                // }, 2500)
                // return
            }
            if (fileinput.size > 500000) {
                return handleError(dispatch, 'File too large (200kb max)', training, trainingold)
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
                return
            }
            // dispatch(trainingactions.loadingTraining(training))
            // dispatch(trainingactions.savingEditTraining())

            console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'))
            actions.uploadTrainingFileService(training, fileinput)
                .then(
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 413) {
                            console.log('Status file too large. ' + status)
                            return handleError(dispatch, 'File too large (200kb max)', training, trainingold)
                            // trainingold = trainingold.set('error', 'File is too large')
                            // dispatch(trainingactions.updateTrainingInList(trainingold))
                            // trainingold = trainingold.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(trainingold))
                            // }, 2500)
                        } else if (status >= 400) {
                            return handleError(dispatch, 'System error', training, trainingold)
                            // trainingold = trainingold.set('error', 'System error')
                            // dispatch(trainingactions.updateTrainingInList(trainingold))
                            // trainingold = trainingold.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(trainingold))
                            // }, 2500)
                        } else if (data.error) {
                            // var error = data.error
                            var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            return handleError(dispatch, errorDescription, training, trainingold)
                            // trainingold = trainingold.set('error', errorDescription)
                            // dispatch(trainingactions.updateTrainingInList(trainingold))
                            // trainingold = trainingold.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(trainingold))
                            // }, 2500)
                        }
                        else {
                            console.log('Upload image is ok. Now get it')
                            dispatch(trainingactions.updateTrainingInList(training))
                            dispatch(trainingactions.uploadingTrainingImg(training, true))
                            dispatch(trainingactions.uploadingTrainingImg(training, false))
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
                        return handleError(dispatch, 'System error', training, trainingold)
                        // trainingold = trainingold.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(trainingold))
                        // trainingold = trainingold.delete('error')
                        // // dispatch(trainingactions.uploadingTrainingImg(training,false))
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(trainingold))
                        // }, 2500)
                    }
                )

        }
    },
    updateTrainingDispatcher: function (training, trainingold, fileinput) {
        // console.log('trainingactions. updateTrainingDispatcher old title' + trainingold.get('title'))
        return (dispatch, getState) => {
            if (fileinput != undefined && fileinput.size > 250000) {
                return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold)

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
                return
            }

            dispatch(actions.validateEditTraining(training))
            const trainingEditError = getState().trainingappmap.get('trainingEditError')
            if (trainingEditError.get('title') != undefined || trainingEditError.get('shortDescription') != undefined) {
                console.log('trainingEditError.get(title)=' + require('util').inspect(trainingEditError.get('title'), false, null))
                console.log('trainingEditError.get(shortDescription)=' + require('util').inspect(trainingEditError.get('shortDescription'), false, null))
                return
            }

            // dispatch(trainingactions.loadingTraining(training))
            // console.log('--------------training actions update on server now. title ='+require('util').inspect(training.get('title'), false, null))
            dispatch(trainingactions.savingEditTraining(training))
            // console.log('actions. update Training version old: ' + trainingold.get('userId') + '. new: ' + training.get('version'))

//Needs to be done correctly
            training = training.set('duration', 12)

            actions.updateTrainingService(training, fileinput)
                .then(
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return

                        else if (status == 413) {
                            return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold)
                            // training = training.set('error', 'File is too large')
                            // dispatch(trainingactions.loadEditTraining(training))
                            // // training = training.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.loadEditTraining(trainingold))
                            // }, 2500)

                        } else if (status >= 400) {
                            // console.log('------------------------Error. status = ' + status + '. error message = ' + data.error)
                            var errorDescription = 'Error status ' + status + ' '
                            if (data.error) {
                                console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                                errorDescription = errorDescription + data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            }
                            return handleError(dispatch, errorDescription, training, trainingold)

                            // training = training.set('error', errorDescription)
                            // console.log('-------------------------trainingactions. error set old title' + trainingold.get('title'))
                            // dispatch(trainingactions.loadEditTraining(training))
                            // // training = training.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.loadEditTraining(trainingold))
                            // }, 2500)
                        }
                        else if (data.error) {
                            // var error = data.error
                            errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            return handleError(dispatch, errorDescription, training, trainingold)
                            // trainingold = trainingold.set('error', errorDescription)
                            // dispatch(trainingactions.updateTrainingInList(trainingold))
                            // trainingold = trainingold.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(trainingold))
                            // }, 2500)
                        }
                        else {
                            const updEditTraining = Immutable.Map(data)
//              console.log('Training actions. updEditTraining='+require('util').inspect(updEditTraining, false, null))
                            // dispatch(trainingactions.updateTrainingInList(updEditTraining))
                            dispatch(trainingactions.loadEditTraining(updEditTraining))
                            // return newtrainings;
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'))
                        return handleError(dispatch, 'System error', training, trainingold)
                        // trainingold = trainingold.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(trainingold))
                        // trainingold = trainingold.delete('error')
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(trainingold))
                        // }, 2500)
                    }
                )
        }
    },
    deleteTraining: function (id) {
        return {
            type: 'DELETE_TRAINING',
            id: id
        }
    },
    loadTrainings: function (trainingsraw) {
        return {
            type: 'TRAININGS_LOADED',
            trainings: trainingsraw
        }
    },
    loadTraining: function (trainingraw) {
        return {
            type: 'TRAINING_LOADED',
            training: trainingraw
        }
    },
    savingEditTraining: function (trainingraw) {
        return {
            type: 'EDIT_TRAINING_SAVING',
            training: trainingraw
        }
    },
    loadEditTraining: function (trainingraw) {
        return {
            type: 'EDIT_TRAINING_LOADED',
            training: trainingraw
        }
    },
    validateEditTraining: function (editTraining) {
        // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++registrationactions validate user')
        return {
            type: 'EDIT_TRAINING_VALIDATE',
            editTraining
        }
    },

    retrieveTrainingsDispatcher: function (hostname) {
        console.log('actions. retrieveTrainingsDispatcher ' + hostname)
        return (dispatch, getState) => {
            // if(!process.env.BROWSER || (process.env.BROWSER && getState().app.get('previouslocation')!=undefined))
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return

//      console.log('actions. retrieveTrainingsDispatcher calls service now')
            return actions.retrieveTrainingsService(hostname)
                .then(
                    ({status, data}) => {
                        if (status === 401) {

                            console.log('Status looks bad. Unauthorized')
                            // dispatch(actions.receiveLogout())
                            dispatch(actions.loginProcessStart('No access rights!', actions.retrieveTrainingsDispatcher))
                            // dispatch(actions.loadTrainings([]))
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
                .catch(err => {
                    console.log('trainingactions.js retrieveTrainingsDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                    if (err.code == 'ENOENT') {
                        console.log('trainingactions.js. YEAH! getaddrinfo ENOENT error is there')
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    },

    retrieveTrainingDispatcher: function (params, hostname) {
        console.log('Call retrieveTrainingDispatcher  <-----------------------------')
        // console.log('training actions. retrieveTrainingDispatcher')
        // console.log('rootreducer='+require('util').inspect(rootreducer, false, null))
        return (dispatch, getState) => {
            // if(!process.env.BROWSER || (process.env.BROWSER && getState().app.get('previouslocation')!=undefined))
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return
            if (params == undefined || isNaN(params.id)) {
                console.log('training actions. retrieveTrainingDispatcher do nothing')
                return
            }
            return actions.retrieveTrainingService(params.id, hostname)
                .then(
                    ({status, data}) => {
                        if (status == 401) {
                            console.log('Status looks bad. Unauthorized')
                            if (!process.env.BROWSER)
                                dispatch(actions.serverDataFetch(false))
                            // dispatch(actions.receiveLogout())
                            dispatch(actions.loadEditTraining({}))
                            dispatch(actions.loginProcessStart('No access rights!', actions.retrieveTrainingDispatcher, params))
                        } else if (status >= 400) {
                            var error = data
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                            // dispatch(actions.receiveLogout())
                            dispatch(actions.loadEditTraining({}))
                        } else if (data.error) {
                            // var error = data.error
                            var errorDescription = data.error_description
                            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            // dispatch(actions.receiveLogout())
                            dispatch(actions.loadEditTraining({}))
                        } else {
                            dispatch(actions.loadEditTraining(data))
                            // dispatch(actions.loadingTrainingFileOff())
                        }
                    })
                .catch(err => {
                    console.log('trainingactions.js retrieveTrainingDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                    if (err.code == 'ENOENT') {
                        console.log('trainingactions.js. YEAH! getaddrinfo ENOENT error is there')
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    },
    // callActionConfirmation: function(boolValue, actionFunction,actionParams){
    //   return (dispatch,getState) => {
    //     const func = getState().trainingappmap.get('confirmationActionFunction')
    //     const params = getState().trainingappmap.get('confirmationActionParams')
    //     func(params)
    //     dispatch(trainingactions.needActionConfirmation(false))
    //   }
    // },
    deleteEditTrainingDispatcher: function () {

        return (dispatch, getState) => {
            const training = getState().trainingappmap.get('edittraining')
            if (training.get('loading') || training.get('error')) {
                console.log('training actions toggle training. Is loading or Error displaying. So no action')
                return
            }
            // dispatch(actions.loginProcessStart('No access rights!',actions.retrieveUserTodosDispatcher))

            dispatch(trainingactions.loadEditTraining(training))
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
                            return handleError(dispatch, 'System error', training, training)
                            // training = training.set('error', 'System error')
                            // dispatch(trainingactions.updateTrainingInList(training))
                            // training = training.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(training))
                            // }, 2500)
                        } else if (data.error) {
                            return handleError(dispatch, 'System error', training, training)
                            // training = training.set('error', 'System error')
                            // dispatch(trainingactions.updateTrainingInList(training))
                            // training = training.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.updateTrainingInList(training))
                            // }, 2500)
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

                            // dispatch(trainingactions.deleteTraining(training.get('id')))
                            window.routerHistory.push('/admin/trainings')
                            // return newtrainings;
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! training completed? ' + training.get('completed'))
                        return handleError(dispatch, 'System error', training, training)
                        // training = training.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(training))
                        // training = training.delete('error')
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(training))
                        // }, 2500)

                    }
                )
        }

    },

    filterTrainingsOpen: function (filterTrainings) {
        return {
            type: 'FILTER_TRAININGS_OPEN',
            filterOpen: filterTrainings
        }

    },

    filterTrainingsClosed: function (filterTrainings) {
        return {
            type: 'FILTER_TRAININGS_CLOSED',
            filterClosed: filterTrainings
        }

    }


}

function handleError(dispatch, errormsg, training, trainingold) {
    training = training.set('error', errormsg)
    dispatch(trainingactions.loadEditTraining(training))
    console.log('training=' + require('util').inspect(training.get('title'), false, null))
    // training = training.delete('error')
    setTimeout(() => {
        dispatch(trainingactions.loadEditTraining(trainingold))
    }, 2500)
    return
}

export default trainingactions
