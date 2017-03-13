'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _home = require('../scenes/home/home');

var _home2 = _interopRequireDefault(_home);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Route, IndexRoute, Link, hashHistory, DefaultRoute,NotFoundRoute } from 'react-router'
// import AboutComponent from '../components/about'
// import AppComponent from '../app/appcomponent'
// import TodoApp from '../scenes/todo/todoapp'
// import TrainingApp from '../scenes/training/trainingapp'
// import TrainingEdit from '../scenes/training/admin/trainingedit'
// import Register from '../scenes/registration/register'
// import UserApp from '../components/userapp'
// import RegisterConfirmation from '../scenes/registration/registerconfirm'


var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};

var Users = function Users(_ref) {
  var params = _ref.params,
      location = _ref.location;
  return _react2.default.createElement(
    'h3',
    null,
    'Howdy Wa fin ',
    params.name,
    '! You like Food: ',
    location.query.food,
    '.'
  );
};
var NotFound = function NotFound() {
  return _react2.default.createElement(
    'h1',
    null,
    '404.... This page is not found!'
  );
};

// const routesold = {
//   path: '',
//   component: AppComponent,
//   childRoutes: [
//     {
//       path: '/',
//       component: Home
//     },
//     {
//       path: '/todos(/:param)',
//       component: TodoApp
//     },
//     {
//       path: '/trainings(/:param)',
//       component: TrainingApp
//     },
//     {
//       path: '/users(/:name)',
//       component: Users
//     },    
//     // {
//     //   path: '/about(/:name)',
//     //   component: AboutComponent
//     // },
//     {
//       path: '/register(/:name)',
//       component: Register
//     },
//     {
//       path: '/registerconfirm(/:username)',
//       component: RegisterConfirmation
//     },
//     {
//       path: '*',
//       component: NotFound
//     }
//   ]
// }

// const routes = (
//       <Route path="/" component={AppComponent}>
//         <IndexRoute component={Home} />
//         <Route path="register" component={Register} />
//         <Route path="trainings">
//           <IndexRoute component={TrainingApp}/>
//           <Route path="item/:id" component={TrainingEdit} />
//         </Route>

//         <Route path="todos" component={TodoApp} />
//         <Route path='*' component={NotFound} />
//       </Route>
// )

var routes = _react2.default.createElement(
  Route,
  { path: '/', getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('../app/appcomponent').default);
      });
    } },
  _react2.default.createElement(IndexRoute, { getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('../scenes/home/home').default);
      });
    } }),
  _react2.default.createElement(Route, { path: 'register', getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('../scenes/registration/register').default);
      });
    } }),
  _react2.default.createElement(
    Route,
    { path: 'trainings' },
    _react2.default.createElement(IndexRoute, { getComponent: function getComponent(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('../scenes/training/trainingapp').default);
        });
      } }),
    _react2.default.createElement(Route, { path: 'item/:id', getComponent: function getComponent(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('../scenes/training/admin/trainingedit').default);
        });
      } })
  ),
  _react2.default.createElement(Route, { path: 'todos', getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('../scenes/todo/todoapp').default);
      });
    } }),
  _react2.default.createElement(Route, { path: '*', component: NotFound })
);

exports.routes = routes;