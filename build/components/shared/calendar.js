'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../../../node_modules/fullcalendar/dist/fullcalendar.css');

require('./calendar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullCalendarEdit = function (_React$Component) {
    _inherits(FullCalendarEdit, _React$Component);

    function FullCalendarEdit() {
        _classCallCheck(this, FullCalendarEdit);

        return _possibleConstructorReturn(this, (FullCalendarEdit.__proto__ || Object.getPrototypeOf(FullCalendarEdit)).apply(this, arguments));
    }

    _createClass(FullCalendarEdit, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'calendar', ref: 'calendar' });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('events=' + require('util').inspect(this.props.events, false, null));
            componentHandler.upgradeDom();
            var calendar = this.refs.calendar;

            (0, _jquery2.default)(calendar).fullCalendar({
                theme: false,
                timezone: 'local',
                defaultView: 'agendaWeek',
                header: { center: 'Time Sheet', right: 'agendaWeek' },
                navLinks: false,
                editable: true,
                eventLimit: true,
                scrollTime: '09:00:00',
                minTime: '08:00:00',
                maxTime: '22:00:00',
                contentHeight: 'auto',
                events: this.props.events
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Unmount calendar=');
            var calendar = this.refs.calendar;

            (0, _jquery2.default)(calendar).fullCalendar('destroy');
        }
    }]);

    return FullCalendarEdit;
}(_react2.default.Component);

exports.default = FullCalendarEdit;