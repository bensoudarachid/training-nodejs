import React from 'react'
// import _ from 'lodash'


if (process.env.BROWSER) {
    require('./todocreate.scss')
}

export default class TodoCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null
        }
    }


    // renderError() {
    //   if (!this.state.error) {
    //     return null
    //   }

    //   return <div style={{
    //     color: 'red'
    //   }}>{this.state.error}</div>
    // }
    // <form onSubmit={this.handleCreate.bind(this)}>
    //       <div className='mdl-textfield tf mdl-js-textfield'>
    //         <input className='mdl-textfield__input' type='text' ref="createInput" id='createInput'/>
    //         <label className='mdl-textfield__label' htmlFor='createInput'>New todo...</label>
    //       </div>            
    //       <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Create</button>
    //           {this.renderError()}
    // </form>
    render() {
        const errorClass = this.state.error ? 'error' : ''

        return (
            <div id='todocreate'
                 className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form className='mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'
                      onSubmit={this.handleCreate.bind(this)}>
                    <div className='mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
                        <div className='mdl-textfield tf mdl-js-textfield'>
                            <input className='mdl-textfield__input' type='text' ref="createInput" id='createInput'/>
                            <label className='mdl-textfield__label' htmlFor='createInput'>New todo...</label>
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

    // {this.renderError()}

    handleCreate(event) {
//    console.log('handle create call')
        event.preventDefault()

        const createInput = this.refs.createInput
        const task = createInput.value
        const validateInput = this.validateInput(task)

        if (validateInput) {
            this.setState({
                error: validateInput
            })
            setTimeout(function () {
                this.setState({
                    error: null
                })
            }.bind(this), (3000)) //1000/100

            return
        }

        this.setState({
            error: null
        })
        // this.props.createTask(task);
        this.props.actions.createTodo(task)
        this.refs.createInput.value = ''
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
            // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
            return 'Task already exists.'
        } else {
            return null
        }
    }
}
