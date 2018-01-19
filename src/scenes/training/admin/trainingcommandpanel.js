import React from 'react'

if (process.env.BROWSER) {
    require('./trainingcommandpanel.scss')
}

<<<<<<< HEAD
<<<<<<< HEAD
export default class TrainingCommandPanel extends React.Component {
=======
export default
class TrainingCommandPanel extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TrainingCommandPanel extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            <div id='trainingcommandpanel'
                 className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form
                    className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'
                    onSubmit={this.handleSearch.bind(this)}>
<<<<<<< HEAD

                    <div
                        className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
=======
            <div id='trainingcommandpanel' className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                <form className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' onSubmit={this.handleSearch.bind(this)}>

                    <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
>>>>>>> 6e3ff02... webstorm big changes crash
=======

                    <div
                        className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        <div className='mdl-cell mdl-cell--10-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'>
                            <div className='mdl-textfield tf mdl-js-textfield'>
                                <input className='mdl-textfield__input' type='text' ref="searchInput" id='searchInput'/>
                                <label className='mdl-textfield__label' htmlFor='searchInput'>Search...</label>
                            </div>
                        </div>
                        <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
<<<<<<< HEAD
<<<<<<< HEAD
                            <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored '>
                                Search
                            </button>
=======
                            <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored '>Search</button>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                            <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored '>
                                Search
                            </button>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        </div>
                    </div>

                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
<<<<<<< HEAD
<<<<<<< HEAD
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'
                                onClick={this.handleNew.bind(this)}>New
                        </button>
                    </div>
                </form>
                <div
                    className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
=======
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleNew.bind(this)}>New</button>
                    </div>
                </form>
                <div className='bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items'
                                onClick={this.handleNew.bind(this)}>New
                        </button>
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
