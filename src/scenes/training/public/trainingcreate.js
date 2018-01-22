import React from 'react'

if (process.env.BROWSER) {
    require('./trainingcreate.scss')
}

export default class TrainingCreate extends React.Component {
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
            <div id='trainingcreate'
                 className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form className='mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'
                      onSubmit={this.handleCreate.bind(this)}>
                    <div className='mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
                        <div className='mdl-textfield tf mdl-js-textfield'>
                            <input className='mdl-textfield__input' type='text' ref="createInput" id='createInput'/>
                            <label className='mdl-textfield__label' htmlFor='createInput'>New training...</label>
                        </div>
                    </div>
                    <div
                        className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'>
                            Create
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

    handleCreate(event) {
        event.preventDefault()

        const createInput = this.refs.createInput
        const title = createInput.value
        const validateInput = this.validateInput(title)
        if (validateInput) {
            this.setState({
                error: validateInput
            })
            return
        }

        this.setState({
            error: null
        })
        this.props.actions.createTraining(title)
        this.refs.createInput.value = ''
    }

    validateInput(title) {
        if (!title) {
            return 'Please enter a title.'
        } else if (this.props.trainings.find((training) => training.get('title') === title)) {
            return 'Title already exists.'
        } else {
            return null
        }
    }

}
