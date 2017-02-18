'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  // console.log('Appcomponent. environment is browser')
  require('./loginmodal.scss');
  // $(document).ready(function() { 
  //   var modal = document.getElementById('myModal')

  // // Get the button that opens the modal
  // // var btn = $('myBtn')[0]
  //   var btn = document.getElementById('myBtn')
  //   // console.log('loginjs. myBtn '+btn)
  // // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName('close')[0]

  // // When the user clicks the button, open the modal 
  //   btn.onclick = function() {
  //     modal.style.display = 'block'
  //   }

  // // When the user clicks on <span> (x), close the modal
  //   span.onclick = function() {
  //     modal.style.display = 'none'
  //   }

  // // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     if (event.target == modal) {
  //       modal.style.display = 'none'
  //     }
  //   }

  // })
}

var LoginModal = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var errorMessage = this.props.errorMessage;

      return _react2.default.createElement(
        'div',
        { id: 'loginmodal' },
        _react2.default.createElement(
          'div',
          { className: 'modal' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'span',
                { onClick: function onClick(event) {
                    return _this2.handleClose(event);
                  }, className: 'close' },
                '\xD7'
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.auth.get('loginMessage')
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(_login2.default, {
                errorMessage: errorMessage,
                onLoginClick: function onLoginClick(creds) {
                  return _this2.props.actions.loginUser(creds);
                },
                onLoginProcessStartClick: this.props.actions.loginProcessStart
              })
            ),
            _react2.default.createElement('div', { className: 'modal-footer' })
          )
        )
      );
    }
  }, {
    key: 'renderOld',
    value: function renderOld() {
      var _this3 = this;

      var errorMessage = this.props.errorMessage;


      return _react2.default.createElement(
        'div',
        { id: 'loginmodal' },
        _react2.default.createElement(
          'div',
          { className: 'modal' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'span',
                { onClick: function onClick(event) {
                    return _this3.handleClose(event);
                  }, className: 'close' },
                '\xD7'
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.auth.get('loginMessage')
              ),
              _react2.default.createElement(
                'h4',
                null,
                'Please login'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(_login2.default, {
                errorMessage: errorMessage,
                onLoginClick: function onLoginClick(creds) {
                  return _this3.props.actions.loginUser(creds);
                },
                onLoginProcessStartClick: this.props.actions.loginProcessStart
              })
            ),
            _react2.default.createElement('div', { className: 'modal-footer' })
          )
        )
      );
    }
  }, {
    key: 'handleClose',
    value: function handleClose(event) {
      console.log('loginmodaljs close modal');
      this.props.actions.loginProcessEnd();
    }

    // handleLoginClick(event) {
    //   // console.log('loginjs andle request login in progress click')
    //   // var modal = document.getElementById('myModal')
    //   // modal.style.display = 'block'
    //   this.props.onLoginProcessStartClick('Please login')
    // }     

  }]);

  return LoginModal;
}(_react.Component);

// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }


exports.default = LoginModal;