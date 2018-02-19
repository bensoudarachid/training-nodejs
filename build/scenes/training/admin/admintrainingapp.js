'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _admintraininglist = require('./admintraininglist');

var _admintraininglist2 = _interopRequireDefault(_admintraininglist);

var _trainingcommandpanel = require('./trainingcommandpanel');

var _trainingcommandpanel2 = _interopRequireDefault(_trainingcommandpanel);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

require('./admintrainingapp.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

if (process.env.BROWSER) {
    require('app/jquery.shuffleLetters.js');

    var rdm = 0;
    var lastrdm = 0;
}

var AdminTrainingApp = function (_Component) {
    _inherits(AdminTrainingApp, _Component);

    function AdminTrainingApp(props) {
        _classCallCheck(this, AdminTrainingApp);

        var _this = _possibleConstructorReturn(this, (AdminTrainingApp.__proto__ || Object.getPrototypeOf(AdminTrainingApp)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        _this.isTextSwitchAnimated = false;
        return _this;
    }

    _createClass(AdminTrainingApp, [{
        key: 'render',
        value: function render() {
            var isBrowser = process.env.BROWSER;
            if (!isBrowser) {
                return _react2.default.createElement('div', null);
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'admintrainingapp' },
                    _react2.default.createElement(
                        'span',
                        { id: 'textwrap' },
                        _react2.default.createElement('p', { id: 'textswitch' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'blockborder parampanel commandpanel' },
                            _react2.default.createElement(_trainingcommandpanel2.default, { trainings: this.props.trainingappmap.get('trainings'),
                                actions: this.props.actions })
                        ),
                        _react2.default.createElement(_admintraininglist2.default, { trainings: this.props.trainingappmap.get('trainings'),
                            actions: this.props.actions })
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            AdminTrainingApp.fetchData(this.props.actions);
            window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass'];
            this.textswitcher();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.isTextSwitchAnimated = false;
            this.props.actions.loadTrainings(undefined);
        }
    }, {
        key: 'textswitcher',
        value: function textswitcher() {
            var textSwitchWrapContainer = (0, _jquery2.default)('#textwrap');
            var textSwitchContainer = (0, _jquery2.default)('#textswitch');
            var loop = function () {
                this.isTextSwitchAnimated = true;
                setTimeout(function () {

                    var animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;

                    if (this.isTextSwitchAnimated) {
                        animFrame(loop.bind(this));
                    } else {
                        textSwitchWrapContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            (0, _jquery2.default)(this).removeClass();
                            textSwitchContainer.text('');
                        });
                        return;
                    }

                    while (lastrdm === rdm) {
                        rdm = Math.floor(Math.random() * window.switchTextArray.length);
                    }lastrdm = rdm;
                    textSwitchWrapContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        (0, _jquery2.default)(this).removeClass();
                    });
                    setTimeout(function () {
                        textSwitchContainer.shuffleLetters({
                            'text': window.switchTextArray[rdm]
                        });
                    }.bind(this), 440);
                }.bind(this), 4000);
            }.bind(this);
            loop();
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            return actions.retrieveTrainingsDispatcher();
        }
    }]);

    return AdminTrainingApp;
}(_react.Component);

exports.default = AdminTrainingApp;