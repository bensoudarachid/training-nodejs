import CreateToDo from './create-todo'
import React, {Component} from 'react'
import TodosList from './todos-list'
import _ from 'lodash'

const todos = [
  {
    task: 'make react tuto',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  },
  {
    task: 'Beat it',
    isCompleted: false
  }
];

class TodoApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos
    }
  }

  render() {
    //let test = 'App';
    //console.log("Hi there from "+test);
    //  alert("Hi "+test);
    return (
      <div>
            <h1>React to dos!dd</h1>
            <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
            <TodosList todos={this.state.todos}
      deleteTask={this.deleteTask.bind(this)}
      toggleTask={this.toggleTask.bind(this)}
      saveTask={this.saveTask.bind(this)}
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
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({
      todos: this.state.todos
    });
  }
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


}
export default TodoApp