'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiconnection = require('../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appactions = {
    appDoNothing: function appDoNothing() {
        return {
            type: 'APP_DO_NOTHING'
        };
    },

    needActionConfirmation: function needActionConfirmation(boolValue, actionFunction, actionParams) {
        return {
            type: 'NEED_ACTION_CONFIRMATION',
            boolValue: boolValue,
            actionFunction: actionFunction,
            actionParams: actionParams
        };
    },

    callActionConfirmation: function callActionConfirmation(boolValue, actionFunction, actionParams) {
        return function (dispatch, getState) {
            var func = getState().app.get('confirmationActionFunction');
            var params = getState().app.get('confirmationActionParams');
            func(params);
            dispatch(_actions2.default.needActionConfirmation(false));
        };
    },

    appError: function appError(error) {
        return {
            type: 'APP_ERROR',
            error: error
        };
    },

    savePreviousLocation: function savePreviousLocation(prevlocation) {
        return {
            type: 'APP_PREVIOUS_LOCATION',
            previouslocation: prevlocation
        };
    },

    serverDataFetch: function serverDataFetch(isOk) {
        return {
            type: 'SERVER_DATA_FETCH_STATUS',
            serverDataFetchOk: isOk
        };
    },

    loadTenant: function loadTenant(tenantraw) {
        return {
            type: 'TENANT_LOADED',
            tenant: tenantraw
        };
    },

    retrieveTenantDispatcher: function retrieveTenantDispatcher() {
        return function (dispatch, getState) {
            // if (process.env.BROWSER && getState().app.get('previouslocation') == undefined && getState().app.get('serverDataFetched'))
            //     return
            return _actions2.default.retrieveTenantService().then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status >= 400) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    // dispatch(actions.receiveLogout())
                    dispatch(_actions2.default.loadTenant({}));
                } else if (data.error) {
                    // var error = data.error
                    var errorDescription = data.error_description;
                    console.log('Tenant fetch error = ' + data.error + ', description = ' + errorDescription);
                    // dispatch(actions.loadEditTraining({}))
                    dispatch(_actions2.default.loadTenant({}));
                } else {
                    dispatch(_actions2.default.loadTenant(data));
                }
            }).catch(function (err) {
                console.log('tenantactions.js retrieveTenant Dispatcher Error retrieving data. error = ' + require('util').inspect(err, false, null));
                if (err.code == 'ENOENT') {
                    console.log('actions.js. YEAH! getaddrinfo ENOENT error is there');
                    dispatch(_actions2.default.serverDataFetch(false));
                }
            });
        };
    }

};

exports.default = appactions;