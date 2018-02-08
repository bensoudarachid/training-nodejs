'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./home.scss');
}

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            (0, _jquery2.default)('.imgwrap').each(function (i, el) {
                var elm = (0, _jquery2.default)(el);
                var imgbg = elm.find('.imgbg');
                var img = elm.find('.dataimg');
                var imgSpinner = elm.find('.mdl-spinner');

                setTimeout(function () {
                    if (img.load(true) && img[0].hasAttribute('data-src')) {
                        img[0].setAttribute('src', img[0].getAttribute('data-src'));
                        img[0].onload = function () {
                            img[0].removeAttribute('data-src');
                            imgSpinner.remove();

                            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                                imgSpinner.remove();
                                elm.addClass('animated');

                                if (imgbg.hasClass('animated')) return;else {
                                    imgbg.removeClass('imgbg');
                                    imgbg.addClass('animated imgwraptor');
                                }
                            }
                        };
                    }
                }, 50);
            });
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var idToken = _reactCookie2.default.load('jwt');
            var anim = function anim(elm) {
                var imgbg = elm.find('.imgbg');
                var img = elm.find('.dataimg');
                elm.addClass('animated');
                var rdm = Math.floor(Math.random() * 3) + 1;
                var rdm2 = Math.floor(Math.random() * 2) + 1;
                var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip';
                img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''));
                imgbg.removeClass('imgbg');
                var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight';
                imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor');
            };
            (0, _jquery2.default)('.imgwrap').each(function (i, el) {
                var elm = (0, _jquery2.default)(el);
                var img = elm.find('.dataimg');
                var imgSpinner = elm.find('.mdl-spinner');
                if (img.load(true) && img[0].hasAttribute('data-src')) {
                    img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? '?access_token=' + idToken : ''));
                    img[0].onload = function () {
                        console.log('image loaded on scroll: ' + img[0].getAttribute('data-src'));
                        img[0].removeAttribute('data-src');
                        imgSpinner.remove();

                        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                            if (elm.hasClass('animated')) {
                                return;
                            } else {
                                anim(elm);
                            }
                        }
                    };
                }
                if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                    if (elm.hasClass('animated')) {
                        return;
                    } else {
                        anim(elm);
                    }
                }
            });
        }

        // <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'}
        // className='dataimg' alt='coding'/>

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'home' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-Coding.svg',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-Deploying.svg',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-Planning.svg',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement('div', { className: 'clearfix visible-md visible-lg' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/rocket.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/planningdev.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/media.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement('div', { className: 'clearfix visible-md visible-lg' })
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;