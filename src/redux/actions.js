// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from './reducers'
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import registeractions from'./actions/registeractions'
import todoactions from'./actions/todoactions'
import services from'./actions/services'
import authactions from'./actions/authactions'
import appactions from'./actions/appactions'

let actions = {
  ...appactions,
  ...services,
  ...authactions,
  // ...registeractions,
  ...todoactions
  
}

export default actions