'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoImage = function (_React$Component) {
    _inherits(TodoImage, _React$Component);

    function TodoImage(props) {
        _classCallCheck(this, TodoImage);

        var _this = _possibleConstructorReturn(this, (TodoImage.__proto__ || Object.getPrototypeOf(TodoImage)).call(this, props));

        _this.state = {
            imageLoaded: undefined
        };
        return _this;
    }

    _createClass(TodoImage, [{
        key: 'render',
        value: function render() {
            var taskid = this.props.taskid;
            var isUploading = this.props.isUploading;

            var idToken = _reactCookie2.default.load('jwt');
            return _react2.default.createElement(
                'div',
                { className: 'imgwrapper', id: 'imgwrap' + taskid },
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { id: 'todolistitemimg' + taskid, src: './images/0.png',
                    'data-src': _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken,
                    onLoad: this.handleImageLoaded.bind(this),
                    onError: this.handleImageErrored.bind(this), className: 'dataimg', alt: 'coding' })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            componentHandler.upgradeAllRegistered();

            var taskid = this.props.taskid;
            var elm = (0, _jquery2.default)('#imgwrap' + taskid);
            var image = elm.find('.dataimg');
            var img = image[0];

            if (this.props.isUploading == false) {
                var idToken = _reactCookie2.default.load('jwt');
                img.setAttribute('data-src', _apiconnection2.default.apiurl + _apiconnection2.default.appbasename + '/api/todo/img/' + taskid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000));
            }
            if (img.hasAttribute('data-src')) {
                var imgSpinner = elm.find('.mdl-spinner');
                imgSpinner[0].style.display = 'block';
                img.style.display = 'none';
                img.setAttribute('src', img.getAttribute('data-src'));
                img.removeAttribute('data-src');
            }
        }
    }, {
        key: 'handleImageLoaded',
        value: function handleImageLoaded() {
            var taskid = this.props.taskid;
            var elm = (0, _jquery2.default)('#imgwrap' + taskid);
            var imgSpinner = elm.find('.mdl-spinner');

            var image = elm.find('.dataimg');
            var img = image[0];
            if (!img.hasAttribute('data-src')) {
                img.style.display = 'block';
                if (img.getAttribute('src') != './images/0.png') img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)';
                imgSpinner[0].style.display = 'none';
            } else this.setState({ imageLoaded: true });
        }
    }, {
        key: 'handleImageErrored',
        value: function handleImageErrored() {
            var taskid = this.props.taskid;
            var elm = (0, _jquery2.default)('#imgwrap' + taskid);
            var imgSpinner = elm.find('.mdl-spinner');
            var image = elm.find('.dataimg');
            var img = image[0];
            imgSpinner[0].style.display = 'none';
            img.setAttribute('src', './images/0.png');
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var taskid = this.props.taskid;
            var elm = (0, _jquery2.default)('#imgwrap' + taskid);
            var image = elm.find('.dataimg');
            var img = image[0];
            if (img.hasAttribute('data-src') || this.props.isUploading && !img.hasAttribute('data-src')) {
                return true;
            }
            return false;
        }
    }]);

    return TodoImage;
}(_react2.default.Component);

exports.default = TodoImage;