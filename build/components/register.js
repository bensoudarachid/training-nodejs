'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _betterReactSpinkit = require('better-react-spinkit');

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import 'jquery'


// import Snackbar from './snackbar'
var util = require('util');

var RegSuccessful = function RegSuccessful() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Registration successful! An email will be sent to you. Please confirm your registration'
    )
  );
};
var RegError = function RegError() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Registration NOT successful! System error. We\'re working on it. Please try later.'
    )
  );
};

var textInputClassnames = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label ';

if (process.env.BROWSER) {
  require('./register.scss');
}

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  _createClass(Register, [{
    key: 'render',

    //<Spinner spinnerName='three-bounce' /> circle wordpress double-bounce<p>Loading...</p>
    // <input type='text' ref='email' className="form-control" placeholder='Email'/>
    // <input type='text' ref='username' className="form-control" placeholder='Username'/>
    // <input type='password' ref='password' className="form-control" placeholder='Password here'/>

    value: function render() {
      var _this2 = this;

      var registererror = '';
      var isRegistrationFetching = '';
      var registrationStep = '';
      var registrationError = {};
      var usernameClasses = textInputClassnames;
      if (this.props.auth) {
        registererror = this.props.auth.get('registererror');
        isRegistrationFetching = this.props.auth.get('isRegistrationFetching');
        registrationStep = this.props.auth.get('registrationStep');
        registrationError = this.props.auth.get('registrationError');
        usernameClasses = textInputClassnames + (registrationError.get('username') !== '' ? ' is-invalid' : '');
      }
      // var emailClasses = textInputClassnames + (registrationError.get('email')!==''?' is-invalid':'')
      // var passwordClasses = textInputClassnames + (registrationError.get('password')!==''?' is-invalid':'')
      // var passwordCheckClasses = textInputClassnames + (registrationError.get('passwordCheck')!==''?' is-invalid':'')

      // console.log('Register render. registrationError username valid = '+usernameClasses)
      // console.log('Register render. registrationError username = '+registrationError.get('username'))

      if (registererror) {}
      //   // var snackbarContainer = document.querySelector('#appsnackbar')
      //   // var data = {
      //   //   message: 'An error has occured: '+registererror,
      //   //   timeout: 3000
      //   // }
      //   // snackbarContainer.MaterialSnackbar.showSnackbar(data)

      // var dialog = document.querySelector('#appdialog')
      // dialog.showModal()
      // mdl.mdl_open('#modal-demo')

      // setTimeout(function(){

      //   mdl.mdl_close('#modal-demo')

      // }, 3000)

      //   return <div/>
      //<input type='password' ref='passwordcheck' className="form-control" placeholder='Password check'/>
      //        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
      //         Register
      //       </button>

      switch (registrationStep) {
        case 1:
          return _react2.default.createElement(
            'div',
            { id: 'register' },
            _react2.default.createElement(
              'form',
              { onSubmit: function onSubmit(event) {
                  return _this2.handleClick(event);
                } },
              _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    _react2.default.createElement(
                      'div',
                      { id: 'usernameid', className: usernameClasses },
                      _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'username', type: 'text', id: 'usernameinput' }),
                      _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'passwordcheck' },
                        'User name'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'mdl-textfield__error' },
                        registrationError.get('username')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    _react2.default.createElement(
                      'div',
                      { className: textInputClassnames },
                      _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'email', type: 'text', id: 'email' }),
                      _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'passwordcheck' },
                        'Email'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    _react2.default.createElement(
                      'div',
                      { className: textInputClassnames },
                      _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'password', type: 'password', id: 'password' }),
                      _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'passwordcheck' },
                        'Password'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    _react2.default.createElement(
                      'div',
                      { className: textInputClassnames },
                      _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'passwordcheck', type: 'password', id: 'passwordcheck' }),
                      _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'passwordcheck' },
                        'Password check'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'footer' },
                !isRegistrationFetching && _react2.default.createElement(
                  'button',
                  { type: 'submit', className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                  'Submit'
                ),
                isRegistrationFetching && _react2.default.createElement(_spinner2.default, null)
              )
            )
          );
        case 2:
          return _react2.default.createElement(RegSuccessful, null);
        case 3:
          return _react2.default.createElement(RegError, null);
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Nothing returned'
        )
      );
    }
    // {registererror &&
    // <AppDialog/>
    // }


  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      // const isRegistrationFetching = this.props.auth.get('isRegistrationFetching')
      // console.log('Registeration. mount')
      this.props.actions.registerInit();

      // var dialogInputs = document.querySelectorAll('.mdl-textfield__input')
      // for (var i = 0, l = dialogInputs.length; i < l; i++) {
      //   dialogInputs[i].MaterialTextfield.checkDirty()
      // }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // console.log('Registeration. comp update')
      // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
      // $('#usernameid').get(0).MaterialTextfield.checkDirty()
      //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
      var dialogInputs = document.querySelectorAll('.mdl-textfield');
      for (var i = 0, l = dialogInputs.length; i < l; i++) {
        dialogInputs[i].MaterialTextfield.checkDirty();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('Registeration. unmount');
      this.props.actions.registerInit();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // const usernameref = this.refs.username
      var usernameref = (0, _jquery2.default)('#usernameid');
      var usernameinput = usernameref.find('.mdl-textfield__input');
      // console.log('Registeration. '+usernameinput[0].value)

      var password = this.refs.password;
      var email = this.refs.email;
      var passwordcheck = this.refs.passwordcheck;
      var creds = {
        username: usernameinput[0].value.trim(),
        password: password.value,
        email: email.value.trim(),
        passwordCheck: passwordcheck.value
      };
      this.props.actions.registerUser(creds);

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
  }]);

  return Register;
}(_react.Component);

exports.default = Register;