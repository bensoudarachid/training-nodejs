import Immutable from 'immutable'
require('es6-promise').polyfill()
require('isomorphic-fetch')

let todoReducer = function (todoappmap = new Immutable.Map({
    filterOpen: true,
    filterClosed: true,
    todos: undefined
}), action) {
    if (!(todoappmap instanceof Immutable.Map)) {
        console.log('Todo reducer. Init Map. Need to find out why it s not a map')
        todoappmap = new Immutable.Map({
            filterOpen: true,
            filterClosed: true,
<<<<<<< HEAD
            // loadTodoImages: false,
<<<<<<< HEAD
            todos: undefined//Immutable.List([])      
=======
            todos: undefined//Immutable.List([])
>>>>>>> 6e3ff02... webstorm big changes crash
=======

            todos: undefined
>>>>>>> f886b1f... clean code, remove console logs
        })
    }
    var todos = todoappmap.get('todos')
    let index
    switch (action.type) {
        case 'CREATE_TODO_INIT':


            todoappmap = todoappmap.set('todos', todos.push(action.todo))
            return todoappmap
        case 'LOADING_TODO':
            index = todos.findIndex(function (item) {
                return item.get('id') === action.todo.get('id')
            })
            todo = action.todo.set('loading', true)
            todos = todos.set(index, todo)
            todoappmap = todoappmap.set('todos', todos)
            return todoappmap
        case 'UPLOADING_TODO_IMAGE':
            index = todos.findIndex(function (item) {
                return item.get('id') === action.todo.get('id')
            })

            var todo = action.todo.set('isUploading', action.isUploading)
            console.log('todoreducer uploading image: ' + todo.get('isUploading') + ', todo id: ' + todo.get('id'))
            todos = todos.set(index, todo)
            todoappmap = todoappmap.set('todos', todos)
            return todoappmap
        case 'REJECT_TODO_INIT':
            todos = todos.filter(function (element) {
                return element !== action.representTodo
            })
            todoappmap = todoappmap.set('todos', todos)
            return todoappmap
        case 'ADD_TODO':
            console.log('todo reducer. add todo : completed? ' + action.todo.get('completed'))
            index = todos.findIndex(function (item) {
                return item === action.representTodo
            })
            todos = todos.set(index, action.todo)
            todoappmap = todoappmap.set('todos', todos)
            return todoappmap
        case 'TODOS_LOADED':
            todoappmap = todoappmap.set('todos', Immutable.List(action.todos.map((todo) => {
                return Immutable.Map(todo)
            })))
            return todoappmap
        case 'SAVE_TODO':
            console.log('Todo reducer. SaveTodo id=' + action.id + 'task = ' + action.text)
            todoappmap = todoappmap.set('todos', todos.map((todo) => {
                return todo.get('id') === action.id ?
                    todo.set('task', action.text)
                    : todo
            }))
            return todoappmap
        case 'COMPLETE_TODO':
            todoappmap = todoappmap.set('todos', todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {
                        completed: !todo.completed
                    }) : todo
            }))
            return todoappmap
        case 'UPDATE_TODO':
            console.log('todo reducer. update todo : completed? ' + action.todo.get('completed'))
            index = todos.findIndex(function (item) {
                return item.get('id') === action.todo.get('id')
            })
            todoappmap = todoappmap.set('todos', todos.set(index, action.todo))
            todoappmap = todoappmap.set('loadTodoImages', true)
            return todoappmap
        case 'DELETE_TODO':
            todoappmap = todoappmap.set('todos', todos.filter((todo) => {
                return todo.get('id') !== action.id
            }))
            return todoappmap
        case 'FILTER_TODOS':
            todoappmap = todoappmap.set('todos', todos.filter((todo) => {
                return action.filterTodos === undefined || todo.get('completed') && action.filterTodos === 'closed' ||
                    todo.get('open') && action.filterTodos === 'open'
            }))
            return todoappmap
        case 'FILTER_TODOS_OPEN':
            todoappmap = todoappmap.set('filterOpen', action.filterOpen)
            return todoappmap
        case 'FILTER_TODOS_CLOSED':
            todoappmap = todoappmap.set('filterClosed', action.filterClosed)
            return todoappmap
        default:
            return todoappmap
    }
}

export default todoReducer
