import React from 'react'
import './todosfilter.scss'

export default class TodosFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone'>
                <div id='todosfilter'
                     className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                    <div
                        className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput'>
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox1">
                            <input type="checkbox" id="checkbox1" className="bgo mdl-checkbox__input"
                                   ref="filterTodosOpen" defaultChecked={this.props.filteropen}
                                   onClick={this.handleFilterOpen.bind(this)}/>
                            <span className="mdl-checkbox__label">Open</span>
                        </label>
                    </div>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput"
                               htmlFor="checkbox2">
                            <input type="checkbox" id="checkbox2" className="bgr mdl-checkbox__input"
                                   ref="filterTodosClosed" defaultChecked={this.props.filterclosed}
                                   onClick={this.handleFilterClosed.bind(this)}/>
                            <span className="mdl-checkbox__label">Closed</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }

    renderOld() {
        return (

            <div id='todosfilter'>
                <p>open</p>
                <input type="checkbox" ref="filterOpen"
                       defaultChecked={this.props.filteropen}
                       onClick={this.handleFilterOpen.bind(this)}/>
                <p>closed</p>
                <input type="checkbox" ref="filterTodosClosed"
                       defaultChecked={this.props.filterclosed}
                       onClick={this.handleFilterClosed.bind(this)}/>
            </div>
        )
    }

    handleFilterOpen(event) {

        const filterOpen = event.target.checked
        console.log('filter todos. Open. Checkbox' + event.target.checked + ', Filter ' + filterOpen)
        this.props.actions.filterTodosOpen(filterOpen)
    }

    handleFilterClosed(event) {

        const filterClosed = event.target.checked
        console.log('filter todos. Closed. Checkbox' + event.target.checked + ', Filter ' + filterClosed)
        this.props.actions.filterTodosClosed(filterClosed)
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
            return 'Task already exists'
        } else {
            return null
        }
    }
}
