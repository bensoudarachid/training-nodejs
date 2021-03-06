'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _fileuploadinput = require('components/shared/fileuploadinput');

var _fileuploadinput2 = _interopRequireDefault(_fileuploadinput);

var _todoimage = require('./todoimage');

var _todoimage2 = _interopRequireDefault(_todoimage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./todoslistitem.scss');

var TodosListItem = function (_React$Component) {
    _inherits(TodosListItem, _React$Component);

    function TodosListItem(props) {
        _classCallCheck(this, TodosListItem);

        var _this = _possibleConstructorReturn(this, (TodosListItem.__proto__ || Object.getPrototypeOf(TodosListItem)).call(this, props));

        _this.state = {
            isEditing: false
        };
        return _this;
    }

    _createClass(TodosListItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-grid todoslistitem blockborder center-items' },
                    this.renderTaskForm()
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            componentHandler.upgradeDom();
            var dialogInputs = document.querySelectorAll('.mdl-textfield');
            for (var i = 0, l = dialogInputs.length; i < l; i++) {
                dialogInputs[i].MaterialTextfield.checkDirty();
            }
            var index = this.props.ind;
            if (!this.state.hadFocus && document.getElementById('taskInput' + index)) {
                document.getElementById('taskInput' + index).focus();
                this.setState({
                    hadFocus: true
                });
            }
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            console.log('todos-list-item, please delete todo ' + this.props.todo.get('id'));
            this.props.actions.deleteTodoSrv(this.props.todo);
        }
    }, {
        key: 'handleUploadFile',
        value: function handleUploadFile(event) {
            event.preventDefault();
            var idToken = _reactCookie2.default.load('jwt');
            var taskid = this.props.todo.get('id');
            var fileinput = document.querySelector('#uploadfile-' + taskid);
            console.log('todos-list-item, upload todo file ' + fileinput.files[0]);
            var todo = this.props.todo.set('mama', 'i m here');

            this.props.actions.uploadTodoFileDispatcher(todo, this.props.todo, fileinput.files[0]);
        }
    }, {
        key: 'handleToggle',
        value: function handleToggle(event) {
            console.log('todos-list-item, toggle todo ' + this.props.todo.get('id'));
            event.preventDefault();
            var todo = this.props.todo.set('completed', !this.props.todo.get('completed'));
            this.setState({
                isEditing: false
            });
            this.props.actions.updateTodoDispatcher(todo, this.props.todo);
        }
    }, {
        key: 'onSaveClick',
        value: function onSaveClick(event) {
            console.log('todos-list-item, just save ' + this.props.todo.get('id'));
            event.preventDefault();
            var newTask = undefined;
            newTask = this.refs.taskInput.value;
            var todo = this.props.todo.set('task', newTask);
            this.setState({
                isEditing: false
            });
            this.props.actions.updateTodoDispatcher(todo, this.props.todo);
        }
    }, {
        key: 'onEditClick',
        value: function onEditClick() {

            this.setState({
                isEditing: true,
                hadFocus: false
            });
        }
    }, {
        key: 'onCancelClick',
        value: function onCancelClick() {

            this.setState({
                isEditing: false
            });
        }
    }, {
        key: 'renderTaskForm',
        value: function renderTaskForm() {
            var idToken = _reactCookie2.default.load('jwt');

            var task = this.props.todo.get('task');
            var taskid = this.props.todo.get('id');
            var index = this.props.ind;
            var completed = this.props.todo.get('completed');
            var error = this.props.todo.get('error');
            var taskStyle = {
                color: completed ? 'green' : 'red',
                cursor: 'pointer'
            };
            var loading = this.props.todo.get('loading');
            var isUploading = this.props.todo.get('isUploading');

            var disabled = loading || error;
            var errorClass = error ? 'error' : '';
            var loadingClass = loading ? 'center-items loading' : '';
            var loadingContent = loading ? _react2.default.createElement('div', { className: 'loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate' }) : '';

            return _react2.default.createElement(
                'div',
                {
                    className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                this.state.isEditing ? _react2.default.createElement(
                    'div',
                    {
                        className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                    _react2.default.createElement(
                        'form',
                        {
                            className: 'pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone',
                            onSubmit: this.onSaveClick.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mdl-textfield tf mdl-js-textfield' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', defaultValue: task,
                                    name: 'taskInput' + index, ref: 'taskInput', id: 'taskInput' + index }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label',
                                        htmlFor: 'taskInput' + index },
                                    'Task...'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items',
                                onClick: this.onCancelClick.bind(this), disabled: disabled },
                            'Cancel'
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items',
                                onClick: this.onSaveClick.bind(this), disabled: disabled },
                            'Save'
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    {
                        className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: errorClass },
                            error
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: loadingClass },
                            loadingContent
                        )
                    ),
                    _react2.default.createElement(
                        'form',
                        {
                            className: 'pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone',
                            onSubmit: this.onSaveClick.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone',
                                style: taskStyle, onClick: this.handleToggle.bind(this) },
                            _react2.default.createElement(
                                'p',
                                null,
                                task
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items',
                                onClick: this.handleDelete.bind(this), disabled: disabled },
                            'Delete'
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items',
                                onClick: this.onEditClick.bind(this), disabled: disabled },
                            'Edit'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                    _react2.default.createElement(
                        'form',
                        {
                            className: 'pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone',
                            onSubmit: this.handleUploadFile.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone' },
                            _react2.default.createElement(_fileuploadinput2.default, { id: 'uploadfile-' + this.props.todo.get('id'), disabled: disabled,
                                actions: this.props.actions })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone' },
                            _react2.default.createElement(_todoimage2.default, { ref: 'uploadcomp', taskid: taskid, isUploading: isUploading }),
                            _react2.default.createElement(
                                'button',
                                {
                                    className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items',
                                    type: 'submit', value: 'Upload', disabled: disabled },
                                'Upload'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TodosListItem;
}(_react2.default.Component);

exports.default = TodosListItem;