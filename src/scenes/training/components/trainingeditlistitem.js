import React from 'react'
import cookie from 'react-cookie'
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
import util from 'util'
import FileUploadInput from '../../../components/shared/fileuploadinput'
import actions from '../../../services/actions'
import $ from 'jquery'
import TrainingImage from './trainingimage'

if (process.env.BROWSER) {
  require('./trainingeditlistitem.scss')

}

export default class TrainingsEditListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  render() {
    return (
      <div>
      <div className='mdl-grid trainingslistitem blockborder center-items'>
        {this.renderTaskForm()}
      </div>
      </div>
      )
  }

  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // this.loadImage()
  }
  componentDidUpdate() {
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    var dialogInputs = document.querySelectorAll('.mdl-textfield')
    for (var i = 0, l = dialogInputs.length; i < l; i++) {
      // if( dialogInputs[i].MaterialTextfield != undefined )
      dialogInputs[i].MaterialTextfield.checkDirty()
      // else
      //   console.log('trainingslistitem.js. dialogInputs[i] is undefined')
    }
    const index = this.props.ind
    // console.log('trainingslistitem.js. this.props.ind '+this.props.ind)
    if( !this.state.hadFocus && document.getElementById('titleInput'+index) ){
      document.getElementById('titleInput'+index).focus()
      this.setState({
        hadFocus: true
      })
    }
    // this.imageload()
  }
  

  handleDelete() {
    // console.log('trainings-list-item, please delete training ' + this.props.training.get('id'))
    this.props.actions.deleteTrainingSrv(this.props.training)
  }

  handleUploadFile(event){
    event.preventDefault()
    // console.log('trainings-list-item, upload training file '+'#uploadfile-'+this.props.training.get('id'))
    // var fileinput = document.querySelector('input[type="file"]')
    const idToken = cookie.load('jwt')
    const trainingid = this.props.training.get('id')
    var fileinput = document.querySelector('#uploadfile-'+trainingid)
    console.log('trainings-list-item, upload training file ' + fileinput.files[0])
    var training = this.props.training.set('mama', 'i m here')

    this.props.actions.uploadTrainingFileDispatcher(training, this.props.training, fileinput.files[0])
    // console.log('trainings-list-item, set src to ' + actions.apiurl+'/api/training/img/'+'12'+'?access_token='+ idToken)
    
    
    // document.getElementById('traininglistitemimg'+trainingid).setAttribute('data-src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)
    // document.getElementById('traininglistitemimg'+trainingid).setAttribute('src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)
    
    // var imgwrap = document.getElementById('imgwrap'+trainingid)
    // imgwrap.innerHTML = '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>'+imgwrap.innerHTML
    // setTimeout(function() {
    //   console.log('trainings-list-item, set data-src')
    //   // this.setState({
    //   //   imageLoaded: undefined
    //   // })
    //   // document.getElementById('traininglistitemimg'+trainingid).removeAttribute('src')
    //   document.getElementById('traininglistitemimg'+trainingid).setAttribute('src', actions.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken)
    //   // this.refs.uploadcomp.forceUpdate()
    // }.bind(this),(5000) )
  }

  handleToggle(event) {
    console.log('trainings-list-item, toggle training ' + this.props.training.get('id'))
    event.preventDefault()
    var training = this.props.training.set('completed', !this.props.training.get('completed'))
    this.setState({
      isEditing: false
    })
    this.props.actions.updateTrainingDispatcher(training, this.props.training)
  }

  onSaveClick(event) {
    console.log('trainings-list-item, just save ' + this.props.training.get('id'))
    event.preventDefault()
    // const oldTask = this.props.title;
    var newTitle = undefined
    newTitle = this.refs.titleInput.value
    // this.props.saveTask(oldTask, newTitle);
    // this.setState({
    //   isEditing: false
    // });
    const training = this.props.training.set('title', newTitle)
    this.setState({
      isEditing: false
    })
    this.props.actions.updateTrainingDispatcher(training, this.props.training)
  }

  onEditClick() {
    
    this.setState({
      isEditing: true,
      hadFocus: false
    })
    // console.log('Click Edit' + this.state.isEditing)
  }
  
  // onChangeImageClick() {
  //   console.log('traininglistitemjs.Change Image'+this.refs.uploadInput.value)
  //   event.preventDefault()
  //   // const oldTask = this.props.title;
  //   // const newTitle = this.refs.uploadInput.value
  //   // this.props.saveTask(oldTask, newTitle);
  //   // this.setState({
  //   //   isEditing: false
  //   // });
  //   // const training = this.props.training.set('title', newTask)
  //   // this.props.actions.updateTrainingDispatcher(training, this.props.training)
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

    // console.log('training list item. Render ------------------'+this.props.training.get('title'))
    // console.log(this.props.training)
    const title = this.props.training.get('title')
    const trainingid = this.props.training.get('id')
    const index = this.props.ind
    // console.log('traininglistitm index = '+ this.props.ind)
    const completed = this.props.training.get('completed')
    const error = this.props.training.get('error')
    // const id = this.props.training.get('id');
    const titleStyle = {
      color: completed ? 'green' : 'red',
      cursor: 'pointer'
    }
    const loading = this.props.training.get('loading')
    const isUploading = this.props.training.get('isUploading')
    // console.log('traininglistitem. isUploading'+isUploading)

    const disabled = loading||error
    const errorClass = error?'error':''
    const loadingClass = loading?'center-items loading':''
    const loadingContent = loading?<div className="loadingbar mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>:''

    return (
        <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
          {this.state.isEditing?        
          <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
            <form className='pad mdl-grid mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
              <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
                  <div className='mdl-textfield tf mdl-js-textfield'>
                    <input className='mdl-textfield__input' type='text' defaultValue={title} name={'titleInput'+index} ref='titleInput' id={'titleInput'+index}/>
                    <label className='mdl-textfield__label' htmlFor={'titleInput'+index}>Title...</label>
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
            <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
            <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
            <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
              <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' style={titleStyle} onClick={this.handleToggle.bind(this)}><p>{title}</p></div>
            </form>      
            <div className='editsaveblock pad mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
            </div>
          </div>

        }
          <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
            <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' onSubmit={this.handleUploadFile.bind(this)}>
              <div className='mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--2-col-phone'><FileUploadInput id={'uploadfile-'+this.props.training.get('id')} disabled={disabled} actions={this.props.actions}/></div>
              <div className='mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'>
                <TrainingImage ref='uploadcomp' trainingid={trainingid} isUploading={isUploading}/>
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
    //         <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={titleStyle} onClick={this.handleToggle.bind(this)}><p>{title}</p></div>
    //       </form>      
    //       <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
    //         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
    //         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
    //       </div>
    //       {uploadBlock}
    //     </div>
    // )
