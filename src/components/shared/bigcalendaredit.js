import React from 'react'
import 'jquery'
import Immutable from 'immutable'

// import $ from 'jquery'

// import '../../../node_modules/fullcalendar/dist/fullcalendar.js'
// import 'fullcalendar'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from '../../../node_modules/react-big-calendar/lib/addons/dragAndDrop'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)


BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

if (process.env.BROWSER) {
    console.log('Calendar. environment is browser')
    // require('../../../node_modules/fullcalendar/dist/fullcalendar.css')
    require('../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css')
    require('../../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css')
    require('./calendar.scss')
}
// <div className='calendar' ref='calendar'/>


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
// export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            localevents: props.events
        }
        this.moveEvent = this.moveEvent.bind(this)
        this.selectEvent = this.selectEvent.bind(this)
        this.eventStyleGetter = this.eventStyleGetter.bind(this)
    }

    Test(props) {
        return <strong>Hi</strong>
    }

    // <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>

    //     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //       <form className='pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
    //         <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //             <div className='mdl-textfield tf mdl-js-textfield'>
    //               <input className='mdl-textfield__input' type='text' defaultValue={title} name={'eventInput'+index} ref='eventInput' id={'eventInput'+index}/>
    //               <label className='mdl-textfield__label' htmlFor={'eventInput'+index}>Event...</label>
    //             </div>
    //         </div>
    //       </form>
    //       <div className='editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
    //         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.onCancelClick.bind(this)} disabled={disabled}>Cancel</button>
    //         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items' onClick={this.onSaveClick.bind(this)} disabled={disabled}>Save</button>
    //       </div>
    //     </div>

    // </div>

    render() {
        // console.log('calendar render. events='+require('util').inspect(this.props.events, false, null))
        // const title = this.state.event.title
        // const id = this.state.event.get('id')
        // const index = this.state.event.id

        // let today = moment()
        // let am8 = today.set('hour', 8).set('minutes', 0).toDate()
        // let pm8 = today.set('hour', 21).set('minutes', 0).toDate()
        return (
            <div className='calendar'>

                <DragAndDropCalendar
                    selectable
                    defaultDate={new Date(2001, 0, 7, 12, 30, 0, 0)}
                    events={this.state.localevents} //{this.props.events}
                    // min={am8}
                    // max={pm8}
                    min={new Date(2001, 0, 7, 8, 0, 0, 0)}
                    max={new Date(2001, 0, 7, 22, 0, 0, 0)}
                    // min={moment().startOf('day').toDate()}
                    // max={moment().endOf('day').toDate()}
                    culture='en-GB'
                    // events={myevents}
                    // style={{height: '420px'}}
                    // startAccessor='startDate'
                    // endAccessor='endDate'
                    // toolbar={false}
                    style={{height: '650px', backgroundColor: 'transparent', margin: '4px'}}
                    step={30}
                    timeslots={4}
                    defaultView='week'
                    onEventDrop={this.moveEvent}
                    onSelectEvent={this.selectEvent}
                    eventPropGetter={(this.eventStyleGetter)}
                    components={{
                        day: {header: MyCustomHeader},
                        // week: {header: MyCustomHeader},
                        // month: {header: MyCustomHeader}
                    }}
                    // views={[]}
                />
            </div>
        )
    }

    componentDidMount() {
        // console.log('events='+require('util').inspect(this.props.events, false, null))
//    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        componentHandler.upgradeDom()
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

    componentWillUnmount() {
        console.log('Unmount calendar')
        // const {calendar} = this.refs
        // $(calendar).fullCalendar('destroy')
    }

    moveEvent({event, start, end}) {
        // const events = this.props.events
        const {localevents} = this.state

        const idx = localevents.indexOf(event)
        const updatedEvent = {...event, start, end}

        const nextEvents = [...localevents]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
            localevents: nextEvents
        })
        // alert(`${event.title} was dropped onto ${event.start}`)
    }

    selectEvent(event) {
        const {localevents} = this.state
        const nextEvents = [...localevents]

        // const idx = nextEvents.indexOf(event)
        // const updatedEvent = { ...event }
        // updatedEvent.title = 'Thomas'
        // nextEvents.splice(idx, 1, updatedEvent)
        // this.setState({
        //   localevents: nextEvents
        // })


        console.log('event.id=' + require('util').inspect(event.id, false, null))
        for (var i = 0; i < nextEvents.length; i++) {
            if (nextEvents[i].id == event.id) {
                nextEvents[i].title = 'Thomas'
                break
            }
        }
        this.setState({
            localevents: nextEvents
        })
    }

    eventStyleGetter(event, start, end, isSelected) {
        console.log('eventStyleGetter =' + require('util').inspect(event.title, false, null) + ', isSelected=' + require('util').inspect(isSelected, false, null))
        // var backgroundColor = '#' + event.hexColor
        // var backgroundColor = '#aaf'
        var borderColor = 'transparent'
        if (isSelected) {
            // backgroundColor = '#f34'
            borderColor = '#f70'
        }
        // console.log('event.title='+require('util').inspect(event.title, false, null)+'border='+require('util').inspect(border, false, null))

        var style = {
            // backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            'border': '5px',
            'border-style': 'solid',
            'border-radius': '10px',
            'border-color': borderColor, //'#f4f #f34'
            display: 'block'
        }
        return {
            style: style
        }
    }

}

export default DragDropContext(HTML5Backend)(BigCalendarEdit)