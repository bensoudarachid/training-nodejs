import AppComponent from '../app/appcomponent'

// import TodoApp from '../scenes/todo/todoapp'
// import TrainingApp from '../scenes/training/trainingapp'
// import TrainingEdit from '../scenes/training/admin/trainingedit'
// import Register from '../scenes/registration/register'


// import UserApp from '../components/userapp'
// import AboutComponent from '../components/about'
import RegisterConfirmation from '../scenes/registration/registerconfirm'


import Home from '../scenes/home/home'
import React from 'react'
// import { Route, IndexRoute, Link, hashHistory, DefaultRoute,NotFoundRoute } from 'react-router'
var ReactRouter = require('react-router')
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var IndexRedirect = ReactRouter.IndexRedirect

var Link = ReactRouter.Link
var hashHistory = ReactRouter.hashHistory
var DefaultRoute = ReactRouter.DefaultRoute
var NotFoundRoute = ReactRouter.NotFoundRoute

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)


const Users = ( { params, location } ) => (
  <h3>Howdy Wa fin { params.name }! You like Food: { location.query.food }.</h3>
)
const NotFound = () => ( <h1>404.... This page is not found!</h1> )


// const routes = {
//   path:'',
//   component: AppComponent,
//   getChildRoutes: (location, callback) => {
//     callback(null, childRoutes)
//   }   
// }

// const trainingChildRoutes = [
//   {
//     path: '/item/:id',
//     component: TrainingEdit
//   }
// ]
// const childRoutes =[
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/todos(/:param)',
//     component: TodoApp
//   },
//   {
//     path: '/trainings',//(/:param)
//     component: TrainingApp,
//     childRoutes: trainingChildRoutes
//     // getChildRoutes: function (state, cb) {
//     //   console.log('+++++++++++++++++calling trainings get child routes'+trainingChildRoutes)
//     //   cb(null, [
//     //     trainingChildRoutes
//     //   ])
//     // }
//   },
//   {
//     path: '/users(/:name)',
//     component: Users
//   },    
//     // {
//     //   path: '/about(/:name)',
//     //   component: AboutComponent
//     // },
//   {
//     path: '/register(/:name)',
//     component: Register
//   },
//   {
//     path: '/registerconfirm(/:username)',
//     component: RegisterConfirmation
//   },
//   {
//     path: '*',
//     component: NotFound
//   }
// ]


// const routes = {
//   path: '',
//   component: AppComponent,
//   childRoutes: childRoutes
// }


// const routes = (
//       <Route path="/" component={AppComponent}>
//         <IndexRoute component={Home} />
//         <Route path="register" component={Register} />
//         <Route path="trainings">
//           <IndexRoute component={TrainingApp}/>
//           <Route path="item/:id" component={TrainingEdit} />
//         </Route>
//         <Route path="todos" component={TodoApp} />
//         <Route path='*' component={NotFound} />
//       </Route>
// )

const routes = (
      <Route path="/" component={AppComponent} 
        getChildRoutes={(location, cb) => 
          {require.ensure([], require => 
            {cb(null, 
              [ //require('./routes/todoroutes.js').default,
                <Route path="todos" component={require('../scenes/todo/todoapp').default} />,
                <Route path="register" component={require('../scenes/registration/register').default}/>,
                require('./routes/trainingroutes.js').default,
                <Route path='*' component={NotFound} />
              ]
            )}
          )}  
        }
        >
        <IndexRoute component={Home} />
      </Route>
)
                // <Route path="home" component={Home} />

// const routes = (
//       <Route path="/" component={AppComponent}>
//         <IndexRoute component={Home} />
//         <Route path="register" component={Register} />
//         <Route path="trainings" getChildRoutes={(location, cb) => {cb(null, [require('./routes/trainingroutes.js').default])}}>
//           <IndexRoute component={TrainingApp}/>
//         </Route>
//         <Route path="todos" component={TodoApp} />
//         <Route path='*' component={NotFound} />
//       </Route>
// )


// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='trainings'
//           getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}} 
//           getChildRoutes={(location, cb) =>
//              {cb(null, [require('./routes/trainingroutes.js').default])}
//           }
//         />        
//         <Route path='*' component={NotFound} />
//       </Route>
// )


// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='trainings' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}        
//   getChildRoutes={(location, cb) => {
//     require.ensure([], (require) => {
//       cb(null, [
//         require('./routes/trainingroutes')
//       ])
//     })
//   }}
//         />        
//         <Route path='*' component={NotFound} />
//       </Route>
// )

// const routes = (
//       <Route path="/" component={AppComponent}>>
//         <IndexRoute component={Home}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path="trainings">
//           <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}/>
//           <Route path="item/:id" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/admin/trainingedit').default)})}}/>
//         </Route>        
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='*' component={NotFound} />
//       </Route>
// )

// const routes = (
//       <Route path="/" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../app/appcomponent').default)})}}>
//         <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/home/home').default)})}}/>
//         <Route path="register" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/registration/register').default)})}} />
//         <Route path="trainings">
//           <IndexRoute getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/trainingapp').default)})}}/>
//           <Route path="item/:id" getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/training/admin/trainingedit').default)})}}/>
//         </Route>        
//         <Route path='todos' getComponent={(location, cb) => {require.ensure([], require => {cb(null, require('../scenes/todo/todoapp').default)})}}/>
//         <Route path='*' component={NotFound} />
//       </Route>
// )


export { routes }