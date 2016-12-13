// import _ from 'lodash'
import Immutable from 'immutable'
// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from '../actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

let appReducer = function(app = new Immutable.Map({
  appError: undefined,
}), action) {

  if (!(app instanceof Immutable.Map)) {
    console.log('App reducer. Init Map. Need to find out why it s not a map')
    app = new Immutable.Map({
      appError:''
    })
  }
  
  switch (action.type) {
  case 'APP_ERROR':
    // console.log('app reducer. +++++++++++++Error '+ action.error)
    app=app.set('appError',action.error)
    return app
    // return Object.assign({}, app, {
    //   loginMessage: action.message,
    //   loginProgress: true
    // })

  default:
    return app
  }
}

export default appReducer