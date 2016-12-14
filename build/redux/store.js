'use strict';

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)();

var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, logger))(_redux.createStore);

// export default function configureStore(initialState = { todos: [], user: {} }) {
// 	console.log('store.js. This is used. i thought not')
//   return finalCreateStore(rootReducer, initialState)
// }