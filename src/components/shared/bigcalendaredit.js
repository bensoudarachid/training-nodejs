import React from 'react'
import 'jquery'
import Immutable from 'immutable'


import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import styles  from './bigcalendaredit.scss'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

let MyCustomHeader = React.createClass({
    render() {
        const {label} = this.props
        return (
            <div>
                <div>{label.substring(0, 3)}</div>
            </div>
        )
    }
})

class BigCalendarEdit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedEvent: undefined
        }
        this.moveEvent = this.moveEvent.bind(this)
        this.selectEvent = this.selectEvent.bind(this)
        this.eventStyleGetter = this.eventStyleGetter.bind(this)
    }

    Test(props) {
        return <strong>Hi</strong>
    }


    render() {

        let events = this.props.trainingappmap.get('edittrainingevents')

        const trainingTitle = this.props.trainingappmap.get('edittraining') ? this.props.trainingappmap.get('edittraining').get('title') : ''


        const selEvent = this.state.selectedEvent
        const eventTitle = selEvent == undefined ? 'Nothing' : selEvent.title
        const eventId = selEvent == undefined ? 'Nothing' : selEvent.id
        const startDate = selEvent == undefined ? 'Nothing' : selEvent.start
        const endDate = selEvent == undefined ? 'Nothing' : selEvent.end
        var hours = 0
        if (startDate && endDate)
            hours = Math.abs(endDate - startDate) / 36e5


        const disabled = false


        return (
            <div className='bigcalendaredit'>

                <div className='mdl-grid mdl-grid--no-spacing'>
                    <div key={'eventTitle' + eventId}
                         className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                        <div className='mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
                            <h4>
                                <nobr>{trainingTitle}</nobr>
                            </h4>
                        </div>
                        <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                            <button onClick={this.saveCalendar.bind(this)}
                                    className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton save1'>
                                <span className='glyphicon glyphicon-save'/>
                            </button>
                        </div>
                        <div
                            className='pad mdl-grid mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
                            <div
                                className='mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label duration'>
                                <select className='mdl-selectfield__select' id='duration' name='duration'
                                        value={hours > 0 ? hours : undefined}
                                        onChange={this.onDurationSelect.bind(this)}>
                                    <option value='0.5'>0.5</option>
                                    <option value='1'>1</option>
                                    <option value='1.5'>1.5</option>
                                    <option value='2'>2</option>
                                    <option value='2.5'>2.5</option>
                                    <option value='3'>3</option>
                                    <option value='3.5'>3.5</option>
                                    <option value='4'>4</option>
                                    <option value='4.5'>4.5</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                </select>
                                <div className='mdl-selectfield__icon'><span
                                    className='glyphicon glyphicon-chevron-down'></span></div>
                                <label className='mdl-selectfield__label' htmlFor='duration'>Duration</label>
                            </div>
                        </div>
                        <div className='mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone'>
                            <div className='eventbuttonwrap'>
                                <nobr>
                                    <button id='colorbutton1'
                                            className='colorbutton1 eventbutton'
                                            onClick={this.setColor1.bind(this)}>
                                    </button>
                                    <button id='colorbutton2'
                                            className='colorbutton2 eventbutton'
                                            onClick={this.setColor2.bind(this)}>
                                    </button>
                                    <button id='colorbutton3'
                                            className='colorbutton3 eventbutton'
                                            onClick={this.setColor3.bind(this)}>
                                    </button>
                                    <button id='colorbutton4'
                                            className='colorbutton4 eventbutton'
                                            onClick={this.setColor4.bind(this)}>
                                    </button>
                                </nobr>
                            </div>
                        </div>

                        <div
                            className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--1-col-phone'>
                            <div className='buttonwrap'>
                                <nobr>
                                    <button onClick={this.addEvent.bind(this)}
                                            className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'>
                                        <span className='glyphicon glyphicon-plus'/>
                                    </button>
                                    <button onClick={this.removeEvent.bind(this)}
                                            className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'>
                                        <span className='glyphicon glyphicon-minus'/>
                                    </button>
                                    <button onClick={this.saveCalendar.bind(this)}
                                            className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton save2'>
                                        <span className='glyphicon glyphicon-save'/>
                                    </button>
                                </nobr>
                            </div>

                        </div>

                    </div>

                </div>

                <div>
                    <ul>
                        <li>&nbsp;</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>
                </div>

                <DragAndDropCalendar
                    selectable
                    defaultDate={new Date(2001, 0, 7, 12, 30, 0, 0)}
                    events={events} min={new Date(2001, 0, 7, 8, 0, 0, 0)}
                    max={new Date(2001, 0, 7, 22, 0, 0, 0)}
                    culture='en-GB'
                    toolbar={false}
                    style={{height: '650px', backgroundColor: 'transparent', margin: '4px', border: '0px'}}
                    step={30}
                    timeslots={4}
                    defaultView='week'
                    onEventDrop={this.moveEvent}
                    onSelectEvent={this.selectEvent}
                    eventPropGetter={(this.eventStyleGetter)}
                    selected={selEvent}
                    components={{
                        day: {header: MyCustomHeader},
                        week: {header: MyCustomHeader},
                        month: {header: MyCustomHeader}
                    }}
                />
            </div>
        )
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }

    componentDidUpdate() {
        componentHandler.upgradeDom()
        for (var i = 1; i < 5; i++)
            $('.colorbutton' + i).removeClass('buttonborder')
        if (this.state.selectedEvent)
            $('.colorbutton' + this.state.selectedEvent.number).addClass('buttonborder')
    }

    componentWillUnmount() {
        console.log('Unmount calendar')
    }

    setColor1(event) {
        this.setColor(1)
    }

    setColor2(event) {
        this.setColor(2)
    }

    setColor3(event) {
        this.setColor(3)
    }

    setColor4(event) {
        this.setColor(4)
    }

    setColor(num) {
        console.log('num=' + require('util').inspect(num, false, null))
        const {selectedEvent, localevents} = this.state
        if (!selectedEvent) return
        selectedEvent.number = num
        this.setState({
            localevents,
            selectedEvent
        })
    }

    removeEvent() {
        console.log('remove event')
        const {selectedEvent} = this.state
        var nextEvents = this.props.trainingappmap.get('edittrainingevents')
        console.log('remove selectedEvent=' + require('util').inspect(selectedEvent, false, null))
        nextEvents = nextEvents.filter((event) => {
            console.log('filter event=' + require('util').inspect(event, false, null) + ' event!= selecevent' + (event !== selectedEvent))
            return event !== selectedEvent
        })


        this.state = {
            selectedEvent: undefined
        }
        this.props.actions.handleTrainingEditEventsChange(nextEvents)
    }

    addEvent(event) {
        const duration = document.getElementById('duration').options[document.getElementById('duration').selectedIndex].value
        var nextEvents = this.props.trainingappmap.get('edittrainingevents')
        const {selectedEvent} = this.state
        const start = new Date(2001, 0, 6, 8, 0, 0, 0)
        const addMinutes = Number(duration * 60)
        const end = new Date(start.getTime() + addMinutes * 60000);
        var newEvent = {
            'id': undefined,
            'number': 0,
            'start': start,
            'end': end
        }

        nextEvents = nextEvents.filter((event) => {
            return event.number != 0
        })
        nextEvents = nextEvents.push(newEvent)
        this.state = {
            selectedEvent: newEvent
        }
        this.props.actions.handleTrainingEditEventsChange(nextEvents)
    }

    saveCalendar(event) {
        console.log('save calendar')
        const training = this.props.trainingappmap.get('edittraining')
        const newTraining = this.props.trainingappmap.get('edittraining').set('events', this.props.trainingappmap.get('edittrainingevents'))

        this.props.actions.updateTrainingDispatcher(newTraining, training)
        this.state = {
            selectedEvent: undefined
        }
    }

    onDurationSelect(elem) {
        const duration = document.getElementById('duration').options[document.getElementById('duration').selectedIndex].value
        const {selectedEvent} = this.state
        console.log('onDurationSelect ' + duration)

        if (selectedEvent != undefined) {
            var nextEvents = this.props.trainingappmap.get('edittrainingevents')
            console.log('selectedEvent=' + require('util').inspect(selectedEvent, false, null))
            console.log('just select this! ' + duration)
            const addMinutes = Number(duration * 60)
            console.log('newMinutes=' + require('util').inspect(addMinutes, false, null))
            selectedEvent.end = new Date(selectedEvent.start.getTime() + addMinutes * 60000);
            console.log('selectedEvent.end.getHours()=' + require('util').inspect(selectedEvent.end.getHours(), false, null))
            const eventArray = nextEvents.toIndexedSeq().toArray()
            for (var i = 0; i < eventArray.length; i++) {
                if (eventArray[i] === selectedEvent) {
                    nextEvents = Immutable.List(eventArray)
                    break
                }
            }
            this.props.actions.handleTrainingEditEventsChange(nextEvents)

        }

    }

    onCancelClick() {
    }

    moveEvent({event, start, end}) {
        var nextEvents = this.props.trainingappmap.get('edittrainingevents')


        event.start = start
        event.end = end

        const eventArray = nextEvents.toIndexedSeq().toArray()
        for (var i = 0; i < eventArray.length; i++) {
            console.log('nextEvents[i] found?' + require('util').inspect(i, false, null))
            if (eventArray[i] === event) {
                console.log('------ nextEvents[i] found!' + require('util').inspect(eventArray[i], false, null))
                nextEvents = Immutable.List(eventArray)
                break
            }
        }

        this.state = {
            selectedEvent: event
        }
        this.props.actions.handleTrainingEditEventsChange(nextEvents)
    }

    selectEvent(event) {
        console.log('event=' + require('util').inspect(event, false, null))
        console.log('this.state.selectedEvent=' + require('util').inspect(this.state.selectedEvent, false, null))

        const nextEvents = this.props.trainingappmap.get('edittrainingevents')

        if (this.state.selectedEvent == event) {
            console.log('Im out.')
            const idx = nextEvents.indexOf(Immutable.Map(event))
            this.setState({
                selectedEvent: undefined
            })
        } else {
            console.log('Im in.')
            this.setState({
                selectedEvent: event
            })
        }
    }

    eventStyleGetter(event, start, end, isSelected) {

        var backgroundColor = styles['eventcolor' + event.number]
        var borderColor = event.number == 0 ? 'red' : 'white'
        if (isSelected) {
            borderColor = 'black'
        }

        var style = {
            backgroundColor: backgroundColor,
            opacity: 0.85,
            color: 'transparent', border: '2px',
            'border-style': 'solid',
            'border-radius': '0px',
            'border-color': borderColor, display: 'block'
        }
        return {
            style: style
        }
    }
}

export default DragDropContext(HTML5Backend)(BigCalendarEdit)
