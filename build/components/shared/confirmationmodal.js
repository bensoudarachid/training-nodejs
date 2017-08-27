'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./confirmationmodal.scss');
    // $(document).ready(function() {
    //   var modal = document.getElementById('myModal')

    // // Get the button that opens the modal
    // // var btn = $('myBtn')[0]
    //   var btn = document.getElementById('myBtn')
    //   // console.log('confirmationjs. myBtn '+btn)
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

var ConfirmationModal = function (_Component) {
    _inherits(ConfirmationModal, _Component);

    function ConfirmationModal() {
        _classCallCheck(this, ConfirmationModal);

        return _possibleConstructorReturn(this, (ConfirmationModal.__proto__ || Object.getPrototypeOf(ConfirmationModal)).apply(this, arguments));
    }

    _createClass(ConfirmationModal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var errorMessage = this.props.errorMessage;

            return _react2.default.createElement(
                'div',
                { id: 'confirmationmodal' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'span',
                                { onClick: function onClick(event) {
                                        return _this2.handleCancel(event);
                                    }, className: 'close' },
                                '\xD7'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Really?'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Do you wanna do this?'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick(event) {
                                        return _this2.handleConfirm(event);
                                    },
                                    className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                                'Confirm'
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick(event) {
                                        return _this2.handleCancel(event);
                                    },
                                    className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                                'Cancel'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel(event) {
            event.preventDefault();
            console.log('Cancel');
            // this.props.actions.needDeleteTrainingConfirmation(false)
            this.props.actions.needActionConfirmation(false);
        }
    }, {
        key: 'handleConfirm',
        value: function handleConfirm(event) {
            event.preventDefault();
            console.log('Confirm action');
            // this.props.actions.deleteEditTrainingDispatcher() //this.props.training
            this.props.actions.callActionConfirmation();
        }

        // handleConfirmationClick(event) {
        //   // console.log('confirmationjs andle request confirmation in progress click')
        //   // var modal = document.getElementById('myModal')
        //   // modal.style.display = 'block'
        //   this.props.onConfirmationProcessStartClick('Please confirmation')
        // }

    }]);

    return ConfirmationModal;
}(_react.Component);

// Confirmation.propTypes = {
//   onConfirmationClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }


exports.default = ConfirmationModal;