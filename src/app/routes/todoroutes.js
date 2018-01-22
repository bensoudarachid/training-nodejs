import React from 'react'
import {Route, IndexRoute, Link, hashHistory, DefaultRoute, NotFoundRoute} from 'react-router'

const todoRoutes = (
        <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>
)

export default todoRoutes
