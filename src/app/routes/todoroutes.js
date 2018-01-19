import React from 'react'
import {Route, IndexRoute, Link, hashHistory, DefaultRoute, NotFoundRoute} from 'react-router'

const todoRoutes = (
<<<<<<< HEAD
    // <Route path="todos" component={TodoApp} />
<<<<<<< HEAD
<<<<<<< HEAD
    <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>
=======
    <Route path="todos" component={require('../../scenes/todo/todoapp').default} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
    <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
=======
        <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>
>>>>>>> b06ef94... clean code, remove comments
)

export default todoRoutes
