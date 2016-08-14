import React from 'react';
if (process.env.BROWSER) {
  require('./todos-list-item.scss')
}

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    // const {task, isCompleted} = this.props;
    // const {todo} = this.props;
    const task = this.props.todo.get('task');
    const isCompleted = this.props.todo.get('isCompleted');
    // const id = this.props.todo.get('id');
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
                <input type="text" defaultValue={task} ref="editInput" />
            </form>
        </td>
        );
    }

    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>
      );
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
    //console.log('actions is editing=' + this.state.isEditing);
    if (this.state.isEditing)
      return (
        <td><button onClick={this.onSaveClick.bind(this)}>Save</button>
        <button onClick={this.onCancelClick.bind(this)}>Cancel</button></td>
        );
    else
      return (
        <td><button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button onClick={this.handleDelete.bind(this)}>Delete</button></td>
        );
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
      );
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
    console.log('todos-list-item, delete todo'+this.props.todo.get('id'))
    this.props.actions.deleteTodo(this.props.todo.get('id'))
  }

  onEditClick() {
    this.setState({
      isEditing: true
    });
    console.log('Click Edit' + this.state.isEditing);
  }

  onCancelClick() {
    this.setState({
      isEditing: false
    });
  }

  onSaveClick(event) {
    console.log('todos-list-item, save '+this.props.todo.get('id'))
    event.preventDefault();
    // const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    // this.props.saveTask(oldTask, newTask);
    // this.setState({
    //   isEditing: false
    // });
    this.props.actions.saveTodoAsync(this.props.todo.get('id'), newTask);
    this.setState({
      isEditing: false
    });
  }
}