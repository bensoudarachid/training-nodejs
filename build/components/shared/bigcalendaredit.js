'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('jquery');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDnd = require('react-dnd');

var _reactBigCalendar = require('react-big-calendar');

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _dragAndDrop = require('react-big-calendar/lib/addons/dragAndDrop');

var _dragAndDrop2 = _interopRequireDefault(_dragAndDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragAndDropCalendar = (0, _dragAndDrop2.default)(_reactBigCalendar2.default);

_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));
var styles = undefined;

if (process.env.BROWSER) {
    require('react-big-calendar/lib/css/react-big-calendar.css');
    require('react-big-calendar/lib/addons/dragAndDrop/styles.css');
    styles = require('./bigcalendaredit.scss');
}

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

var BigCalendarEdit = function (_React$Component) {
    _inherits(BigCalendarEdit, _React$Component);

    function BigCalendarEdit(props) {
        _classCallCheck(this, BigCalendarEdit);

        var _this = _possibleConstructorReturn(this, (BigCalendarEdit.__proto__ || Object.getPrototypeOf(BigCalendarEdit)).call(this, props));

        _this.state = {
            selectedEvent: undefined
        };
        _this.moveEvent = _this.moveEvent.bind(_this);
        _this.selectEvent = _this.selectEvent.bind(_this);
        _this.eventStyleGetter = _this.eventStyleGetter.bind(_this);
        return _this;
    }

    _createClass(BigCalendarEdit, [{
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

            var events = this.props.trainingappmap.get('edittrainingevents');

            var trainingTitle = this.props.trainingappmap.get('edittraining') ? this.props.trainingappmap.get('edittraining').get('title') : '';

            var selEvent = this.state.selectedEvent;
            var eventTitle = selEvent == undefined ? 'Nothing' : selEvent.title;
            var eventId = selEvent == undefined ? 'Nothing' : selEvent.id;
            var startDate = selEvent == undefined ? 'Nothing' : selEvent.start;
            var endDate = selEvent == undefined ? 'Nothing' : selEvent.end;
            var hours = 0;
            if (startDate && endDate) hours = Math.abs(endDate - startDate) / 36e5;

            var disabled = false;

            return _react2.default.createElement(
                'div',
                { className: 'bigcalendaredit' },
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-grid mdl-grid--no-spacing' },
                    _react2.default.createElement(
                        'div',
                        { key: 'eventTitle' + eventId,
                            className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                _react2.default.createElement(
                                    'nobr',
                                    null,
                                    trainingTitle
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.saveCalendar.bind(this),
                                    className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton save1' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-save' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'pad mdl-grid mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label duration' },
                                _react2.default.createElement(
                                    'select',
                                    { className: 'mdl-selectfield__select', id: 'duration', name: 'duration',
                                        value: hours > 0 ? hours : undefined,
                                        onChange: this.onDurationSelect.bind(this) },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '0.5' },
                                        '0.5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '1' },
                                        '1'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '1.5' },
                                        '1.5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '2' },
                                        '2'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '2.5' },
                                        '2.5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '3' },
                                        '3'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '3.5' },
                                        '3.5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '4' },
                                        '4'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '4.5' },
                                        '4.5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '5' },
                                        '5'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '6' },
                                        '6'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '7' },
                                        '7'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '8' },
                                        '8'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '9' },
                                        '9'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mdl-selectfield__icon' },
                                    _react2.default.createElement('span', {
                                        className: 'glyphicon glyphicon-chevron-down' })
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-selectfield__label', htmlFor: 'duration' },
                                    'Duration'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone' },
                            _react2.default.createElement(
                                'div',
                                { className: 'eventbuttonwrap' },
                                _react2.default.createElement(
                                    'nobr',
                                    null,
                                    _react2.default.createElement('button', { id: 'colorbutton1',
                                        className: 'colorbutton1 eventbutton',
                                        onClick: this.setColor1.bind(this) }),
                                    _react2.default.createElement('button', { id: 'colorbutton2',
                                        className: 'colorbutton2 eventbutton',
                                        onClick: this.setColor2.bind(this) }),
                                    _react2.default.createElement('button', { id: 'colorbutton3',
                                        className: 'colorbutton3 eventbutton',
                                        onClick: this.setColor3.bind(this) }),
                                    _react2.default.createElement('button', { id: 'colorbutton4',
                                        className: 'colorbutton4 eventbutton',
                                        onClick: this.setColor4.bind(this) })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--1-col-phone' },
                            _react2.default.createElement(
                                'div',
                                { className: 'buttonwrap' },
                                _react2.default.createElement(
                                    'nobr',
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.addEvent.bind(this),
                                            className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton' },
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.removeEvent.bind(this),
                                            className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton' },
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-minus' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.saveCalendar.bind(this),
                                            className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton save2' },
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-save' })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            '\xA0'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Mon'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Tue'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Wed'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Thu'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Fri'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Sat'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Sun'
                        )
                    )
                ),
                _react2.default.createElement(DragAndDropCalendar, {
                    selectable: true,
                    defaultDate: new Date(2001, 0, 7, 12, 30, 0, 0),
                    events: events, min: new Date(2001, 0, 7, 8, 0, 0, 0),
                    max: new Date(2001, 0, 7, 22, 0, 0, 0),
                    culture: 'en-GB',
                    toolbar: false,
                    style: { height: '650px', backgroundColor: 'transparent', margin: '4px', border: '0px' },
                    step: 30,
                    timeslots: 4,
                    defaultView: 'week',
                    onEventDrop: this.moveEvent,
                    onSelectEvent: this.selectEvent,
                    eventPropGetter: this.eventStyleGetter,
                    selected: selEvent,
                    components: {
                        day: { header: MyCustomHeader },
                        week: { header: MyCustomHeader },
                        month: { header: MyCustomHeader }
                    }
                })
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
            componentHandler.upgradeDom();
            for (var i = 1; i < 5; i++) {
                $('.colorbutton' + i).removeClass('buttonborder');
            }if (this.state.selectedEvent) $('.colorbutton' + this.state.selectedEvent.number).addClass('buttonborder');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Unmount calendar');
        }
    }, {
        key: 'setColor1',
        value: function setColor1(event) {
            this.setColor(1);
        }
    }, {
        key: 'setColor2',
        value: function setColor2(event) {
            this.setColor(2);
        }
    }, {
        key: 'setColor3',
        value: function setColor3(event) {
            this.setColor(3);
        }
    }, {
        key: 'setColor4',
        value: function setColor4(event) {
            this.setColor(4);
        }
    }, {
        key: 'setColor',
        value: function setColor(num) {
            console.log('num=' + require('util').inspect(num, false, null));
            var _state = this.state,
                selectedEvent = _state.selectedEvent,
                localevents = _state.localevents;

            if (!selectedEvent) return;
            selectedEvent.number = num;
            this.setState({
                localevents: localevents,
                selectedEvent: selectedEvent
            });
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent() {
            console.log('remove event');
            var selectedEvent = this.state.selectedEvent;

            var nextEvents = this.props.trainingappmap.get('edittrainingevents');
            console.log('remove selectedEvent=' + require('util').inspect(selectedEvent, false, null));
            nextEvents = nextEvents.filter(function (event) {
                console.log('filter event=' + require('util').inspect(event, false, null) + ' event!= selecevent' + (event !== selectedEvent));
                return event !== selectedEvent;
            });

            this.state = {
                selectedEvent: undefined
            };
            this.props.actions.handleTrainingEditEventsChange(nextEvents);
        }
    }, {
        key: 'addEvent',
        value: function addEvent(event) {
            var duration = document.getElementById('duration').options[document.getElementById('duration').selectedIndex].value;
            var nextEvents = this.props.trainingappmap.get('edittrainingevents');
            var selectedEvent = this.state.selectedEvent;

            var start = new Date(2001, 0, 6, 8, 0, 0, 0);
            var addMinutes = Number(duration * 60);
            var end = new Date(start.getTime() + addMinutes * 60000);
            var newEvent = {
                'id': undefined,
                'number': 0,
                'start': start,
                'end': end
            };

            nextEvents = nextEvents.filter(function (event) {
                return event.number != 0;
            });
            nextEvents = nextEvents.push(newEvent);
            this.state = {
                selectedEvent: newEvent
            };
            this.props.actions.handleTrainingEditEventsChange(nextEvents);
        }
    }, {
        key: 'saveCalendar',
        value: function saveCalendar(event) {
            console.log('save calendar');
            var training = this.props.trainingappmap.get('edittraining');
            var newTraining = this.props.trainingappmap.get('edittraining').set('events', this.props.trainingappmap.get('edittrainingevents'));

            this.props.actions.updateTrainingDispatcher(newTraining, training);
            this.state = {
                selectedEvent: undefined
            };
        }
    }, {
        key: 'onDurationSelect',
        value: function onDurationSelect(elem) {
            var duration = document.getElementById('duration').options[document.getElementById('duration').selectedIndex].value;
            var selectedEvent = this.state.selectedEvent;

            console.log('onDurationSelect ' + duration);

            if (selectedEvent != undefined) {
                var nextEvents = this.props.trainingappmap.get('edittrainingevents');
                console.log('selectedEvent=' + require('util').inspect(selectedEvent, false, null));
                console.log('just select this! ' + duration);
                var addMinutes = Number(duration * 60);
                console.log('newMinutes=' + require('util').inspect(addMinutes, false, null));
                selectedEvent.end = new Date(selectedEvent.start.getTime() + addMinutes * 60000);
                console.log('selectedEvent.end.getHours()=' + require('util').inspect(selectedEvent.end.getHours(), false, null));
                var eventArray = nextEvents.toIndexedSeq().toArray();
                for (var i = 0; i < eventArray.length; i++) {
                    if (eventArray[i] === selectedEvent) {
                        nextEvents = _immutable2.default.List(eventArray);
                        break;
                    }
                }
                this.props.actions.handleTrainingEditEventsChange(nextEvents);
            }
        }
    }, {
        key: 'onCancelClick',
        value: function onCancelClick() {}
    }, {
        key: 'moveEvent',
        value: function moveEvent(_ref) {
            var event = _ref.event,
                start = _ref.start,
                end = _ref.end;

            var nextEvents = this.props.trainingappmap.get('edittrainingevents');

            event.start = start;
            event.end = end;

            var eventArray = nextEvents.toIndexedSeq().toArray();
            for (var i = 0; i < eventArray.length; i++) {
                console.log('nextEvents[i] found?' + require('util').inspect(i, false, null));
                if (eventArray[i] === event) {
                    console.log('------ nextEvents[i] found!' + require('util').inspect(eventArray[i], false, null));
                    nextEvents = _immutable2.default.List(eventArray);
                    break;
                }
            }

            this.state = {
                selectedEvent: event
            };
            this.props.actions.handleTrainingEditEventsChange(nextEvents);
        }
    }, {
        key: 'selectEvent',
        value: function selectEvent(event) {
            console.log('event=' + require('util').inspect(event, false, null));
            console.log('this.state.selectedEvent=' + require('util').inspect(this.state.selectedEvent, false, null));

            var nextEvents = this.props.trainingappmap.get('edittrainingevents');

            if (this.state.selectedEvent == event) {
                console.log('Im out.');
                var idx = nextEvents.indexOf(_immutable2.default.Map(event));
                this.setState({
                    selectedEvent: undefined
                });
            } else {
                console.log('Im in.');
                this.setState({
                    selectedEvent: event
                });
            }
        }
    }, {
        key: 'eventStyleGetter',
        value: function eventStyleGetter(event, start, end, isSelected) {

            var backgroundColor = styles['eventcolor' + event.number];
            var borderColor = event.number == 0 ? 'red' : 'white';
            if (isSelected) {
                borderColor = 'black';
            }

            var style = {
                backgroundColor: backgroundColor,
                opacity: 0.85,
                color: 'transparent', border: '2px',
                'border-style': 'solid',
                'border-radius': '0px',
                'border-color': borderColor, display: 'block'
            };
            return {
                style: style
            };
        }
    }]);

    return BigCalendarEdit;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(BigCalendarEdit);