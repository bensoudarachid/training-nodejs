'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('jquery');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDnd = require('react-dnd');

var _reactBigCalendar = require('react-big-calendar');

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _dragAndDrop = require('../../../node_modules/react-big-calendar/lib/addons/dragAndDrop');

var _dragAndDrop2 = _interopRequireDefault(_dragAndDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import $ from 'jquery'

// import '../../../node_modules/fullcalendar/dist/fullcalendar.js'
// import 'fullcalendar'


var DragAndDropCalendar = (0, _dragAndDrop2.default)(_reactBigCalendar2.default);

_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));

if (process.env.BROWSER) {
    console.log('Calendar. environment is browser');
    // require('../../../node_modules/fullcalendar/dist/fullcalendar.css')
    require('../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css');
    require('../../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css');
    require('./calendar.scss');
}
// <div className='calendar' ref='calendar'/>


var MyCustomHeader = _react2.default.createClass({
    displayName: 'MyCustomHeader',
    render: function render() {
        var label = this.props.label;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                label.substring(0, 3)
            )
        );
    }
});

var Calendar = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    // export default class Calendar extends React.Component {
    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _this.state = {
            localevents: props.events
        };
        _this.moveEvent = _this.moveEvent.bind(_this);
        return _this;
    }

    _createClass(Calendar, [{
        key: 'Test',
        value: function Test(props) {
            return _react2.default.createElement(
                'strong',
                null,
                'Hi'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            // console.log('calendar render. events='+require('util').inspect(this.props.events, false, null))

            // let today = moment()
            // let am8 = today.set('hour', 8).set('minutes', 0).toDate()
            // let pm8 = today.set('hour', 21).set('minutes', 0).toDate()
            return _react2.default.createElement(
                'div',
                { className: 'calendar' },
                _react2.default.createElement(DragAndDropCalendar, {
                    selectable: true,
                    date: new Date(2001, 0, 7, 12, 30, 0, 0),
                    events: this.state.localevents //{this.props.events}
                    // min={am8}
                    // max={pm8}
                    , min: new Date(2001, 0, 7, 8, 0, 0, 0),
                    max: new Date(2001, 0, 7, 22, 0, 0, 0)
                    // min={moment().startOf('day').toDate()}
                    // max={moment().endOf('day').toDate()}
                    , culture: 'en-GB'
                    // events={myevents}
                    // style={{height: '420px'}}
                    // startAccessor='startDate'
                    // endAccessor='endDate'
                    // toolbar={false}
                    , style: { height: '650px', backgroundColor: 'transparent', margin: '4px' },
                    step: 30,
                    timeslots: 4,
                    defaultView: 'week',
                    onEventDrop: this.moveEvent,
                    components: {
                        day: { header: MyCustomHeader }
                        // week: {header: MyCustomHeader},
                        // month: {header: MyCustomHeader}
                    }
                    // views={[]}
                })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log('events='+require('util').inspect(this.props.events, false, null))
            componentHandler.upgradeDom();
            // const {calendar} = this.refs
            // $(calendar).fullCalendar({

            //   theme: false,
            //   timezone:'local',
            //   defaultView: 'agendaWeek',
            //   header: { center: 'Time Sheet',right:'agendaWeek'},
            //   navLinks: false,
            //   editable: true,
            //   eventLimit: true,
            //   // allDaySlot: false,
            //   scrollTime : '09:00:00',
            //   minTime : '08:00:00',
            //   maxTime : '22:00:00',
            //   // defaultdate: dateFormat(Date(),"yyyy-mm-dd"),
            //   contentHeight: 'auto',

            //   events:this.props.events,
            // })
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Unmount calendar');
            // const {calendar} = this.refs
            // $(calendar).fullCalendar('destroy')
        }
    }, {
        key: 'moveEvent',
        value: function moveEvent(_ref) {
            var event = _ref.event,
                start = _ref.start,
                end = _ref.end;

            // const events = this.props.events
            var localevents = this.state.localevents;


            var idx = localevents.indexOf(event);
            var updatedEvent = _extends({}, event, { start: start, end: end
            });

            var nextEvents = [].concat(_toConsumableArray(localevents));
            nextEvents.splice(idx, 1, updatedEvent);

            this.setState({
                localevents: nextEvents
            });

            // alert(`${event.title} was dropped onto ${event.start}`)
        }
    }]);

    return Calendar;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Calendar);