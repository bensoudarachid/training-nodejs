// import _ from 'lodash'
import cookie from 'react-cookie'
import Immutable from 'immutable'
// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

let authReducer = function(auth = new Immutable.Map({
  isFetching: false,
  isRegistrationFetching: false,
  isAuthenticated: cookie.load('jwt') ? true : false,
  registrationStep:1,
  registrationError: new Immutable.Map({
    username: '',
    email: '',
    password: ''
  })
}), action) {

  if (!(auth instanceof Immutable.Map)) {
    console.log('Auth reducer. Init Map. Need to find out why it s not a map')
    auth = new Immutable.Map({
      isFetching: false,
      isRegistrationFetching: false,
      isAuthenticated: cookie.load('jwt') ? true : false,
      registrationStep:1,
      registrationError: new Immutable.Map({
        username: '',
        email: '',
        password: ''
      })
    })
  }

  auth=auth.set( 'isAuthenticated', cookie.load('jwt') ? true : false)
  // console.log('Auth Reducer is authenticated: ' + auth.isAuthenticated )
  // console.log('Auth Reducer cookie is there: ' + (cookie.load('jwt') ? true : false))
  //auth=auth.set('',)
  //auth=auth.remove('')
  
  switch (action.type) {
  case 'LOGIN_PROCESS_START':
    console.log('Auth reducer. +++++++++++++Login in Progress ')
    auth=auth.set('loginMessage',action.message)
    auth=auth.set('loginProgress',true)
    return auth
    // return Object.assign({}, auth, {
    //   loginMessage: action.message,
    //   loginProgress: true
    // })
  case 'LOGIN_PROCESS_END':
    console.log('authreducerjs. login progress end')
    auth=auth.remove('loginMessage')
    auth=auth.remove('loginProgress')
    return auth
    // return Object.assign({}, _.omit(auth, ['loginMessage','loginProgress']), {})  
    
  case 'LOGIN_REQUEST':
    auth=auth.set('isFetching',true)
    auth=auth.set('usercreds',action.creds)
    auth=auth.remove('loginMessage')
    auth=auth.remove('loginProgress')
    return auth

    // return Object.assign({}, _.omit(auth, ['loginMessage','loginProgress']), {
    //   isFetching: true,
    //     // isAuthenticated: false,
    //   usercreds: action.creds
    // })
  case 'LOGIN_SUCCESS':
      // console.log('+++++++++++++++++++++++++++++++++++++Reducer Authentication ')
      // console.log(action.id_token)
    auth=auth.set('isFetching',false)
    auth=auth.set('errorMessage','')
    auth=auth.set('isAuthenticated',cookie.load('jwt') ? true : false)
    auth=auth.remove('usercreds')
    return auth
//     return Object.assign({}, _.omit(auth, ['usercreds']), {
//       isFetching: false,
//       isAuthenticated: cookie.load('jwt') ? true : false,
// //        id_token: action.id_token,
//       errorMessage: ''
//     })
  case 'LOGIN_FAILURE':
    auth=auth.set('isFetching',false)
    auth=auth.set('errorMessage', action.message)
    auth=auth.remove('usercreds')
    return auth
//  
    // return Object.assign({}, _.omit(auth, ['usercreds']), {
    //   isFetching: false,
    //     // isAuthenticated: false,
    //   errorMessage: action.message
    // })
  case 'LOGOUT_REQUEST':
    auth=auth.set('isFetching', true)
    auth=auth.remove('usercreds')
    return auth
    
    // return Object.assign({}, _.omit(auth, ['usercreds']), {
    //   isFetching: true
    //     // isAuthenticated: true
    // })
  case 'LOGOUT_SUCCESS':
    auth=auth.set('isFetching',false)
    auth=auth.set('isAuthenticated', cookie.load('jwt') ? true : false)
    return auth
    // return Object.assign({}, auth, {
    //   isFetching: false,
    //   isAuthenticated: cookie.load('jwt') ? true : false
    // })
  case 'REGISTER_REQUEST':
    auth=auth.set('isRegistrationFetching',true)
    auth=auth.set('usercreds',action.creds)
    auth=auth.set('registererror', '')
    return auth
  // return Object.assign({}, auth, {
  //     isFetching: true,
  //       // isAuthenticated: false,
  //     usercreds: action.creds,
  //     registererror: ''
  //   })
  case 'REGISTER_SUCCESS':
    auth=auth.set('isRegistrationFetching',false)
    auth=auth.set('username', action.user.username)
    auth=auth.set('registrationStep',2)
    return auth
    // return Object.assign({}, auth, {
    //   isFetching: false,
    //   username: action.user.username
    // })
  case 'REGISTER_USER_ERROR':
      // console.log('Auth reducer action registererror')
      // console.log(action.registererror)
    auth=auth.set('isRegistrationFetching',false)
    auth=auth.set('registererror', action.registererror)
    // auth=auth.set('registrationStep',3)
    return auth
  case 'REGISTER_SYSTEM_ERROR':
      // console.log('Auth reducer action registererror')
      // console.log(action.registererror)
    auth=auth.set('isRegistrationFetching',false)
    auth=auth.set('registererror', action.registererror)
    auth=auth.set('registrationStep',3)
    return auth
    // return Object.assign({}, auth, {
    //   isFetching: false,
    //   registererror: action.registererror.message
    // })
  case 'REGISTER_INIT':
      // console.log('Auth reducer action register init')
      // console.log(action.registererror)
    auth=auth.set('isRegistrationFetching',false)
    auth=auth.set('registererror','')
    auth=auth.set('registrationStep',1)
    return auth
    // return Object.assign({}, auth, {
    //   isFetching: false,
    //   registererror: ''
    // })
  case 'REGISTER_VALIDATE':
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++authreducer validate username'+action.user.username)
    var registrationError = new Immutable.Map({
      username: '',
      email: '',
      password: ''
    })
    if( action.user.username.length === 0){
      console.log('username required')
      registrationError = registrationError.set('username','user name required')
    }
    if( action.user.password.length === 0)
      registrationError = registrationError.set('password','password required')
    // if( action.user.password.length() < 8 ) 
    //   registrationError = registrationError.set('password','password need to be > 8')
    if( action.user.password !== action.user.passwordCheck) 
      registrationError = registrationError.set('passwordCheck','password check different from password')
    if( action.user.email.length === 0)
      registrationError = registrationError.set('email','email required')
    // if( !action.user.email.contains('@')) 
    //   registrationError = registrationError.set('email','email invalid')
    auth = auth.set('registrationError',registrationError)
    return auth

  default:
    return auth
  }
}

export default authReducer