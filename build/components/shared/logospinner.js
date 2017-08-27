'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    console.log('LogoSpinner. environment is browser');
    require('./logospinner.scss');
}

var LogoSpinner = function (_React$Component) {
    _inherits(LogoSpinner, _React$Component);

    function LogoSpinner() {
        _classCallCheck(this, LogoSpinner);

        return _possibleConstructorReturn(this, (LogoSpinner.__proto__ || Object.getPrototypeOf(LogoSpinner)).apply(this, arguments));
    }

    _createClass(LogoSpinner, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'logospinner' },
                _react2.default.createElement(
                    'span',
                    { className: 'mdlspinnerwrap' },
                    _react2.default.createElement('div', { className: 'mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active mdlspinner' })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'logowrap' },
                    _react2.default.createElement('img', { src: './images/RoyaLogoNeutralH120.png', className: 'logo', alt: 'Roya logo' })
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }]);

    return LogoSpinner;
}(_react2.default.Component);

exports.default = LogoSpinner;