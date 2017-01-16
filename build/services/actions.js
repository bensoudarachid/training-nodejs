'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// import registeractions from'./actions/registeractions'


var _reactRouter = require('react-router');

var _rootreducer = require('./rootreducer');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _todoactions = require('./todos/todoactions');

var _todoactions2 = _interopRequireDefault(_todoactions);

var _trainingactions = require('./trainings/trainingactions');

var _trainingactions2 = _interopRequireDefault(_trainingactions);

var _authservices = require('./app/authentication/authservices');

var _authservices2 = _interopRequireDefault(_authservices);

var _todoservices = require('./todos/todoservices');

var _todoservices2 = _interopRequireDefault(_todoservices);

var _trainingservices = require('./trainings/trainingservices');

var _trainingservices2 = _interopRequireDefault(_trainingservices);

var _authactions = require('./app/authentication/authactions');

var _authactions2 = _interopRequireDefault(_authactions);

var _appactions = require('./app/appactions');

var _appactions2 = _interopRequireDefault(_appactions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = -12;
if (process.env.NODE_ENV === 'production') port = 8082;else port = 8081;
var isBrowser = typeof window !== 'undefined';
var url = '';
var authurl = '';
// const appbasename = '/reactor'
var appbasename = '';
if (isBrowser) {
  authurl = window.location.protocol + '//' + window.location.hostname + ':8083';
  // authurl= 'http:'+'//'+'abbaslearning.royasoftware.com'+':8083'
  // url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+location.port: '')+appbasename
  url = authurl;
  // authurl= window.location.protocol+'//'+window.location.hostname+':8083'
  console.log('services call url ' + url);
} else {
  url = 'http:' + '//' + '127.0.0.1' + (port ? ':' + port : '') + appbasename;
  authurl = 'http:' + '//' + '127.0.0.1' + ':8083';
  console.log('services call local url ' + url);
}

var actions = _extends({
  apiurl: url,
  port: port,
  appbasename: appbasename
}, _authservices2.default, _todoservices2.default, _trainingservices2.default, _appactions2.default, _authactions2.default, _todoactions2.default, _trainingactions2.default);
console.log('actionsjs. actions.url = ' + actions.apiurl);
exports.default = actions;