// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from '../reducers'
import Immutable from 'Immutable'
import cookie from 'react-cookie'

let todoactions = {

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

  toggleTodo: function(id) {
    return {
      type: 'TOGGLE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },


  loadTodos: function(todos) {
    return {
      type: 'TODOS_LOADED',
      todos: Immutable.List(todos)
    }
  }

}

export default todoactions