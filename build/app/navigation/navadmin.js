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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./nav.scss');
}

var datasrc = undefined;

var NavAdmin = function (_Component) {
    _inherits(NavAdmin, _Component);

    function NavAdmin() {
        _classCallCheck(this, NavAdmin);

        var _this = _possibleConstructorReturn(this, (NavAdmin.__proto__ || Object.getPrototypeOf(NavAdmin)).call(this));

        _this.handleResize = _this.handleResize.bind(_this);
        return _this;
    }

    _createClass(NavAdmin, [{
        key: 'handleLoginClick',
        value: function handleLoginClick(event) {
            this.props.actions.loginProcessStart('Welcome');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var isBrowser = typeof window !== 'undefined';
            var auth = this.props.auth;

            var isAuthenticated = auth.get('isAuthenticated');

            // if (process.env.BROWSER)
            //     datasrc = this.getRightLogoUrl()
            console.log('nav: logo = ' + datasrc);
            var tenantName1 = '';
            if (this.props.app.get('tenant')) tenantName1 = this.props.app.get('tenant').get('name1');
            console.log('tenantName1=' + require('util').inspect(tenantName1, false, null));
            var tenantName2 = '';
            if (this.props.app.get('tenant')) tenantName2 = this.props.app.get('tenant').get('name2');

            return _react2.default.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-left fadeIn animated' },
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
            );
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.checkTitleMargin();
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            console.log('addEventListener');
            window.addEventListener('resize', this.handleResize);
            NavAdmin.fetchData(this.props.actions, this.props.params);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('removeEventListener');
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            var newDatasrc = this.getRightLogoUrl();
            if (newDatasrc != this.datasrc) {
                this.datasrc = newDatasrc;
                (0, _jquery2.default)('#logo')[0].src = this.datasrc;
                this.checkTitleMargin();
            }
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            console.log('Call Tenant Edit fetch data  <-----------------------------');

            return actions.retrieveTenantDispatcher();
        }
    }]);

    return NavAdmin;
}(_react.Component);

exports.default = NavAdmin;