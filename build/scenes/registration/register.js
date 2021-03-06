'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

require('./register.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var textInputClassnames = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var registererror = '';
            var isRegistrationFetching = '';
            var registrationStep = '';
            var registrationError = {};
            if (this.props.auth) {
                registererror = this.props.auth.get('registererror');
                isRegistrationFetching = this.props.auth.get('isRegistrationFetching');
                registrationStep = this.props.auth.get('registrationStep');
                registrationError = this.props.auth.get('registrationError');
            }

            switch (registrationStep) {
                case 1:
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'register blockborder' },
                            _react2.default.createElement(
                                'form',
                                { onSubmit: function onSubmit(event) {
                                        return _this2.handleClick(event);
                                    }, noValidate: true },
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
                                                { className: textInputClassnames },
                                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'username', type: 'text',
                                                    id: 'username', name: 'username' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'mdl-textfield__label', htmlFor: 'username' },
                                                    'User name'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'mdl-textfield__error',
                                                        htmlFor: 'username' },
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
                                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'email', type: 'text',
                                                    id: 'email', name: 'email' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'mdl-textfield__label', htmlFor: 'email' },
                                                    'Email'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'mdl-textfield__error',
                                                        htmlFor: 'email' },
                                                    registrationError.get('email')
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-xs-12 col-md-6 col-lg-6' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: textInputClassnames },
                                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'password', type: 'password',
                                                    id: 'password', name: 'password' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'mdl-textfield__label',
                                                        htmlFor: 'password' },
                                                    'Password'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'mdl-textfield__error',
                                                        htmlFor: 'password' },
                                                    registrationError.get('password')
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-xs-12 col-md-6 col-lg-6' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: textInputClassnames },
                                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'passwordCheck',
                                                    type: 'password', id: 'passwordCheck', name: 'passwordCheck' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'mdl-textfield__label', htmlFor: 'passwordCheck' },
                                                    'Password check'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'mdl-textfield__error',
                                                        htmlFor: 'passwordCheck' },
                                                    registrationError.get('passwordCheck')
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
                                        { type: 'submit',
                                            className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                                        'Submit'
                                    ),
                                    isRegistrationFetching && _react2.default.createElement('span', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap',
                                        style: {
                                            width: '55px',
                                            height: '55px'
                                        } })
                                )
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
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            this.props.actions.registerInit();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var registrationError = this.props.auth.get('registrationError');
            var dialogInputs = document.querySelectorAll('.mdl-textfield');
            for (var i = 0, l = dialogInputs.length; i < l; i++) {
                dialogInputs[i].MaterialTextfield.checkDirty();
                if (registrationError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined) dialogInputs[i].className += ' is-invalid';else {
                    dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ');
                }
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
            var username = this.refs.username;
            var password = this.refs.password;
            var email = this.refs.email;
            var passwordCheck = this.refs.passwordCheck;

            var creds = {
                username: username.value.trim(),
                password: password.value.trim(),
                email: email.value.trim(),
                passwordCheck: passwordCheck.value.trim()
            };
            this.props.actions.registerUser(creds);
        }
    }]);

    return Register;
}(_react.Component);

exports.default = Register;