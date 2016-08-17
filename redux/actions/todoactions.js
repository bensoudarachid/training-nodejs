// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
import { browserHistory } from 'react-router'
import { getIsFetching } from '../reducers'
import Immutable from 'Immutable'
import cookie from 'react-cookie'

let todoactions = {

  createTodoInit: function(representTodo) {
    console.log('Actions. Init registration: ')
    // var newTodo = Immutable.Map({"id":-1,"task":text,"userId":-1, "isCompleted":false})
    return {
      type: 'CREATE_TODO_INIT',
      todo: representTodo
    }
  },
  rejectTodo: function(representTodo) {
    console.log('Actions. Init registration: ')
    return {
      type: 'REJECT_TODO_INIT',
      representTodo: representTodo
    }
  },

  createTodo: function(text) {
  console.log('actions. AddTodo')

  return (dispatch,getState) => {
    var representTodo = Immutable.Map({"id":-1,"task":text,"userId":-1, "isCompleted":false})
    dispatch(todoactions.createTodoInit(representTodo))
    var headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'Content-Type': 'application/json'
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
          // 'Authorization': 'Bearer '+id_token
    }
    var id_token = cookie.load('jwt')
    console.log('Ya todos save Data.  auth id token: '+ id_token)
    if( id_token!=='' ){
      headers.Authorization='Bearer '+id_token
    }
    else
      console.log('Ya todos fetchData. Wahnsinn: no id_token')

    var body='task='+text
    // var body=JSON.stringify({
    //        task: action.text
    //      })
    //&scope=read%20write
    console.log('body '+body)
    let config = {
      method: 'POST'
      , headers
      , body: body
    }
    console.log('config ')
    console.log(config)
    // var todo = null;
    fetch('http://127.0.0.1:8083/api/todo/save', config)
    .then(response => 
      response.json().then(data => ({
        status: response.status,
        data
      })
    ))
    .then(
      ({ status, data }) => {
        if (status >= 400) {
          var error = data;
          console.log('Status looks bad. '+status+'. error message = '+error.message)
        } else {
          console.log('Status looks good ')
          console.log(data)
          // var newtodos = todos.push(Immutable.Map(data))
          // console.log('New todos ')
          // console.log(newtodos)
          // todos = todos.push(Immutable.Map({
          //   task: action.text,
          //   isCompleted: false,
          //   id: maxid
          // }))
          console.log('todo actions. todo representant : ')
          console.log(representTodo)

          dispatch(todoactions.addTodo(Immutable.Map(data), representTodo ))
          // return newtodos;
        }
      },
      err => {
        console.log('Status looks not good at all!'+err)
        dispatch(todoactions.rejectTodo(representTodo))
      }
    )
  }

    // return {
    //   type: 'ADD_TODO',
    //   text: text
    // }
  },

  addTodo: function(todo, representTodo) {
    console.log('actions. AddTodo')
    return {
      type: 'ADD_TODO',
      todo: todo,
      representTodo: representTodo
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