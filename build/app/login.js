'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    //  console.log('Login Component. environment is browser')
    require('./login.scss');
    // require('materialize-css/sass/materialize.scss')
    // require('materialize-css/sass/style.scss')
    // require('materialize-css/sass/components/_color.scss')

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

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',

        // <li><button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
        //  <span className='glyphicon glyphicon-log-in'></span> Login
        // </button></li>
        // </ul>
        // <li>
        // <input type='submit' value='Login' className='btn btn-primary'/>
        // </li>

        // <li>
        //     <button type='submit' className='btn btn-primary'>
        //       <span className='glyphicon glyphicon-log-in'></span> Login
        //     </button>
        // </li>

        // <li>
        // <TextField type='text' ref='username' className='inputfield' hintText='type your login here' floatingLabelText='Login'/>
        // </li>
        // <li>
        // <TextField type='password' ref='password' className='inputfield' hintText='type your password here' floatingLabelText='Password'/>
        // </li>

        value: function render() {
            var errorMessage = this.props.errorMessage;
            // var myStyle = {fontSize: 100, color: '#FF0000'}
            //       <li><input type='text' ref='username' className='form-control' placeholder='Username'/></li>
            //<input type='password' ref='password' className='form-control' placeholder='Password'/>

            return _react2.default.createElement(
                'div',
                { id: 'loginform' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleClick.bind(this) },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'username', type: 'text', id: 'username' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label', htmlFor: 'username' },
                                    'Login'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input', ref: 'password', type: 'password', id: 'password' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label', htmlFor: 'password' },
                                    'Password'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'button',
                                { type: 'submit',
                                    className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored button' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' }),
                                'Login'
                            )
                        )
                    ),
                    errorMessage && _react2.default.createElement(
                        'p',
                        { style: { fontSize: 25, color: '#FF0000' } },
                        errorMessage
                    )
                )
            );
        }

        // <li>
        //   <FlatButton className='button' type='submit'><span className='glyphicon glyphicon-log-in'></span> Login</FlatButton>
        // </li>

    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            event.preventDefault();
            // console.log('login. Login value = '+this.refs.username.getValue())
            // const username = this.refs.username.getValue().trim()
            // const password = this.refs.password.getValue().trim()
            var username = this.refs.username.value.trim();
            var password = this.refs.password.value.trim();
            // console.log('login. Login value = '+username)
            var creds = { username: username, password: password };
            this.props.onLoginClick(creds);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;


Login.propTypes = {
    onLoginClick: _react.PropTypes.func.isRequired,
    errorMessage: _react.PropTypes.string
};