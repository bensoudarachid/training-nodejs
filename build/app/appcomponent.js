'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

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

var _appmodaldlg = require('./appmodaldlg.js');

var _appmodaldlg2 = _interopRequireDefault(_appmodaldlg);

require('./appcomponent.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SockJS from 'sockjs-client'

// require('stompjs')
// import SockJS from 'sockjs-client'

global.jQuery = require('jquery');

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

if (process.env.BROWSER) {
    var modal = document.getElementById('myModal');
    window.onclick = function (event) {
        if (event.target == modal) {
            this.props.auth.onLoginProcessEndClick();
        }
    };
}

var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();

            if (process.env.BROWSER) {
                require('./waterpipebg.js');
                require('./bubbles.js');
            }
            this.handleBubblesVisibility();
            window.addEventListener('scroll', this.handleBubblesVisibility);
            window.addEventListener('resize', this.handleBubblesVisibility);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location && process.env.BROWSER) {
                this.props.actions.savePreviousLocation(this.props.location.pathname);
            }
        }
    }, {
        key: 'handleBubblesVisibility',
        value: function handleBubblesVisibility(event) {
            if ((0, _jquery2.default)(window).width() < 480) (0, _jquery2.default)('#starbg-wrapper')[0].style.visibility = 'hidden';else (0, _jquery2.default)('#starbg-wrapper')[0].style.visibility = 'visible';
        }
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
                        auth: this.props.auth,
                        app: this.props.app
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

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppComponent);