import React from 'react'
import cookie from 'react-cookie'
//import Immutable from 'immutable'
import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
import util from 'util'
import actions from '../redux/actions'
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
                <input type='text' defaultValue={task} ref='editInput' />
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
            // <form method='post' action={actions.appbasename+'/api/todo/12345/imageupload/'} enctype='multipart/form-data'>
            //<input type='button' onClick={this.onChangeImageClick.bind(this)} value='3aSend' />

  getActions() {
    //<Spinner spinnerName='three-bounce' noFadeIn/> <Pulse size={20} color='blue'/>
    
    const loading = this.props.todo.get('loading')
    const error = this.props.todo.get('error')
    if (loading)
      return (
        <td><ThreeBounce size={15} duration='0.3'/></td>
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
        <td><button className='editbutton active' onClick={this.onEditClick.bind(this)}>Edit</button>
            <button onClick={this.handleDelete.bind(this)}>Delete</button>
            <form onSubmit={this.handleUploadFile.bind(this)}>
            <input id={'uploadfile-'+this.props.todo.get('id')} name='uploadfile' type='file' size='50'/>
            <input type="text" name='justtext' value='abibis'/>
            <button type='submit' value='Upload'>Sir 3allah</button>
            </form>
        </td>
        )
  }
            // <input type="hidden" name='authorizationtoken' value={cookie.load('jwt')}/>
            // <form action={actions.appbasename+'/api/todo/'+this.props.todo.get('id')+'/fileupload/'} method="POST" encType="multipart/form-data">
            // <input type="hidden" name='authorizationtoken' value={cookie.load('jwt')}/>
  // <button onClick={this.handleDelete.bind(this)}>Delete todo</button></td>
  // <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button></td>
  // <button onClick={this.props.actions.deleteTodo(this.props.key)}>Delete</button></td>
  // <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
  render() {
    // console.log('todos-list-item, todo inspect ' + util.inspect(this.props.todo, false, null))
    return (
      <tr className='todoslistitem'>
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
  handleUploadFile(event){
    event.preventDefault()
    console.log('todos-list-item, upload todo file '+'#uploadfile-'+this.props.todo.get('id'))
    // var fileinput = document.querySelector('input[type="file"]')
    var fileinput = document.querySelector('#uploadfile-'+this.props.todo.get('id'))
    // console.log('todos-list-item, upload todo file ' + fileinput.files[0])
    var todo = this.props.todo.set('mama', 'i m here')
    this.props.actions.uploadTodoFileDispatcher(todo, this.props.todo, fileinput.files[0])
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
  
  // onChangeImageClick() {
  //   console.log('todolistitemjs.Change Image'+this.refs.uploadInput.value)
  //   event.preventDefault()
  //   // const oldTask = this.props.task;
  //   // const newTask = this.refs.uploadInput.value
  //   // this.props.saveTask(oldTask, newTask);
  //   // this.setState({
  //   //   isEditing: false
  //   // });
  //   // const todo = this.props.todo.set('task', newTask)
  //   // this.props.actions.updateTodoDispatcher(todo, this.props.todo)
  //   // this.setState({
  //   //   isEditing: false
  //   // })
  // }
  

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
