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

if (process.env.BROWSER) {
    require('./todocreate.scss');
}

var TodoCreate = function (_React$Component) {
    _inherits(TodoCreate, _React$Component);

    function TodoCreate(props) {
        _classCallCheck(this, TodoCreate);

        var _this = _possibleConstructorReturn(this, (TodoCreate.__proto__ || Object.getPrototypeOf(TodoCreate)).call(this, props));

        _this.state = {
            error: null
        };
        return _this;
    }

    _createClass(TodoCreate, [{
        key: 'render',
        value: function render() {
            var errorClass = this.state.error ? 'error' : '';

            return _react2.default.createElement(
                'div',
                { id: 'todocreate',
                    className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                    'form',
                    { className: 'mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone',
                        onSubmit: this.handleCreate.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-textfield tf mdl-js-textfield' },
                            _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'createInput', id: 'createInput' }),
                            _react2.default.createElement(
                                'label',
                                { className: 'mdl-textfield__label', htmlFor: 'createInput' },
                                'New todo...'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(
                            'button',
                            { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' },
                            'Create'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                    _react2.default.createElement(
                        'div',
                        { className: errorClass },
                        this.state.error
                    )
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
                setTimeout(function () {
                    this.setState({
                        error: null
                    });
                }.bind(this), 3000);
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
    }]);

    return TodoCreate;
}(_react2.default.Component);

exports.default = TodoCreate;