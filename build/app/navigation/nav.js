'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navuser = require('./navuser');

var _navuser2 = _interopRequireDefault(_navuser);

var _navpublic = require('./navpublic');

var _navpublic2 = _interopRequireDefault(_navpublic);

var _navadmin = require('./navadmin');

var _navadmin2 = _interopRequireDefault(_navadmin);

var _actions = require('../../services/actions.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _apiconnection = require('../../services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./nav.scss');

    (0, _jquery2.default)(document).ready(function () {
        (0, _jquery2.default)(document).click(function (event) {

<<<<<<< HEAD
=======
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
    //     console.log('click somewhere in browser should close toggle menu')
    //     var clickover = $(event.target)
    //     var _opened = $('.navbar-collapse').hasClass('navbar-collapse in')
    //     if (_opened === true && !clickover.hasClass('navbar-toggle')) {
    //       $('button.navbar-toggle').click()
    //     }
    //   })
    // })

    (0, _jquery2.default)(document).ready(function () {
        (0, _jquery2.default)(document).click(function (event) {
            // console.log('click somewhere in browser should close toggle menu')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            var clickover = (0, _jquery2.default)(event.target);

            if ((0, _jquery2.default)('.navbar-collapse').is(':visible') && (0, _jquery2.default)('.navbar-toggle').is(':visible') && !clickover.hasClass('navbar-toggle')) {
                (0, _jquery2.default)('button.navbar-toggle').click();
            }
        });
    });
<<<<<<< HEAD
}
=======

    // $(document).ready(function() {
    //   $('body').click(function(event) {
    //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
    //     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
    //       $('.navbar-collapse').collapse('toggle')
    //     }
    //   })
    // })
}

//require('./nav.scss')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985

var datasrc = undefined;

var Nav = function (_Component) {
    _inherits(Nav, _Component);
<<<<<<< HEAD

    function Nav() {
        _classCallCheck(this, Nav);

=======

    function Nav() {
        _classCallCheck(this, Nav);

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'handleLoginClick',
<<<<<<< HEAD
        value: function handleLoginClick(event) {
=======

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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            this.props.actions.loginProcessStart('Welcome to Roya');
        }
    }, {
        key: 'render',
        value: function render() {
            var isBrowser = typeof window !== 'undefined';
            var auth = this.props.auth;

            var isAuthenticated = auth.get('isAuthenticated');
<<<<<<< HEAD
            if (process.env.BROWSER) datasrc = this.getRightLogoUrl();
            var tenantName1 = '';
            if (this.props.app.get('tenant')) tenantName1 = this.props.app.get('tenant').get('name1');
            var tenantName2 = '';
            if (this.props.app.get('tenant')) tenantName2 = this.props.app.get('tenant').get('name2');
            auth.get('authority');
            console.log('auth.get(authority)=' + require('util').inspect(auth.get('authority'), false, null));
            return _react2.default.createElement(
                'nav',
                { id: 'bsnavi', className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
                _react2.default.createElement(
                    'ul',
                    { className: 'navbar-header logoblock' },
                    _react2.default.createElement(
                        'li',
                        { className: 'logocontainer' },
                        process.env.BROWSER && _react2.default.createElement('img', { id: 'logo', src: datasrc, className: 'logo', alt: 'logo' })
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
                                tenantName1
                            ),
                            _react2.default.createElement(
                                'h3',
                                null,
                                tenantName2
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
                auth.get('authority') == 'admin' && _react2.default.createElement(_navadmin2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                }),
                auth.get('authority') == 'user' && _react2.default.createElement(_navuser2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                }),
                auth.get('authority') == undefined && _react2.default.createElement(_navpublic2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                })
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.checkTitleMargin();
            var nav = (0, _jquery2.default)('#bsnavi');
            console.log('nav=' + nav[0]);
            var auth = this.props.auth;

            var isFetching = auth.get('isFetching');
            console.log('isFetching=' + require('util').inspect(isFetching, false, null));
            if (isFetching) nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)';else nav[0].style.border = '5px solid rgba(97,182,249, 0.3)';
        }
    }, {
        key: 'checkTitleMargin',
        value: function checkTitleMargin() {
            var tenantName2 = '';
            if (this.props.app.get('tenant')) tenantName2 = this.props.app.get('tenant').get('name2');
            console.log('componentDidMount tenantName2=' + require('util').inspect(tenantName2, false, null));
            if (tenantName2 == '') {
                (0, _jquery2.default)(".logoblock").find("h2").css("margin-top", "25px");
                (0, _jquery2.default)(".logoblock").find("h2").css("margin-left", "10px");
            } else {
                (0, _jquery2.default)(".logoblock").find("h2").css("margin-top", "12px");
                (0, _jquery2.default)(".logoblock").find("h2").css("margin-left", "10px");
            }
        }
    }, {
        key: 'getRightLogoUrl',
        value: function getRightLogoUrl() {
            if (window.matchMedia("(min-width: 992px)").matches) {
                return _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120;
            } else {
                return _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82;
=======
            // console.log('navjs is authenticated '+isAuthenticated)

            // console.log('nav: authority = '+auth.get('authority'))
            // console.log('nav: isBrowser'+isBrowser)
            //&& this.props.location.pathname!='/register'
            if (auth.get('authority') == 'admin') {
                // console.log('nav: admin? authority = '+auth.get('authority'))
                return _react2.default.createElement(_navadmin2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                });
            } else if (auth.get('authority') == 'user') {
                // console.log('nav: user? authority = '+auth.get('authority'))
                return _react2.default.createElement(_navuser2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                });
            } else {
                // console.log('nav: guest? authority = '+auth.get('authority'))
                return _react2.default.createElement(_navpublic2.default, {
                    actions: this.props.actions,
                    auth: this.props.auth,
                    app: this.props.app
                });
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            }
        }
    }]);

    return Nav;
}(_react.Component);

<<<<<<< HEAD
exports.default = Nav;
=======
// <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>

exports.default = Nav;
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


//     <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
//     <ul className='navbar-header logoblock'>
//     <li><img id='logo' src={'./images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/></li>
//     <li>
//       <div>
//       <h2>Roya</h2>
//       <h3>Software</h3>
//       </div>
//     </li>
//     <li>
//       <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//     </li>   
//   </ul>
//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav navbar-left">
//       <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
//       <li><Link activeClassName='active' to='/todos'>Todos</Link></li>
//       <li><Link activeClassName='active' to='/trainings'>Training</Link></li>
//       </ul>
//       <ul className="nav navbar-nav navbar-right">
//       <li><Link activeClassName='active' to='/register'>Register</Link></li>
// {isBrowser && !isAuthenticated &&
//   <li><a href='#' onClick={(event) => this.handleLoginClick(event)}><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
// }
// {isAuthenticated &&
//   <li>
//   <a href='#' onClick={(event) => this.props.actions.logoutUser()}><span className='glyphicon glyphicon-log-out'></span> Logout</a>
//   </li>
// }     
//       </ul>
//     </div>
//   </nav>
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
