'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('jquery');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
<<<<<<< HEAD
    require('./appmodaldlg.scss');
=======
    // console.log('Appcomponent. environment is browser')
    require('./appmodaldlg.scss');
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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
}

var AppModalDlg = function (_Component) {
    _inherits(AppModalDlg, _Component);

    function AppModalDlg() {
        _classCallCheck(this, AppModalDlg);

        return _possibleConstructorReturn(this, (AppModalDlg.__proto__ || Object.getPrototypeOf(AppModalDlg)).apply(this, arguments));
    }

    _createClass(AppModalDlg, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

<<<<<<< HEAD
=======
            // const { errorMessage } = this.props
            // var myStyle = {fontSize: 100, color: '#FF0000'}
            // console.log('appmodaldlgjs render')
            // <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            return _react2.default.createElement(
                'div',
                { id: 'appmodaldlg' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement('h1', { className: 'glyphicon glyphicon-exclamation-sign' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body' },
                            _react2.default.createElement(
                                'p',
                                null,
                                this.props.errorMessage
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick(event) {
                                        return _this2.handleClose(event);
                                    },
                                    className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                                'Ok'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'handleClose',
        value: function handleClose(event) {
            console.log('appmodaldlgjs close modal');
            this.props.actions.appError(undefined);
        }
<<<<<<< HEAD
=======

        // handleLoginClick(event) {
        //   // console.log('loginjs andle request login in progress click')
        //   // var modal = document.getElementById('myModal')
        //   // modal.style.display = 'block'
        //   this.props.onLoginProcessStartClick('Please login')
        // }

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    }]);

    return AppModalDlg;
}(_react.Component);

exports.default = AppModalDlg;