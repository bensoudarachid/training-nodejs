'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _betterReactSpinkit = require('better-react-spinkit');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _actions = require('../redux/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Immutable from 'immutable'


if (process.env.BROWSER) {
  require('./todos-list-item.scss');
}

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
    key: 'renderTaskSection',
    value: function renderTaskSection() {
      // const {task, isCompleted} = this.props;
      // const {todo} = this.props;
      // console.log('todo list item. Render ------------------'+this.props.todo.get('task'))
      // console.log(this.props.todo)
      var task = this.props.todo.get('task');
      var completed = this.props.todo.get('completed');
      // const id = this.props.todo.get('id');
      // const id = this.props.todo.get('id');
      var taskStyle = {
        // color: id===-1? 'black' : (isCompleted ? 'green' : 'red'),
        color: completed ? 'green' : 'red',
        cursor: 'pointer'
      };

      if (this.state.isEditing) {
        return _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'form',
            { onSubmit: this.onSaveClick.bind(this) },
            _react2.default.createElement('input', { type: 'text', defaultValue: task, ref: 'editInput' })
          )
        );
      }

      return _react2.default.createElement(
        'td',
        { style: taskStyle, onClick: this.handleToggle.bind(this) },
        task
      );
    }

    // renderActionsSection() {
    //   if (this.state.isEditing) {
    //     return (
    //       <td>
    //           <button onClick={this.onSaveClick.bind(this)}>Save this</button>
    //           <button onClick={this.onCancelClick.bind(this) }>Cancel</button>
    //       </td>
    //       );
    //   }

    //   return (
    //     <td>
    //           <button onClick={this.onEditClick.bind(this)}>Edit</button>
    //           <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
    //     </td>
    //     );
    // }
    // <form method='post' action={actions.appbasename+'/api/todo/12345/imageupload/'} enctype='multipart/form-data'>
    //<input type='button' onClick={this.onChangeImageClick.bind(this)} value='3aSend' />

  }, {
    key: 'getActions',
    value: function getActions() {
      //<Spinner spinnerName='three-bounce' noFadeIn/> <Pulse size={20} color='blue'/>

      var loading = this.props.todo.get('loading');
      var error = this.props.todo.get('error');
      if (loading) return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(_betterReactSpinkit.ThreeBounce, { size: 15, duration: '0.3' })
      );else if (this.state.isEditing) return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'button',
          { className: 'savebutton', onClick: this.onSaveClick.bind(this) },
          'Save'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onCancelClick.bind(this) },
          'Cancel'
        )
      );else if (error) return _react2.default.createElement(
        'td',
        { style: {
            textAlign: 'center',
            color: '#FF0000'
          } },
        error
      );else return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'button',
          { className: 'editbutton active', onClick: this.onEditClick.bind(this) },
          'Edit'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleDelete.bind(this) },
          'Delete'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleUploadFile.bind(this) },
          _react2.default.createElement('input', { id: 'uploadfile-' + this.props.todo.get('id'), name: 'uploadfile', type: 'file', size: '50' }),
          _react2.default.createElement('input', { type: 'text', name: 'justtext', value: 'abibis' }),
          _react2.default.createElement(
            'button',
            { type: 'submit', value: 'Upload' },
            'Sir 3allah'
          )
        )
      );
    }
    // <input type="hidden" name='authorizationtoken' value={cookie.load('jwt')}/>
    // <form action={actions.appbasename+'/api/todo/'+this.props.todo.get('id')+'/fileupload/'} method="POST" encType="multipart/form-data">
    // <input type="hidden" name='authorizationtoken' value={cookie.load('jwt')}/>
    // <button onClick={this.handleDelete.bind(this)}>Delete todo</button></td>
    // <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button></td>
    // <button onClick={this.props.actions.deleteTodo(this.props.key)}>Delete</button></td>
    // <button onClick={this.handleDelete.bind(this)}>Delete todo</button>

  }, {
    key: 'render',
    value: function render() {
      // console.log('todos-list-item, todo inspect ' + util.inspect(this.props.todo, false, null))
      return _react2.default.createElement(
        'tr',
        { className: 'todoslistitem' },
        this.renderTaskSection(),
        this.getActions()
      );
    }

    // renderMe() {
    //   return (
    //     <tr>
    //       {this.renderTaskSection()}
    //       {this.renderActionsSection()}
    //     </tr>
    //     );
    // }

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
      console.log('todos-list-item, upload todo file ' + '#uploadfile-' + this.props.todo.get('id'));
      // var fileinput = document.querySelector('input[type="file"]')
      var fileinput = document.querySelector('#uploadfile-' + this.props.todo.get('id'));
      // console.log('todos-list-item, upload todo file ' + fileinput.files[0])
      var todo = this.props.todo.set('mama', 'i m here');
      this.props.actions.uploadTodoFileDispatcher(todo, this.props.todo, fileinput.files[0]);
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      console.log('todos-list-item, toggle todo ' + this.props.todo.get('id'));
      var todo = this.props.todo.set('completed', !this.props.todo.get('completed'));
      this.props.actions.updateTodoDispatcher(todo, this.props.todo);
    }
  }, {
    key: 'onEditClick',
    value: function onEditClick() {
      this.setState({
        isEditing: true
      });
      console.log('Click Edit' + this.state.isEditing);
    }

    // onChangeImageClick() {
    //   console.log('todolistitemjs.Change Image'+this.refs.uploadInput.value)
    //   event.preventDefault()
    //   // const oldTask = this.props.task;
    //   // const newTask = this.refs.uploadInput.value
    //   // this.props.saveTask(oldTask, newTask);
    //   // this.setState({
    //   //   isEditing: false
    //   // });
    //   // const todo = this.props.todo.set('task', newTask)
    //   // this.props.actions.updateTodoDispatcher(todo, this.props.todo)
    //   // this.setState({
    //   //   isEditing: false
    //   // })
    // }


  }, {
    key: 'onCancelClick',
    value: function onCancelClick() {
      this.setState({
        isEditing: false
      });
    }
  }, {
    key: 'onSaveClick',
    value: function onSaveClick(event) {
      console.log('todos-list-item, just save ' + this.props.todo.get('id'));
      event.preventDefault();
      // const oldTask = this.props.task;
      var newTask = this.refs.editInput.value;
      // this.props.saveTask(oldTask, newTask);
      // this.setState({
      //   isEditing: false
      // });
      var todo = this.props.todo.set('task', newTask);
      this.props.actions.updateTodoDispatcher(todo, this.props.todo);
      this.setState({
        isEditing: false
      });
    }
  }]);

  return TodosListItem;
}(_react2.default.Component);

exports.default = TodosListItem;