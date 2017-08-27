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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _confirmationmodal = require('../components/shared/confirmationmodal');

var _confirmationmodal2 = _interopRequireDefault(_confirmationmodal);

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

// import waterpipe from './waterpipe.js'

// require('../styles/default.scss')
if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

if (process.env.BROWSER) {
    // window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
    // require('./waterpipe.js')
    require('./appcomponent.scss');
    // require('./bubbles.js')
    // require('./waterpipebg.js')

    // require.ensure([], function (require) {
    //   require('./bubbles.js').default
    // })
    // require.ensure([], function (require) {
    //   require('./waterpipebg.js').default
    // })

    // require('./textswitcher.js')


    var modal = document.getElementById('myModal');
    window.onclick = function (event) {
        if (event.target == modal) {
            // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
            this.props.auth.onLoginProcessEndClick();
            // modal.style.display = 'none'
        }
    };
    // })
    // var rdm = 0
    // var lastrdm = 0
    // var textSwitchContainer = undefined //$('#textswitch')
    // window.isTextSwitchAnimated = true //$('#textswitch')

    // window.textswitcher = function() {
    //   window.isTextSwitchAnimated = true
    //   setTimeout( function() {
    //     console.log('isTextSwitchAnimated = '+window.isTextSwitchAnimated )
    //     if( window.isTextSwitchAnimated )
    //       window.requestAnimationFrame(window.textswitcher)
    //     else{
    //       console.log('I m out now ' )
    //       textSwitchContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $(this).removeClass()
    //         textSwitchContainer.text('')
    //       })
    //       return
    //     }


    //     while( lastrdm === rdm )
    //       rdm = Math.floor(Math.random() * window.switchTextArray.length)
    //     console.log('rdm = '+rdm +', lastrdm = '+lastrdm+' : '+window.switchTextArray[rdm]+' : ')
    //     lastrdm = rdm
    //       // divContainer[0].style.display = 'none'
    // //headShake 300 flash 300 fadeInLeft 300 rubberBand
    //     textSwitchContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $(this).removeClass()
    //     })
    //     setTimeout( function() {
    //       textSwitchContainer.shuffleLetters({
    //         'text': window.switchTextArray[rdm]
    //       })
    //         // setTimeout( function() {
    //         //   container.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         //     $(this).removeClass()
    //         //   })
    //         // }, 4600 )
    //     }, 450 )
    //       // await sleep(1000)
    //   }, 2000 )
    // }

    // $(document).ready(function() {
    //   textSwitchContainer = $('#textswitch')
    //   window.switchTextArray = ['Karim', 'Said', 'Rachid', 'Ilyas', 'Yussef', 'Amine', 'Salma', 'Hadi', 'Mehdi']
    //   window.textswitcher()
    //   // textSwitchId = window.requestAnimationFrame(window.textswitcher)
    //   setTimeout( function() {
    //     console.log('Cancel now : ')
    //     window.isTextSwitchAnimated = false
    //   }, 12000 )
    // })
}

