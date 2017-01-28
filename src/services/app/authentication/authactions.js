// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers/rootreducer'
import cookie from 'react-cookie'
import actions from '../../actions'

const util = require('util')


let authactions = {
  requestLogin: function(creds) {
    return {
      type: 'LOGIN_REQUEST',
      isFetching: true,
      isAuthenticated: cookie.load('jwt') ? true : false,
      creds
    }
  },

  receiveLogin: function(user) {
    console.log('auth actions user : ' + util.inspect(user, false, null))
    cookie.save('jwt', user.access_token, {
      path: '/'
    })
    cookie.save('authority', user.authority, {
      path: '/'
    })
    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: cookie.load('jwt') ? true : false
    // id_token: user.access_token
    }
  },

  loginError: function(message) {
    return {
      type: 'LOGIN_FAILURE',
      isFetching: false,
      isAuthenticated: cookie.load('jwt') ? true : false,
      message
    }
  },

  receiveLogout: function() {
    cookie.remove('jwt', {
      path: '/'
    })
    cookie.remove('authority', {
      path: '/'
    })
    return {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: cookie.load('jwt') ? true : false
    }
  },

  requestLogout: function() {
    return {
      type: 'LOGOUT_REQUEST',
      isFetching: true,
      isAuthenticated: cookie.load('jwt') ? true : false
    }
  },

  logoutUser: function() {
    console.log('actions logout user ')
    //&scope=read%20write
    1

    return dispatch => {
      dispatch(authactions.requestLogout())
      actions.logoutService(cookie.load('jwt'))
        .then(response => {
          if (!response.ok) {
            console.log('actions request logout not ok')
            return Promise.reject()
          } else {
            dispatch(authactions.receiveLogout())
            window.routerHistory.push('/')
            // browserHistory.push(actions.appbasename+'/')
          }
        }).catch(err => {
          console.log('authactionsjs. Unhandled Login Error: ', err)
        })
    }
  },
  loginProcessStart: function(message) {
    return {
      type: 'LOGIN_PROCESS_START',
      message
    }
  },
  loginProcessEnd: function() {
    console.log('authactionsjs close modal')
    return {
      type: 'LOGIN_PROCESS_END'
    }
  },
  loginUser: function(creds) {
    // console.log('actions login user ' + creds.username + ' .pass ' + creds.password)
    return dispatch => {
      // We dispatch requestLogin to kickoff the call to the API
      // console.log('actions request login ')
      dispatch(authactions.requestLogin(creds))

      actions.loginUserService(creds)
        .then(({user, response}) => {
          if (!response.ok) {
            // console.log('authactions. login not ok')
            // console.log(user)
            // console.log(response)
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(authactions.loginError(user.error_description))
            return Promise.reject(user)
          } else {
            // console.log('loginUser user token '+user.access_token )
            // If login was successful, set the token in local storage
            // localStorage.setItem('access_token', user.id_token)
            // Dispatch the success action
            dispatch(authactions.receiveLogin(user))
            var currentRouteName = window.location.pathname.replace('/reactor','')
            // console.log('authactionsjs push this' + currentRouteName)
            // console.log('authactionsjs push this' + currentRouteName.length)// const appbasename = '/reactor'
            // const url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+location.port: '')+'/reactor'
            // console.log('authactionsjs push this' + url)
            // console.log('authactionsjs push this' + url.length)
            // var currentRoute = currentRouteName.replace(url,'')
            // console.log('authactionsjs push this' + currentRoute)
            // cannot find a reload action below
            window.routerHistory.push('/')
            window.routerHistory.push(currentRouteName)
            // window.location.reload()
          }
        }).catch(err => {
          console.log('authactionsjs. Unhandled Login Error: ', err.error_description)
          dispatch(authactions.loginProcessStart(err.error_description))
        })
    }
  },
  disconnect: function(dispatch,status, data) {
    if (status === 401 || data.error === 'invalid_token') {
      dispatch(actions.receiveLogout())
      return true
    }
    return false
  },

  requestRegister: function(creds) {
    return {
      type: 'REGISTER_REQUEST',
      isRegistrationFetching: true,
      isAuthenticated: cookie.load('jwt') ? true : false,
      creds
    }
  },

  receiveRegister: function(user) {
    // console.log('actions user access token: ' + user.access_token)
    return {
      type: 'REGISTER_SUCCESS',
      user
    }
  },

  registerInit: function() {
    console.log('Actions. Init registration: ')
    return {
      type: 'REGISTER_INIT'
    }
  },

  registerUserError: function(registererror) {
    console.log('Actions. Error registration: ')
    console.log(registererror)
    return {
      type: 'REGISTER_USER_ERROR',
      registererror
    }
  },

  registerSystemError: function(registererror) {
    console.log('Actions. Error registration: ')
    console.log(registererror)
    return {
      type: 'REGISTER_SYSTEM_ERROR',
      registererror
    }
  },

  validateUser: function(user) {
    // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++registrationactions validate user')
    return {
      type: 'REGISTER_VALIDATE',
      user: user  
    }
  },

  registerUser: function(creds) {
    // console.log('actions register user '+creds.username+' .pass '+creds.password+' .email '+creds.email)
    // var body='username='+creds.username+'&password='+creds.password+'&email='+creds.email
    //&scope=read%20write
    // console.log('body '+body)
    // let config = {
    //   method: 'POST'
    //   , headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    //   , body: body
    // }

    return (dispatch,getState) => {
      if( getState().auth.get('isRegistrationFetching') ){
        console.log('Fetching! Do nothing')
        return
      }
      dispatch(actions.validateUser(creds))
      const registrationError = getState().auth.get('registrationError')
      // console.log('+++++++++++++++++++++++++++reg actions. auth registrationError username '+registrationError.get('username'))
      if( registrationError.get('username')!== undefined || registrationError.get('email')!== undefined || registrationError.get('password')!== undefined || registrationError.get('passwordCheck')!== undefined){
        // console.log('+++++++++++++++++++++++++++reg actions. reg error' + registrationError.get('username'))
        return
      }
      
      dispatch(actions.requestRegister(creds))
      return actions.registerUserService(creds)
    .then(
      ({ status, data }) => {
        var error = data.error
        console.log('Auth actions, Response: '+util.inspect(data, false, null))
        // console.log('Auth actions, Error: '+error)
        // console.log('Auth actions, Error: '+error.error)
        if (status >= 400 && error!=undefined) {
          console.log('Status looks bad. '+status+'. error message = '+error.message)
          dispatch(actions.registerSystemError(error.message))
        } else if (error) {
          // var errorDescription = error.errorDescription
          // console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription)
          dispatch(actions.registerUserError(error))
          // dispatch(actions.appError(error))
        } else {
          console.log('Status looks good ')
          console.log(data)
          dispatch(actions.receiveRegister(data))
//          browserHistory.push('/registerconfirm/')
        }
      },
//     .then(
//       ({ status, resp }) => {
//         console.log('Auth actions, Response: '+util.inspect(resp, false, null))
//         var error = resp.error
//         var user = resp.account
//         if (status >= 400) {
//           console.log('Status looks bad. '+status+'. error message = '+error.message)
//           dispatch(actions.registerSystemError(error.message))
//         } else if (user.error) {
//           var errorDescription = error.errorDescription
//           console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription)
//           dispatch(actions.registerUserError(errorDescription))
//           dispatch(actions.appError(errorDescription))
//         } else {
//           console.log('Status looks good ')
//           console.log(user)
//           dispatch(actions.receiveRegister(user))
// //          browserHistory.push('/registerconfirm/')
//         }
//       },

      err => {
        console.log('Status looks not good at all!'+err)
      }
    )
    }
  }
}

export default authactions