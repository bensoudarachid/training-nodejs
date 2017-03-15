'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _appcomponent = require('../app/appcomponent');

var _appcomponent2 = _interopRequireDefault(_appcomponent);

var _registerconfirm = require('../scenes/registration/registerconfirm');

var _registerconfirm2 = _interopRequireDefault(_registerconfirm);

var _home = require('../scenes/home/home');

var _home2 = _interopRequireDefault(_home);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Route, IndexRoute, Link, hashHistory, DefaultRoute,NotFoundRoute } from 'react-router'
var ReactRouter = require('react-router');

// import TodoApp from '../scenes/todo/todoapp'
// import TrainingApp from '../scenes/training/trainingapp'
// import TrainingEdit from '../scenes/training/admin/trainingedit'
// import Register from '../scenes/registration/register'


// import UserApp from '../components/userapp'
// import AboutComponent from '../components/about'

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

// const routes = {
//   path:'',
//   component: AppComponent,
//   getChildRoutes: (location, callback) => {
//     callback(null, childRoutes)
//   }   
// }

// const trainingChildRoutes = [
//   {
//     path: '/item/:id',
//     component: TrainingEdit
//   }
// ]
// const childRoutes =[
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/todos(/:param)',
//     component: TodoApp
//   },
//   {
//     path: '/trainings',//(/:param)
//     component: TrainingApp,
//     childRoutes: trainingChildRoutes
//     // getChildRoutes: function (state, cb) {
//     //   console.log('+++++++++++++++++calling trainings get child routes'+trainingChildRoutes)
//     //   cb(null, [
//     //     trainingChildRoutes
//     //   ])
//     // }
//   },
//   {
//     path: '/users(/:name)',
//     component: Users
//   },    
//     // {
//     //   path: '/about(/:name)',
//     //   component: AboutComponent
//     // },
//   {
//     path: '/register(/:name)',
//     component: Register
//   },
//   {
//     path: '/registerconfirm(/:username)',
//     component: RegisterConfirmation
//   },
//   {
//     path: '*',
//     component: NotFound
//   }
// ]


// const routes = {
//   path: '',
//   component: AppComponent,
//   childRoutes: childRoutes
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
  { path: '/', component: _appcomponent2.default, getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [//require('./routes/todoroutes.js').default,
        _react2.default.createElement(Route, { path: 'todos', component: require('../scenes/todo/todoapp').default }), _react2.default.createElement(Route, { path: 'register', component: require('../scenes/registration/register').default }), require('./routes/trainingroutes.js').default, _react2.default.createElement(Route, { path: '*', component: NotFound })]);
      });
    } },
  _react2.default.createElement(IndexRoute, { component: _home2.default })
);

// const routes = (
//       <Route path="/" component={AppComponent}>
//         <IndexRoute component={Home} />
//         <Route path="register" component={Register} />
//         <Route path="trainings" getChildRoutes={(location, cb) => {cb(null, [require('./routes/trainingroutes.js').default])}}>
//           <IndexRoute component={TrainingApp}/>
//         </Route>
//         <Route path="todos" component={TodoApp} />
//         <Route path='*' component={NotFound} />
//       </Route>
// )


// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='trainings'
//           getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}} 
//           getChildRoutes={(location, cb) =>
//              {cb(null, [require('./routes/trainingroutes.js').default])}
//           }
//         />        
//         <Route path='*' component={NotFound} />
//       </Route>
// )


// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='trainings' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}        
//   getChildRoutes={(location, cb) => {
//     require.ensure([], (require) => {
//       cb(null, [
//         require('./routes/trainingroutes')
//       ])
//     })
//   }}
//         />        
//         <Route path='*' component={NotFound} />
//       </Route>
// )

// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path="trainings">
//           <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}/>
//           <Route path="item/:id" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/admin/trainingedit').default)})}}/>
//         </Route>        
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='*' component={NotFound} />
//       </Route>
// )

// const routes = (
//       <Route path="/" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../app/appcomponent').default)})}}>
//         <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/home/home').default)})}}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path="trainings">
//           <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}/>
//           <Route path="item/:id" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/admin/trainingedit').default)})}}/>
//         </Route>        
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='*' component={NotFound} />
//       </Route>
// )


exports.routes = routes;