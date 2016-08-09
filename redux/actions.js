// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from './reducers'



let actions = {
  requestRegister: function(creds) {
    return {
      type: 'REGISTER_REQUEST',
      isFetching: true,
      isAuthenticated: false,
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

  requestLogin: function(creds) {
    return {
      type: 'LOGIN_REQUEST',
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  },

  receiveLogin: function(user) {
    // console.log('actions user access token: ' + user.access_token)
    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: true,
      id_token: user.access_token
    }
  },

  loginError: function(message) {
    return {
      type: 'LOGIN_FAILURE',
      isFetching: false,
      isAuthenticated: false,
      message
    }
  },
  
  receiveLogout: function() {
    return {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: false
    }
  },

  addTodo: function(text) {
    console.log('actions. AddTodo')
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  addTodos: function(todos) {
    console.log('actions. AddTodos')
    return {
      type: 'ADD_TODOS',
      todos: todos
    }
  },

  saveTodo: function(id, text) {
    console.log('actions. SaveTodo')
    return {
      type: 'SAVE_TODO',
      id: id,
      text: text
    }
  },

  saveTodoAsync: function(id, text) {
    return (dispatch) => {
      // setTimeout(() => {
      fetch('http://127.0.0.1:8081/api/todo/'+id+'/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
        },
        // body: 'testparam='+test //if no json in header
        body: JSON.stringify({
          task: text
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('todoapp. component mounted ' + data.todos[0].task)
          actions.addTodos(data.todos)
        })
        .catch(err => console.log('Hooooo' + err))

      dispatch(actions.saveTodo(id, text))
    // }, 2500)
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const {user} = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  },

  loadTodos: function(todos) {
    // return (dispatch) => {
    //   if (todos.error == 'invalid_token'){
    //     console.log('actions loadTodos logout because of error **************************************************************')

    //     dispatch(actions.receiveLogout())
    //     browserHistory.push('/')
    //   }else
    //     console.log('todos loaded**************************************************************')
    //     return {
    //       type: 'TODOS_LOADED',
    //       todos: todos
    //     }
    //   }
    return {
      type: 'TODOS_LOADED',
      todos: todos
    }
  },

  requestLogout: function() {
    return {
      type: 'LOGOUT_REQUEST',
      isFetching: true,
      isAuthenticated: true
    }
  },

  logoutUser: function(tokenid) {
    console.log('actions logout user ')
    //&scope=read%20write
    let config = {
      method: 'POST'
      , headers: {
          'Accept': 'application/json'
        , 'Content-Type': 'application/x-www-form-urlencoded'
        , 'Authorization': 'Bearer '+ tokenid
  //      `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
      }
      // , body: body
      // , body: JSON.stringify({
      //     grant_type: 'password'
      //   })

      // , 'body': `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
    }

    return dispatch => {
      dispatch(actions.requestLogout())

      return fetch('http://localhost:8083/oauth/logout', config)
        .then(response =>  {
          if (!response.ok) {
            console.log('actions request logout not ok')
            // If there was a problem, we want to
            // dispatch the error condition
            // dispatch(actions.loginError(user.message))
            return Promise.reject()
          } else {
            // console.log('loginUser user token '+user.access_token )
            // If login was successful, set the token in local storage
            // localStorage.setItem('access_token', user.id_token)
            // Dispatch the success action
            dispatch(actions.receiveLogout())
            browserHistory.push('/')
          }
        }).catch(err => console.log("Error: ", err))
    }

    // return dispatch => {
    //   dispatch(actions.requestLogout())
    //   // localStorage.removeItem('id_token')
    //   dispatch(actions.receiveLogout())
    //   browserHistory.push('/')
    // } 
  },

  loginUser: function(creds) {
    console.log('actions login user '+creds.username+' .pass '+creds.password)
    var body='grant_type=password&username='+creds.username+'&password='+creds.password+'&client_id=clientapp&client_secret=123456'
    //&scope=read%20write
    console.log('body '+body)
    let config = {
      method: 'POST'
      , headers: {
          'Accept': 'application/json'
        , 'Content-Type': 'application/x-www-form-urlencoded'
        , 'Authorization': 'Basic '+ new Buffer('clientapp:123456').toString('base64')
  //      `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
      }
      , body: body
      // , body: JSON.stringify({
      //     grant_type: 'password'
      //   })

      // , 'body': `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
    }

    return dispatch => {
      // We dispatch requestLogin to kickoff the call to the API
      // console.log('actions request login ')

      dispatch(actions.requestLogin(creds))

      return fetch('http://localhost:8083/oauth/token', config)
        .then(response =>
          response.json().then(user => ({ user, response }))
              ).then(({ user, response }) =>  {
          if (!response.ok) {
            // console.log('actions request login not ok')

            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(actions.loginError(user.message))
            return Promise.reject(user)
          } else {
            // console.log('loginUser user token '+user.access_token )
            // If login was successful, set the token in local storage
            // localStorage.setItem('access_token', user.id_token)
            // Dispatch the success action
            dispatch(actions.receiveLogin(user))
            browserHistory.push('/')
          }
        }).catch(err => console.log("Error: ", err))
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
        return;
      }

      dispatch(actions.requestRegister(creds))
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
          var error = user;
          console.log('Status looks bad. '+status+'. error message = '+error.message)
          dispatch(actions.registerError(error))
        } else {
          console.log('Status looks good ')
          console.log(user)
          dispatch(actions.receiveRegister(user))
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

export default actions