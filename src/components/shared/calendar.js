import React from 'react'
import 'jquery'
import $ from 'jquery'

// import '../../../node_modules/fullcalendar/dist/fullcalendar.js'
import fullCalendar from 'fullcalendar'


if (process.env.BROWSER) {
    console.log('Calendar. environment is browser')
    require('../../../node_modules/fullcalendar/dist/fullcalendar.css')
    require('./calendar.scss')
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class FullCalendarEdit extends React.Component {
=======
export default
class FullCalendarEdit extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class FullCalendarEdit extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    render() {
        return (
            <div className='calendar' ref='calendar'/>
        )
    }

    componentDidMount() {
        console.log('events=' + require('util').inspect(this.props.events, false, null))
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        const {calendar} = this.refs
        $(calendar).fullCalendar({

            theme: false,
            timezone: 'local',
            defaultView: 'agendaWeek',
            header: {center: 'Time Sheet', right: 'agendaWeek'},
            navLinks: false,
            editable: true,
            eventLimit: true,
            // allDaySlot: false,
            scrollTime: '09:00:00',
            minTime: '08:00:00',
            maxTime: '22:00:00',
            // defaultdate: dateFormat(Date(),"yyyy-mm-dd"),
            contentHeight: 'auto',

            events: this.props.events,
        })

    }

    componentWillUnmount() {
        console.log('Unmount calendar=')
        const {calendar} = this.refs
        $(calendar).fullCalendar('destroy')
    }
}