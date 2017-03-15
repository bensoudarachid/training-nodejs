'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TodoApp from '../../scenes/todo/todoapp'

var todoRoutes =
// <Route path="todos" component={TodoApp} />
_react2.default.createElement(_reactRouter.Route, { path: 'todos', component: require('../../scenes/todo/todoapp').default });
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

exports.default = todoRoutes;
// <Route path="trainings">
//   <IndexRoute component={TrainingApp}/>
//   <Route path="item/:id" component={TrainingEdit} />
// </Route>