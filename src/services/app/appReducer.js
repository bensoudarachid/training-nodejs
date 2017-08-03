// import _ from 'lodash'
import Immutable from 'immutable'
// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

let appReducer = function (app = new Immutable.Map({
    appError: undefined,
    previouslocation: undefined,
    serverDataFetched: true
}), action) {

    if (!(app instanceof Immutable.Map)) {
        console.log('App reducer. Init Map. Need to find out why it s not a map')
        app = new Immutable.Map({
            appError: '',
            previouslocation: undefined,
            serverDataFetched: true
        })
    }

    switch (action.type) {
        case 'APP_DO_NOTHING':
            return app
        case 'NEED_ACTION_CONFIRMATION':
            // editTraining = trainingappmap.get('edittraining').set('needDeleteConfirmation',action.value)
            // console.log('Training reducer edit training is being saved. Check: '+require('util').inspect(editTraining, false, null))
            // trainingappmap = trainingappmap.set('edittraining',editTraining)
            if (action.boolValue) {
                app = app.set('confirmationActionFunction', action.actionFunction)
                app = app.set('confirmationActionParams', action.actionParams)
            } else {
                app = app.remove('confirmationActionFunction')
                app = app.remove('confirmationActionParams')
            }
            return app
        case 'APP_ERROR':
            // console.log('app reducer. +++++++++++++Error '+ action.error)
            app = app.set('appError', action.error)
            return app
        // return Object.assign({}, app, {
        //   loginMessage: action.message,
        //   loginProgress: true
        // })

        case 'APP_PREVIOUS_LOCATION':
            // console.log('app reducer. +++++++++++++ old location '+ app.get('previouslocation'))
            // console.log('app reducer. +++++++++++++ new location '+ action.previouslocation)
            app = app.set('previouslocation', action.previouslocation)
            return app

        case 'SERVER_DATA_FETCH_STATUS':
            console.log('app reducer. +++++++++++++ SERVER_DATA_FETCH_STATUS ' + action.serverDataFetchOk)
            app = app.set('serverDataFetched', action.serverDataFetchOk)
            return app

        default:
            return app
    }
}

export default appReducer