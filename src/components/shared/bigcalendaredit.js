import React from 'react'
import 'jquery'
import Immutable from 'immutable'


import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)
var styles = undefined

if (process.env.BROWSER) {
    require('react-big-calendar/lib/css/react-big-calendar.css')
    require('react-big-calendar/lib/addons/dragAndDrop/styles.css')
    styles = require('./bigcalendaredit.scss')
}

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

    componentWillUnmount() {
        console.log('Unmount calendar')
        // const {calendar} = this.refs
        // $(calendar).fullCalendar('destroy')
=======
    this.moveEvent = this.moveEvent.bind(this)
    this.selectEvent = this.selectEvent.bind(this)
    this.eventStyleGetter = this.eventStyleGetter.bind(this)    
  }

  Test(props)
  {
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
        style={{height: '650px',backgroundColor:'transparent',margin:'4px'}}
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

  selectEvent(event) {
    const { localevents } = this.state
    const nextEvents = [...localevents]

    // const idx = nextEvents.indexOf(event)
    // const updatedEvent = { ...event }
    // updatedEvent.title = 'Thomas'
    // nextEvents.splice(idx, 1, updatedEvent)
    // this.setState({
    //   localevents: nextEvents
    // })


    console.log('event.id='+require('util').inspect(event.id, false, null))
    for (var i=0; i<nextEvents.length; i++) {
      if (nextEvents[i].id == event.id) {
        nextEvents[i].title = 'Thomas'
        break
      }
>>>>>>> 6e3ff02... webstorm big changes crash
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

=======
=======

>>>>>>> bdb25a3... bring back the newest Version if BigCalendarEdit
=======
>>>>>>> b6f02e5... uglify and remove console logs. Check if bug is still there on openshift
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    eventStyleGetter(event, start, end, isSelected) {
        console.log('eventStyleGetter =' + require('util').inspect(event.title, false, null) + ', isSelected=' + require('util').inspect(isSelected, false, null))
=======
    eventStyleGetter(event, start, end, isSelected)
    {
=======
    eventStyleGetter(event, start, end, isSelected) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5de5723... test github push
        console.log('event Style Getter =' + require('util').inspect(event.title, false, null) + ', isSelected=' + require('util').inspect(isSelected, false, null))
>>>>>>> bdb25a3... bring back the newest Version if BigCalendarEdit
=======
//        console.log('event Style Getter =' + require('util').inspect(event.title, false, null) + ', isSelected=' + require('util').inspect(isSelected, false, null))
>>>>>>> 711f559... Javascript request interceptor for header manipulation. Webpack source maps not showing in Devtools. Eliminate source maps on production build. Export 5 colors constants from scss into javascript for the bigcalendar. Add mdl-selectfield in project and use it for bigcalendar. Adapt mdl-selectfield label color. Fix calendar background event and rows background colors. Devtools workspace. Map files to original disk files and edit directly in chrome. Disable autosaving of webpack.config.js in webstorm/Settings/LanguagesFrameworks/Webpack/change file name to something inexistent. Enable auto synchronisation on file disk change in webstorm. better buttons with glyphicons and hover. Adapt app wide uniform round buttons with glyphicons. Change buttons to the new round buttons on admin training list items. Implement a JSON.parse polyfill to automatically transform dates from json to javascript date objects. Bug fix. state Hydratation is not properly JSON date parsed. Need to stringify and parse again.Problem fix. Eveything landing in redux by state hydratation is deeply immutable Lists and Maps due to Immutable.fromJS. But we need a immutable list of simple Javascript events for BigCalendar: We add a new store element for this in trainingappmap: edittrainingevents.
        // var backgroundColor = '#' + event.hexColor
=======
>>>>>>> b06ef94... clean code, remove comments

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
