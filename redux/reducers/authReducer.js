import _ from 'lodash'
// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

let authReducer = function(auth = {
    isFetching: false,
    isAuthenticated: false //localStorage.getItem('id_token') ? true : false
  }, action) {
  // console.log('Auth Reducer action: ' + action.type + ', id token : ' + authentication.id_token)

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, auth, {
        isFetching: true,
        isAuthenticated: false,
        usercreds: action.creds
      })
    case 'LOGIN_SUCCESS':
      // console.log('+++++++++++++++++++++++++++++++++++++Reducer Authentication ')
      // console.log(action.id_token)
      return Object.assign({}, _.omit(auth, ['usercreds']), {
        isFetching: false,
        isAuthenticated: true,
        id_token: action.id_token,
        errorMessage: ''
      })
    case 'LOGIN_FAILURE':
      return Object.assign({}, _.omit(auth, ['usercreds']), {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case 'LOGOUT_REQUEST':
      return Object.assign({}, _.omit(auth, ['usercreds']), {
        isFetching: true,
        isAuthenticated: true
      })
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, _.omit(auth, ['id_token']), {
        isFetching: false,
        isAuthenticated: false
      })
      // return Object.assign({}, auth, {
      //   isFetching: true,
      //   isAuthenticated: false
      // })
    case 'REGISTER_REQUEST':
      return Object.assign({}, auth, {
        isFetching: true,
        isAuthenticated: false,
        usercreds: action.creds,
        registererror: ''
      })
    case 'REGISTER_SUCCESS':
      return Object.assign({}, auth, {
        isFetching: false,
        username: action.user.username
      })
    case 'REGISTER_ERROR':
      console.log('Auth reducer action registererror')
      console.log(action.registererror)
      return Object.assign({}, auth, {
        isFetching: false,
        registererror: action.registererror.message
      })
    case 'REGISTER_INIT':
      console.log('Auth reducer action register init')
      console.log(action.registererror)
      return Object.assign({}, auth, {
        isFetching: false,
        registererror: ''
      })

    default:
      return auth
  }
}

export default authReducer