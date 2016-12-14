'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

var _reducers = require('../reducers');

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
var authactions = {
  requestLogin: function requestLogin(creds) {
    return {
      type: 'LOGIN_REQUEST',
      isFetching: true,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
      creds: creds
    };
  },

  receiveLogin: function receiveLogin(user) {
    // console.log('actions user access token: ' + user.access_token)
    _reactCookie2.default.save('jwt', user.access_token, {
      path: '/'
    });
    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false
      // id_token: user.access_token
    };
  },

  loginError: function loginError(message) {
    return {
      type: 'LOGIN_FAILURE',
      isFetching: false,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
      message: message
    };
  },

  receiveLogout: function receiveLogout() {
    _reactCookie2.default.remove('jwt', {
      path: '/'
    });
    return {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false
    };
  },

  requestLogout: function requestLogout() {
    return {
      type: 'LOGOUT_REQUEST',
      isFetching: true,
      isAuthenticated: _reactCookie2.default.load('jwt') ? true : false
    };
  },

  logoutUser: function logoutUser() {
    console.log('actions logout user ');
    //&scope=read%20write
    1;

    return function (dispatch) {
      dispatch(authactions.requestLogout());
      _actions2.default.logoutService(_reactCookie2.default.load('jwt')).then(function (response) {
        if (!response.ok) {
          console.log('actions request logout not ok');
          return Promise.reject();
        } else {
          dispatch(authactions.receiveLogout());
          window.routerHistory.push('/');
          // browserHistory.push(actions.appbasename+'/')
        }
      }).catch(function (err) {
        console.log('authactionsjs. Unhandled Login Error: ', err);
      });
    };
  },
  loginProcessStart: function loginProcessStart(message) {
    return {
      type: 'LOGIN_PROCESS_START',
      message: message
    };
  },
  loginProcessEnd: function loginProcessEnd() {
    console.log('authactionsjs close modal');
    return {
      type: 'LOGIN_PROCESS_END'
    };
  },
  loginUser: function loginUser(creds) {
    // console.log('actions login user ' + creds.username + ' .pass ' + creds.password)
    return function (dispatch) {
      // We dispatch requestLogin to kickoff the call to the API
      // console.log('actions request login ')
      dispatch(authactions.requestLogin(creds));

      _actions2.default.loginUserService(creds).then(function (_ref) {
        var user = _ref.user;
        var response = _ref.response;

        if (!response.ok) {
          // console.log('authactions. login not ok')
          // console.log(user)
          // console.log(response)
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(authactions.loginError(user.error_description));
          return Promise.reject(user);
        } else {
          // console.log('loginUser user token '+user.access_token )
          // If login was successful, set the token in local storage
          // localStorage.setItem('access_token', user.id_token)
          // Dispatch the success action
          dispatch(authactions.receiveLogin(user));
          var currentRouteName = window.location.pathname.replace('/reactor', '');
          // console.log('authactionsjs push this' + currentRouteName)
          // console.log('authactionsjs push this' + currentRouteName.length)// const appbasename = '/reactor'
          // const url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+location.port: '')+'/reactor'
          // console.log('authactionsjs push this' + url)
          // console.log('authactionsjs push this' + url.length)
          // var currentRoute = currentRouteName.replace(url,'')
          // console.log('authactionsjs push this' + currentRoute)
          // cannot find a reload action below
          window.routerHistory.push('/');
          window.routerHistory.push(currentRouteName);
          // window.location.reload()
        }
      }).catch(function (err) {
        console.log('authactionsjs. Unhandled Login Error: ', err.error_description);
        dispatch(authactions.loginProcessStart(err.error_description));
      });
    };
  },
  disconnect: function disconnect(dispatch, status, data) {
    if (status === 401 || data.error === 'invalid_token') {
      dispatch(_actions2.default.receiveLogout());
      return true;
    }
    return false;
  }

};

exports.default = authactions;