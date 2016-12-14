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

var _actions = require('../redux/actions');

var _actions2 = _interopRequireDefault(_actions);

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap/dist/js/bootstrap.js');

require('material-design-lite/material.css');

require('material-design-lite/material.js');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('../components/routes');

var _reducers = require('../redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var componentHandler = require('exports?componentHandler!material-design-lite/dist/material')

// import { FetchData, reducer as fetching } from 'redux-fetch-data';

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
// import AppComponent from '../components/appcomponent';

// import configureStore from '../redux/store'

// import { createHistory, useBasename } from 'history'

// var React = require('react');
(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

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
})($);
// let message = 'hello from entry baby'+routes[0].path;
// console.log(message);


// ReactDom.render(
//   <App />,
//   document.getElementById('root')
// );

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
//let store = configureStore(initialState)


// import '../../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../../node_modules/materialize-css/dist/css/materialize.min.css'
// import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin()

// import '../styles/default.scss'

// import 'jquery'
// import $ from 'jquery'
// global.jQuery = require('jquery')
// require('material-design-lite/dist//material.css')
// require('material-design-lite/dist/material.js')

// var ReactDom = require('react-dom');
var initialState = window.__REDUX_STATE__;
var store = '';
if (process.env.NODE_ENV === 'production') store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));else {
  var logger = (0, _reduxLogger2.default)();
  store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
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

// $(window).scroll(function() {

//   if ($('.navbar').offset().top > 10) {
//     console.log('add collapse')
//     $('#bs-example-navbar-collapse-1').addClass('collapse')
//   } else {
//     console.log('remove collapse')
//     $('#bs-example-navbar-collapse-1').removeClass('collapse')
//   }
// })

// $(document).ready(function() { 
//   $('body').click(function(event) {
//         // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
//     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
//       $('.navbar-collapse').collapse('toggle')
//     }
//   })
// })

// store={store}
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { routes: _routes.routes, history: mybrowserHistory })
), document.getElementById('root'));
// <Router routes={routes} history={browserHistory} />
// <Router children={routes} history={browserHistory} />
// <AppComponent />
//  	<App />

// <Provider store={store}>
//  <App />
// </Provider>,
//