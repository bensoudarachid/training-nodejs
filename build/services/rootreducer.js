'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _todoReducer = require('./todos/todoReducer');

var _todoReducer2 = _interopRequireDefault(_todoReducer);

var _trainingReducer = require('./trainings/trainingReducer');

var _trainingReducer2 = _interopRequireDefault(_trainingReducer);

var _authReducer = require('./app/authentication/authReducer');

var _authReducer2 = _interopRequireDefault(_authReducer);

var _appReducer = require('./app/appReducer');

var _appReducer2 = _interopRequireDefault(_appReducer);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FetchData, reducer as fetching } from 'redux-fetch-data';

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  app: _appReducer2.default,
  // todoappmap: todoAppReducer,
  todoappmap: _todoReducer2.default,
  trainingappmap: _trainingReducer2.default,
  // user: userReducer,
  routing: _reactRouterRedux.routerReducer
});
// import userReducer from './userReducer'
exports.default = rootReducer;