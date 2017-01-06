'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createTodo = require('./create-todo');

var _createTodo2 = _interopRequireDefault(_createTodo);

var _todosFilter = require('./todos-filter');

var _todosFilter2 = _interopRequireDefault(_todosFilter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todosList = require('./todos-list');

var _todosList2 = _interopRequireDefault(_todosList);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _betterReactSpinkit = require('better-react-spinkit');

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import _ from 'lodash'


if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser');
  require('./todoapp.scss');
}

// import Immutable from 'immutable'

// require('es6-promise').polyfill();
// require('isomorphic-fetch');


// const todos = [
//   {
//     task: 'make react tuto',
//     isCompleted: false
//   },
//   {
//     task: 'eat dinner',
//     isCompleted: true
//   },
//   {
//     task: 'Beat it',
//     isCompleted: false
//   }
// ];
// import 'node-fetch'

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    console.log('todo list. Mixin in constructor');
    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    // const {auth} = this.props
    if (process.env.BROWSER && !_this.props.auth.get('isAuthenticated')) {
      console.log('todoapp start login process');
      _this.props.actions.loginProcessStart('No access rights!');
    }
    return _this;
  }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     todos
  //   }
  // }
  // static fetchData () {  
  //   console.log('todoapp. load todos')
  //   var test='This is abbas in the hood!'

  //   fetch('/api/todoslist', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Content-Type': 'application/json'
  //     },
  //     // body: 'param=value' //if no json in header
  //     body: JSON.stringify({
  //       testparam: test
  //     })
  //   }).then( response => response.json())
  //     .then(data => {
  //       // console.log(data.todos)
  //       // this.props.actions.addTodos(data.todos);
  //       return this.props.actions.loadTodos(data);
  //     })
  //     .catch(err => console.log('Booooo' + err));
  // }

  //createTodo={this.props.actions.createTodo}
  // {this.props.todoappmap.get('filterOpen')}
  // toggleTask={this.toggleTask.bind(this)}
  // saveTask={this.saveTask.bind(this)}
  // deleteTask={this.deleteTask.bind(this)}

  _createClass(TodoApp, [{
    key: 'render',
    value: function render() {

      var isBrowser = process.env.BROWSER; //typeof window !== 'undefined';
      if (!isBrowser) {
        // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
        return _react2.default.createElement('div', null);
      }
      // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
      var auth = this.props.auth;
      // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
      //  alert("Hi "+test);
      // createTask={this.createTask.bind(this)}
      //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
      // deleteTask={this.deleteTask.bind(this)}

      return _react2.default.createElement(
        'div',
        { className: 'todoapp' },
        !auth.get('isAuthenticated') && _react2.default.createElement(
          'div',
          null,
          'No right access here. Please login'
        ),
        auth.get('isAuthenticated') && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'To dos. Please proceed now'
          ),
          _react2.default.createElement(_todosFilter2.default, { filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions }),
          _react2.default.createElement(_createTodo2.default, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions }),
          _react2.default.createElement(_todosList2.default, { todos: this.props.todoappmap.get('todos'), filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions })
        )
      );
    }
    // saveTask(oldTask, newTask) {
    //   const foundTodo = _.find(this.state.todos, (todo) => todo.task === oldTask);
    //   foundTodo.task = newTask;

    //   this.setState({
    //     todos: this.state.todos
    //   })
    // }
    // deleteTask(taskToDelete) {
    //   //        console.log('delete'+taskToDelete);
    //   _.remove(this.state.todos, (todo) => todo.task === taskToDelete);
    //   this.setState({
    //     todos: this.state.todos
    //   });
    // }
    // toggleTask(task) {
    //   const foundTodo = this.state.todos.find((todo) =>  todo.get('task') === task)
    //   // const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
    //   foundTodo.isCompleted = !foundTodo.isCompleted;
    //   this.setState({
    //     todos: this.state.todos
    //   });
    // }

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('todoappjs mounted');
      TodoApp.fetchData(this.props.actions);
    }
    //This is a necessary call when component is fetched on server side

  }], [{
    key: 'fetchData',
    value: function fetchData(actions) {
      actions.retrieveUserTodosDispatcher();
    }
    // static fetchDataOld(actions) {
    //   var headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Type': 'application/json'
    //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    //   // 'Authorization': 'Bearer '+id_token
    //   }
    //   var id_token = cookie.load('jwt')
    //   if (id_token != '') {
    //     headers.Authorization = 'Bearer ' + id_token
    //     console.log('Ya todos fetchData.  auth id token: ' + id_token)
    //   }
    //   else
    //     console.log('Ya todos fetchData. Wahnsinn: no id_token')
    //   var test = 'This is abbas in the hood!'

    //   return fetch('http://127.0.0.1:8081/api/todos/2373'
    //     , {
    //       method: 'GET',
    //       headers
    //     // headers: {
    //     //   'Content-Type': 'application/x-www-form-urlencoded',
    //     //   'Content-Type': 'application/json',
    //     //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    //     //   'Authorization': 'Bearer '+id_token
    //     // }
    //     // ,
    //     // body: JSON.stringify({
    //     //   testparam: test
    //     // })
    //     // body: 'testparam='+test //if no json in header
    //     }
    //   )
    //     .then(response => response.json().then(data => {
    //       console.log('Response Status = ' + response.status)
    //       return ({
    //         status: response.status,
    //         data
    //       })
    //     }
    //     ))
    //     .then(
    //       ({status, data}) => {
    //         if (status === 401) {
    //           actions.receiveLogout()
    //         } else if (status >= 400) {
    //           var error = data
    //           console.log('Status looks bad. ' + status + '. error message = ' + error.message)
    //           actions.receiveLogout()
    //         } else if (data.error) {
    //           // var error = data.error
    //           var errorDescription = data.error_description
    //           console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
    //           actions.receiveLogout()
    //         } else {
    //           actions.loadTodos(data)
    //         }
    //       })
    //     // .then(data => {
    //     //     console.log('todoapp. data fetch ')
    //     //     console.log(data)
    //     //     if (data.error == 'invalid_token')
    //     //       actions.receiveLogout()
    //     //     else
    //     //       actions.loadTodos(data)
    //     //     // actions.addTodos(data.todos)
    //     // })
    //     .catch(err => console.log('Hooooo. Status = ' + status + ', error = ' + err))
    // }


    // static fetchDataOrig(actions) {  
    //   console.log('todos fetchData. Do nothing'+ JSON.stringify({
    //       param: 'abbas'
    //     }))
    //   var test='This is abbas in the hood!'
    //   return fetch('http://127.0.0.1:8081/api/todos'
    //     ,{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Type': 'application/json' 
    //       },
    //       // body: 'testparam='+test //if no json in header
    //       body: JSON.stringify({
    //         testparam: test
    //       })
    //     }
    //   )
    //   .then(response => response.json())
    //   .then(data => {
    //       console.log('todoapp. component mounted ' +data.todos)
    //       actions.addTodos(data.todos)
    //   })
    //   .catch(err => console.log('Hooooo' + err))
    // }

  }]);

  return TodoApp;
}(_react.Component);

exports.default = TodoApp;