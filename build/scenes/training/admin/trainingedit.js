'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _fileuploadinput = require('../../../components/shared/fileuploadinput');

var _fileuploadinput2 = _interopRequireDefault(_fileuploadinput);

var _appimage = require('../../../components/shared/appimage');

var _appimage2 = _interopRequireDefault(_appimage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import TrainingImage from '../shared/trainingimage'


// import ConfirmationModal from './confirmationmodal'


// import _ from 'lodash'
var util = require('util');

if (process.env.BROWSER) {
  require('./trainingedit.scss');
}

var TrainingEdit = function (_React$Component) {
  _inherits(TrainingEdit, _React$Component);

  function TrainingEdit(props) {
    _classCallCheck(this, TrainingEdit);

    var _this = _possibleConstructorReturn(this, (TrainingEdit.__proto__ || Object.getPrototypeOf(TrainingEdit)).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);

    _this.state = {
      edittraining: undefined
    };

    return _this;
  }

  _createClass(TrainingEdit, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      //    console.log('trainingedit render!')
      var auth = this.props.auth;

      var training = this.props.trainingappmap.get('edittraining');
      // const confirmationActionFunction=this.props.trainingappmap.get('confirmationActionFunction')

      //    console.log('training edit render. training='+require('util').inspect(training, false, null))
      var isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching');
      var trainingEditError = this.props.trainingappmap.get('trainingEditError');
      var id = training == undefined ? '' : training.get('id');
      var title = training == undefined ? '' : training.get('title');
      // console.log('###################################Training edit render title ='+require('util').inspect(title, false, null))
      var secondaryTitle = training == undefined ? '' : training.get('secondaryTitle');
      var shortDescription = training == undefined ? '' : training.get('shortDescription');
      var longDescription = training == undefined ? '' : training.get('longDescription');
      var duration = training == undefined ? '' : training.get('duration');
      // const needDeleteConfirmation = training==undefined?'':training.get('needDeleteConfirmation')
      var needActionConfirmation = training == undefined ? '' : training.get('needDeleteConfirmation');

      var error = training == undefined ? '' : training.get('error');
      var errorClass = error ? 'error' : '';
      var saving = training == undefined ? '' : training.get('saving');
      if (saving == undefined) saving = false;
      // const isUploading = false
      var disabled = saving ? 'disabled' : '';
      // console.log('trainingedit render. saving = '+util.inspect( saving, false, null))

      // {training==undefined?
      // //if i use div instead of span, big parts of the view are not clickable!
      //   <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
      //   :
      // {training==undefined &&
      //   <span className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' style={{width:'55px',height:'55px'}}></span>
      // }
      // {training!=undefined &&

      // <span className="mdl-textfield__error" htmlFor='title'>{trainingEditError.get('title')}</span>
      // <input className={'mdl-textfield__input '+disabled} ref='longDescription' type='text' id='longDescription' name='longDescription' value={longDescription} onChange={this.handleLongDescriptionChange.bind(this)} disabled={saving}/>

      if (!auth.get('isAuthenticated')) return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Needs authentication'
        )
      );else if (training == undefined) return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap', style: { width: '55px', height: '55px' } })
      );else
        //<form onSubmit={(event) => this.handleClick(event)} noValidate>
        // <form action='/api/training/updatetraining' method="post" enctype="multipart/form-data">
        //<TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
        //         <input className={'mdl-textfield__input '+disabled} ref='shortDescription' type='text' id='shortDescription' name='shortDescription' value={shortDescription} onChange={this.handleShortDescriptionChange.bind(this)} disabled={saving}/>
        // <TrainingImage ref='uploadcomp' trainingid={id} isUploading={saving}/>
        // key={'trainingeditform'+Math.random()}
        // key={'trainingimage'+Math.random()} ref='uploadcomp'
        //training={this.props.trainingappmap.get('edittraining')}
        // {confirmationActionFunction &&
        // <div>
        //   <ConfirmationModal training={training} actions={this.props.actions}/>
        // </div>
        // }

        return _react2.default.createElement(
          'div',
          { className: 'trainingedit blockborder' },
          _react2.default.createElement(
            'form',
            { onSubmit: function onSubmit(event) {
                return _this2.handleSave(event);
              }, noValidate: true },
            _react2.default.createElement(
              'span',
              { className: 'mdl-grid mdl-grid--no-spacing' },
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                  'div',
                  { className: errorClass },
                  error
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                _react2.default.createElement(_appimage2.default, { api: 'training', imgid: id, isUploading: saving })
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput' },
                _react2.default.createElement(_fileuploadinput2.default, { id: 'uploadfile-' + id, disabled: disabled, actions: this.props.actions })
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                  'span',
                  { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                  _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'title', type: 'text', id: 'title', name: 'title', value: title, onChange: function onChange(event) {
                      return _this2.handleTitleChange(event);
                    }, disabled: saving }),
                  _react2.default.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'title' },
                    'Title'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'mdl-textfield__error', htmlFor: 'title' },
                    trainingEditError.get('title')
                  )
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                  'span',
                  { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                  _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'secondaryTitle', type: 'text', id: 'secondaryTitle', name: 'secondaryTitle', value: secondaryTitle, onChange: function onChange(event) {
                      return _this2.handleSecondaryTitleChange(event);
                    }, disabled: saving }),
                  _react2.default.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'secondaryTitle' },
                    'Secondary title'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'mdl-textfield__error', htmlFor: 'secondaryTitle' },
                    trainingEditError.get('secondaryTitle')
                  )
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                  'span',
                  { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                  _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'shortDescription', type: 'text', id: 'shortDescription', name: 'shortDescription', value: shortDescription, onChange: function onChange(event) {
                      return _this2.handleShortDescriptionChange(event);
                    }, disabled: saving }),
                  _react2.default.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'shortDescription' },
                    'Short description'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'mdl-textfield__error', htmlFor: 'shortDescription' },
                    trainingEditError.get('shortDescription')
                  )
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                  'span',
                  { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                  _react2.default.createElement('textarea', { className: 'mdl-textfield__input ' + disabled, ref: 'longDescription', type: 'text', id: 'longDescription', name: 'longDescription', rows: '7', value: longDescription, onChange: function onChange(event) {
                      return _this2.handleLongDescriptionChange(event);
                    }, disabled: saving }),
                  _react2.default.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'longDescription' },
                    'Long Description'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'mdl-textfield__error', htmlFor: 'longDescription' },
                    trainingEditError.get('longDescription')
                  )
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'footer' },
              saving ? _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' }) : _react2.default.createElement(
                'div',
                { key: 'trainingeditbuttonsarenotrerenderedproperlyaftersubmit' + Math.random() },
                _react2.default.createElement(
                  'button',
                  { type: 'submit', className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                  'Submit'
                ),
                _react2.default.createElement(
                  'button',
                  { onClick: function onClick(event) {
                      return _this2.handleDelete(event);
                    }, className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                  'Delete'
                )
              )
            )
          )
        );
    }
  }, {
    key: 'handleTitleChange',
    value: function handleTitleChange(e) {
      this.props.actions.handleTrainingEditChange('title', e.target.value);
    }
  }, {
    key: 'handleSecondaryTitleChange',
    value: function handleSecondaryTitleChange(e) {
      this.props.actions.handleTrainingEditChange('secondaryTitle', e.target.value);
    }
  }, {
    key: 'handleShortDescriptionChange',
    value: function handleShortDescriptionChange(e) {
      this.props.actions.handleTrainingEditChange('shortDescription', e.target.value);
    }
  }, {
    key: 'handleLongDescriptionChange',
    value: function handleLongDescriptionChange(e) {
      this.props.actions.handleTrainingEditChange('longDescription', e.target.value);
    }

    // componentWillMount(){
    //   TrainingEdit.fetchData(this.props.actions,this.props.params)
    //   // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
    // }

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.actions.loadEditTraining(undefined);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      // console.log('this.props.location.pathname='+require('util').inspect(this.props.location.pathname, false, null))
      // if( !this.props.location.pathname=='trainings/item/new') 
      TrainingEdit.fetchData(this.props.actions, this.props.params);

      // TrainingEdit.fetchData(this.props.actions)
      // console.log('Training edit mounted.'+util.inspect( this.props.params, false, null))

      // const training=this.props.trainingappmap.get('edittraining')
      // if(process.env.BROWSER && this.props.app.get('previouslocation')!=undefined)
      // TrainingEdit.fetchData(this.props.actions,this.props.params)
      // return TrainingEdit.fetchData(this.props.actions,this.props.params)
      // return Promise.resolve(TrainingEdit.fetchData(this.props.actions,this.props.params))
    }

    //This is a necessary call when component is fetched on server side

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      var trainingEditError = this.props.trainingappmap.get('trainingEditError');
      // console.log('Training edit. comp update')
      //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
      var dialogInputs = document.querySelectorAll('.mdl-textfield');
      for (var i = 0, l = dialogInputs.length; i < l; i++) {
        if (dialogInputs[i].MaterialTextfield != undefined)
          // console.log('Training edit. CALLING dialogInputs[i].MaterialTextfield.checkDirty()')
          dialogInputs[i].MaterialTextfield.checkDirty();
        // }else
        //   console.log('Training edit. NOOOOO dialogInputs[i].MaterialTextfield.checkDirty() call')
        if (trainingEditError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined) dialogInputs[i].className += ' is-invalid';else {
          dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ');
        }
      }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //   return true
    // }

  }, {
    key: 'handleSave',
    value: function handleSave(event) {
      event.preventDefault();
      // const usernameref = this.refs.username
      // const usernameref = $('#usernameid')
      // const usernameinput = usernameref.find('.mdl-textfield__input')
      // console.log('Registeration. '+usernameinput[0].value)
      var title = this.refs.title;
      // console.log('Register User: '+this.refs.username.value)
      var secondaryTitle = this.refs.secondaryTitle;
      var shortDescription = this.refs.shortDescription;
      var longDescription = this.refs.longDescription;
      // console.log('Register passwordcheck: '+this.refs.passwordCheck.value)
      var trainingid = this.props.trainingappmap.get('edittraining').get('id');
      var fileinput = document.querySelector('#uploadfile-' + trainingid);

      var training = {
        // username: usernameinput[0].value.trim(),
        title: title.value.trim(),
        secondaryTitle: secondaryTitle.value.trim(),
        shortDescription: shortDescription.value.trim(),
        longDescription: longDescription.value.trim()
      };
      training = this.props.trainingappmap.get('edittraining').merge(_immutable2.default.Map(training));
      // console.log('Training edit. call update with this item: '+util.inspect(training, false, null))
      // this.props.actions.updateTraining(training)
      this.props.actions.updateTrainingDispatcher(training, this.props.trainingappmap.get('edittraining'), fileinput.files[0]);

      // const registrationError = this.props.auth.get('registrationError')
      // const usernamevalid = registrationError.get('username')!==''?'is-invalid':''
      // // if (registrationError.get('username') !== ''){
      // console.log('Registeration. add valid ' + usernamevalid)
      // usernameref.addClass(usernamevalid)

      // const registrationError = this.props.auth.get('registrationError')
      // if (registrationError.get('username') !== ''){
      //   usernameref.addClass('is-invalid')
      //   // const usernameerror = usernameref.find('.mdl-textfield__error')
      //   // usernameerror[0].value = 'Waaaak wak'
      //   return
      // }else{
      //   console.log('Registeration. Remove invalid')
      //   usernameref.removeClass('is-invalid')
      // }
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(event) {
      event.preventDefault();
      //    console.log('Delete Training')
      //this.props.actions.needDeleteTrainingConfirmation(true)
      this.props.actions.needActionConfirmation(true, this.props.actions.deleteEditTrainingDispatcher, {});
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(actions, params, hostname) {
      // console.log('Training list fetch data for hostname='+require('util').inspect(hostname, false, null))
      // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

      //The return is necessary. if not the fetching is not resolved properly on the server side! 
      return actions.retrieveTrainingDispatcher(params, hostname);
      // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
    }
  }]);

  return TrainingEdit;
}(_react2.default.Component);

exports.default = TrainingEdit;