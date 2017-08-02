import React from 'react'
import {Route, IndexRoute, Link, hashHistory, DefaultRoute, NotFoundRoute} from 'react-router'

// import TodoApp from '../../scenes/todo/todoapp'

const todoRoutes = (
    // <Route path="todos" component={TodoApp} />
<<<<<<< HEAD
    <Route path="todos" component={require('../../scenes/todo/todoapp').default}/>
=======
    <Route path="todos" component={require('../../scenes/todo/todoapp').default} />
>>>>>>> 6e3ff02... webstorm big changes crash
)
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

export default todoRoutes
// <Route path="trainings">
//   <IndexRoute component={TrainingApp}/>
//   <Route path="item/:id" component={TrainingEdit} />
// </Route>
