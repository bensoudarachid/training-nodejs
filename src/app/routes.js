// import AboutComponent from '../components/about'
import AppComponent from '../app/appcomponent'
import TodoApp from '../scenes/todo/todoapp'
import TrainingApp from '../scenes/training/trainingapp'
import TrainingEdit from '../scenes/training/admin/trainingedit'
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
// const LoginInProgress = () => ( <h1>Login in progress</h1> )
// const Training = () => {
//   console.log('here i am')
//   return(
//         <h1>Training.... This page is under construction!</h1>
//   )
// }

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
//        <Route path="trainings">
//          <IndexRoute component={TrainingApp}/>
          // <Route path="item/:id" component={Training} />
        // </Route>

      // <Route name="training" path="training/:trainingid" handler={TrainingApp} />
      // <Route name="traininglist" path="/trainings" handler={TrainingApp} />
      // <Redirect from="company" to="about" />
//        <Route path="logininprogress" component={LoginInProgress} />
const routes = (
      <Route path="/" component={AppComponent}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="trainings">
          <IndexRoute component={TrainingApp}/>
          <Route path="item/:id" component={TrainingEdit} />
        </Route>
        
        <Route path="todos" component={TodoApp} />
        <Route path='*' component={NotFound} />
      </Route>
)

export { routes }