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
  }

};

exports.default = appactions;