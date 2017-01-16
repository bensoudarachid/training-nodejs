'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cookie from 'react-cookie'
require('es6-promise').polyfill(); // import _ from 'lodash'

require('isomorphic-fetch');

// function getId(todos) {
//   return todos.reduce((maxId, todo) => {
//       return Math.max(todo.get('id'), maxId)
//     }, -1) + 1
// }

// function getFilteredItems(todos,filteropen,filterclosed) {
//     if (todos) {
//       return todos.filter(
//         (item) => { 
//             console.log('*****************')
//             // console.log('task '+item.get('task')+' is completed 1: '+item.get('completed') +' passing? '+
//             //     (item.get('completed') === 'true' && this.props.filter === 'closed')) 
//             // console.log('task '+item.get('task')+' is not completed: '+ !item.get('completed')  +'. Filter: '+this.props.filteropen+'. Passing? '+
//             //     !(item.get('completed')  && this.props.filterclosed ) )
//             return item.get('completed') && filterclosed  ||
//                 !item.get('completed') && filteropen 
//         }
//         // (item) => item.get('completed') === 'true' && this.props.filter === 'closed' ||
//         //   item.get('completed') === 'false' && this.props.filter === 'open' ||
//         //   this.props.filter === 'all'
//       );
//     }
//     return Immutable.List([]);
//   }

var todoReducer = function todoReducer() {
  var todoappmap = arguments.length <= 0 || arguments[0] === undefined ? new _immutable2.default.Map({
    filterOpen: true,
    filterClosed: true,
    // loadTodoImages: false,
    todos: _immutable2.default.List([])
  }) : arguments[0];
  var action = arguments[1];

  // let todoReducer = function(todoappmap = new Immutable.Map({}), action) {
  // console.log('Todo reducer. is Map ' + (todoappmap instanceof Immutable.Map) )
  if (!(todoappmap instanceof _immutable2.default.Map)) {
    console.log('Todo reducer. Init Map. Need to find out why it s not a map');
    todoappmap = new _immutable2.default.Map({
      filterOpen: true,
      filterClosed: true,
      // loadTodoImages: false,
      todos: _immutable2.default.List([])
    });
  }
  // console.log('Todo reducer. Filter open: ' + todoappmap.get('filterOpen'))
  var todos = todoappmap.get('todos');
  var index = void 0;
  switch (action.type) {
    case 'CREATE_TODO_INIT':
      // console.log('todo reducer. init create todo : ')
      // console.log(action.todo)
      todoappmap = todoappmap.set('todos', todos.push(action.todo));
      return todoappmap;
    case 'LOADING_TODO':
      index = todos.findIndex(function (item) {
        return item.get('id') === action.todo.get('id');
      });
      todo = action.todo.set('loading', true);
      todos = todos.set(index, todo);
      todoappmap = todoappmap.set('todos', todos);
      return todoappmap;
    case 'UPLOADING_TODO_IMAGE':
      index = todos.findIndex(function (item) {
        return item.get('id') === action.todo.get('id');
      });
      // console.log('todoreducer uploading image. todo index = '+index)
      var todo = action.todo.set('isUploading', action.isUploading);
      console.log('todoreducer uploading image: ' + todo.get('isUploading'));
      todos = todos.set(index, todo);
      todoappmap = todoappmap.set('todos', todos);
      // console.log('todoreducer uploading image. todo isUploading from todos = '+todos.get(index).get('isUploading') )
      return todoappmap;
    // case 'FINISH_LOADING_TODO_FILE':
    //   todoappmap = todoappmap.set('loadTodoImages', false)
    //   return todoappmap

    case 'REJECT_TODO_INIT':
      // console.log('todo reducer. reject create todo : '+action.text)
      // console.log(action.text)
      todos = todos.filter(function (element) {
        return element !== action.representTodo;
      });
      todoappmap = todoappmap.set('todos', todos);
      return todoappmap;
    case 'ADD_TODO':
      console.log('todo reducer. add todo : completed? ' + action.todo.get('completed'));
      // console.log(action.todo)
      // console.log('todo reducer. add todo, remove representant : ')
      // console.log(action.representTodo)
      index = todos.findIndex(function (item) {
        return item === action.representTodo;
      });
      todos = todos.set(index, action.todo);
      // todos = todos.filter(function(element) {
      //   return element !== action.representTodo
      // }).push(action.todo)
      todoappmap = todoappmap.set('todos', todos);
      return todoappmap;
    case 'TODOS_LOADED':
      // console.log('todos reducer. todos loaded')
      todoappmap = todoappmap.set('todos', _immutable2.default.List(action.todos.map(function (todo) {
        return _immutable2.default.Map(todo);
      })));
      return todoappmap;
    // return action.todos
    case 'SAVE_TODO':
      console.log('Todo reducer. SaveTodo id=' + action.id + 'task = ' + action.text);
      todoappmap = todoappmap.set('todos', todos.map(function (todo) {
        return todo.get('id') === action.id ? todo.set('task', action.text) : todo;
      }));
      return todoappmap;
    case 'COMPLETE_TODO':
      todoappmap = todoappmap.set('todos', todos.map(function (todo) {
        return todo.id === action.id ? Object.assign({}, todo, {
          completed: !todo.completed
        }) : todo;
      }));
      return todoappmap;

    case 'UPDATE_TODO':
      console.log('todo reducer. update todo : completed? ' + action.todo.get('completed'));
      index = todos.findIndex(function (item) {
        return item.get('id') === action.todo.get('id');
      });
      todoappmap = todoappmap.set('todos', todos.set(index, action.todo));
      todoappmap = todoappmap.set('loadTodoImages', true);
      return todoappmap;
    // case 'UPDATE_TODO_FILE':
    //   console.log('todo reducer. Upload file')
    //   todoappmap = todoappmap.set('loadTodoImages', false)
    //   return todoappmap
    case 'DELETE_TODO':
      todoappmap = todoappmap.set('todos', todos.filter(function (todo) {
        return todo.get('id') !== action.id;
      }));
      return todoappmap;
    case 'FILTER_TODOS':
      todoappmap = todoappmap.set('todos', todos.filter(function (todo) {
        return action.filterTodos === undefined || todo.get('completed') && action.filterTodos === 'closed' || todo.get('open') && action.filterTodos === 'open';
      }));
      return todoappmap;
    case 'FILTER_TODOS_OPEN':
      todoappmap = todoappmap.set('filterOpen', action.filterOpen);
      // todoappmap.set('todos',  todos.push(Immutable.Map({
      //   id: -1,
      //   task: 'ok'
      // })))
      // console.log('todo reducer. todoappmap.filterOpen' + todoappmap.filterOpen)
      return todoappmap;
    case 'FILTER_TODOS_CLOSED':
      // todoappmap.todos = todos.map((todo) => {
      //   return todo.id !== null ? todo: null;
      // })
      // todoappmap.todos = todos.push(Immutable.Map({
      //   id: -1,
      //   task: 'ok'
      // }))
      // todoappmap.filterClosed = action.filterClosed
      todoappmap = todoappmap.set('filterClosed', action.filterClosed);
      return todoappmap;
    default:
      return todoappmap;

    // default:
    //   return todos;
  }
};

exports.default = todoReducer;