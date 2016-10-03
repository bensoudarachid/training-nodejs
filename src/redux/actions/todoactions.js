// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import { browserHistory } from 'react-router'
// import { getIsFetching } from '../reducers'
import Immutable from 'immutable'
import actions from '../actions'
// import cookie from 'react-cookie'

const todoactions = {

  createTodoInit: function(representTodo) {
    // console.log('Actions. Init registration: ')
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

  updateTodo: function(todo) {
    console.log('todo actions update todo')
    console.log(todo)
    return {
      type: 'UPDATE_TODO',
      todo
    }
  },

  loadingTodo: function(todo) {
    todo = todo.set('loading', true)
    return {
      type: 'LOADING_TODO',
      todo
    }
  },

  createTodo: function(text) {
    // console.log('actions. AddTodo')

    return (dispatch) => {
      var representTodo = Immutable.Map({
        // "id": -1
        task: text,
        // "userId": -1,
        // "completed": false
        loading: true
      })
      dispatch(todoactions.createTodoInit(representTodo))

      // var headers = {
      //   // 'Content-Type': 'application/x-www-form-urlencoded' //for normal paramter
      //   'Content-Type': 'application/json' //for json paramter
      // // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // // 'Authorization': 'Bearer '+id_token
      // }
      // var id_token = cookie.load('jwt')
      // console.log('Ya todos save Data.  auth id token: ' + id_token)
      // if (id_token !== '') {
      //   headers.Authorization = 'Bearer ' + id_token
      // }
      // else
      //   console.log('Ya todos save. Wahnsinn: no id_token')

      // // var body='task='+text
      // var body = JSON.stringify({
      //   // id: -1,
      //   task: text,
      //   abbas: 12
      // // userid: -1
      // // ,completed: true
      // })
      // //&scope=read%20write
      // console.log('body ' + body)
      // let config = {
      //   method: 'POST',
      //   headers,
      //   body: body
      // }
      // console.log('config ')
      // console.log(config)
      // // var todo = null;

      // fetch('http://127.0.0.1:8083/api/todo/savetodo', config)
      //   .then(response => response.json().then(data => ({
      //     status: response.status,
      //     data
      //   })
      //   ))

      actions.updateTodoService(representTodo).then(
        ({status, data}) => {
          if (status === 401) {
            dispatch(actions.receiveLogout())
          } else if (status >= 400) {
            var error = data
            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
            dispatch(todoactions.rejectTodo(representTodo))
          } else if (data.error === 'invalid_token') {
            // var error = data.error
            var errorDescription = data.error_description
            console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
            dispatch(actions.receiveLogout())
          } else if (data.error) {
            // var error = data.error
            var errorDescription = data.error_description
            console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
            dispatch(todoactions.rejectTodo(representTodo))
          } else {
            console.log('Status looks good todo version: ' + data.version)
            // console.log(data)
            // var newtodos = todos.push(Immutable.Map(data))
            // console.log('New todos ')
            // console.log(newtodos)
            // todos = todos.push(Immutable.Map({
            //   task: action.text,
            //   isCompleted: false,
            //   id: maxid
            // }))
            // console.log('todo actions. todo representant : ')
            // console.log(representTodo)

            dispatch(todoactions.addTodo(Immutable.Map(data), representTodo))
          // return newtodos;
          }
        },
        err => {
          console.log('Status looks not good at all!' + err)
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
    console.log('actions. AddTodo completed? ' + todo.get('completed'))
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

  // saveTodoAsync: function(todo) {
  //   console.log('todoactions. update todo' + todo.get('task'))
  //   return (dispatch) => {
  //     // setTimeout(() => {
  //     fetch('http://127.0.0.1:8083/api/updatetodo', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
  //       },
  //       // body: 'testparam='+test //if no json in header
  //       body: JSON.stringify(todo)
  //       // body: JSON.stringify({
  //       //   id
  //       //   task: text
  //       // })
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('todoapp. component mounted ' + data.todos[0].task)
  //         actions.addTodos(data.todos)
  //       })
  //       .catch(err => console.log('Hooooo' + err))

  //     dispatch(actions.saveTodo(id, text))
  //   // }, 2500)
  //   }
  // },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  updateTodoDispatcher: function(todo, todoold) {
    console.log('todoactions. updateTodoDispatcher')
    return (dispatch) => {
      console.log('todoactions. updateTodoDispatcher assi')
      if (todo.get('loading') || todo.get('error')) {
        // console.log('todo actions toggle todo. Is loading or Error displaying. So no action')
        return
      }
      dispatch(todoactions.loadingTodo(todo))
      console.log('actions. update Todo version old: ' + todoold.get('userId') + '. new: ' + todo.get('version'))
      // dispatch(todoactions.createTodoInit(representTodo))
      // var headers = {
      //   // 'Content-Type': 'application/x-www-form-urlencoded'
      //   'Content-Type': 'application/json' //for json paramter
      // // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // // 'Authorization': 'Bearer '+id_token
      // }
      // var id_token = cookie.load('jwt')
      // console.log('Ya todos save Data.  auth id token: ' + id_token)
      // if (id_token !== '') {
      //   headers.Authorization = 'Bearer ' + id_token
      // }
      // // else
      // //   console.log('todos action. Wahnsinn: no id_token')

      // // var body = JSON.stringify({
      // //   id: todo.get('id'),
      // //   task: todo.get('task'),
      // //   // userid: -1
      // //   completed: todo.get('completed')
      // // })
      // // todo = todo.set('task', null)
      // var body = JSON.stringify(todo)
      // //&scope=read%20write
      // // console.log('body ' + body)
      // const config = {
      //   method: 'POST',
      //   headers,
      //   body: body
      // }
      // // console.log('config ')
      // // console.log(config)
      // // var todo = null;
      // fetch('http://127.0.0.1:8083/api/todo/updatetodo', config).then(response => response.json()
      //   .then(data => ({
      //     status: response.status,
      //     data
      //   })
      // ))
      actions.updateTodoService(todo)
        .then(
          ({status, data}) => {
            if (actions.disconnect(dispatch, status, data))
              return

            // if (status === 401) {
            //   dispatch(actions.receiveLogout())
            // } 
            else if (status >= 400) {
              var error = data
              console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              // for (var i = 0; i < 3; i++) {

              todoold = todoold.set('error', 'System error')
              dispatch(todoactions.updateTodo(todoold))
              todoold = todoold.delete('error')
              setTimeout(() => {
                dispatch(todoactions.updateTodo(todoold))
              }, 2500)
            // console.log('Todo action error loop. ' + i)
            // }
            // dispatch(todoactions.updateTodo(todoold))
            }
            // else if (data.error === 'invalid_token') {
            //   // var error = data.error
            //   var errorDescription = data.error_description
            //   console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
            //   dispatch(actions.receiveLogout())
            // } 
            else if (data.error) {
              // var error = data.error
              var errorDescription = data.error_description
              console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
              todoold = todoold.set('error', 'System error')
              dispatch(todoactions.updateTodo(todoold))
              todoold = todoold.delete('error')
              setTimeout(() => {
                dispatch(todoactions.updateTodo(todoold))
              }, 2500)
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
              // console.log('todo actions. todo representant : ')
              // console.log(representTodo)

              dispatch(todoactions.updateTodo(Immutable.Map(data)))
            // return newtodos;
            }
          },
          err => {
            console.log('Status looks not good at all!' + err)
            console.log('Status looks not good at all! todo completed? ' + todoold.get('completed'))
            todoold = todoold.set('error', 'System error')
            dispatch(todoactions.updateTodo(todoold))
            todoold = todoold.delete('error')
            setTimeout(() => {
              dispatch(todoactions.updateTodo(todoold))
            }, 2500)
          }
      )
    }
  },
  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },
  loadTodos: function(todosraw) {
    return {
      type: 'TODOS_LOADED',
      todos: todosraw
    }
  },
  retrieveUserTodosDispatcher: function() {
    return (dispatch) => {

      // var headers = {
      //   'Content-Type': 'application/x-www-form-urlencoded',
      //   'Content-Type': 'application/json'
      // // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // // 'Authorization': 'Bearer '+id_token
      // }
      // var id_token = cookie.load('jwt')
      // if (id_token != '') {
      //   headers.Authorization = 'Bearer ' + id_token
      //   console.log('Ya todos fetchData.  auth id token: ' + id_token)
      // }
      // else
      //   console.log('Ya todos fetchData. Wahnsinn: no id_token')
      // var test = 'This is abbas in the hood!'

      // return fetch('http://127.0.0.1:8081/api/todos/2373'
      //   , {
      //     method: 'GET',
      //     headers
      //   // headers: {
      //   //   'Content-Type': 'application/x-www-form-urlencoded',
      //   //   'Content-Type': 'application/json',
      //   //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      //   //   'Authorization': 'Bearer '+id_token
      //   // }
      //   // ,
      //   // body: JSON.stringify({
      //   //   testparam: test
      //   // })
      //   // body: 'testparam='+test //if no json in header
      //   }
      // )
      //   .then(response => response.json().then(data => {
      //     console.log('Response Status = ' + response.status)
      //     return ({
      //       status: response.status,
      //       data
      //     })
      //   }
      //   ))
      actions.retrieveTodosService()
        .then(
          ({status, data}) => {
            if (status === 401) {
              dispatch(actions.receiveLogout())
            } else if (status >= 400) {
              var error = data
              console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              dispatch(actions.receiveLogout())
            } else if (data.error) {
              // var error = data.error
              var errorDescription = data.error_description
              console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
              dispatch(actions.receiveLogout())
            } else {
              dispatch(actions.loadTodos(data))
            }
          })
        // .then(data => {
        //     console.log('todoapp. data fetch ')
        //     console.log(data)
        //     if (data.error == 'invalid_token')
        //       actions.receiveLogout()
        //     else
        //       actions.loadTodos(data)
        //     // actions.addTodos(data.todos)
        // })
        .catch(err => {
          dispatch(actions.receiveLogout())
          console.log('Hooooo. Status = ' + status + ', error = ' + err)
        })
    }
  },
  deleteTodoSrv: function(todo) {
    return (dispatch) => {
      if (todo.get('loading') || todo.get('error')) {
        console.log('todo actions toggle todo. Is loading or Error displaying. So no action')
        return
      }
      dispatch(todoactions.loadingTodo(todo))
      console.log('actions. toggleTodo Todo 1')
      actions.deleteTodoService(todo)
        .then(
          ({status, data}) => {
            if (actions.disconnect(dispatch, status, data))
              return
            if (status >= 400) {
              var error = data
              console.log('Status looks bad. ' + status + '. error message = ' + error.message)
              // for (var i = 0; i < 3; i++) {

              todo = todo.set('error', 'System error')
              dispatch(todoactions.updateTodo(todo))
              todo = todo.delete('error')
              setTimeout(() => {
                dispatch(todoactions.updateTodo(todo))
              }, 2500)
            // console.log('Todo action error loop. ' + i)
            // }
            // dispatch(todoactions.updateTodo(todo))
            } else if (data.error) {
              todo = todo.set('error', 'System error')
              dispatch(todoactions.updateTodo(todo))
              todo = todo.delete('error')
              setTimeout(() => {
                dispatch(todoactions.updateTodo(todo))
              }, 2500)
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
              // console.log(representTodo)

              dispatch(todoactions.deleteTodo(todo.get('id')))
            // return newtodos;
            }
          },
          err => {
            console.log('Status looks not good at all!' + err)
            console.log('Status looks not good at all! todo completed? ' + todo.get('completed'))
            todo = todo.set('error', 'System error')
            dispatch(todoactions.updateTodo(todo))
            todo = todo.delete('error')
            setTimeout(() => {
              dispatch(todoactions.updateTodo(todo))
            }, 2500)

          }
      )
    }


  },
  filterTodosOpen: function(filterTodos) {
    return {
      type: 'FILTER_TODOS_OPEN',
      filterOpen: filterTodos
    }

  },
  filterTodosClosed: function(filterTodos) {
    return {
      type: 'FILTER_TODOS_CLOSED',
      filterClosed: filterTodos
    }

  }


}

export default todoactions