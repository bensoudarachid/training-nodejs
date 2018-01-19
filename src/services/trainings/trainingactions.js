import Immutable from 'immutable'
import actions from '../actions'
const trainingactions = {
    createTrainingInit: function (representTraining) {
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
        return {
            type: 'UPDATE_TRAINING_IN_LIST',
            training
        }
    },
    uploadingTrainingImg: function (training, isUploading) {
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

    handleTrainingEditEventsChange: function (events) {
        return {
            type: 'HANDLE_TRAINING_EVENTS_CHANGE',
            events: events
        }
    },
    newTraining: function () {
        return (dispatch) => {
            var newTraining = {
                id: -1,
                title: '',
                shortDescription: '',
                longDescription: '',
                duration: 0,
                loading: false
            }
            console.log('loadEditTraining newTraining=' + require('util').inspect(newTraining, false, null))
            dispatch(actions.loadEditTraining(newTraining))
            window.routerHistory.push('admin/trainings/item/new')
        }
    },
    createTraining: function (title) {
        return (dispatch) => {
            var representTraining = Immutable.Map({
                id: -1,
                title: title,
                shortDescription: title,
                longDescription: title,
                loading: true
            })
            dispatch(trainingactions.createTrainingInit(representTraining))
            actions.updateTrainingService(representTraining).then(
                ({status, data}) => {
                    if (status === 401) {
                        dispatch(actions.receiveLogout())
                    } else if (status >= 400) {
                        var error = data
                        console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                        dispatch(trainingactions.rejectTraining(representTraining))
                    } else if (data.error === 'invalid_token') {

                        var errorDescription = data.error_description
                        console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                        dispatch(actions.receiveLogout())
                    } else if (data.error) {

                        var errorDescription = data.error_description
                        console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                        dispatch(trainingactions.rejectTraining(representTraining))
                    } else {
                        console.log('Status looks good training version: ' + data.version)
                        dispatch(trainingactions.addTraining(Immutable.Map(data), representTraining))
                    }
                },
<<<<<<< HEAD
<<<<<<< HEAD
                err => {
=======
                    err => {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                err => {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    console.log('Status looks not good at all!' + err)
                    dispatch(trainingactions.rejectTraining(representTraining))
                }
            )
        }
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
            }
            if (fileinput.size > 500000) {
                return handleError(dispatch, 'File too large (200kb max)', training, trainingold)
            }
            if (training.get('loading') || training.get('error')) {
                return
            }
            console.log('actions. update Training version old: ' + trainingold.get('version') + '. new: ' + training.get('version'))
            actions.uploadTrainingFileService(training, fileinput)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 413) {
                            console.log('Status file too large. ' + status)
                            return handleError(dispatch, 'File too large (200kb max)', training, trainingold)
                        } else if (status >= 400) {
                            return handleError(dispatch, 'System error', training, trainingold)
                        } else if (data.error) {
                            var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            return handleError(dispatch, errorDescription, training, trainingold)
                        }
                        else {
                            console.log('Upload image is ok. Now get it')
                            dispatch(trainingactions.updateTrainingInList(training))
                            dispatch(trainingactions.uploadingTrainingImg(training, true))
                            dispatch(trainingactions.uploadingTrainingImg(training, false))
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! training completed? ' + trainingold.get('completed'))
<<<<<<< HEAD
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        return handleError(dispatch, 'System error', training, trainingold)
<<<<<<< HEAD
                        // trainingold = trainingold.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(trainingold))
                        // trainingold = trainingold.delete('error')
<<<<<<< HEAD
<<<<<<< HEAD
                        // // dispatch(trainingactions.uploadingTrainingImg(training,false))
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(trainingold))
                        // }, 2500)
                    }
                )
=======
=======
                        // // dispatch(trainingactions.uploadingTrainingImg(training,false))
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(trainingold))
                        // }, 2500)
=======
>>>>>>> f886b1f... clean code, remove console logs
                    }
<<<<<<< HEAD
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
<<<<<<< HEAD
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

        }
    },
    updateTrainingDispatcher: function (training, trainingold, fileinput) {
<<<<<<< HEAD
        console.log('+++++++++++++++++++++++++++++++++++trainingactions. updateTrainingDispatcher old title' + trainingold.get('title'))
=======
        // console.log('trainingactions. updateTrainingDispatcher old title' + trainingold.get('title'))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        }
    },
    updateTrainingDispatcher: function (training, trainingold, fileinput) {
>>>>>>> f886b1f... clean code, remove console logs
        return (dispatch, getState) => {
            if (fileinput != undefined && fileinput.size > 250000) {
                return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold)
            }
            if (training.get('loading') || training.get('error')) {
                return
            }
            dispatch(actions.validateEditTraining(training))
            const trainingEditError = getState().trainingappmap.get('trainingEditError')
            if (trainingEditError.get('title') != undefined || trainingEditError.get('shortDescription') != undefined) {
                console.log('trainingEditError.get(title)=' + require('util').inspect(trainingEditError.get('title'), false, null))
                console.log('trainingEditError.get(shortDescription)=' + require('util').inspect(trainingEditError.get('shortDescription'), false, null))
                return
            }
            dispatch(trainingactions.savingEditTraining(training))
            training = training.set('duration', 12)
            actions.updateTrainingService(training, fileinput)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 413) {
                            return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold)
                        } else if (status >= 400) {
                            var errorDescription = 'Error status ' + status + ' '
                            if (data.error) {
                                console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                                errorDescription = errorDescription + data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            }
                            return handleError(dispatch, errorDescription, training, trainingold)
<<<<<<< HEAD

                            // training = training.set('error', errorDescription)
                            // console.log('-------------------------trainingactions. error set old title' + trainingold.get('title'))
                            // dispatch(trainingactions.loadEditTraining(training))
                            // // training = training.delete('error')
                            // setTimeout(() => {
                            //   dispatch(trainingactions.loadEditTraining(trainingold))
                            // }, 2500)
<<<<<<< HEAD
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
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
=======
>>>>>>> f886b1f... clean code, remove console logs
                        }
                        else if (data.error) {
                            errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            return handleError(dispatch, errorDescription, training, trainingold)
                        }
                        else {
                            var updEditTraining = data
                            dispatch(trainingactions.loadEditTraining(updEditTraining))
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        return handleError(dispatch, 'System error', training, trainingold)
<<<<<<< HEAD
                        // trainingold = trainingold.set('error', 'System error')
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        // dispatch(trainingactions.updateTrainingInList(trainingold))
                        // trainingold = trainingold.delete('error')
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(trainingold))
                        // }, 2500)
