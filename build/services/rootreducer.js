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

var rootReducer = (0, _redux.combineReducers)({
    auth: _authReducer2.default,
    app: _appReducer2.default,
<<<<<<< HEAD
    todoappmap: _todoReducer2.default,
    trainingappmap: _trainingReducer2.default,
=======
    // todoappmap: todoAppReducer,
    todoappmap: _todoReducer2.default,
    trainingappmap: _trainingReducer2.default,
    // user: userReducer,
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;