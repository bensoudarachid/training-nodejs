function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let todoReducer = function(todos = [], action) {
  // console.log('Todo reducer. switch')
  switch (action.type) {
    case 'ADD_TODO':
      // console.log('Todo reducer. AddTodo '+action.text)
      return [ ...todos, {
          task: action.text,
          isCompleted: false,
          id: getId(todos)
        }]
    case 'ADD_TODOS':
      // console.log('Todo reducer. AddTodos ')
      // _.find(this.state.todos, (todo) => todo.task === task)
      // return [...todos, ...action.todos]
      // return [...todos, ...action.todos.map((todo) => {
      //   return _.find(todos, (todoint) => todoint.id === todo.id) === undefined ? 
      //     todo : undefined
      //   })]
      return [...todos, ...action.todos.filter((todo) => {
          return _.find(todos, (todoint) => todoint.id === todo.id) === undefined
        })]
    case 'TODOS_LOADED':
      console.log('todos reducer. todos loaded')
      return action.todos
    case 'SAVE_TODO':
      console.log('Todo reducer. SaveTodo id='+action.id+'task = '+action.text)
      return todos.map((todo) => {
        return todo.id === action.id ? 
          Object.assign({}, todo, {
          task: action.text,
          // id: action.id,
        }) : todo
      })

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ? 
          Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })
    default: 
      return todos;
  }
}

export default todoReducer
