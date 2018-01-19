import AppComponent from '../app/appcomponent'

import TrainingApp from '../scenes/training/public/trainingapp'
import Home from '../scenes/home/home'
import React from 'react'
var ReactRouter = require('react-router')
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var IndexRedirect = ReactRouter.IndexRedirect

var Link = ReactRouter.Link
var hashHistory = ReactRouter.hashHistory
var DefaultRoute = ReactRouter.DefaultRoute
var NotFoundRoute = ReactRouter.NotFoundRoute

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

<<<<<<< HEAD
<<<<<<< HEAD
const Users = ({params, location}) => (
    <h3>Howdy Wa fin {params.name}! You like Food: {location.query.food}.</h3>
=======
const Users = ({ params, location }) => (
    <h3>Howdy Wa fin { params.name }! You like Food: { location.query.food }.</h3>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
const Users = ({params, location}) => (
    <h3>Howdy Wa fin {params.name}! You like Food: {location.query.food}.</h3>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
)
const NotFound = () => ( <h1>404.... This page is not found!</h1> )

const routes = (
    <Route path="/" component={AppComponent}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
           getChildRoutes={(location, cb) => {
               cb(null, [

                   <Route path="register" component={require('../scenes/registration/register').default}/>,
                   require('./routes/adminroutes.js').default,
                   <Route path='trainings' component={TrainingApp}/>,
                   <Route path='*' component={NotFound}/>
               ])
           }}>
        >
        <IndexRoute component={Home}/>
<<<<<<< HEAD
=======
        getChildRoutes={(location, cb) => {
            cb(null, [

                <Route path="register" component={require('../scenes/registration/register').default}/>,
                require('./routes/adminroutes.js').default,
                <Route path='trainings' component={TrainingApp}/>,
                <Route path='*' component={NotFound}/>
            ])
        }}>
    >
        <IndexRoute component={Home} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    </Route>
)

export {routes}