var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        1;
        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
        // this.constructor.childContextTypes = {
        //   betterReactSpinkit: PropTypes.object
        // }
    }

    // getChildContext() {
    //   return {
    //     betterReactSpinkit: {
    //       color: '#505050', //'black'
    //       size: 15
    //     // ,fade: { duration: 0.3 }
    //     }
    //   }
    // }

    _createClass(AppComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            // console.log('window width = '+$(window).width())

            if (process.env.BROWSER) {
                require('./waterpipebg.js');
                require('./bubbles.js');
            }
            this.handleBubblesVisibility();
            window.addEventListener('scroll', this.handleBubblesVisibility);
            window.addEventListener('resize', this.handleBubblesVisibility);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // console.log('app. this.props.location='+require('util').inspect(this.props.location, false, null))
            //console.log('app. nextProps.location='+require('util').inspect(nextProps.location, false, null))
            if (nextProps.location !== this.props.location && process.env.BROWSER) {
                this.props.actions.savePreviousLocation(this.props.location.pathname);
            }
        }
    }, {
        key: 'handleBubblesVisibility',
        value: function handleBubblesVisibility(event) {
            if ((0, _jquery2.default)(window).width() < 480)
                // $('#starbg-wrapper')[0].style.display = 'none'
                (0, _jquery2.default)('#starbg-wrapper')[0].style.visibility = 'hidden';else
                // $('#starbg-wrapper')[0].style.display = 'block'
                (0, _jquery2.default)('#starbg-wrapper')[0].style.visibility = 'visible';
        }

        // <ReactCSSTransitionGroup
        //   component='div'
        //   transitionName="page"
        //   transitionEnterTimeout={500}
        //   transitionLeaveTimeout={200}
        //   transitionAppear={false}
        //   transitionEnter={true}
        //   transitionLeave={true}
        // >
        // {children}
        // </ReactCSSTransitionGroup>

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                quote = _props.quote,
                auth = _props.auth,
                errorMessage = _props.errorMessage,
                isSecretQuote = _props.isSecretQuote;

            var isBrowser = typeof window !== 'undefined';
            var loginMessage = auth.get('loginMessage');
            var loginProgress = auth.get('loginProgress');
            var registererror = this.props.auth.get('registererror');
            var appError = this.props.app.get('appError');
            var confirmationActionFunction = this.props.app.get('confirmationActionFunction');

            var children = this.updateChildren(this.props.children, this.props);

            return _react2.default.createElement(
                'div',
                { id: 'appcomp' },
                _react2.default.createElement(
                    'div',
                    { id: 'wavybg-wrapper' },
                    _react2.default.createElement(
                        'canvas',
                        { id: 'canvs1' },
                        'Your browser does not support HTML5 canvas.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'starbg-wrapper' },
                    _react2.default.createElement(
                        'canvas',
                        { id: 'canvs2' },
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
                confirmationActionFunction && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_confirmationmodal2.default, { actions: this.props.actions })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { id: 'contt' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _reactAddonsCssTransitionGroup2.default,
                                {
                                    component: 'div',
                                    transitionName: 'page',
                                    transitionEnterTimeout: 500,
                                    transitionLeaveTimeout: 200,
                                    transitionAppear: false,
                                    transitionEnter: true,
                                    transitionLeave: true
                                },
                                children
                            )
                        )
                    ),
                    appError && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_appmodaldlg2.default, { actions: this.props.actions, errorMessage: 'Error occured: ' + appError })
                    )
                )
            );
        }

        // renderOld() {
        //   const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
        //   const isBrowser = typeof window !== 'undefined'
        //   const loginMessage = auth.get('loginMessage')
        //   const loginProgress = auth.get('loginProgress')
        //   const registererror = this.props.auth.get('registererror')
        //   const appError = this.props.app.get('appError')
        //   var children = this.updateChildren(this.props.children, this.props)


        //   return (
        //     <div id='appcomp'>
        //     <div id="wavybg-wrapper">
        //         <canvas id="canvs1">Your browser does not support HTML5 canvas.</canvas>
        //     </div>
        //     <div id="starbg-wrapper">
        //         <canvas id="canvs2">Your browser does not support HTML5 canvas.</canvas>
        //     </div>

        //     <div>
        //       <Nav
        //         actions={this.props.actions}
        //         auth={this.props.auth}
        //       />
        //     </div>
        //     {loginProgress &&
        //     <div>
        //     <LoginModal
        //         actions={this.props.actions}
        //         auth={this.props.auth}
        //     />
        //     </div>
        //     }
        //       <div>
        //         <div id='contt'>
        //           {loginMessage?

        //             <div>
        //               <h1>{loginMessage}</h1>
        //             </div>
        //             :
        //             <div>
        //               <ReactCSSTransitionGroup
        //                 component='div'
        //                 transitionName="page"
        //                 transitionEnterTimeout={500}
        //                 transitionLeaveTimeout={200}
        //                 transitionAppear={false}
        //                 transitionEnter={true}
        //                 transitionLeave={true}
        //               >
        //               {children}
        //               </ReactCSSTransitionGroup>
        //             </div>
        //           }
        //         </div>
        //         {appError &&
        //         <div>
        //           <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
        //         </div>
        //         }
        //       </div>


        //     </div>

        //   )
        // }

        // { auth.get('loginProgress')?
        //   <div>
        //       <h1>WAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINNWAHNSINN</h1>
        //   </div>
        //   :
        // }

    }, {
        key: 'getSubstringUntilNth',
        value: function getSubstringUntilNth(str, pattern, n) {
            return str.split(pattern, n).join(pattern);
        }
    }, {
        key: 'updateChildren',
        value: function updateChildren(children, props) {
            var childrenBack = _react2.default.Children.map(children, function (child) {
                var segment = this.getSubstringUntilNth(props.location.pathname, '/', 2);
                var x = _extends({}, props);
                return _react2.default.cloneElement(child, _extends({}, props, { key: segment }));
            }.bind(this));
            return childrenBack;
        }
    }]);

    return AppComponent;
}(_react2.default.Component);

// {React.cloneElement(this.props.children, { key: segment })}
// {children}
// {loginMessage?
//   <div>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//     <h1>{loginMessage}</h1>
//   </div>
//   :
//   <div>
//     <div id='contt'>
//     { children }
//     </div>
//     {appError &&
//     <div>
//       <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
//     </div>
//     }
//   </div>
// }


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