import AppComponent from '../app/appcomponent'

// import TodoApp from '../scenes/todo/todoapp'
import TrainingApp from '../scenes/training/public/trainingapp'
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

<<<<<<< HEAD
<<<<<<< HEAD
const Users = ({params, location}) => (
    <h3>Howdy Wa fin {params.name}! You like Food: {location.query.food}.</h3>
=======
const Users = ({ params, location }) => (
    <h3>Howdy Wa fin { params.name }! You like Food: { location.query.food }.</h3>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
const Users = ({params, location}) => (
    <h3>Howdy Wa fin {params.name}! You like Food: {location.query.food}.</h3>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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


// const routes = (
//       <Route path="/" component={AppComponent}>
//         <Route path="register" component={require('../scenes/registration/register').default}/>
//         require('./routes/adminroutes.js').default
//         <Route path='trainings' component={TrainingApp}/>
//         <Route path='*' component={NotFound}/>
//         <IndexRoute component={Home} />
//       </Route>
// )

const routes = (
    <Route path="/" component={AppComponent}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
           getChildRoutes={(location, cb) => {
               cb(null, [

                   <Route path="register" component={require('../scenes/registration/register').default}/>,
                   require('./routes/adminroutes.js').default,
                   <Route path='trainings' component={TrainingApp}/>,
                   <Route path='*' component={NotFound}/>
               ])
           }}>
        >
        <IndexRoute component={Home}/>
<<<<<<< HEAD
=======
        getChildRoutes={(location, cb) => {
            cb(null, [

                <Route path="register" component={require('../scenes/registration/register').default}/>,
                require('./routes/adminroutes.js').default,
                <Route path='trainings' component={TrainingApp}/>,
                <Route path='*' component={NotFound}/>
            ])
        }}>
    >
        <IndexRoute component={Home} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    </Route>
)

// const routes = (
//       <Route path="/" component={AppComponent} 
//         getChildRoutes={(location, cb) => {cb(null, [        

//           <Route path="register" component={require('../scenes/registration/register').default}/>,
//           require('./routes/adminroutes.js').default,
//           <Route path='trainings' component={TrainingApp}/>,
//           <Route path='*' component={NotFound}/>
//         ])}}>
//         >
//         <IndexRoute component={Home} />
//       </Route>
// )

// const routes = (
//       <Route path="/" component={AppComponent} 
//         getChildRoutes={(location, cb) => 
//           {require.ensure([], require => 
//             {cb(null, 
//               [ //require('./routes/todoroutes.js').default,
//                 <Route path="todos" component={require('../scenes/todo/todoapp').default} />,
//                 <Route path="register" component={require('../scenes/registration/register').default}/>,
//                 require('./routes/trainingroutes.js').default,
//                 <Route path='*' component={NotFound} />
//               ]
//             )}
//           )}
//         }
//         >
//         <IndexRoute component={Home} />
//       </Route>
// )


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


export {routes}