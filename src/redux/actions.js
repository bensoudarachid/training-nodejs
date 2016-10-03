// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from './reducers'
import Immutable from 'immutable'
import cookie from 'react-cookie'
import registeractions from'./actions/registeractions'
import todoactions from'./actions/todoactions'
import services from'./actions/services'
import authactions from'./actions/authactions'

let actions = {
  ...services,
  ...authactions,
  ...registeractions,
  ...todoactions
  

  // createNewUserId: function() {
  //   return {
  //     type: 'CREATE_USER_ID',
  //     id: Math.round(Math.random() * 100)
  //   }
  // },

  // createNewUserIdIfOdd: function() {
  //   return (dispatch, getState) => {
  //     const {user} = getState()
  //     if (user.id % 2 === 0) {
  //       return
  //     }
  //     dispatch(actions.createNewUserId())
  //   }
  // },

  // createNewUserIdAsync: function() {
  //   return (dispatch) => {
  //     setTimeout(() => {
  //       dispatch(actions.createNewUserId())
  //     }, 2500)
  //   }
  // },

}

export default actions