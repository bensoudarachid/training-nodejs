import AboutComponent from '../components/about'
import AppComponent from '../components/appcomponent'
import TodoApp from '../components/todoapp'
import UserApp from '../components/userapp'

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

// const store = configureStore(initialState)
const NotFound = () => ( <h1>404.. This page is not found!</h1> )

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: TodoApp
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '*',
      component: NotFound
    }
  ]
}

export { routes };