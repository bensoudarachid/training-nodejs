'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _login = require('../login.js');

var _login2 = _interopRequireDefault(_login);

var _logout = require('../logout.js');

var _logout2 = _interopRequireDefault(_logout);

var _actions = require('../../services/actions.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Bootstrap from '!style!css!../node_modules/bootstrap/dist/css/bootstrap.css'
// require('!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import { Button } from 'react-bootstrap'

//import 'bootstrap/dist/css/bootstrap.css'

//import 'bootstrap/dist/js/bootstrap.js'
// import '../styles/default.scss'

if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./nav.scss');
    //   function sir3allah(event){
    //     var logotitleElm2 = $('#bsnavi h2')
    //     // var rdm = Math.floor(Math.random() * 2) + 1
    //     // var rdm2 = Math.floor(Math.random() * 2) + 1
    //     var imgAnim = 'flash'//rdm===1?'flash':'flash' //flash
    //     // console.log('anim='+imgAnim)
    //     var timeout=800//rdm===1?800:350
    //     logotitleElm2.addClass('animated '+imgAnim) //+(rdm===3&&rdm2===1?' reverseanim':'')
    //     setTimeout(() => {
    //       logotitleElm2.removeClass('animated')
    //       logotitleElm2.removeClass(imgAnim)
    //     }, timeout)

    //   }
    //   window.requestAnimFrame = (function(){
    //     return  window.requestAnimationFrame       ||
    //           window.webkitRequestAnimationFrame ||
    //           window.mozRequestAnimationFrame    ||
    //           function( callback ){
    //             console.log('Halli')
    //             window.setTimeout(callback, 1000 / 2)
    //           }
    //   }
    // )();

    //   (function loop(){
    //     // console.log('Halli')
    //     sir3allah(undefined)
    //     setTimeout(function() {
    //       requestAnimFrame(loop)
    //     },(30000) ) //1000/100
    //   })()

    // $(document).ready(function () {
    //   $(document).click(function (event) {
    //     var clickover = $(event.target)
    //     var _opened = $('.navbar-collapse').hasClass('navbar-collapse in')
    //     if (_opened === true && !clickover.hasClass('navbar-toggle')) {
    //       $('button.navbar-toggle').click()
    //     }
    //   })
    // })

    // $(document).ready(function() {

    //   $('body').click(function(event) {
    //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
    //     console.log('loginjs andle request login in progress click')
    //     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
    //       $('.navbar-collapse').collapse('toggle')
    //     }
    //   })
    // })
}

//require('./nav.scss')


var NavAdmin = function (_Component) {
    _inherits(NavAdmin, _Component);

    function NavAdmin() {
        _classCallCheck(this, NavAdmin);

        return _possibleConstructorReturn(this, (NavAdmin.__proto__ || Object.getPrototypeOf(NavAdmin)).apply(this, arguments));
    }

    _createClass(NavAdmin, [{
        key: 'handleLoginClick',

        // <div>
        //    </div>
        // {this.props.location.pathname!='/register' &&
        //     	<Link activeClassName='active' to='/register'>Register</Link>
        // }
        //	<Button>Click me!</Button>


        value: function handleLoginClick(event) {
            // console.log('loginjs andle request login in progress click')
            // var modal = document.getElementById('myModal')
            // modal.style.display = 'block'
            this.props.actions.loginProcessStart('Welcome to Roya');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var isBrowser = typeof window !== 'undefined';
            var auth = this.props.auth;

            var isAuthenticated = auth.get('isAuthenticated');

            // console.log('nav: isBrowser'+isBrowser)
            //&& this.props.location.pathname!='/register'
            return _react2.default.createElement(
                'nav',
                { id: 'bsnavi', className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
                _react2.default.createElement(
                    'ul',
                    { className: 'navbar-header logoblock' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('img', { id: 'logo', src: '/images/RoyaLogoNeutralH120.png', className: 'logo', alt: 'Roya logo' })
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h2',
                                null,
                                'ROYA'
                            ),
                            _react2.default.createElement(
                                'h3',
                                null,
                                'SOFTWARE'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'button',
                            { id: 'togg', type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse',
                                'data-target': '#bs-example-navbar-collapse-1' },
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav navbar-left fadeIn animated', abbas: 'headShake flash' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.IndexLink,
                                { activeClassName: 'active', to: '/' },
                                'Home'
                            )
                        ),
                        (process.env.NODE_ENV != 'production' || process.env.NODE_ENV == 'production') && _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { activeClassName: 'active', to: '/admin/todos' },
                                'Todos'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { activeClassName: 'active', to: '/admin/trainings' },
                                'Training'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { activeClassName: 'active', to: '/users' },
                                'User'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav navbar-right' },
                        isBrowser && !isAuthenticated && _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick(event) {
                                        return _this2.handleLoginClick(event);
                                    } },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' })
                            )
                        ),
                        isAuthenticated && _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick(event) {
                                        return _this2.props.actions.logoutUser();
                                    } },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-out' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavAdmin;
}(_react.Component);

// <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>

exports.default = NavAdmin;
// <div>

//   {!isAuthenticated &&
// 	  <Login
// 	  errorMessage={errorMessage}
// 	  onLoginClick={ creds => dispatch(loginUser(creds)) }
// 	  />
//   }

//   {isAuthenticated &&
//   	<Logout onLogoutClick={() => dispatch(logoutUser())} />
//   }

//    </div>