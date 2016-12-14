'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

var _reducers = require('../reducers');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registrationactions = {
  requestRegister: function requestRegister(creds) {
    return {
      type: 'REGISTER_REQUEST',
      isRegistrationFetching: true,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
      creds: creds
    };
  },

  receiveRegister: function receiveRegister(user) {
    // console.log('actions user access token: ' + user.access_token)
    return {
      type: 'REGISTER_SUCCESS',
      user: user
    };
  },

  registerInit: function registerInit() {
    console.log('Actions. Init registration: ');
    return {
      type: 'REGISTER_INIT'
    };
  },

  registerUserError: function registerUserError(registererror) {
    console.log('Actions. Error registration: ');
    console.log(registererror);
    return {
      type: 'REGISTER_USER_ERROR',
      registererror: registererror
    };
  },

  registerSystemError: function registerSystemError(registererror) {
    console.log('Actions. Error registration: ');
    console.log(registererror);
    return {
      type: 'REGISTER_SYSTEM_ERROR',
      registererror: registererror
    };
  },

  validateUser: function validateUser(user) {
    // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++registrationactions validate user')
    return {
      type: 'REGISTER_VALIDATE',
      user: user
    };
  },

  registerUser: function registerUser(creds) {
    console.log('actions register user ' + creds.username + ' .pass ' + creds.password + ' .email ' + creds.email);
    var body = 'username=' + creds.username + '&password=' + creds.password + '&email=' + creds.email;
    //&scope=read%20write
    console.log('body ' + body);
    var config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    };

    return function (dispatch, getState) {
      if (getState().auth.get('isRegistrationFetching')) {
        console.log('Fetching! Do nothing');
        return;
      }
      dispatch(registrationactions.validateUser(creds));
      var registrationError = getState().auth.get('registrationError');
      // console.log('+++++++++++++++++++++++++++reg actions. auth registrationError username '+registrationError.get('username'))
      if (registrationError.get('username') !== '' || registrationError.get('email') !== '' || registrationError.get('password') !== '') {
        // console.log('+++++++++++++++++++++++++++reg actions. reg error' + registrationError.get('username'))
        return;
      }

      dispatch(registrationactions.requestRegister(creds));
      return _actions2.default.registerUserService(creds).then(function (_ref) {
        var status = _ref.status;
        var user = _ref.user;

        var error = user;
        if (status >= 400) {
          console.log('Status looks bad. ' + status + '. error message = ' + error.message);
          dispatch(registrationactions.registerSystemError(error.message));
        } else if (user.error) {
          var errorDescription = error.errorDescription;
          console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription);
          dispatch(registrationactions.registerUserError(errorDescription));
          dispatch(_actions2.default.appError(errorDescription));
        } else {
          console.log('Status looks good ');
          console.log(user);
          dispatch(registrationactions.receiveRegister(user));
          //          browserHistory.push('/registerconfirm/')
        }
      }, function (err) {
        console.log('Status looks not good at all!' + err);
      });
    };
  }
}; // export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
exports.default = registrationactions;