import React from 'react'
import 'jquery'
import $ from 'jquery'

if (process.env.BROWSER) {
    console.log('Calendar. environment is browser')
    require('../../../node_modules/fullcalendar/dist/fullcalendar.css')
    require('./calendar.scss')
}

export default class FullCalendarEdit extends React.Component {
    render() {
        return (
            <div className='calendar' ref='calendar'/>
        )
    }

    componentDidMount() {
        console.log('events=' + require('util').inspect(this.props.events, false, null))
        componentHandler.upgradeDom()
        const {calendar} = this.refs
        $(calendar).fullCalendar({
            theme: false,
            timezone: 'local',
            defaultView: 'agendaWeek',
            header: {center: 'Time Sheet', right: 'agendaWeek'},
            navLinks: false,
            editable: true,
            eventLimit: true,
            scrollTime: '09:00:00',
            minTime: '08:00:00',
            maxTime: '22:00:00',
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