'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _history = require('history');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _actions = require('../services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _appcomponent = require('../app/appcomponent');

var _appcomponent2 = _interopRequireDefault(_appcomponent);

var _todoapp = require('../scenes/todo/todoapp');

var _todoapp2 = _interopRequireDefault(_todoapp);

var _trainingapp = require('../scenes/training/trainingapp');

var _trainingapp2 = _interopRequireDefault(_trainingapp);

var _register = require('../scenes/registration/register');

var _register2 = _interopRequireDefault(_register);

var _registerconfirm = require('../scenes/registration/registerconfirm');

var _registerconfirm2 = _interopRequireDefault(_registerconfirm);

var _home = require('../scenes/home/home');

var _home2 = _interopRequireDefault(_home);

require('../styles/animate.css');

require('./app.scss');

require('material-design-lite/src/_variables.scss');

require('material-design-lite/src/material-design-lite.scss');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./routes');

var _rootreducer = require('../services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var React = require('react');
var ReactRouter = require('react-router');
// var ReactDom = require('react-dom');
// import { Router, Route, Link, IndexRoute,NotFoundRoute, hashHistory, browserHistory } from 'react-router'

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

// import { createHistory, useBasename } from 'history'

// import configureStore from '../redux/store'

// import 'jquery'
// import $ from 'jquery'
// global.jQuery = require('jquery')
// require('material-design-lite/dist//material.css')
// require('material-design-lite/dist/material.js')

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'material-design-lite/dist/material.brown-blue.min.css'
// import 'material-design-lite/dist/material.js'
// import 'material-design-lite/src/material-design-lite.scss'
// import 'material-design-lite/src/mdlComponentHandler.js'

// import UserApp from '../components/userapp'

// import '../styles/default.scss'

// import 'material-design-lite/dist/material.css'
// import 'material-design-lite/dist/material.blue-pink.min.css'
// import 'material-design-lite/dist/material.blue-red.min.css'
// import '../../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../../node_modules/materialize-css/dist/css/materialize.min.css'
// import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin()

// import '../styles/default.scss'

// import { FetchData, reducer as fetching } from 'redux-fetch-data';

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
// import AppComponent from '../components/appcomponent';


// var componentHandler = require('exports?componentHandler!material-design-lite/dist/material')

(function ($) {

  $.fn.visible = function (partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top + 100,
        _bottom = _top + $t.height() - 300,
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
  $.fn.load = function (partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top - 700,
        _bottom = _top + $t.height() + 1200,
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
  $.fn.ellipsis = function () {
    return this.each(function () {
      var el = $(this);

      if (el.css('overflow') == 'hidden') {
        var height = function height() {
          return t.height() > el.height();
        };

        var width = function width() {
          return t.width() > el.width();
        };

        var text = el.html();
        var multiline = el.hasClass('multiline');
        var t = $(this.cloneNode(true)).hide().css('position', 'absolute').css('overflow', 'visible').width(multiline ? el.width() : 'auto').height(multiline ? 'auto' : el.height());

        el.after(t);

        var func = multiline ? height : width;

        while (text.length > 0 && func()) {
          text = text.substr(0, text.length - 1);
          t.html(text + '...');
        }

        el.html(t.html());
        t.remove();
      }
    });
  };
})($);

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'h1',
    null,
    '404.... This page is not found!'
  );
};
// const Training = () => {
//   console.log('here i am')
//   return(
//         <h1>Training.... This page is under construction!</h1>
//   )
// }

var initialState = window.__REDUX_STATE__;
var store = '';
if (process.env.NODE_ENV === 'production') store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));else {
  var logger = (0, _reduxLogger2.default)();
  store = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
}

// const mybrowserHistory = browserHistory
// const mybrowserHistory = useBasename(createHistory)({
//   basename: actions.appbasename
// })
var mybrowserHistory = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
  basename: _actions2.default.appbasename
});

(0, _reactRouterRedux.syncHistoryWithStore)(mybrowserHistory, store);
window.routerHistory = mybrowserHistory;

$('.ellipsis').ellipsis();

// <Router routes={routes} history={mybrowserHistory} />


_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(Router, { routes: _routes.routes, history: mybrowserHistory })
), document.getElementById('root'));

// ReactDom.render(
//   <Provider store={store}>
//     <Router history={mybrowserHistory} >
//       <Route path="/" component={AppComponent}>
//         <IndexRoute component={Home} />
//         <Route path="register" component={Register} />
//         <Route path="trainings">
//           <IndexRoute component={TrainingApp}/>
//           <Route path="item/:id" component={Training} />
//         </Route>
//         <Route path="todos" component={TodoApp} />
//         <Route path='*' component={NotFound} />
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

// <Router routes={routes} history={browserHistory} />
// <Router children={routes} history={browserHistory} />
// <AppComponent />
//  	<App />

// <Provider store={store}>
//  <App />
// </Provider>,
// 

// <Route handler={AppComponent} path="/">
//   <DefaultRoute handler={Home} />
//   <Route name="register" handler={Register} />
//   <Route name="/registerconfirm(/:username" handler={RegisterConfirmation} />
//   <Route name="todos" handler={TodoApp} />
//   <Route name="trainings" handler={TrainingApp}>
//   </Route>
//   <NotFoundRoute handler={NotFound}/>        
// </Route>