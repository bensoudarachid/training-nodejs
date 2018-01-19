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
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
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
        } else if (this.props.todos.find((todo) => todo.get('task') === task)) {
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