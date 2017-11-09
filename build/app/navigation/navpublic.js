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

var _apiconnection = require('../../services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _appimage = require('../../components/shared/appimage');

var _appimage2 = _interopRequireDefault(_appimage);

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
var styles = undefined;
if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    styles = require('./nav.scss');
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
    //     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
    //       $('.navbar-collapse').collapse('toggle')
    //     }
    //   })
    // })

}

//require('./nav.scss')

var datasrc = undefined;

var NavPublic = function (_Component) {
    _inherits(NavPublic, _Component);

    // <div>
    //    </div>
    // {this.props.location.pathname!='/register' &&
    //     	<Link activeClassName='active' to='/register'>Register</Link>
    // }
    //	<Button>Click me!</Button>

    function NavPublic() {
        _classCallCheck(this, NavPublic);

        var _this = _possibleConstructorReturn(this, (NavPublic.__proto__ || Object.getPrototypeOf(NavPublic)).call(this));

        _this.handleResize = _this.handleResize.bind(_this);
        return _this;
    }

    _createClass(NavPublic, [{
        key: 'handleLoginClick',
        value: function handleLoginClick(event) {
            console.log('loginjs andle request login in progress click');
            // var modal = document.getElementById('myModal')
            // modal.style.display = 'block'
            this.props.actions.loginProcessStart('Welcome');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var isBrowser = typeof window !== 'undefined';
            var auth = this.props.auth;

            var isAuthenticated = auth.get('isAuthenticated');
            var isFetching = auth.get('isFetching');
            console.log('nav render: isfetching=' + require('util').inspect(isFetching, false, null));
            var authenticatingAnim = 'flash';
            var togglefetchingclass = 'navbar-toggle' + (isFetching ? ' ' + authenticatingAnim + ' animated toggloginfetch' : '');
            console.log('nav render: isfetching=' + require('util').inspect(togglefetchingclass, false, null));

            // datasrc = ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo'
            // datasrc += '?width=' + 120 + '&height=' + 120
            if (process.env.BROWSER) datasrc = this.getRightLogoUrl();
            console.log('nav: logo = ' + datasrc);
            var tenantName1 = '';
            if (this.props.app.get('tenant')) tenantName1 = this.props.app.get('tenant').get('name1');
            console.log('tenantName1=' + require('util').inspect(tenantName1, false, null));
            var tenantName2 = '';
            if (this.props.app.get('tenant')) tenantName2 = this.props.app.get('tenant').get('name2');

            return _react2.default.createElement(
                'nav',
                { id: 'bsnavi', className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
                _react2.default.createElement(
                    'ul',
                    { className: 'navbar-header logoblock' },
                    _react2.default.createElement(
                        'li',
                        null,
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
                            { id: 'togg', type: 'button', className: togglefetchingclass, 'data-toggle': 'collapse',
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
                        { className: 'nav navbar-nav navbar-left' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.IndexLink,
                                { activeClassName: 'active', to: '/' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { activeClassName: 'active', to: '/trainings' },
                                'Training'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav navbar-right' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { activeClassName: 'active', to: '/register' },
                                'Register'
                            )
                        ),
                        isBrowser && !isAuthenticated && _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick(event) {
                                        return _this2.handleLoginClick(event);
                                    },
                                    className: isFetching ? authenticatingAnim + ' animated loginfetch' : '' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' })
                            )
                        )
                    )
                )
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
            if (isFetching) nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)';
        }
    }, {
        key: 'checkTitleMargin',
        value: function checkTitleMargin() {
            //        console.log('nav public update. ')
            //         const nav = $('#bsnavi')
            //         console.log('nav=' + nav[0])
            //         const {auth} = this.props
            //         const isFetching = auth.get('isFetching')
            //         if (isFetching)
            //             nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            console.log('addEventListener');
            window.addEventListener('resize', this.handleResize);
            NavPublic.fetchData(this.props.actions, this.props.params);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('removeEventListener');
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'getRightLogoUrl',
        value: function getRightLogoUrl() {
            if (window.matchMedia("(min-width: 992px)").matches) {
                // $('#starbg-wrapper')[0].style.display = 'none'
                return _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120;
            } else {
                // $('#starbg-wrapper')[0].style.display = 'none'
                return _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82;
            }
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            // console.log('Resize now')

            // $('#starbg-wrapper')[0].style.display = 'none'
            var newDatasrc = this.getRightLogoUrl();
            if (newDatasrc != this.datasrc) {
                console.log('Handle Resize now ' + this.datasrc);
                this.datasrc = newDatasrc;
                (0, _jquery2.default)('#logo')[0].src = this.datasrc;
                this.checkTitleMargin();
                // var tenantName2 = ''
                // if( this.props.app.get('tenant') )
                //     tenantName2 = this.props.app.get('tenant').get('name2')
                // console.log('handleResize tenantName2='+require('util').inspect(tenantName2, false, null))
                // if( tenantName2 == '' ){
                //     $( ".logoblock" ).find( "h2" ).css( "margin-top", "27px" );
                //     $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
                // }else{
                //     $( ".logoblock" ).find( "h2" ).css( "margin-top", "12px" );
                //     $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
                // }
            }
            // $('#starbg-wrapper')[0].style.display = 'block'
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            console.log('Call Tenant Edit fetch data  <-----------------------------');
            // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

            //The return is necessary. if not the fetching is not resolved properly on the server side!
            return actions.retrieveTenantDispatcher();
            // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
        }
    }]);

    return NavPublic;
}(_react.Component);

// {isAuthenticated &&
// <li>
//     <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
//         <span className='glyphicon glyphicon-log-out'></span>
//     </a>
// </li>
// }


// <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>

exports.default = NavPublic;
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