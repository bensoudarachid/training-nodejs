// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from '../reducers'
import Immutable from 'immutable'
import cookie from 'react-cookie'
import actions from '../actions'

let registrationactions = {
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
    console.log('actions register user '+creds.username+' .pass '+creds.password+' .email '+creds.email)
    var body='username='+creds.username+'&password='+creds.password+'&email='+creds.email
    //&scope=read%20write
    console.log('body '+body)
    let config = {
      method: 'POST'
      , headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      , body: body
    }

    return (dispatch,getState) => {
      if( getState().auth.get('isRegistrationFetching') ){
        console.log('Fetching! Do nothing')
        return
      }
      dispatch(registrationactions.validateUser(creds))
      const registrationError = getState().auth.get('registrationError')
      // console.log('+++++++++++++++++++++++++++reg actions. auth registrationError username '+registrationError.get('username'))
      if( registrationError.get('username')!== '' || registrationError.get('email')!== '' || registrationError.get('password')!== '' ){
        // console.log('+++++++++++++++++++++++++++reg actions. reg error' + registrationError.get('username'))
        return
      }
      
      dispatch(registrationactions.requestRegister(creds))
      return actions.registerUserService(creds)
    .then(
      ({ status, user }) => {
        var error = user
        if (status >= 400) {
          console.log('Status looks bad. '+status+'. error message = '+error.message)
          dispatch(registrationactions.registerSystemError(error.message))
        } else if (user.error) {
          var errorDescription = error.errorDescription
          console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription)
          dispatch(registrationactions.registerUserError(errorDescription))
          dispatch(actions.appError(errorDescription))
        } else {
          console.log('Status looks good ')
          console.log(user)
          dispatch(registrationactions.receiveRegister(user))
//          browserHistory.push('/registerconfirm/')
        }
      },
      err => {
        console.log('Status looks not good at all!'+err)
      }
    )
    }
  }
}

export default registrationactions