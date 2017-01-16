'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _fileuploadinput = require('../../../components/shared/fileuploadinput');

var _fileuploadinput2 = _interopRequireDefault(_fileuploadinput);

var _actions = require('../../../services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _trainingimage = require('./trainingimage');

var _trainingimage2 = _interopRequireDefault(_trainingimage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'


if (process.env.BROWSER) {
  require('./traininglistitem.scss');
}

var TrainingsListItem = function (_React$Component) {
  _inherits(TrainingsListItem, _React$Component);

  function TrainingsListItem(props) {
    _classCallCheck(this, TrainingsListItem);

    var _this = _possibleConstructorReturn(this, (TrainingsListItem.__proto__ || Object.getPrototypeOf(TrainingsListItem)).call(this, props));

    _this.state = {
      isEditing: false
    };
    return _this;
  }

  _createClass(TrainingsListItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mdl-grid trainingslistitem blockborder center-items' },
          this.renderTaskForm()
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      // this.loadImage()
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      var dialogInputs = document.querySelectorAll('.mdl-textfield');
      for (var i = 0, l = dialogInputs.length; i < l; i++) {
        // if( dialogInputs[i].MaterialTextfield != undefined )
        dialogInputs[i].MaterialTextfield.checkDirty();
        // else
        //   console.log('trainingslistitem.js. dialogInputs[i] is undefined')
      }
      var index = this.props.ind;
      // console.log('trainingslistitem.js. this.props.ind '+this.props.ind)
      if (!this.state.hadFocus && document.getElementById('titleInput' + index)) {
        document.getElementById('titleInput' + index).focus();
        this.setState({
          hadFocus: true
        });
      }
      // this.imageload()
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      // console.log('trainings-list-item, please delete training ' + this.props.training.get('id'))
      this.props.actions.deleteTrainingSrv(this.props.training);
    }
  }, {
    key: 'handleUploadFile',
    value: function handleUploadFile(event) {
      event.preventDefault();
      // console.log('trainings-list-item, upload training file '+'#uploadfile-'+this.props.training.get('id'))
      // var fileinput = document.querySelector('input[type="file"]')
      var idToken = _reactCookie2.default.load('jwt');
      var trainingid = this.props.training.get('id');
      var fileinput = document.querySelector('#uploadfile-' + trainingid);
      console.log('trainings-list-item, upload training file ' + fileinput.files[0]);
      var training = this.props.training.set('mama', 'i m here');

      this.props.actions.uploadTrainingFileDispatcher(training, this.props.training, fileinput.files[0]);
      // console.log('trainings-list-item, set src to ' + actions.apiurl+'/api/training/img/'+'12'+'?access_token='+ idToken)


      // document.getElementById('traininglistitemimg'+trainingid).setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)
      // document.getElementById('traininglistitemimg'+trainingid).setAttribute('src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)

      // var imgwrap = document.getElementById('imgwrap'+trainingid)
      // imgwrap.innerHTML = '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>'+imgwrap.innerHTML
      // setTimeout(function() {
      //   console.log('trainings-list-item, set data-src')
      //   // this.setState({
      //   //   imageLoaded: undefined
      //   // })
      //   // document.getElementById('traininglistitemimg'+trainingid).removeAttribute('src')
      //   document.getElementById('traininglistitemimg'+trainingid).setAttribute('src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)
      //   // this.refs.uploadcomp.forceUpdate()
      // }.bind(this),(5000) )
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle(event) {
      console.log('trainings-list-item, toggle training ' + this.props.training.get('id'));
      event.preventDefault();
      var training = this.props.training.set('completed', !this.props.training.get('completed'));
      this.setState({
        isEditing: false
      });
      this.props.actions.updateTrainingDispatcher(training, this.props.training);
    }
  }, {
    key: 'onSaveClick',
    value: function onSaveClick(event) {
      console.log('trainings-list-item, just save ' + this.props.training.get('id'));
      event.preventDefault();
      // const oldTask = this.props.title;
      var newTitle = undefined;
      newTitle = this.refs.titleInput.value;
      // this.props.saveTask(oldTask, newTitle);
      // this.setState({
      //   isEditing: false
      // });
      var training = this.props.training.set('title', newTitle);
      this.setState({
        isEditing: false
      });
      this.props.actions.updateTrainingDispatcher(training, this.props.training);
    }
  }, {
    key: 'onEditClick',
    value: function onEditClick() {

      this.setState({
        isEditing: true,
        hadFocus: false
      });
      // console.log('Click Edit' + this.state.isEditing)
    }

    // onChangeImageClick() {
    //   console.log('traininglistitemjs.Change Image'+this.refs.uploadInput.value)
    //   event.preventDefault()
    //   // const oldTask = this.props.title;
    //   // const newTitle = this.refs.uploadInput.value
    //   // this.props.saveTask(oldTask, newTitle);
    //   // this.setState({
    //   //   isEditing: false
    //   // });
    //   // const training = this.props.training.set('title', newTask)
    //   // this.props.actions.updateTrainingDispatcher(training, this.props.training)
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
    key: 'renderTaskForm',
    value: function renderTaskForm() {
      var idToken = _reactCookie2.default.load('jwt');

      // console.log('training list item. Render ------------------'+this.props.training.get('title'))
      // console.log(this.props.training)
      var title = this.props.training.get('title');
      var trainingid = this.props.training.get('id');
      var index = this.props.ind;
      // console.log('traininglistitm index = '+ this.props.ind)
      var completed = this.props.training.get('completed');
      var error = this.props.training.get('error');
      // const id = this.props.training.get('id');
      var titleStyle = {
        color: completed ? 'green' : 'red',
        cursor: 'pointer'
      };
      var loading = this.props.training.get('loading');
      var isUploading = this.props.training.get('isUploading');
      // console.log('traininglistitem. isUploading'+isUploading)

      var disabled = loading || error;
      var errorClass = error ? 'error' : '';
      var loadingClass = loading ? 'center-items loading' : '';
      var loadingContent = loading ? _react2.default.createElement('div', { className: 'loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate' }) : '';

      return _react2.default.createElement(
        'div',
        { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
        this.state.isEditing ? _react2.default.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
          _react2.default.createElement(
            'form',
            { className: 'pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone', onSubmit: this.onSaveClick.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
              _react2.default.createElement(
                'div',
                { className: 'mdl-textfield tf mdl-js-textfield' },
                _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', defaultValue: title, name: 'titleInput' + index, ref: 'titleInput', id: 'titleInput' + index }),
                _react2.default.createElement(
                  'label',
                  { className: 'mdl-textfield__label', htmlFor: 'titleInput' + index },
                  'Title...'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
            _react2.default.createElement(
              'button',
              { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items', onClick: this.onCancelClick.bind(this), disabled: disabled },
              'Cancel'
            ),
            _react2.default.createElement(
              'button',
              { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items', onClick: this.onSaveClick.bind(this), disabled: disabled },
              'Save'
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
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
            { className: 'pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone', onSubmit: this.onSaveClick.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone', style: titleStyle, onClick: this.handleToggle.bind(this) },
              _react2.default.createElement(
                'p',
                null,
                title
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
            _react2.default.createElement(
              'button',
              { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items', onClick: this.handleDelete.bind(this), disabled: disabled },
              'Delete'
            ),
            _react2.default.createElement(
              'button',
              { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items', onClick: this.onEditClick.bind(this), disabled: disabled },
              'Edit'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
          _react2.default.createElement(
            'form',
            { className: 'pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone', onSubmit: this.handleUploadFile.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone' },
              _react2.default.createElement(_fileuploadinput2.default, { id: 'uploadfile-' + this.props.training.get('id'), disabled: disabled, actions: this.props.actions })
            ),
            _react2.default.createElement(
              'div',
              { className: 'mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone' },
              _react2.default.createElement(_trainingimage2.default, { ref: 'uploadcomp', trainingid: trainingid, isUploading: isUploading }),
              _react2.default.createElement(
                'button',
                { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items', type: 'submit', value: 'Upload', disabled: disabled },
                'Upload'
              )
            )
          )
        )
      );
    }
  }]);

  return TrainingsListItem;
}(_react2.default.Component);

// }
// else 
//   return (
//     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
//       <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
//         <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={titleStyle} onClick={this.handleToggle.bind(this)}><p>{title}</p></div>
//       </form>      
//       <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
//       </div>
//       {uploadBlock}
//     </div>
// )


exports.default = TrainingsListItem;