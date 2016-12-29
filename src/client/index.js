import React from 'react'
// var React = require('react');
import ReactDom from 'react-dom'
// var ReactDom = require('react-dom');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import { createHistory, useBasename } from 'history'
import { createHistory } from 'history'
import { useRouterHistory } from 'react-router'
// import configureStore from '../redux/store'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import actions from '../redux/actions'
// import 'jquery'
// import $ from 'jquery'
// global.jQuery = require('jquery')
// require('material-design-lite/dist//material.css')
// require('material-design-lite/dist/material.js')
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'material-design-lite/material.css'
import 'material-design-lite/material.js'

// import '../../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../../node_modules/materialize-css/dist/css/materialize.min.css'
// import injectTapEventPlugin from 'react-tap-event-plugin'
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin()

// import '../styles/default.scss'

import { syncHistoryWithStore } from 'react-router-redux'
// import { FetchData, reducer as fetching } from 'redux-fetch-data';

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
// import AppComponent from '../components/appcomponent';
import { routes } from '../components/routes'
import rootReducer from '../redux/reducers'

// var componentHandler = require('exports?componentHandler!material-design-lite/dist/material')

(function($) {
  
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

  $.fn.visible = function(partial) {
    
    var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top+100,
      _bottom       = _top + $t.height()-300,
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop))

  }
  $.fn.load = function(partial) {
    
    var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top-700,
      _bottom       = _top + $t.height()+1200,
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop))

  }
    
})($)
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


const initialState = window.__REDUX_STATE__ 
var store = ''
if( process.env.NODE_ENV === 'production' )
  store = createStore(rootReducer, initialState, applyMiddleware(thunk))
else{
  const logger = createLogger()
  store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}

// const mybrowserHistory = browserHistory
// const mybrowserHistory = useBasename(createHistory)({
//   basename: actions.appbasename
// })
const mybrowserHistory = useRouterHistory(createHistory)({
  basename: actions.appbasename
})

syncHistoryWithStore(mybrowserHistory, store)
window.routerHistory = mybrowserHistory


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
ReactDom.render(
  <Provider store={store}>
    <Router routes={routes} history={mybrowserHistory} />
  </Provider>,
  document.getElementById('root')
)
	// <Router routes={routes} history={browserHistory} />
// <Router children={routes} history={browserHistory} />
// <AppComponent />
//  	<App />

  // <Provider store={store}>
//  <App />
  // </Provider>,
  // 

