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

const Users = ({params, location}) => (
    <h3>Howdy Wa fin {params.name}! You like Food: {location.query.food}.</h3>
)
const NotFound = () => ( <h1>404.... This page is not found!</h1> )

const routes = (
    <Route path="/" component={AppComponent}
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
    </Route>
)

export {routes}