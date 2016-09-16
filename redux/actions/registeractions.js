// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from '../reducers'
import Immutable from 'immutable'
import cookie from 'react-cookie'


let registrationactions = {
  requestRegister: function(creds) {
    return {
      type: 'REGISTER_REQUEST',
      isFetching: true,
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

  registerError: function(registererror) {
    console.log('Actions. Error registration: ')
    console.log(registererror)
    return {
      type: 'REGISTER_ERROR',
      registererror
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
      if( getState().auth.isFetching ){
        console.log('Fetching! Do nothing')
        return
      }

      dispatch(registrationactions.requestRegister(creds))
      return fetch('http://localhost:8083/register', config)
        .then
        (response =>
      response.json().then(user => ({
        status: response.status,
        user
      })
    ))
    .then(
      ({ status, user }) => {
        if (status >= 400) {
          var error = user
          console.log('Status looks bad. '+status+'. error message = '+error.message)
          dispatch(registrationactions.registerError(error))
        } else {
          console.log('Status looks good ')
          console.log(user)
          dispatch(registrationactions.receiveRegister(user))
          browserHistory.push('/registerconfirm/')
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