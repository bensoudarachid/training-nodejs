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
                    if (status == 401) {
                        dispatch(actions.receiveLogout())
                    }
                    else if (status == 422) {
                        dispatch(trainingactions.savingEditTraining(training,false))
                        dispatch(trainingactions.setTrainingUserInputError(data.validation))
                    }
                    else if (status > 401) {
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
                err => {
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
                        return handleError(dispatch, 'System error', training, trainingold)
                    }
                )
        }
    },
    updateTrainingDispatcher: function (training, trainingold, fileinput) {
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
            dispatch(trainingactions.savingEditTraining(training,true))
            training = training.set('duration', 12)
            actions.updateTrainingService(training, fileinput)
                .then(
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 422) {
                            dispatch(trainingactions.savingEditTraining(training,false))
                            dispatch(trainingactions.setTrainingUserInputError(data.validation))
                        }
                        else if (status == 413) {
                            return handleError(dispatch, 'File is too large (250 kb max)', training, trainingold)
                        } else if (status >= 400) {
                            var errorDescription = 'Error status ' + status + ' '
                            if (data.error) {
                                console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                                errorDescription = errorDescription + data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            }
                            return handleError(dispatch, errorDescription, training, trainingold)
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
    savingEditTraining: function (trainingraw, saving) {
        return {
            type: 'EDIT_TRAINING_SAVING',
            training: trainingraw,
            saving: saving
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
    setTrainingUserInputError: function (validationError) {
        return {
            type: 'SET_TRAINING_VALIDATION_ERROR',
            validationError
        }
    },

    retrieveTrainingsDispatcher: function () {

        return (dispatch, getState) => {

            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return
            return actions.retrieveTrainingsService()
                .then(
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
                .catch(err => {
                    // console.log('trainingactions.js retrieveTrainingsDispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null))
                    if (err.code == 'ENOENT') {
                        dispatch(actions.serverDataFetch(false))
                    }
                })

        }
    },

    retrieveTrainingDispatcher: function (params) {
        return (dispatch, getState) => {
            if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
                return
            if (params == undefined || isNaN(params.id)) {
                return
            }
            return actions.retrieveTrainingService(params.id)
                .then(
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
                        return handleError(dispatch, 'System error', training, training)
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

    setTimeout(() => {
        dispatch(trainingactions.loadEditTraining(trainingold))
    }, 2500)
    return
}

export default trainingactions
