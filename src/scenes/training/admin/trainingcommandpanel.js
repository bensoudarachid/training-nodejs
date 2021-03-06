import React from 'react'
import './trainingcommandpanel.scss'

export default class TrainingCommandPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null
        }
    }

    renderError() {
        if (!this.state.error) {
            return null
        }

        return <div style={{
            color: 'red'
        }}>{this.state.error}</div>
    }

    render() {
        const errorClass = this.state.error ? 'error' : ''

        return (
            <div id='trainingcommandpanel'
                 className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form
                    className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'
                    onSubmit={this.handleSearch.bind(this)}>

                    <div
                        className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
                        <div className='mdl-cell mdl-cell--10-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'>
                            <div className='mdl-textfield tf mdl-js-textfield'>
                                <input className='mdl-textfield__input' type='text' ref="searchInput" id='searchInput'/>
                                <label className='mdl-textfield__label' htmlFor='searchInput'>Search...</label>
                            </div>
                        </div>
                        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
                            <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored '>
                                Search
                            </button>
                        </div>
                    </div>

                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'
                                onClick={this.handleNew.bind(this)}>New
                        </button>
                    </div>
                </form>
                <div
                    className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                    <div className={errorClass}>{this.state.error}</div>
                </div>
            </div>
        )
    }

    handleSearch(event) {
        console.log('handle search call')
        event.preventDefault()


    }

    handleNew(event) {
        console.log('handle New call')
        event.preventDefault()
        this.props.actions.newTraining()
    }


}
