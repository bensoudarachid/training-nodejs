'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

var appReducer = function appReducer() {
    var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _immutable2.default.Map({
        appError: undefined,
        previouslocation: undefined,
        serverDataFetched: true
    });
    var action = arguments[1];


    if (!(app instanceof _immutable2.default.Map)) {
        console.log('App reducer. Init Map. Need to find out why it s not a map');
        app = new _immutable2.default.Map({
            appError: '',
            previouslocation: undefined,
            serverDataFetched: true
        });
    }

    switch (action.type) {
        case 'APP_DO_NOTHING':
            return app;
        case 'NEED_ACTION_CONFIRMATION':
            // editTraining = trainingappmap.get('edittraining').set('needDeleteConfirmation',action.value)
            // console.log('Training reducer edit training is being saved. Check: '+require('util').inspect(editTraining, false, null))
            // trainingappmap = trainingappmap.set('edittraining',editTraining)
            if (action.boolValue) {
                app = app.set('confirmationActionFunction', action.actionFunction);
                app = app.set('confirmationActionParams', action.actionParams);
            } else {
                app = app.remove('confirmationActionFunction');
                app = app.remove('confirmationActionParams');
            }
            return app;
        case 'APP_ERROR':
            // console.log('app reducer. +++++++++++++Error '+ action.error)
            app = app.set('appError', action.error);
            return app;
        // return Object.assign({}, app, {
        //   loginMessage: action.message,
        //   loginProgress: true
        // })

        case 'APP_PREVIOUS_LOCATION':
            // console.log('app reducer. +++++++++++++ old location '+ app.get('previouslocation'))
            // console.log('app reducer. +++++++++++++ new location '+ action.previouslocation)
            app = app.set('previouslocation', action.previouslocation);
            return app;

        case 'SERVER_DATA_FETCH_STATUS':
            console.log('app reducer. +++++++++++++ SERVER_DATA_FETCH_STATUS ' + action.serverDataFetchOk);
            app = app.set('serverDataFetched', action.serverDataFetchOk);
            return app;

        default:
            return app;
    }
}; // import _ from 'lodash'
exports.default = appReducer;