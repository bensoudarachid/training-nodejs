'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todocreate = require('./components/todocreate');

var _todocreate2 = _interopRequireDefault(_todocreate);

var _todosfilter = require('./components/todosfilter');

var _todosfilter2 = _interopRequireDefault(_todosfilter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todoslist = require('./components/todoslist');

var _todoslist2 = _interopRequireDefault(_todoslist);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import _ from 'lodash'
// import { ThreeBounce } from 'better-react-spinkit'


if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser');
  require('./todoapp.scss');
}

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
    _this.state = {
      error: null
    };

    return _this;
  }

  _createClass(TodoApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('todoappjs mounted');
      TodoApp.fetchData(this.props.actions);
    }
    //This is a necessary call when component is fetched on server side

  }, {
    key: 'render',


    // renderOld() {

    //   const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
    //   if (!isBrowser) {
    //     return <div/>
    //   }
    //   const {auth} = this.props
    //   return (
    //     <div className='todoapp'>
    //     {!auth.get('isAuthenticated') &&
    //     <div>
    //       No right access here. Please login
    //     </div>
    //     }
    //     {auth.get('isAuthenticated') &&
    //     <div>
    //       <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //         <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions}/>
    //         <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
    //       </div>
    //       <TodosList todos={this.props.todoappmap.get('todos')} filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')}  actions={this.props.actions}/>
    //     </div>
    //     }
    //     </div>
    //     )
    // }
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
            'div',
            { className: 'mdl-grid mdl-grid--no-spacing blockborder parampanel' },
            _react2.default.createElement(_todosfilter2.default, { filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions }),
            _react2.default.createElement(_todocreate2.default, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions })
          ),
          _react2.default.createElement(_todoslist2.default, { todos: this.props.todoappmap.get('todos'), filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions })
        )
      );
    }
  }, {
    key: 'handleCreate',
    value: function handleCreate(event) {
      //    console.log('handle create call')
      event.preventDefault();

      var createInput = this.refs.createInput;
      var task = createInput.value;
      var validateInput = this.validateInput(task);

      if (validateInput) {
        this.setState({
          error: validateInput
        });
        return;
      }

      this.setState({
        error: null
      });
      // this.props.createTask(task);
      this.props.actions.createTodo(task);
      this.refs.createInput.value = '';
    }
  }, {
    key: 'validateInput',
    value: function validateInput(task) {
      if (!task) {
        return 'Please enter a task.';
        // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
      } else if (this.props.todos.find(function (todo) {
        return todo.get('task') === task;
      })) {
        return 'Task already exists.';
      } else {
        return null;
      }
    }
  }, {
    key: 'handleFilterOpen',
    value: function handleFilterOpen(event) {
      // event.preventDefault();
      // const filterOpen = this.refs.filterOpen

      var filterOpen = event.target.checked; //filterAllInput.value
      // var filter = undefined
      // if (filterAllChecked)
      //   filter = 'all'
      // console.log('filter todos. Open. Checkbox'+ event.target.checked+', Filter '+filterOpen)
      this.props.actions.filterTodosOpen(filterOpen);
    }
  }, {
    key: 'handleFilterClosed',
    value: function handleFilterClosed(event) {
      // event.preventDefault();
      // const filterOpen = this.refs.filterOpen

      var filterClosed = event.target.checked; //filterAllInput.value
      // var filter = undefined
      // if (filterAllChecked)
      //   filter = 'all'
      // console.log('filter todos. handle toggle all. Checkbox'+ event.target.checked+', Filter '+filterClosed)
      this.props.actions.filterTodosClosed(filterClosed);
    }
  }, {
    key: 'validateInput',
    value: function validateInput(task) {
      if (!task) {
        return 'Please enter a task.';
        // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
      } else if (this.props.todos.find(function (todo) {
        return todo.get('task') === task;
      })) {
        return 'Task already exists.';
      } else {
        return null;
      }
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      if (!this.state.error) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: {
            color: 'red'
          } },
        this.state.error
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(actions) {
      actions.retrieveUserTodosDispatcher();
    }
  }]);

  return TodoApp;
}(_react.Component);

exports.default = TodoApp;