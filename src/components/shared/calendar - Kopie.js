import React from 'react'
import 'jquery'
// import $ from 'jquery'

// import '../../../node_modules/fullcalendar/dist/fullcalendar.js'
// import 'fullcalendar'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
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
  render(){
    const { label } = this.props
    return (
      <div>
        <div>{ label.substring(0, 3) }</div>
      </div>
    )
  }
})


class Calendar extends React.Component{
// export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      localevents: props.events
    }
    this.moveEvent = this.moveEvent.bind(this)
  }

  Test(props)
  {
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
        // max={moment().endOf('day').toDate()}      
        culture='en-GB'
        // events={myevents}
        // style={{height: '420px'}}
        // startAccessor='startDate'
        // endAccessor='endDate'
        // toolbar={false}
        style={{height: '650px',backgroundColor:'transparent',margin:'4px'}}
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
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
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

  moveEvent({ event, start, end }) {
    // const events = this.props.events
    const { localevents } = this.state

    const idx = localevents.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...localevents]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      localevents: nextEvents
    })

    // alert(`${event.title} was dropped onto ${event.start}`)
  }

}
export default DragDropContext(HTML5Backend)(Calendar)