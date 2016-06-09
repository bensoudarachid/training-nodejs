import TodoApp from '../components/todoapp'
import UserApp from '../components/userapp'
import AboutComponent from '../components/about'
import AppComponent from '../components/appcomponent'

import React from 'react'

// const Title = (props) => (
//       <div>
//         <h2>Welcome to my App</h2>
//         { this.props.children }
//       </div>
// )


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
    }
  ]
}

export { routes };