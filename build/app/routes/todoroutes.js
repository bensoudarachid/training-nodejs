'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoRoutes = _react2.default.createElement(_reactRouter.Route, { path: 'todos', component: require('../../scenes/todo/todoapp').default });

exports.default = todoRoutes;