=======
>>>>>>> f886b1f... clean code, remove console logs
                    }
<<<<<<< HEAD
<<<<<<< HEAD
                )
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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
        if (trainingraw != undefined)
            trainingraw.events = trainingraw.events != undefined ? Immutable.fromJS(trainingraw.events) : Immutable.List([])
        return {
            type: 'EDIT_TRAINING_LOADED',
            training: trainingraw
        }
    },
    validateEditTraining: function (editTraining) {
        return {
            type: 'EDIT_TRAINING_VALIDATE',
            editTraining
        }
    },

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

    retrieveTrainingsDispatcher: function () {

        return (dispatch, getState) => {

            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return
            return actions.retrieveTrainingsService()
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (status === 401) {
                            dispatch(actions.loginProcessStart('No access rights!', actions.retrieveTrainingsDispatcher))
                        } else if (status >= 400) {
                            var error = data
                            dispatch(actions.loadTrainings([]))
                        } else if (data.error) {
                            var errorDescription = data.error_description
                            dispatch(actions.loadTrainings([]))
                        } else {
                            dispatch(actions.loadTrainings(data))
                        }
                    })
<<<<<<< HEAD
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                .catch(err => {
                    // console.log('trainingactions.js retrieveTrainingsDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                    if (err.code == 'ENOENT') {
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    },

<<<<<<< HEAD
    retrieveTrainingDispatcher: function (params, hostname) {
<<<<<<< HEAD
=======
        console.log('Call retrieveTrainingDispatcher  <-----------------------------')
>>>>>>> 6e3ff02... webstorm big changes crash
=======
    retrieveTrainingDispatcher: function (params) {
<<<<<<< HEAD
//        console.log('Call retrieveTrainingDispatcher  <-----------------------------')
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
        // console.log('training actions. retrieveTrainingDispatcher')
        // console.log('rootreducer='+require('util').inspect(rootreducer, false, null))
=======
>>>>>>> f886b1f... clean code, remove console logs
        return (dispatch, getState) => {
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return
            if (params == undefined || isNaN(params.id)) {
                return
            }
            return actions.retrieveTrainingService(params.id)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (status == 401) {
                            if (!process.env.BROWSER)
                                dispatch(actions.serverDataFetch(false))

                            dispatch(actions.loadEditTraining({}))
                            dispatch(actions.loginProcessStart('No access rights!', actions.retrieveTrainingDispatcher, params))
                        } else if (status >= 400) {
                            var error = data
                            dispatch(actions.loadEditTraining({}))
                        } else if (data.error) {
                            var errorDescription = data.error_description
                            dispatch(actions.loadEditTraining({}))
                        } else {
                            dispatch(actions.loadEditTraining(data))

                        }
                    })
<<<<<<< HEAD
=======
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                .catch(err => {
                    if (err.code == 'ENOENT') {
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    },


    deleteEditTrainingDispatcher: function () {

        return (dispatch, getState) => {
            const training = getState().trainingappmap.get('edittraining')
            if (training.get('loading') || training.get('error')) {
                return
            }
            dispatch(trainingactions.loadEditTraining(training))
            actions.deleteTrainingService(training)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        if (status >= 400) {
                            var error = data
                            return handleError(dispatch, 'System error', training, training)
                        } else if (data.error) {
                            return handleError(dispatch, 'System error', training, training)
                        } else {
                            console.log(data)
                            window.routerHistory.push('/admin/trainings')
                        }
                    },
                    err => {
<<<<<<< HEAD
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! training completed? ' + training.get('completed'))
<<<<<<< HEAD
=======
                ({status, data}) => {
                    if (actions.disconnect(dispatch, status, data))
                        return
                    if (status >= 400) {
                        var error = data
                        console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                        // for (var i = 0; i < 3; i++) {
>>>>>>> 6e3ff02... webstorm big changes crash
                        return handleError(dispatch, 'System error', training, training)
                        // training = training.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(training))
                        // training = training.delete('error')
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(training))
                        // }, 2500)
<<<<<<< HEAD

=======
                        return handleError(dispatch, 'System error', training, training)
>>>>>>> f886b1f... clean code, remove console logs
                    }
                )
=======
                    } else if (data.error) {
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        return handleError(dispatch, 'System error', training, training)
                        // training = training.set('error', 'System error')
                        // dispatch(trainingactions.updateTrainingInList(training))
                        // training = training.delete('error')
                        // setTimeout(() => {
                        //   dispatch(trainingactions.updateTrainingInList(training))
                        // }, 2500)

                    }
<<<<<<< HEAD
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
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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

    setTimeout(() => {
        dispatch(trainingactions.loadEditTraining(trainingold))
    }, 2500)
    return
}

export default trainingactions
