'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'


var _reactRouter = require('react-router');

var _reducers = require('./reducers');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _registeractions = require('./actions/registeractions');

var _registeractions2 = _interopRequireDefault(_registeractions);

var _todoactions = require('./actions/todoactions');

var _todoactions2 = _interopRequireDefault(_todoactions);

var _services = require('./actions/services');

var _services2 = _interopRequireDefault(_services);

var _authactions = require('./actions/authactions');

var _authactions2 = _interopRequireDefault(_authactions);

var _appactions = require('./actions/appactions');

var _appactions2 = _interopRequireDefault(_appactions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _extends({}, _appactions2.default, _services2.default, _authactions2.default, _registeractions2.default, _todoactions2.default);

exports.default = actions;