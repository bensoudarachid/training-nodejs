// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from './rootreducer'
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import registeractions from'./actions/registeractions'
import todoactions from'./todos/todoactions'
import trainingactions from'./trainings/trainingactions'
import authservices from'./app/authentication/authservices'
import todoservices from'./todos/todoservices'
import trainingservices from'./trainings/trainingservices'
import authactions from'./app/authentication/authactions'
import appactions from'./app/appactions'

// var port = -12
// if (process.env.NODE_ENV === 'production')
//   port=8082
// else
//   port=8081
// var isBrowser = typeof window !== 'undefined'
// var url = ''
// var authurl = ''
// const appbasename = ''
// if( isBrowser ){
//   authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   // authurl= 'http:'+'//'+'abbaslearning.royasoftware.com'+':8083'
//   // url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+location.port: '')+appbasename
//   url = authurl
//   // authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   console.log('services call url '+url)
// }else{
//   url = 'http:'+'//'+'127.0.0.1'+(port ? ':'+port: '')+appbasename
//   authurl= 'http:'+'//'+'127.0.0.1'+':8083'
//   console.log('services call local url '+url)
// }

let actions = {
// apiurl:url,
// port:port,
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
...
todoactions,
...
trainingactions
}

export default actions