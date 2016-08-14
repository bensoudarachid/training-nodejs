import _ from 'lodash'
import Immutable from 'Immutable'


function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.get('id'), maxId)
  }, -1) + 1
}

let todoReducer = function(todos = Immutable.List([]), action) {
  // console.log('Todo reducer. switch')
  switch (action.type) {
    case 'ADD_TODO':
      var maxid= getId(todos)
      console.log('Todo reducer. AddTodo '+maxid)
      // return todos.push(Immutable.Map({
      //     task: action.text,
      //     isCompleted: false,
      //     id: maxid
      //   }))
      return [ ...todos, Immutable.Map({
          task: action.text,
          isCompleted: false,
          id: maxid
        })]
    // case 'ADD_TODOS':
    //   console.log('Todo reducer+++++++++++++ AddTodos')
    //   return [...todos, ...action.todos.filter((todo) => {
    //       console.log('Todo reducer. AddTodo '+todo.task)
    //       return _.find(todos, (todoint) => todoint.id === todo.id) === undefined
    //     })]
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
