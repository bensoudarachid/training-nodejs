import React from 'react'
import 'jquery'
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
<<<<<<< HEAD
<<<<<<< HEAD
        const {label} = this.props
        return (
            <div>
                <div>{label.substring(0, 3)}</div>
=======
        const { label } = this.props
        return (
            <div>
                <div>{ label.substring(0, 3) }</div>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        const {label} = this.props
        return (
            <div>
                <div>{label.substring(0, 3)}</div>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
    }
})


class Calendar extends React.Component {
// export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            localevents: props.events
        }
        this.moveEvent = this.moveEvent.bind(this)
    }

    Test(props) {
        return <strong>Hi</strong>
    }

    render() {
        // console.log('calendar render. events='+require('util').inspect(this.props.events, false, null))

        // let today = moment()
        // let am8 = today.set('hour', 8).set('minutes', 0).toDate()
        // let pm8 = today.set('hour', 21).set('minutes', 0).toDate()
        return (
            <div className='calendar'>
                <DragAndDropCalendar
                    selectable
                    date={new Date(2001, 0, 7, 12, 30, 0, 0)}
                    events={this.state.localevents} //{this.props.events}
                    // min={am8}
                    // max={pm8}
                    min={new Date(2001, 0, 7, 8, 0, 0, 0)}
                    max={new Date(2001, 0, 7, 22, 0, 0, 0)}
                    // min={moment().startOf('day').toDate()}
<<<<<<< HEAD
                    // max={moment().endOf('day').toDate()}      
=======
                    // max={moment().endOf('day').toDate()}
>>>>>>> 6e3ff02... webstorm big changes crash
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
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // const {calendar} = this.refs
        // $(calendar).fullCalendar({

        //   theme: false,
        //   timezone:'local',
        //   defaultView: 'agendaWeek',
        //   header: { center: 'Time Sheet',right:'agendaWeek'},
<<<<<<< HEAD
        //   navLinks: false, 
=======
        //   navLinks: false,
>>>>>>> 6e3ff02... webstorm big changes crash
        //   editable: true,
        //   eventLimit: true,
        //   // allDaySlot: false,
        //   scrollTime : '09:00:00',
        //   minTime : '08:00:00',
        //   maxTime : '22:00:00',
        //   // defaultdate: dateFormat(Date(),"yyyy-mm-dd"),
<<<<<<< HEAD
        //   contentHeight: 'auto',         
=======
        //   contentHeight: 'auto',
>>>>>>> 6e3ff02... webstorm big changes crash

        //   events:this.props.events,
        // })

    }

    componentWillUnmount() {
        console.log('Unmount calendar')
        // const {calendar} = this.refs
        // $(calendar).fullCalendar('destroy')
    }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    moveEvent({ event, start, end }) {
=======
    moveEvent({event, start, end}) {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        // const events = this.props.events
        const {localevents} = this.state

        const idx = localevents.indexOf(event)
        const updatedEvent = {
            ...
                event, start, end
        }

        const nextEvents = [...localevents]
        nextEvents
            .splice(idx,

                1,
                updatedEvent
            )

        this
            .setState({
                localevents: nextEvents
            })

<<<<<<< HEAD
    // alert(`${event.title} was dropped onto ${event.start}`)
}
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        // alert(`${event.title} was dropped onto ${event.start}`)
    }
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

}

export default DragDropContext(HTML5Backend)(Calendar)