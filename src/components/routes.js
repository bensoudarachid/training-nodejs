import AboutComponent from '../components/about'
import AppComponent from '../components/appcomponent'
import TodoApp from '../components/todoapp'
import UserApp from '../components/userapp'
import Register from '../components/register'
import RegisterConfirmation from '../components/registerconfirm'
import Home from './home'
import React from 'react'

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

const routes = {
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
      path: '/users(/:name)',
      component: Users
    },    
    {
      path: '/about(/:name)',
      component: AboutComponent
    },
    {
      path: '/register(/:name)',
      component: Register
    },
    {
      path: '/registerconfirm(/:username)',
      component: RegisterConfirmation
    },
    
    {
      path: '/reactor/',
      component: Home
    },
    {
      path: '/reactor/todos(/:param)',
      component: TodoApp
    },
    {
      path: '/reactor/users(/:name)',
      component: Users
    },    
    {
      path: '/reactor/about(/:name)',
      component: AboutComponent
    },
    {
      path: '/reactor/register(/:name)',
      component: Register
    },
    {
      path: '/reactor/registerconfirm(/:username)',
      component: RegisterConfirmation
    },

    {
      path: '*',
      component: NotFound
    }
  ]
}

export { routes }