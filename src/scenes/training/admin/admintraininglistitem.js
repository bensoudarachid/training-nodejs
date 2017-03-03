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
  
  render() {
    const title = this.props.training.get('title')
    const shortDescription = this.props.training.get('shortDescription')?this.props.training.get('shortDescription'):''
    const trainingid = this.props.training.get('id')
    const isUploading = this.props.training.get('isUploading')
    const duration = this.props.training.get('duration')?this.props.training.get('duration')/8:'0'

    return (
      <div className='mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
        <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone blockborder admintrainingslistitem'>
            <div className='mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
              <TrainingImage ref='uploadcomp' trainingid={trainingid} isUploading={isUploading}/>
            </div>
            <div className='mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'><h4>{title}</h4><h5>Introduction a la belle vie</h5></div>
            <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><p>{shortDescription}</p></div>
            <div className='mdl-cell mdl-cell--3-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
              <span className='promo'>20%</span>
            </div>
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
              <p>Edit</p>
            </div>
            <div className='mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--1-col-phone'>
              <span className='duration'>{duration+' jours'}</span>
            </div>
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
