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

require('./todoapp.scss');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_Component) {
    _inherits(TodoApp, _Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);

        return _this;
    }

    _createClass(TodoApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            TodoApp.fetchData(this.props.actions);
        }
    }, {
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

            var isBrowser = process.env.BROWSER;
            if (!isBrowser) {
                return _react2.default.createElement('div', null);
            }

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
        key: 'handleCreate',
        value: function handleCreate(event) {
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
            this.props.actions.createTodo(task);
            this.refs.createInput.value = '';
        }
    }, {
        key: 'validateInput',
        value: function validateInput(task) {
            if (!task) {
                return 'Please enter a task.';
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

            var filterOpen = event.target.checked;
            this.props.actions.filterTodosOpen(filterOpen);
        }
    }, {
        key: 'handleFilterClosed',
        value: function handleFilterClosed(event) {

            var filterClosed = event.target.checked;
            this.props.actions.filterTodosClosed(filterClosed);
        }
    }, {
        key: 'validateInput',
        value: function validateInput(task) {
            if (!task) {
                return 'Please enter a task.';
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
            actions.retrieveUserTodosDispatcher();
        }
    }]);

    return TodoApp;
}(_react.Component);

exports.default = TodoApp;