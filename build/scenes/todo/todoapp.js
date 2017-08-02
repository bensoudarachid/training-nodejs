import TodoCreate from './admin/todocreate';
import TodosFilter from './admin/todosfilter';

import React, { Component } from 'react';
import TodosList from './admin/todoslist';
import cookie from 'react-cookie';
// import _ from 'lodash'
// import { ThreeBounce } from 'better-react-spinkit'
import PureRenderMixin from 'react-addons-pure-render-mixin';

var util = require('util');

if (process.env.BROWSER) {
  //  console.log('Appcomponent. environment is browser')
  require('./todoapp.scss');
}

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    // if(process.env.BROWSER && !this.props.auth.get('isAuthenticated')){
    //   console.log('todoapp start login process')
    //   this.props.actions.loginProcessStart('No access rights!')
    // }
    // this.state = {
    //   error: null
    // }
  }

  componentDidMount() {
    //console.log('todoappjs mounted. Call fetchdata')
    TodoApp.fetchData(this.props.actions);
    // componentHandler.upgradeDom()
  }

  //This is a necessary call when component is fetched on server side
  static fetchData(actions, params, hostname) {
    //    console.log('Todo list fetch data for hostname='+require('util').inspect(hostname, false, null))
    //    console.log('todoappjs fetchdata'+util.inspect( params, false, null))
    actions.retrieveUserTodosDispatcher();
  }

  render() {
    const { auth } = this.props;
    const isBrowser = process.env.BROWSER; //typeof window !== 'undefined';
    if (!isBrowser) {
      //      console.log('+++++++++++++++++++++++++Todoapp render. environment is server')
      return React.createElement('div', null);
    }
    //console.log('+++++++++++++++++++++++++Todoapp render. environment is browser')
    // const {auth} = this.props
    // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
    //  alert("Hi "+test);
    // createTask={this.createTask.bind(this)}
    //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    // deleteTask={this.deleteTask.bind(this)}

    // {auth.get('loginProgress')?
    return React.createElement(
      'div',
      null,
      !auth.get('isAuthenticated') ? React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Needs authentication'
        )
      ) : React.createElement(
        'div',
        { className: 'todoapp' },
        React.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing blockborder parampanel' },
          React.createElement(TodosFilter, { filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions }),
          React.createElement(TodoCreate, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions })
        ),
        React.createElement(TodosList, { todos: this.props.todoappmap.get('todos'), filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions })
      )
    );
  }

  renderOld() {
    const isBrowser = process.env.BROWSER; //typeof window !== 'undefined';
    if (!isBrowser) {
      // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
      return React.createElement('div', null);
    }
    // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
    const { auth } = this.props;
    // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
    //  alert("Hi "+test);
    // createTask={this.createTask.bind(this)}
    //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    // deleteTask={this.deleteTask.bind(this)}
    return React.createElement(
      'div',
      { id: 'todoapp' },
      !auth.get('isAuthenticated') && React.createElement(
        'div',
        null,
        'No right access here. Please login'
      ),
      auth.get('isAuthenticated') && React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing blockborder parampanel' },
          React.createElement(TodosFilter, { filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions }),
          React.createElement(TodoCreate, { todos: this.props.todoappmap.get('todos'), actions: this.props.actions })
        ),
        React.createElement(TodosList, { todos: this.props.todoappmap.get('todos'), filteropen: this.props.todoappmap.get('filterOpen'), filterclosed: this.props.todoappmap.get('filterClosed'), actions: this.props.actions })
      )
    );
  }

  handleCreate(event) {
    //    console.log('handle create call')
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({
        error: validateInput
      });
      return;
    }

    this.setState({
      error: null
    });
    // this.props.createTask(task);
    this.props.actions.createTodo(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
      // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
    } else if (this.props.todos.find(todo => todo.get('task') === task)) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }

  handleFilterOpen(event) {
    // event.preventDefault();
    // const filterOpen = this.refs.filterOpen

    const filterOpen = event.target.checked; //filterAllInput.value
    // var filter = undefined
    // if (filterAllChecked)
    //   filter = 'all'
    // console.log('filter todos. Open. Checkbox'+ event.target.checked+', Filter '+filterOpen)
    this.props.actions.filterTodosOpen(filterOpen);
  }
  handleFilterClosed(event) {
    // event.preventDefault();
    // const filterOpen = this.refs.filterOpen

    const filterClosed = event.target.checked; //filterAllInput.value
    // var filter = undefined
    // if (filterAllChecked)
    //   filter = 'all'
    // console.log('filter todos. handle toggle all. Checkbox'+ event.target.checked+', Filter '+filterClosed)
    this.props.actions.filterTodosClosed(filterClosed);
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
      // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
    } else if (this.props.todos.find(todo => todo.get('task') === task)) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return React.createElement(
      'div',
      { style: {
          color: 'red'
        } },
      this.state.error
    );
  }

}

export default TodoApp;