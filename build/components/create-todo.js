'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import _ from 'lodash'


var CreateTodo = function (_React$Component) {
  _inherits(CreateTodo, _React$Component);

  function CreateTodo(props) {
    _classCallCheck(this, CreateTodo);

    var _this = _possibleConstructorReturn(this, (CreateTodo.__proto__ || Object.getPrototypeOf(CreateTodo)).call(this, props));

    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass(CreateTodo, [{
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
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleCreate.bind(this) },
        _react2.default.createElement('input', { type: 'text', placeholder: 'What do I need to do?', ref: 'createInput' }),
        _react2.default.createElement(
          'button',
          null,
          'Create'
        ),
        this.renderError()
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
  }]);

  return CreateTodo;
}(_react2.default.Component);

exports.default = CreateTodo;