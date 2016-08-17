import _ from 'lodash'
import Immutable from 'Immutable'
// import cookie from 'react-cookie'
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

    case 'CREATE_TODO_INIT':
      console.log('todo reducer. init create todo : ')
      console.log(action.todo)
      return todos.push(action.todo)
      
    case 'REJECT_TODO_INIT':
      // console.log('todo reducer. reject create todo : '+action.text)
      // console.log(action.text)
      todos = todos.filter(function(element) {
        return element !== action.representTodo
      });
      return todos
    case 'ADD_TODO':
      // console.log('todo reducer. add todo : ')
      // console.log(action.todo)
      // console.log('todo reducer. add todo, remove representant : ')
      // console.log(action.representTodo)
      var index = todos.findIndex(function(item) { 
        return item === action.representTodo; 
      })
      todos = todos.set(index, action.todo)
      // todos = todos.filter(function(element) {
      //   return element !== action.representTodo
      // }).push(action.todo)
      return todos

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
