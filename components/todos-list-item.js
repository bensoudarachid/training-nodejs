import React from 'react'
//import Immutable from 'immutable'
import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'


if (process.env.BROWSER) {
  require('./todos-list-item.scss')
}

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  renderTaskSection() {
    // const {task, isCompleted} = this.props;
    // const {todo} = this.props;
    // console.log('todo list item. Render ------------------'+this.props.todo.get('task'))
    // console.log(this.props.todo)
    const task = this.props.todo.get('task')
    const completed = this.props.todo.get('completed')
    // const id = this.props.todo.get('id');
    // const id = this.props.todo.get('id');
    const taskStyle = {
      // color: id===-1? 'black' : (isCompleted ? 'green' : 'red'),
      color: completed ? 'green' : 'red',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
                <input type="text" defaultValue={task} ref="editInput" />
            </form>
        </td>
        )
    }

    return (
      <td style={taskStyle} onClick={this.handleToggle.bind(this)}>{task}</td>
      )
  }

  // renderActionsSection() {
  //   if (this.state.isEditing) {
  //     return (
  //       <td>
  //           <button onClick={this.onSaveClick.bind(this)}>Save this</button>
  //           <button onClick={this.onCancelClick.bind(this) }>Cancel</button>
  //       </td>
  //       );
  //   }

  //   return (
  //     <td>
  //           <button onClick={this.onEditClick.bind(this)}>Edit</button>
  //           <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
  //     </td>
  //     );
  // }

  getActions() {
    //<Spinner spinnerName='three-bounce' noFadeIn/> <Pulse size={20} color='blue'/>
    const loading = this.props.todo.get('loading')
    const error = this.props.todo.get('error')
    if (loading)
      return (
        <td><ThreeBounce size={15} fade={{
          duration: 0.3
        }}/></td>
        )
    else if (this.state.isEditing)
      return (
        <td><button className='savebutton' onClick={this.onSaveClick.bind(this)}>Save</button>
        <button onClick={this.onCancelClick.bind(this)}>Cancel</button></td>
        )
    else if (error)
      return (
        <td style={{
          textAlign: 'center',
          color: '#FF0000'
        }}>{error}</td>
        )
    else
      return (
        <td><button className='editbutton' onClick={this.onEditClick.bind(this)}>Edit</button>
            <button onClick={this.handleDelete.bind(this)}>Delete</button></td>
        )
  }
  // <button onClick={this.handleDelete.bind(this)}>Delete todo</button></td>
  // <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button></td>
  // <button onClick={this.props.actions.deleteTodo(this.props.key)}>Delete</button></td>
  // <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
  render() {
    return (
      <tr className="todoslistitem">
        {this.renderTaskSection()}
        {this.getActions()}
         
      </tr>
      )
  }

  // renderMe() {
  //   return (
  //     <tr>
  //       {this.renderTaskSection()}
  //       {this.renderActionsSection()}
  //     </tr>
  //     );
  // }
  handleDelete() {
    console.log('todos-list-item, please delete todo ' + this.props.todo.get('id'))
    this.props.actions.deleteTodoSrv(this.props.todo)
  }

  handleToggle() {
    console.log('todos-list-item, toggle todo ' + this.props.todo.get('id'))
    var todo = this.props.todo.set('completed', !this.props.todo.get('completed'))
    this.props.actions.updateTodoDispatcher(todo, this.props.todo)
  }

  onEditClick() {
    this.setState({
      isEditing: true
    })
    console.log('Click Edit' + this.state.isEditing)
  }

  onCancelClick() {
    this.setState({
      isEditing: false
    })
  }

  onSaveClick(event) {
    console.log('todos-list-item, just save ' + this.props.todo.get('id'))
    event.preventDefault()
    // const oldTask = this.props.task;
    const newTask = this.refs.editInput.value
    // this.props.saveTask(oldTask, newTask);
    // this.setState({
    //   isEditing: false
    // });
    const todo = this.props.todo.set('task', newTask)
    this.props.actions.updateTodoDispatcher(todo, this.props.todo)
    this.setState({
      isEditing: false
    })
  }
}