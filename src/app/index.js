import React from 'react'

// require('../../node_modules/babel-polyfill/dist/polyfill.js')
// var React = require('react');
import ReactDom from 'react-dom'
import Immutable from 'immutable'
// var ReactDom = require('react-dom');
// import { Router, Route, Link, IndexRoute,NotFoundRoute, hashHistory, browserHistory } from 'react-router'
import {browserHistory} from 'react-router'

var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var NotFoundRoute = ReactRouter.NotFoundRoute

// import { createHistory, useBasename } from 'history'
import {createHistory} from 'history'
import {useRouterHistory} from 'react-router'
// import configureStore from '../redux/store'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import actions from '../services/actions'
// import 'jquery'
// import $ from 'jquery'
// global.jQuery = require('jquery')
// require('material-design-lite/dist/material.css')
// require('material-design-lite/dist/material.js')

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import 'mdl-selectfield/dist/mdl-selectfield.css'
import 'mdl-selectfield/dist/mdl-selectfield.js'
// import 'material-design-lite/src/material-design-lite.scss'
// import 'material-design-lite/src/mdlComponentHandler.js'

// import AppComponent from '../app/appcomponent'
// import TodoApp from '../scenes/todo/todoapp'
// import TrainingApp from '../scenes/training/trainingapp'
// import UserApp from '../components/userapp'
// import Register from '../scenes/registration/register'
// import RegisterConfirmation from '../scenes/registration/registerconfirm'
// import Home from '../scenes/home/home'

import '../styles/animate.css'
// import '../styles/default.scss'

import './app.scss'
// import 'mdl-selectfield/dist/mdl-selectfield.css'
// import '../styles/_variables.scss'
//import 'material-design-lite/src/material-design-lite.scss'
//import '../styles/material-design-lite.scss'
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

import {syncHistoryWithStore} from 'react-router-redux'
// import { FetchData, reducer as fetching } from 'redux-fetch-data';

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
// import AppComponent from '../components/appcomponent';

import {routes} from './routes'
import rootReducer from '../services/rootreducer'

// var componentHandler = require('exports?componentHandler!material-design-lite/dist/material')


// (function(open) {
//     XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
//         this.addEventListener("readystatechange", function() {
//             console.log('---------------------->hello=man')
//
//             if (this.readyState == 4)
//             {
//                 console.log(this.status);
//             }
//         }, false);
//         console.log('---------------------->hello=man 2')
//         open.call(this, method, url, async, user, pass);
//         // this.setRequestHeader("Authorization", "Token 123")
//     };
// })(XMLHttpRequest.prototype.open);

// (function () {
//     var originalFetch = fetch
//     fetch = function() {
//         return originalFetch.apply(this, arguments).then(
//             function(data) {
//                 console.log('---------------------->hello=man 2')
//                 return data
//         })
//     }
// })()

// fetch = (function (origFetch) {
//     return function myFetch(req) {
//         console.log('---------------------->hello=man 2')
//         var result = origFetch.apply(this, arguments)
//         result.then(console.log('---------------------->hello=man 3'))
//         return result
//     }
// })(fetch)



(function ($) {

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top + 100,
            _bottom = _top + $t.height() - 300,
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop))

    }
    $.fn.load = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top - 700,
            _bottom = _top + $t.height() + 1200,
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop))

    }
    $.fn.ellipsis = function () {
        return this.each(function () {
            var el = $(this)

            if (el.css('overflow') == 'hidden') {
                var text = el.html()
                var multiline = el.hasClass('multiline')
                var t = $(this.cloneNode(true))
                    .hide()
                    .css('position', 'absolute')
                    .css('overflow', 'visible')
                    .width(multiline ? el.width() : 'auto')
                    .height(multiline ? 'auto' : el.height())


                el.after(t)

                function height() {
                    return t.height() > el.height()
                }

                function width() {
                    return t.width() > el.width()
                }

                var func = multiline ? height : width

                while (text.length > 0 && func()) {
                    text = text.substr(0, text.length - 1)
                    t.html(text + '...')
                }

                el.html(t.html())
                t.remove()
            }
        })
    }

})($)

const NotFound = () => ( <h1>404.... This page is not found!</h1> )
// const Training = () => {
//   console.log('here i am')
//   return(
//         <h1>Training.... This page is under construction!</h1>
//   )
// }

// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh-----initialState='+require('util').inspect(window.__REDUX_STATE__, false, null))
var initialState = JSON.parse(JSON.stringify(window.__REDUX_STATE__)) //Stringify and parse again with our polyfill JSON parser
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = Immutable.fromJS(initialState[key])
    })

if( initialState.trainingappmap.get('edittrainingevents') ){
    initialState.trainingappmap = initialState.trainingappmap.set('edittrainingevents',Immutable.List(initialState.trainingappmap.get('edittrainingevents').toJS()) )
}
//console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh-----initialState='+require('util').inspect(initialState, false, null))



var store = ''
if (process.env.NODE_ENV === 'production')
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
else {
    const logger = createLogger()
    store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}
// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh-----after create Store State='+require('util').inspect(store.getState(), false, null))

// const mybrowserHistory = browserHistory
// const mybrowserHistory = useBasename(createHistory)({
//   basename: actions.appbasename
// })
const mybrowserHistory = useRouterHistory(createHistory)({
    basename: actions.appbasename
})

syncHistoryWithStore(mybrowserHistory, store)
window.routerHistory = mybrowserHistory

$('.ellipsis').ellipsis()


// <Router routes={routes} history={mybrowserHistory} />


ReactDom.render(
    <Provider store={store}>
        <Router routes={routes} history={mybrowserHistory}/>
    </Provider>,
    document.getElementById('root')
)

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
