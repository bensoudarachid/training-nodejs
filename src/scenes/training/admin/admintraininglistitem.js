import React from 'react'
import cookie from 'react-cookie'
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
// import util from 'util'
// import FileUploadInput from '../../../components/shared/fileuploadinput'
// import actions from '../../../services/actions'
// import $ from 'jquery'
import TrainingImage from '../shared/trainingimage'

if (process.env.BROWSER) {
  require('./admintraininglistitem.scss')

}

export default class AdminTrainingListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // this.loadImage()
  }
  // componentDidUpdate() {
  //   require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
  //   var dialogInputs = document.querySelectorAll('.mdl-textfield')
  //   for (var i = 0, l = dialogInputs.length; i < l; i++) {
  //     dialogInputs[i].MaterialTextfield.checkDirty()
  //   }
  // }

              // <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton'>
              //   <img src={'./images/Blog-CodingNeutral1.png'} alt='coding'/>
              // </button>
  // <span className='glyphicon glyphicon-upload '></span>
     // <img src={'../../../images/Blog-CodingNeutral1.png'} alt='coding'/>

  render() {
    const title = this.props.training.get('title')
    const shortDescription = this.props.training.get('shortDescription')?this.props.training.get('shortDescription'):''
    const trainingid = this.props.training.get('id')
    const isUploading = this.props.training.get('isUploading')
    const duration = this.props.training.get('duration')?this.props.training.get('duration')/8:'0'
    const onlydays=Math.round(duration)
    var dayString = ''
    if(onlydays<2)
      dayString = 'day'
    else
      dayString = 'days'
    return (
      <div className='mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
        <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone blockborder admintrainingslistitem'>
            <div className='mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
              <TrainingImage ref='uploadcomp' trainingid={trainingid} isUploading={isUploading}/>
            </div>
            <div className='mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'><h4>{title}</h4><h5>Introduction a la belle vie</h5></div>
            <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
            <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
              <span className='promo'>20%</span>
            </div>
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
              <div className='buttonwrap'>
                <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored editbutton' onClick={this.handleEdit.bind(this)}>
                </button>
                <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton' onClick={this.handleSchedule.bind(this)}>
                </button>
              </div>
            </div>
            <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
              <span className='duration'>{duration+''+dayString}</span>
            </div>
        </div>
      </div>
    )
  }
  handleEdit(event) {
    console.log('Call Schedule for this Training'+this.props.training.get('id'))
    window.routerHistory.push('trainings/item/'+this.props.training.get('id'))
    // this.props.actions.appError(undefined)
  }
  handleSchedule(event) {
    console.log('Call Edit for this Training'+this.props.training.get('id'))
    // this.props.actions.appError(undefined)
    window.routerHistory.push('/todos')
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
