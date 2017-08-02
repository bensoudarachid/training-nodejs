import React from 'react'
import cookie from 'react-cookie'
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
import util from 'util'
import FileUploadInput from '../../../components/shared/fileuploadinput'
// import actions from '../../../services/actions'
import ApiConnection from '../../../services/apiconnection'
import $ from 'jquery'
import TodoImage from './todoimage'

if (process.env.BROWSER) {
    require('./todoslistitem.scss')

}

export default
class TodosListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    // <form className='mdl-grid mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone center-items' onSubmit={this.onSaveClick.bind(this)}>
    //   <div className='mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' style={taskStyle} onClick={this.handleToggle.bind(this)}>{task}</div>
    //   <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--2-col-phone'><button className='editbutton active' onClick={this.onEditClick.bind(this)}>Edit</button></div>
    //   <div className='mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><button onClick={this.handleDelete.bind(this)}>Delete</button></div>
    // </form>

    // renderTaskFormOld() {
    //   const idToken = cookie.load('jwt')

    //   // const {task, isCompleted} = this.props;
    //   // const {todo} = this.props;
    //   // console.log('todo list item. Render ------------------'+this.props.todo.get('task'))
    //   // console.log(this.props.todo)
    //   const task = this.props.todo.get('task')
    //   const taskid = this.props.todo.get('id')
    //   const index = this.props.ind
    //   // console.log('todolistitm index = '+ this.props.ind)
    //   const completed = this.props.todo.get('completed')
    //   const error = this.props.todo.get('error')
    //   // const id = this.props.todo.get('id');
    //   const taskStyle = {
    //     color: completed ? 'green' : 'red',
    //     cursor: 'pointer'
    //   }
    //   const loading = this.props.todo.get('loading')

    //   const disabled = loading||error
    //   const errorClass = error?'error':''
    //   const loadingClass = loading?'center-items loading':''
    //   const loadingContent = loading?<div className="loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>:''

    //   const uploadBlock =
    //         (<form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' onSubmit={this.handleUploadFile.bind(this)}>
    //           <div className='mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone'><FileUploadInput id={'uploadfile-'+this.props.todo.get('id')} disabled={disabled} actions={this.props.actions}/></div>
    //           <div className='mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'>
    //             <TodoImage taskid={taskid} isUploading={isUploading}/>
    //             <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' type='submit' value='Upload' disabled={disabled}>Upload</button>
    //           </div>
    //         </form>)

    //   if (this.state.isEditing) {
    //     return (
    //       <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //         <form className='pad mdl-grid mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
    //           <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //               <div className='mdl-textfield tf mdl-js-textfield'>
    //                 <input className='mdl-textfield__input' type='text' defaultValue={task} name={'taskInput'+index} ref='taskInput' id={'taskInput'+index}/>
    //                 <label className='mdl-textfield__label' htmlFor={'taskInput'+index}>Task...</label>
    //               </div>
    //           </div>
    //         </form>
    //         <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
    //           <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.onCancelClick.bind(this)} disabled={disabled}>Cancel</button>
    //           <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items' onClick={this.onSaveClick.bind(this)} disabled={disabled}>Save</button>
    //         </div>
    //         {uploadBlock}
    //       </div>
    //       )
    //   }
    //   else
    //     return (
    //       <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //         <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
    //         <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
    //         <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
    //           <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={taskStyle} onClick={this.handleToggle.bind(this)}><p>{task}</p></div>
    //         </form>
    //         <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
    //           <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
    //           <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
    //         </div>
    //         {uploadBlock}
    //       </div>

    //     )
    // }

    render() {
        return (
            <div>
                <div className='mdl-grid todoslistitem blockborder center-items'>
        {this.renderTaskForm()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        // componentHandler.upgradeDom()
    }

    componentDidUpdate() {
        // componentHandler.upgradeAllRegistered()
        componentHandler.upgradeDom()
        // componentHandler.upgradeDom()
        var dialogInputs = document.querySelectorAll('.mdl-textfield')
        for (var i = 0, l = dialogInputs.length; i < l; i++) {
            // if( dialogInputs[i].MaterialTextfield != undefined )
            dialogInputs[i].MaterialTextfield.checkDirty()
            // else
            //   console.log('todoslistitem.js. dialogInputs[i] is undefined')
        }
        const index = this.props.ind
        // console.log('todoslistitem.js. this.props.ind '+this.props.ind)
        if (!this.state.hadFocus && document.getElementById('taskInput' + index)) {
            document.getElementById('taskInput' + index).focus()
            this.setState({
                hadFocus: true
            })
        }
        // this.imageload()
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

    handleUploadFile(event) {
        event.preventDefault()
        // console.log('todos-list-item, upload todo file '+'#uploadfile-'+this.props.todo.get('id'))
        // var fileinput = document.querySelector('input[type="file"]')
        const idToken = cookie.load('jwt')
        const taskid = this.props.todo.get('id')
        var fileinput = document.querySelector('#uploadfile-' + taskid)
        console.log('todos-list-item, upload todo file ' + fileinput.files[0])
        var todo = this.props.todo.set('mama', 'i m here')

        this.props.actions.uploadTodoFileDispatcher(todo, this.props.todo, fileinput.files[0])
        // console.log('todos-list-item, set src to ' + ApiConnection.apiurl+'/api/todo/img/'+'12'+'?access_token='+ idToken)


        // document.getElementById('todolistitemimg'+taskid).setAttribute('data-src', ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken)
        // document.getElementById('todolistitemimg'+taskid).setAttribute('src', ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken)

        // var imgwrap = document.getElementById('imgwrap'+taskid)
        // imgwrap.innerHTML = '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>'+imgwrap.innerHTML
        // setTimeout(function() {
        //   console.log('todos-list-item, set data-src')
        //   // this.setState({
        //   //   imageLoaded: undefined
        //   // })
        //   // document.getElementById('todolistitemimg'+taskid).removeAttribute('src')
        //   document.getElementById('todolistitemimg'+taskid).setAttribute('src', ApiConnection.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken)
        //   // this.refs.uploadcomp.forceUpdate()
        // }.bind(this),(5000) )
    }

    handleToggle(event) {
        console.log('todos-list-item, toggle todo ' + this.props.todo.get('id'))
        event.preventDefault()
        var todo = this.props.todo.set('completed', !this.props.todo.get('completed'))
        this.setState({
            isEditing: false
        })
        this.props.actions.updateTodoDispatcher(todo, this.props.todo)
    }

    onSaveClick(event) {
        console.log('todos-list-item, just save ' + this.props.todo.get('id'))
        event.preventDefault()
        // const oldTask = this.props.task;
        var newTask = undefined
        newTask = this.refs.taskInput.value
        // this.props.saveTask(oldTask, newTask);
        // this.setState({
        //   isEditing: false
        // });
        const todo = this.props.todo.set('task', newTask)
        this.setState({
            isEditing: false
        })
        this.props.actions.updateTodoDispatcher(todo, this.props.todo)
    }

    onEditClick() {

        this.setState({
            isEditing: true,
            hadFocus: false
        })
        // console.log('Click Edit' + this.state.isEditing)
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

    renderTaskForm() {
        const idToken = cookie.load('jwt')

        // const {task, isCompleted} = this.props;
        // const {todo} = this.props;
        // console.log('todo list item. Render ------------------'+this.props.todo.get('task'))
        // console.log(this.props.todo)
        const task = this.props.todo.get('task')
        const taskid = this.props.todo.get('id')
        const index = this.props.ind
        // console.log('todolistitm index = '+ this.props.ind)
        const completed = this.props.todo.get('completed')
        const error = this.props.todo.get('error')
        // const id = this.props.todo.get('id');
        const taskStyle = {
            color: completed ? 'green' : 'red',
            cursor: 'pointer'
        }
        const loading = this.props.todo.get('loading')
        const isUploading = this.props.todo.get('isUploading')
//    console.log('todolistitem. id: '+taskid+', todo.isUploading: '+isUploading)

        const disabled = loading || error
        const errorClass = error ? 'error' : ''
        const loadingClass = loading ? 'center-items loading' : ''
        const loadingContent = loading ? <div className="loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate"></div> : ''


        return (
            <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
          {this.state.isEditing ?
              <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                  <form className='pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
                      <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                          <div className='mdl-textfield tf mdl-js-textfield'>
                              <input className='mdl-textfield__input' type='text' defaultValue={task} name={'taskInput' + index} ref='taskInput' id={'taskInput' + index}/>
                              <label className='mdl-textfield__label' htmlFor={'taskInput' + index}>Task...</label>
                          </div>
                      </div>
                  </form>
                  <div className='editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
                      <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.onCancelClick.bind(this)} disabled={disabled}>Cancel</button>
                      <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored savebutton right-items' onClick={this.onSaveClick.bind(this)} disabled={disabled}>Save</button>
                  </div>
              </div>
              :
              <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                  <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                      <div className={errorClass}>{error}</div>
                  </div>
                  <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                      <div className={loadingClass}>{loadingContent}</div>
                  </div>
                  <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
                      <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={taskStyle} onClick={this.handleToggle.bind(this)}>
                          <p>{task}</p>
                      </div>
                  </form>
                  <div className='editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
                      <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
                      <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
                  </div>
              </div>

              }
                <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                    <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' onSubmit={this.handleUploadFile.bind(this)}>
                        <div className='mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone'>
                            <FileUploadInput id={'uploadfile-' + this.props.todo.get('id')} disabled={disabled} actions={this.props.actions}/>
                        </div>
                        <div className='mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'>
                            <TodoImage ref='uploadcomp' taskid={taskid} isUploading={isUploading}/>
                            <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' type='submit' value='Upload' disabled={disabled}>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}


// }
// else
//   return (
//     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
//       <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
//         <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={taskStyle} onClick={this.handleToggle.bind(this)}><p>{task}</p></div>
//       </form>
//       <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
//       </div>
//       {uploadBlock}
//     </div>
// )
