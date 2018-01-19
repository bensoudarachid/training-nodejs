import TodoCreate from './admin/todocreate'
import TodosFilter from './admin/todosfilter'
import React, {Component} from 'react'
import TodosList from './admin/todoslist'
import PureRenderMixin from 'react-addons-pure-render-mixin'

var util = require('util')

if (process.env.BROWSER) {
    require('./todoapp.scss')
}

class TodoApp extends Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)


    }

<<<<<<< HEAD
    componentDidMount() {
        //console.log('todoappjs mounted. Call fetchdata')
        TodoApp.fetchData(this.props.actions)
<<<<<<< HEAD
        // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        // componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
    }

    //This is a necessary call when component is fetched on server side
=======
>>>>>>> b06ef94... clean code, remove comments
    static fetchData(actions, params) {
        actions.retrieveUserTodosDispatcher()
    }

    componentDidMount() {
        TodoApp.fetchData(this.props.actions)
    }

    render() {
        const {auth} = this.props
        const isBrowser = process.env.BROWSER
        if (!isBrowser) {
            return <div/>
        }

        return (
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                {!auth.get('isAuthenticated') ?
                    <div>
                        <h1>Needs authentication</h1>
                    </div>
                    :
                    <div className='todoapp'>
                        <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel'>
                            <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')}
                                         filterclosed={this.props.todoappmap.get('filterClosed')}
                                         actions={this.props.actions}/>
                            <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
                        </div>
                        <TodosList todos={this.props.todoappmap.get('todos')}
                                   filteropen={this.props.todoappmap.get('filterOpen')}
                                   filterclosed={this.props.todoappmap.get('filterClosed')}
                                   actions={this.props.actions}/>
                    </div>
                }
<<<<<<< HEAD
            </div>
        )
    }

<<<<<<< HEAD
    renderOld() {
        const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
        if (!isBrowser) {
            // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
            return <div/>
        }
        // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
        const {auth} = this.props
        // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
        //  alert("Hi "+test);
        // createTask={this.createTask.bind(this)}
        //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
        // deleteTask={this.deleteTask.bind(this)}
        return (
            <div id='todoapp'>
                {!auth.get('isAuthenticated') &&
                <div>
                    No right access here. Please login
                </div>
                }
                {auth.get('isAuthenticated') &&
                <div>
                    <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel'>
                        <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')}
                                     filterclosed={this.props.todoappmap.get('filterClosed')}
                                     actions={this.props.actions}/>
                        <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
                    </div>
                    <TodosList todos={this.props.todoappmap.get('todos')}
                               filteropen={this.props.todoappmap.get('filterOpen')}
                               filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions}/>
                </div>
                }
=======
      {!auth.get('isAuthenticated') ?
          <div>
              <h1>Needs authentication</h1>
          </div>
          :
          <div className='todoapp'>
              <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel' >
                  <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions}/>
                  <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
              </div>
              <TodosList todos={this.props.todoappmap.get('todos')} filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')}  actions={this.props.actions}/>
          </div>
          }
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </div>
        )
    }

<<<<<<< HEAD
=======
    renderOld() {
        const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
        if (!isBrowser) {
            // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
            return <div/>
        }
        // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
        const {auth} = this.props
        // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
        //  alert("Hi "+test);
        // createTask={this.createTask.bind(this)}
        //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
        // deleteTask={this.deleteTask.bind(this)}
        return (
            <div id='todoapp'>
                {!auth.get('isAuthenticated') &&
                <div>
                    No right access here. Please login
                </div>
                }
                {auth.get('isAuthenticated') &&
                <div>
                    <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel'>
                        <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')}
                                     filterclosed={this.props.todoappmap.get('filterClosed')}
                                     actions={this.props.actions}/>
                        <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
                    </div>
                    <TodosList todos={this.props.todoappmap.get('todos')}
                               filteropen={this.props.todoappmap.get('filterOpen')}
                               filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions}/>
                </div>
                }
            </div>
        )
    }

>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
    handleCreate(event) {
        event.preventDefault()

        const createInput = this.refs.createInput
        const task = createInput.value
        const validateInput = this.validateInput(task)

        if (validateInput) {
            this.setState({
                error: validateInput
            })
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
=======
>>>>>>> b06ef94... clean code, remove comments
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
=======
        } else if (this.props.todos.find((todo) =>  todo.get('task') === task)) {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            return 'Task already exists.'
        } else {
            return null
        }
    }

    handleFilterOpen(event) {

        const filterOpen = event.target.checked
        this.props.actions.filterTodosOpen(filterOpen)
    }

    handleFilterClosed(event) {

        const filterClosed = event.target.checked
        this.props.actions.filterTodosClosed(filterClosed)
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

    renderError() {
        if (!this.state.error) {
            return null
        }

        return <div style={{
            color: 'red'
        }}>{this.state.error}</div>
    }

}

export default TodoApp