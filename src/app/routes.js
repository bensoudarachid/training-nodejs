// import AboutComponent from '../components/about'
import AppComponent from '../app/appcomponent'
import TodoApp from '../scenes/todo/todoapp'
import TrainingApp from '../scenes/training/trainingapp'
// import UserApp from '../components/userapp'
import Register from '../scenes/registration/register'
import RegisterConfirmation from '../scenes/registration/registerconfirm'
import Home from '../scenes/home/home'
import React from 'react'
// import { Route, IndexRoute, Link, hashHistory, DefaultRoute,NotFoundRoute } from 'react-router'
var ReactRouter = require('react-router')
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var Link = ReactRouter.Link
var hashHistory = ReactRouter.hashHistory
var DefaultRoute = ReactRouter.DefaultRoute
var NotFoundRoute = ReactRouter.NotFoundRoute

// const Title = (props) => (
//       <div>
//         <h2>Welcome to my App</h2>
//         { this.props.children }
//       </div>
// )

// import configureStore from '../redux/store'
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
// const Users = () => (
//   <h3>Howdy.</h3>
// );

const Users = ( { params, location } ) => (
  <h3>Howdy Wa fin { params.name }! You like Food: { location.query.food }.</h3>
)
// const Home = () => (
//   <div>
//   <h3>Welcome home!!</h3>
//   <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
//   </div>
// )
// const store = configureStore(initialState)
const NotFound = () => ( <h1>404.... This page is not found!</h1> )

const routesold = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos(/:param)',
      component: TodoApp
    },
    {
      path: '/trainings(/:param)',
      component: TrainingApp
    },
    {
      path: '/users(/:name)',
      component: Users
    },    
    // {
    //   path: '/about(/:name)',
    //   component: AboutComponent
    // },
    {
      path: '/register(/:name)',
      component: Register
    },
    {
      path: '/registerconfirm(/:username)',
      component: RegisterConfirmation
    },
    {
      path: '*',
      component: NotFound
    }
  ]
}

      // <Route name="training" path="training/:trainingid" handler={TrainingApp} />
      // <Route name="traininglist" path="/trainings" handler={TrainingApp} />
      // <Redirect from="company" to="about" />
const routes = (
  <Route handler={AppComponent} path="/">
    <DefaultRoute handler={Home} />
    <Route name="register" handler={Register} />
    <Route name="/registerconfirm(/:username" handler={RegisterConfirmation} />
    <Route name="todos" handler={TodoApp} />
    <Route name="trainings" handler={TrainingApp}>
    </Route>
    <NotFoundRoute handler={NotFound}/>
    
  </Route>
)

export { routes }