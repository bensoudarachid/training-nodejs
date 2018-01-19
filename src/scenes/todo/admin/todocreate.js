import React from 'react'

if (process.env.BROWSER) {
    require('./todocreate.scss')
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b06ef94... clean code, remove comments
export default class TodoCreate extends React.Component {
=======
export default
class TodoCreate extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TodoCreate extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)

        this.state = {
            error: null
        }
    }

<<<<<<< HEAD

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
<<<<<<< HEAD
    //       </div>            
=======
    //       </div>
>>>>>>> 6e3ff02... webstorm big changes crash
    //       <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Create</button>
    //           {this.renderError()}
    // </form>
=======
>>>>>>> b06ef94... clean code, remove comments
    render() {
        const errorClass = this.state.error ? 'error' : ''

        return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            <div id='todocreate'
                 className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form className='mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'
                      onSubmit={this.handleCreate.bind(this)}>
<<<<<<< HEAD
=======
            <div id='todocreate' className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form className='mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' onSubmit={this.handleCreate.bind(this)}>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    <div className='mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
                        <div className='mdl-textfield tf mdl-js-textfield'>
                            <input className='mdl-textfield__input' type='text' ref="createInput" id='createInput'/>
                            <label className='mdl-textfield__label' htmlFor='createInput'>New todo...</label>
                        </div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    <div
                        className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'>
                            Create
                        </button>
<<<<<<< HEAD
                    </div>
                </form>
                <div
                    className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
=======
                    <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'>Create</button>
                    </div>
                </form>
                <div className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    </div>
                </form>
                <div
                    className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    <div className={errorClass}>{this.state.error}</div>
                </div>
            </div>
        )
    }

    handleCreate(event) {
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
            }.bind(this), (3000))
            return
        }

        this.setState({
            error: null
        })
        this.props.actions.createTodo(task)
        this.refs.createInput.value = ''
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
<<<<<<< HEAD
            // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
<<<<<<< HEAD
<<<<<<< HEAD
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
=======
        } else if (this.props.todos.find((todo) =>  todo.get('task') === task)) {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
=======
>>>>>>> b06ef94... clean code, remove comments
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            return 'Task already exists.'
        } else {
            return null
        }
    }
}
