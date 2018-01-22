import React from 'react'
import ReactDom from 'react-dom'
import Immutable from 'immutable'
import {browserHistory} from 'react-router'

var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var NotFoundRoute = ReactRouter.NotFoundRoute

import {createHistory} from 'history'
import {useRouterHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import actions from '../services/actions'
import 'mdl-selectfield/dist/mdl-selectfield.css'
import 'mdl-selectfield/dist/mdl-selectfield.js'
import '../styles/animate.css'
import './app.scss'
import {syncHistoryWithStore} from 'react-router-redux'
import {routes} from './routes'
import rootReducer from '../services/rootreducer'
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

const NotFound = () => ( <h1>404.... Page not found.</h1> )

var initialState = JSON.parse(JSON.stringify(window.__REDUX_STATE__))
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = Immutable.fromJS(initialState[key])
    })

if( initialState.trainingappmap.get('edittrainingevents') ){
    initialState.trainingappmap = initialState.trainingappmap.set('edittrainingevents',Immutable.List(initialState.trainingappmap.get('edittrainingevents').toJS()) )
}

var store = ''
if (process.env.NODE_ENV === 'production')
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
else {
    const logger = createLogger()
    store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}

const mybrowserHistory = useRouterHistory(createHistory)({
    basename: actions.appbasename
})

syncHistoryWithStore(mybrowserHistory, store)
window.routerHistory = mybrowserHistory

$('.ellipsis').ellipsis()

ReactDom.render(
    <Provider store={store}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Router routes={routes} history={mybrowserHistory}/>
=======
        <Router routes={routes} history={mybrowserHistory} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        <Router routes={routes} history={mybrowserHistory}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    </Provider>,
    document.getElementById('root')
)
<<<<<<< HEAD

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
<<<<<<< HEAD
// 
=======
//
>>>>>>> 6e3ff02... webstorm big changes crash

// <Route handler={AppComponent} path="/">
//   <DefaultRoute handler={Home} />
//   <Route name="register" handler={Register} />
//   <Route name="/registerconfirm(/:username" handler={RegisterConfirmation} />
//   <Route name="todos" handler={TodoApp} />
//   <Route name="trainings" handler={TrainingApp}>
//   </Route>
<<<<<<< HEAD
//   <NotFoundRoute handler={NotFound}/>        
=======
//   <NotFoundRoute handler={NotFound}/>
>>>>>>> 6e3ff02... webstorm big changes crash
// </Route>
=======
>>>>>>> b06ef94... clean code, remove comments
