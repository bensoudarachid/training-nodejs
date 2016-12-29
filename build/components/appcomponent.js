'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actions = require('../redux/actions');

var _actions2 = _interopRequireDefault(_actions);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _loginmodal = require('./loginmodal.js');

var _loginmodal2 = _interopRequireDefault(_loginmodal);

var _login = require('./login.js');

var _login2 = _interopRequireDefault(_login);

var _appmodaldlg = require('./appmodaldlg.js');

var _appmodaldlg2 = _interopRequireDefault(_appmodaldlg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

global.jQuery = require('jquery');
// global.$ = require('jquery')
// import $ from 'jquery'


// import { ThreeBounce } from 'better-react-spinkit'


// require('../styles/default.scss')


if (process.env.BROWSER) {
  require('./appcomponent.scss');
  // console.log('Appcomponent. environment is browser')
  // require('material-design-lite/dist/material.js')
  // require('material-design-lite/dist//material.css')

  // require('../../js/material.js')
  // require('../../css/material.css')

  (0, _jquery2.default)(document).ready(function () {
    // require('../js/mdl.js')
    // require('../css/mdl.css')
    // const dialogPolyfill = require('dialog-polyfill')
    // var dialog = document.querySelector('#appdialog')
    // if (!dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog)
    // }

    // dialog.querySelector('.close').addEventListener('click', function() {
    //   dialog.close()
    // })

    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    // var btn = $('myBtn')[0]
    // var btn = document.getElementById('myBtn')
    // console.log('loginjs. myBtn '+btn)
    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName('close')[0]

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   console.log('appcomponentjs. myBtn '+btn)
    //   modal.style.display = 'block'
    // }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   // modal.style.display = 'none'
    //   // console.log('appcompjs close model')
    //   // this.props.auth.onLoginProcessEndClick()
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
        this.props.auth.onLoginProcessEndClick();
        // modal.style.display = 'none'
      }
    };
  });
}

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));

    _this.constructor.childContextTypes = {
      betterReactSpinkit: _react.PropTypes.object
    };
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        betterReactSpinkit: {
          color: '#505050', //'black'
          size: 15
          // ,fade: { duration: 0.3 }
        }
      };
    }

    // <div>
    //   <Nav
    //     actions={this.props.actions}
    //     isAuthenticated={auth.isAuthenticated}
    //     errorMessage={auth.errorMessage}
    //     auth={this.props.auth}
    //     location={this.props.location}
    //   />
    //   {!isBrowser &&
    //   <div style='background-color:red;height=100px;'><h2>mama</h2><ThreeBounce color='red' size={18} fade={{duration: 0.3}}/></div>
    //   }  
    //   <h2>Welcome to The todo homepage man!</h2>
    //   { children }
    // </div>

    // <div id='appsnackbar' className='mdl-js-snackbar mdl-snackbar'>
    //   <div className='mdl-snackbar__text'></div>
    //   <button className='mdl-snackbar__action' type='button'></button>
    // </div>

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dispatch = _props.dispatch;
      var quote = _props.quote;
      var auth = _props.auth;
      var errorMessage = _props.errorMessage;
      var isSecretQuote = _props.isSecretQuote;

      var isBrowser = typeof window !== 'undefined';
      var loginMessage = auth.get('loginMessage');
      var loginProgress = auth.get('loginProgress');
      var registererror = this.props.auth.get('registererror');
      var appError = this.props.app.get('appError');
      // console.log('appcompjs-----------------------------')
      // console.log(loginProgress)
      // console.log('appcompjs-----------------------------')
      // var modal = document.getElementById('myModal')
      // if( loginProgress )
      //   modal.style.display = 'block'
      // else
      //   modal.style.display = 'none'

      // AppComponent.fetchData().then(response => response.json())
      // .then(data => {
      //   // console.log(data.todos)
      //   this.props.actions.addTodos(data.todos);
      // })
      // .catch(err => console.log('Booooo' + err));
      //        <img src='/images/RoyaFacebookIdea1.png' alt='Smiley face' height='99' width='453' />      
      //style={{color: 'red'}}
      // {!isBrowser &&
      //   <div id='wait'><ThreeBounce size={100}/></div>
      // }
      // console.log('appcomponentjs. actions.apiurl = '+actions.apiurl)
      // console.log('appcomponentjs. props.actions.apiurl = '+this.props.actions.apiurl)
      // console.log('appcomponentjs. actions.auth = '+this.props.auth.get('isAuthenticated'))
      // console.log('appcomponentjs. props.actions.apiurl = '+this.props.auth.apiurl)
      var children = updateChildren(this.props.children, this.props);
      return _react2.default.createElement(
        'div',
        { id: 'appcomp' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_nav2.default, {
            actions: this.props.actions,
            isAuthenticated: auth.get('isAuthenticated'),
            errorMessage: auth.get('errorMessage'),
            auth: this.props.auth,
            location: this.props.location
          })
        ),
        loginProgress && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_loginmodal2.default, {
            actions: this.props.actions,
            auth: this.props.auth
          })
        ),
        _react2.default.createElement(
          'div',
          { id: 'contt' },
          children
        ),
        appError && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_appmodaldlg2.default, { actions: this.props.actions, errorMessage: 'Error occured: ' + appError })
        )
      );
    }
  }]);

  return AppComponent;
}(_react2.default.Component);

function updateChildren(children, props) {
  var childrenBack = _react2.default.Children.map(children, function (child) {
    // return React.cloneElement(child, {
    //   actions: props.actions,
    //   todos: props.todos
    // })
    return _react2.default.cloneElement(child, _extends({}, props));
  });
  return childrenBack;
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
  };
}

// export default connect(mapStateToProps)(AppComponent);
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppComponent);
// export default AppComponent;