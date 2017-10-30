'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _appservices = require('./app/appservices');

var _appservices2 = _interopRequireDefault(_appservices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

var actions = _extends({}, _appservices2.default, _authservices2.default, _todoservices2.default, _trainingservices2.default, _appactions2.default, _authactions2.default, _todoactions2.default, _trainingactions2.default);

// JSON.useDateParser()

exports.default = actions;