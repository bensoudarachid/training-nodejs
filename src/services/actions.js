// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import {browserHistory} from 'react-router'
import {getIsFetching} from './rootreducer'
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import registeractions from'./actions/registeractions'
import todoactions from './todos/todoactions'
import trainingactions from './trainings/trainingactions'
import authservices from './app/authentication/authservices'
import todoservices from './todos/todoservices'
import trainingservices from './trainings/trainingservices'
import authactions from './app/authentication/authactions'
import appactions from './app/appactions'

// var expressPort = -12
// if (process.env.NODE_ENV === 'production')
//   expressPort=8082
// else
//   expressPort=8081
// var isBrowser = typeof window !== 'undefined'
// var url = ''
// var authurl = ''
// const appbasename = ''
// if( isBrowser ){
//   authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   // authurl= 'http:'+'//'+'abbaslearning.royasoftware.com'+':8083'
//   // url = window.location.protocol+'//'+window.location.hostname+(window.location.expressPort ? ':'+location.expressPort: '')+appbasename
//   url = authurl
//   // authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   console.log('services call url '+url)
// }else{
//   url = 'http:'+'//'+'127.0.0.1'+(expressPort ? ':'+expressPort: '')+appbasename
//   authurl= 'http:'+'//'+'127.0.0.1'+':8083'
//   console.log('services call local url '+url)
// }

let actions = {
<<<<<<< HEAD
    // apiurl:url,
    // port:port,
    // appbasename:appbasename,
    ...authservices,
    ...todoservices,
    ...trainingservices,
    ...appactions,
    ...authactions,
    // ...registeractions,
    ...todoactions,
    ...trainingactions
=======
// apiurl:url,
// expressPort:expressPort,
// appbasename:appbasename,
    ...
        authservices,
    ...
        todoservices,
    ...
        trainingservices,
    ...
        appactions,
    ...
        authactions,
// ...registeractions,
<<<<<<< HEAD
...
todoactions,
...
trainingactions
>>>>>>> 6e3ff02... webstorm big changes crash
=======
    ...
        todoactions,
    ...
        trainingactions
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
}

export default actions