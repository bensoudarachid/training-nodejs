import React from 'react';
import { Route, IndexRoute, Link, hashHistory, DefaultRoute, NotFoundRoute } from 'react-router';

// import TodoApp from '../../scenes/todo/todoapp'

const todoRoutes =
// <Route path="todos" component={TodoApp} />
React.createElement(Route, { path: 'todos', component: require('../../scenes/todo/todoapp').default });
// const trainingRoutes = {
//   path: 'item/:id',
//   component: TrainingEdit
// } 

export default todoRoutes;
// <Route path="trainings">
//   <IndexRoute component={TrainingApp}/>
//   <Route path="item/:id" component={TrainingEdit} />
// </Route>