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

var _actions = require('../services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _nav = require('./navigation/nav');

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
// import Stats from 'stats-js'


global.jQuery = require('jquery');

// global.$ = require('jquery')
// import $ from 'jquery'

// import { ThreeBounce } from 'better-react-spinkit'

// import waterpipe from './waterpipe.js'

// require('../styles/default.scss')


if (process.env.BROWSER) {

  require('./appcomponent.scss');
  require('./waterpipe.js');

  (0, _jquery2.default)(document).ready(function () {

    /*
     * requestAnimationFrame pollyfill
     */
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000);
      };
    }

    // Init Stats
    // var stats = new Stats()
    // stats.setMode(0)
    // stats.domElement.style.position = 'absolute'
    // stats.domElement.style.left = '0px'
    // stats.domElement.style.top = '0px'
    // document.body.appendChild(stats.domElement);


    /*!
     * Mantis.js / jQuery / Zepto.js plugin for Constellation
     * @version 1.2.2
     * @author Acauã Montiel <contato@acauamontiel.com.br>
     * @license http://acaua.mit-license.org/
     */
    (function ($, window) {
      /**
       * Makes a nice constellation on canvas
       * @constructor Constellation
       */
      function Constellation(canvas, options) {
        var $canvas = $(canvas),
            context = canvas.getContext('2d'),
            defaults = {
          star: {
            // color: 'rgba(172, 186, 201, .99)', //silver
            // color: 'rgba(34, 167, 240, .99)', //blue
            color: 'rgba(255, 255, 255, .5)', //white
            // color: 'rgba(0, 0, 0, .99)', //black
            // color: 'rgba(108, 122, 137, .99)',
            width: 100,
            randomWidth: true
          },
          line: {
            color: 'rgba(255, 0, 0, .9)',
            width: 0.2
          },
          position: {
            x: 0, // This value will be overwritten at startup
            y: 0 // This value will be overwritten at startup
          },
          width: window.innerWidth,
          height: window.innerHeight,
          velocity: 0.1,
          length: 100,
          distance: 120,
          radius: 150,
          stars: []
        },
            config = $.extend(true, {}, defaults, options);

        function Star() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          this.vx = config.velocity - Math.random() * 0.5;
          this.vy = config.velocity - Math.random() * 0.5;

          this.radius = config.star.randomWidth ? Math.random() * config.star.width : config.star.width;
        }

        Star.prototype = {
          create: function create() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fill();
          },

          animate: function animate() {
            var i;
            for (i = 0; i < config.length; i++) {

              var star = config.stars[i];

              if (star.y < 0 || star.y > canvas.height) {
                star.vx = star.vx;
                star.vy = -star.vy;
              } else if (star.x < 0 || star.x > canvas.width) {
                star.vx = -star.vx;
                star.vy = star.vy;
              }

              star.x += star.vx;
              star.y += star.vy;
            }
          }

        };

        this.createStars = function () {
          var length = config.length,
              star,
              i;

          context.clearRect(0, 0, canvas.width, canvas.height);

          for (i = 0; i < length; i++) {
            config.stars.push(new Star());
            star = config.stars[i];

            star.create();
          }

          //          star.line()
          star.animate();
        };

        this.setCanvas = function () {
          canvas.width = config.width;
          canvas.height = config.height;
        };

        this.setContext = function () {
          context.fillStyle = config.star.color;
          context.strokeStyle = config.line.color;
          context.lineWidth = config.line.width;
        };

        this.setInitialPosition = function () {
          if (!options || !options.hasOwnProperty('position')) {
            config.position = {
              x: canvas.width * 0.5,
              y: canvas.height * 0.5
            };
          }
        };

        this.loop = function (callback) {
          callback();

          // setTimeout(
          //   window.requestAnimationFrame(function () {
          //     stats.begin() // Only for Stats
          //     this.loop(callback)
          //     // window.setTimeout(this.loop(callback), 1000 / 20)
          //     stats.end() // Only for Stats
          //   }.bind(this))
          // , 1000 / 10)
          setTimeout(function () {
            window.requestAnimationFrame(function () {
              // stats.begin() // Only for Stats
              this.loop(callback);
              // window.setTimeout(this.loop(callback), 1000 / 20)
              // stats.end() // Only for Stats
            }.bind(this));
          }.bind(this), 1000 / 10);
        };

        this.bind = function () {
          $canvas.on('mousemove', function (e) {
            config.position.x = e.pageX - $canvas.offset().left;
            config.position.y = e.pageY - $canvas.offset().top;
          });
        };

        this.init = function () {
          this.setCanvas();
          this.setContext();
          this.setInitialPosition();
          this.loop(this.createStars);
          this.bind();
        };
      }

      $.fn.constellation = function (options) {
        return this.each(function () {
          var c = new Constellation(this, options);
          c.init();
        });
      };
    })(_jquery2.default, window);

    // Init plugin

    (0, _jquery2.default)('#canvs').constellation({
      star: {
        width: 3
      },
      // line: {
      //   color: 'rgba(150, 125, 105, .5)'
      // },
      radius: 50
    });

    setTimeout(function () {
      (0, _jquery2.default)('#wavybg-wrapper').addClass('fadein');
    }, 1800);
    var color = (0, _jquery2.default)('.parampanel').css('background-color');
    var smokyBGNow = (0, _jquery2.default)('#wavybg-wrapper').waterpipe({
      gradientStart: '#6bc1ff',
      // gradientEnd: '#6C7A89',
      // gradientEnd: '#9caab9',
      // gradientEnd: '#bccad9',
      // gradientEnd: '#ffffff',
      gradientEnd: '#dfefff',

      smokeOpacity: 0.05,
      smokeSize: 0.2,
      numCircles: 5,
      maxMaxRad: 150,
      minMaxRad: 1,
      minRadFactor: 0.5,
      iterations: 4,
      drawsPerFrame: 45,
      lineWidth: 1,
      speed: 1,
      // bgColorInner: '#6bc1ff',
      bgColorInner: '#c5d3e2',
      // bgColorOuter: '#003870'
      // bgColorOuter: '#004790'
      // bgColorOuter: '#ffffff'
      bgColorOuter: '#2980b9'

    });

    var modal = document.getElementById('myModal');

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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
    }

    // <Nav
    //   actions={this.props.actions}
    //   isAuthenticated={auth.get('isAuthenticated')}
    //   errorMessage={auth.get('errorMessage')}
    //   auth={this.props.auth}
    //   location={this.props.location}
    // />

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
      var children = updateChildren(this.props.children, this.props);

      return _react2.default.createElement(
        'div',
        { id: 'appcomp' },
        _react2.default.createElement(
          'div',
          { id: 'wavybg-wrapper' },
          _react2.default.createElement(
            'canvas',
            null,
            'Your browser does not support HTML5 canvas.'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'starbg-wrapper' },
          _react2.default.createElement(
            'canvas',
            { id: 'canvs' },
            'Your browser does not support HTML5 canvas.'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_nav2.default, {
            actions: this.props.actions,
            auth: this.props.auth
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