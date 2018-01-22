'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todocreate = require('./admin/todocreate');

var _todocreate2 = _interopRequireDefault(_todocreate);

var _todosfilter = require('./admin/todosfilter');

var _todosfilter2 = _interopRequireDefault(_todosfilter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todoslist = require('./admin/todoslist');

var _todoslist2 = _interopRequireDefault(_todoslist);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');

if (process.env.BROWSER) {
<<<<<<< HEAD
=======
    //  console.log('Appcomponent. environment is browser')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    require('./todoapp.scss');
}

var TodoApp = function (_Component) {
    _inherits(TodoApp, _Component);
<<<<<<< HEAD

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
=======

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);

        // if(process.env.BROWSER && !this.props.auth.get('isAuthenticated')){
        //   console.log('todoapp start login process')
        //   this.props.actions.loginProcessStart('No access rights!')
        // }
        // this.state = {
        //   error: null
        // }
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985

        return _this;
    }

    _createClass(TodoApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
<<<<<<< HEAD
            TodoApp.fetchData(this.props.actions);
        }
=======
            //console.log('todoappjs mounted. Call fetchdata')
            TodoApp.fetchData(this.props.actions);
            // componentHandler.upgradeDom()
        }

        //This is a necessary call when component is fetched on server side

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    }, {
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

<<<<<<< HEAD
            var isBrowser = process.env.BROWSER;
            if (!isBrowser) {
                return _react2.default.createElement('div', null);
            }

=======
            var isBrowser = process.env.BROWSER; //typeof window !== 'undefined';
            if (!isBrowser) {
                //      console.log('+++++++++++++++++++++++++Todoapp render. environment is server')
                return _react2.default.createElement('div', null);
            }
            //console.log('+++++++++++++++++++++++++Todoapp render. environment is browser')
            // const {auth} = this.props
            // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
            //  alert("Hi "+test);
            // createTask={this.createTask.bind(this)}
            //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
            // deleteTask={this.deleteTask.bind(this)}

            // {auth.get('loginProgress')?
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            return _react2.default.createElement(
                'div',
                null,
                !auth.get('isAuthenticated') ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Needs authentication'
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'todoapp' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-grid mdl-grid--no-spacing blockborder parampanel' },
                        _react2.default.createElement(_todosfilter2.default, { filteropen: this.props.todoappmap.get('filterOpen'),
                            filterclosed: this.props.todoappmap.get('filterClosed'),
                            actions: this.props.actions }),
                        _react2.default.createElement(_todocreate2.default, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions })
                    ),
                    _react2.default.createElement(_todoslist2.default, { todos: this.props.todoappmap.get('todos'),
                        filteropen: this.props.todoappmap.get('filterOpen'),
                        filterclosed: this.props.todoappmap.get('filterClosed'),
                        actions: this.props.actions })
                )
            );
        }
    }, {
<<<<<<< HEAD
        key: 'handleCreate',
        value: function handleCreate(event) {
=======
        key: 'renderOld',
        value: function renderOld() {
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
                { id: 'todoapp' },
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
                        _react2.default.createElement(_todosfilter2.default, { filteropen: this.props.todoappmap.get('filterOpen'),
                            filterclosed: this.props.todoappmap.get('filterClosed'),
                            actions: this.props.actions }),
                        _react2.default.createElement(_todocreate2.default, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions })
                    ),
                    _react2.default.createElement(_todoslist2.default, { todos: this.props.todoappmap.get('todos'),
                        filteropen: this.props.todoappmap.get('filterOpen'),
                        filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions })
                )
            );
        }
    }, {
        key: 'handleCreate',
        value: function handleCreate(event) {
            //    console.log('handle create call')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
            // this.props.createTask(task);
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            this.props.actions.createTodo(task);
            this.refs.createInput.value = '';
        }
    }, {
        key: 'validateInput',
        value: function validateInput(task) {
            if (!task) {
                return 'Please enter a task.';
<<<<<<< HEAD
=======
                // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD

            var filterOpen = event.target.checked;
=======
            // event.preventDefault();
            // const filterOpen = this.refs.filterOpen

            var filterOpen = event.target.checked; //filterAllInput.value
            // var filter = undefined
            // if (filterAllChecked)
            //   filter = 'all'
            // console.log('filter todos. Open. Checkbox'+ event.target.checked+', Filter '+filterOpen)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            this.props.actions.filterTodosOpen(filterOpen);
        }
    }, {
        key: 'handleFilterClosed',
        value: function handleFilterClosed(event) {
<<<<<<< HEAD

            var filterClosed = event.target.checked;
=======
            // event.preventDefault();
            // const filterOpen = this.refs.filterOpen

            var filterClosed = event.target.checked; //filterAllInput.value
            // var filter = undefined
            // if (filterAllChecked)
            //   filter = 'all'
            // console.log('filter todos. handle toggle all. Checkbox'+ event.target.checked+', Filter '+filterClosed)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            this.props.actions.filterTodosClosed(filterClosed);
        }
    }, {
        key: 'validateInput',
        value: function validateInput(task) {
            if (!task) {
                return 'Please enter a task.';
<<<<<<< HEAD
=======
                // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
        value: function fetchData(actions, params) {
<<<<<<< HEAD
=======
            //    console.log('Todo list fetch data for hostname='+require('util').inspect(hostname, false, null))
            //    console.log('todoappjs fetchdata'+util.inspect( params, false, null))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            actions.retrieveUserTodosDispatcher();
        }
    }]);

    return TodoApp;
}(_react.Component);

exports.default = TodoApp;