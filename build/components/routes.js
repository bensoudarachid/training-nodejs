'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _about = require('../components/about');

var _about2 = _interopRequireDefault(_about);

var _appcomponent = require('../components/appcomponent');

var _appcomponent2 = _interopRequireDefault(_appcomponent);

var _todoapp = require('../components/todoapp');

var _todoapp2 = _interopRequireDefault(_todoapp);

var _userapp = require('../components/userapp');

var _userapp2 = _interopRequireDefault(_userapp);

var _register = require('../components/register');

var _register2 = _interopRequireDefault(_register);

var _registerconfirm = require('../components/registerconfirm');

var _registerconfirm2 = _interopRequireDefault(_registerconfirm);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Title = (props) => (
//       <div>
//         <h2>Welcome to my App</h2>
//         { this.props.children }
//       </div>
// )

// import configureStore from '../redux/store'
// let initialState = {
//   todos: [{
//     id: 0,
//     completed: false,
//     text: 'Initial todo for demo purposes'
//   }],
//   user: {
//     username: 'kurt',
//     id: 13
//   }
// }
// const Users = () => (
//   <h3>Howdy.</h3>
// );

var Users = function Users(_ref) {
  var params = _ref.params;
  var location = _ref.location;
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
// const Home = () => (
//   <div>
//   <h3>Welcome home!!</h3>
//   <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
//   </div>
// )
// const store = configureStore(initialState)
var NotFound = function NotFound() {
  return _react2.default.createElement(
    'h1',
    null,
    '404.... This page is not found!'
  );
};

var routes = {
  path: '',
  component: _appcomponent2.default,
  childRoutes: [{
    path: '/',
    component: _home2.default
  }, {
    path: '/todos(/:param)',
    component: _todoapp2.default
  }, {
    path: '/users(/:name)',
    component: Users
  }, {
    path: '/about(/:name)',
    component: _about2.default
  }, {
    path: '/register(/:name)',
    component: _register2.default
  }, {
    path: '/registerconfirm(/:username)',
    component: _registerconfirm2.default
  }, {
    path: '/reactor/',
    component: _home2.default
  }, {
    path: '/reactor/todos(/:param)',
    component: _todoapp2.default
  }, {
    path: '/reactor/users(/:name)',
    component: Users
  }, {
    path: '/reactor/about(/:name)',
    component: _about2.default
  }, {
    path: '/reactor/register(/:name)',
    component: _register2.default
  }, {
    path: '/reactor/registerconfirm(/:username)',
    component: _registerconfirm2.default
  }, {
    path: '*',
    component: NotFound
  }]
};

exports.routes = routes;