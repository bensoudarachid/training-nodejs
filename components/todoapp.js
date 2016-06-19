import CreateTodo from './create-todo'
import React, { Component } from 'react'
import TodosList from './todos-list'
import _ from 'lodash'
require('es6-promise').polyfill();
require('isomorphic-fetch');

// const todos = [
//   {
//     task: 'make react tuto',
//     isCompleted: false
//   },
//   {
//     task: 'eat dinner',
//     isCompleted: true
//   },
//   {
//     task: 'Beat it',
//     isCompleted: false
//   }
// ];
// import 'node-fetch'

class TodoApp extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     todos
  //   }
  // }
  // static fetchData () {  
  //   console.log('todoapp. load todos')
  //   var test='This is abbas in the hood!'

  //   fetch('/api/todoslist', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Content-Type': 'application/json'
  //     },
  //     // body: 'param=value' //if no json in header
  //     body: JSON.stringify({
  //       testparam: test
  //     })
  //   }).then( response => response.json())
  //     .then(data => {
  //       // console.log(data.todos)
  //       // this.props.actions.addTodos(data.todos);
  //       return this.props.actions.loadTodos(data);
  //     })
  //     .catch(err => console.log('Booooo' + err));
  // }

  render() {
    //let test = 'App';
    //console.log("Hi there from "+test);
    //  alert("Hi "+test);
    // createTask={this.createTask.bind(this)}
    //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    // deleteTask={this.deleteTask.bind(this)}
    return (
      <div>
            <h1>React to dos!d</h1>
            <CreateTodo todos={this.props.todos} addTodo={this.props.actions.addTodo}/>
            <TodosList todos={this.props.todos} actions={this.props.actions}
      toggleTask={this.toggleTask.bind(this)}
      saveTask={this.saveTask.bind(this)}
      deleteTask={this.deleteTask.bind(this)}
      />
        </div>
      );
  }
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, (todo) => todo.task === oldTask);
    foundTodo.task = newTask;

    this.setState({
      todos: this.state.todos
    })
  }
  // createTask(task) {
  //   console.log('todoapp. create task')
  //   this.state.todos.push({
  //     task,
  //     isCompleted: false
  //   });
  //   this.setState({
  //     todos: this.state.todos
  //   });
  // }
  deleteTask(taskToDelete) {
    //        console.log('delete'+taskToDelete);
    _.remove(this.state.todos, (todo) => todo.task === taskToDelete);
    this.setState({
      todos: this.state.todos
    });
  }
  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({
      todos: this.state.todos
    });
  }
  // componentDidMount() {
  //    TodoApp.fetchData().then(response => response.json())
  //     .then(data => {
  //       console.log('todoapp. component mounted ' +data.todos)
  //       this.props.actions.addTodos(data.todos);
  //     })
  //     .catch(err => console.log('Booooo' + err));
  // }
  static fetchData(renderProps, store) {
    console.log('todos fetchData. Do nothing'+ JSON.stringify({
        param: 'abbas'
      }))
    var test='This is abbas in the hood!'
    fetch('http://127.0.0.1:8080/api/todoslist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // ,'Content-Type': 'application/json'
      },
      body: 'testparam=value' //if no json in header
      // body: JSON.stringify({
      //   testparam: test
      // })
    }).then(response => response.json())
      .then(data => {
        console.log('todoapp. component mounted ' +data.todos[0].task)
        store.dispatch( store.actions.addTodos(data.todos) );
      })
      .catch(err => console.log('Booooo' + err));
  }
}
export default TodoApp