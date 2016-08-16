import _ from 'lodash'
import Immutable from 'Immutable'
import cookie from 'react-cookie'
require('es6-promise').polyfill();
require('isomorphic-fetch');


function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.get('id'), maxId)
  }, -1) + 1
}

let todoReducer = function(todos = Immutable.List([]), action) {
  // console.log('Todo reducer. switch')
  switch (action.type) {
    case 'ADD_TODO_OLD':
      var data = {"id":9,"task":"abibis is here","userId":41}
      todos = todos.push(Immutable.Map(data)) 
      return todos
    case 'ADD_TODO':
      var maxid= getId(todos)
      console.log('Todo reducer. AddTodo '+maxid)



    // return (dispatch,getState) => {

    var headers=  {
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

    var body='task='+action.text
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
    var promise = fetch('http://127.0.0.1:8083/api/todo/save', config)
        .then
        (response =>
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
          console.log('Old todos ')
          console.log(todos)
          var newtodos = todos.push(Immutable.Map(data))
          console.log('New todos ')
          console.log(newtodos)
          // todos = todos.push(Immutable.Map({
          //   task: action.text,
          //   isCompleted: false,
          //   id: maxid
          // }))
          return newtodos;
        }
      },
      err => {
        console.log('Status looks not good at all!'+err)
        return todos;
      }
    )
    Promise.resolve(promise).then()
    console.log('********************************* HEIN? todos ')
    return todos;


    case 'TODOS_LOADED':
      console.log('todos reducer. todos loaded')
      return action.todos.map((todo) => {
        return Immutable.Map(todo)
      })
      // return action.todos
    case 'SAVE_TODO':
      console.log('Todo reducer. SaveTodo id='+action.id+'task = '+action.text)
      return todos.map((todo) => {
        return todo.get('id') === action.id ? 
          todo.set('task',action.text)

        //   Object.assign({}, todo, {
        //   task: action.text,
        //   // id: action.id,
        // }) 
        : todo
      })

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ? 
          Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'TOGGLE_TODO':
      return todos.map((todo) => {
        return todo.get('id') === action.id ? 
          todo.set('isCompleted',!todo.get('isCompleted'))
        : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.get('id') !== action.id
      })
    default: 
      return todos;
  }
}

export default todoReducer
