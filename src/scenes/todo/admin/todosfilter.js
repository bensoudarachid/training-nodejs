import React from 'react'
// import _ from 'lodash'

if (process.env.BROWSER) {
    require('./todosfilter.scss')
}


<<<<<<< HEAD
<<<<<<< HEAD
export default class TodosFilter extends React.Component {
=======
export default
class TodosFilter extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TodosFilter extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)

        // this.state = {
        //   error: null
        // };
    }

    // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>open</p></div>
    // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>closed</p></div>

//defaultChecked={this.props.filterTodos!==undefined}
    render() {
        // console.log('filter todos. filter = '+this.props.filterTodos)
        return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            <div
                className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone'>
                <div id='todosfilter'
                     className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                    <div
                        className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput'>
<<<<<<< HEAD
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox1">
                            <input type="checkbox" id="checkbox1" className="bgo mdl-checkbox__input"
                                   ref="filterTodosOpen" defaultChecked={this.props.filteropen}
                                   onClick={this.handleFilterOpen.bind(this)}/>
=======
            <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone'>
                <div id='todosfilter' className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput'>
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox1">
                            <input type="checkbox" id="checkbox1" className="bgo mdl-checkbox__input" ref="filterTodosOpen" defaultChecked={this.props.filteropen} onClick={this.handleFilterOpen.bind(this)} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox1">
                            <input type="checkbox" id="checkbox1" className="bgo mdl-checkbox__input"
                                   ref="filterTodosOpen" defaultChecked={this.props.filteropen}
                                   onClick={this.handleFilterOpen.bind(this)}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            <span className="mdl-checkbox__label">Open</span>
                        </label>
                    </div>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput"
                               htmlFor="checkbox2">
                            <input type="checkbox" id="checkbox2" className="bgr mdl-checkbox__input"
                                   ref="filterTodosClosed" defaultChecked={this.props.filterclosed}
                                   onClick={this.handleFilterClosed.bind(this)}/>
<<<<<<< HEAD
=======
                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput" htmlFor="checkbox2">
                            <input type="checkbox" id="checkbox2" className="bgr mdl-checkbox__input" ref="filterTodosClosed" defaultChecked={this.props.filterclosed} onClick={this.handleFilterClosed.bind(this)} />
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            <span className="mdl-checkbox__label">Closed</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }

    renderOld() {
        // console.log('filter todos. filter = '+this.props.filterTodos)
        return (

            <div id='todosfilter'>
                <p>open</p>
                <input type="checkbox" ref="filterOpen"
<<<<<<< HEAD
<<<<<<< HEAD
                       defaultChecked={this.props.filteropen}
                       onClick={this.handleFilterOpen.bind(this)}/>
                <p>closed</p>
                <input type="checkbox" ref="filterTodosClosed"
                       defaultChecked={this.props.filterclosed}
                       onClick={this.handleFilterClosed.bind(this)}/>
=======
                    defaultChecked={this.props.filteropen}
                    onClick={this.handleFilterOpen.bind(this)}/>
                <p>closed</p>
                <input type="checkbox" ref="filterTodosClosed"
                    defaultChecked={this.props.filterclosed}
                    onClick={this.handleFilterClosed.bind(this)}/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                       defaultChecked={this.props.filteropen}
                       onClick={this.handleFilterOpen.bind(this)}/>
                <p>closed</p>
                <input type="checkbox" ref="filterTodosClosed"
                       defaultChecked={this.props.filterclosed}
                       onClick={this.handleFilterClosed.bind(this)}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
    }

    handleFilterOpen(event) {
        // event.preventDefault();
        // const filterOpen = this.refs.filterOpen

        const filterOpen = event.target.checked //filterAllInput.value
        // var filter = undefined
        // if (filterAllChecked)
        //   filter = 'all'
        console.log('filter todos. Open. Checkbox' + event.target.checked + ', Filter ' + filterOpen)
        this.props.actions.filterTodosOpen(filterOpen)
    }

    handleFilterClosed(event) {
        // event.preventDefault();
        // const filterOpen = this.refs.filterOpen

        const filterClosed = event.target.checked //filterAllInput.value
        // var filter = undefined
        // if (filterAllChecked)
        //   filter = 'all'
        console.log('filter todos. Closed. Checkbox' + event.target.checked + ', Filter ' + filterClosed)
        this.props.actions.filterTodosClosed(filterClosed)
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
            // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
<<<<<<< HEAD
<<<<<<< HEAD
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
=======
        } else if (this.props.todos.find((todo) =>  todo.get('task') === task)) {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            return 'Task already exists'
        } else {
            return null
        }
    }
}
