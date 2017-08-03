import React from 'react'
import cookie from 'react-cookie'
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
// import util from 'util'
// import FileUploadInput from '../../../components/shared/fileuploadinput'
import AppImage from '../../../components/shared/appimage'
// import $ from 'jquery'
import TrainingImage from '../shared/trainingimage'

if (process.env.BROWSER) {
    require('./traininglistitem.scss')

}

<<<<<<< HEAD
<<<<<<< HEAD
export default class TrainingListItem extends React.Component {
=======
export default
class TrainingListItem extends React.Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class TrainingListItem extends React.Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    componentDidMount() {
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // this.loadImage()
    }

    // componentDidUpdate() {
<<<<<<< HEAD
    //   require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
    //   componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
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
    // isUploading={isUploading}
    render() {
        const title = this.props.training.get('title')
        const secondaryTitle = this.props.training.get('secondaryTitle') ? this.props.training.get('secondaryTitle') : ''
        const shortDescription = this.props.training.get('shortDescription') ? this.props.training.get('shortDescription') : ''
        const trainingid = this.props.training.get('id')
        var isUploading = this.props.training.get('isUploading')
        isUploading = isUploading == undefined ? false : true
        const duration = this.props.training.get('duration') ? this.props.training.get('duration') / 8 : '0'
        const onlydays = Math.round(duration)
        var dayString = ''
        if (onlydays < 2)
            dayString = ' day'
        else
            dayString = ' days'
        // <TrainingImage ref='uploadcomp' trainingid={trainingid} isUploading={isUploading}/>
        //<AppImage ref='uploadcomp' api='training' imgid={trainingid} isUploading={isUploading}/>
        return (
            <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
                <div className='mdl-grid mdl-grid--no-spacing blockborder trainingslistitem'>
                    <div className='mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone'>
                        <AppImage ref='uploadcomp' api='training' imgid={trainingid} isUploading={isUploading}/>
                    </div>
                    <div className='mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone'>
<<<<<<< HEAD
                        <h4>{title}</h4><h5>{secondaryTitle}</h5></div>
                    <hr/>
                    <div
                        className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
=======
                        <h4>{title}</h4>
                        <h5>{secondaryTitle}</h5>
                    </div>
                    <hr/>
<<<<<<< HEAD
                    <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    <div
                        className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription'>{shortDescription}</div>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    <hr/>
                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <span className='promo'>20%</span>
                    </div>
                    <div className='mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
                        <div className='buttonwrap'>
                        </div>
                    </div>
                    <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
                        <span className='duration'>{duration + '' + dayString}</span>
                    </div>
                </div>
            </div>
        )
    }

    // <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored editbutton' onClick={this.handleEdit.bind(this)}>
    // </button>
    // <button className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored schedulebutton' onClick={this.handleSchedule.bind(this)}>
    // </button>

//   handleEdit(event) {
// //    console.log('Call Schedule for this Training'+this.props.training.get('id'))
//     window.routerHistory.push('/admin/trainings/item/'+this.props.training.get('id'))
//     // this.props.actions.appError(undefined)
//   }

//   handleSchedule(event) {
//     console.log('Call Edit for this Training'+this.props.training.get('id'))
//     // this.props.actions.appError(undefined)
//     window.routerHistory.push('/admin/todos')
//   }

}


// }
<<<<<<< HEAD
// else 
=======
// else
>>>>>>> 6e3ff02... webstorm big changes crash
//   return (
//     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
//       <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
//         <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={titleStyle} onClick={this.handleToggle.bind(this)}><p>{title}</p></div>
<<<<<<< HEAD
//       </form>      
=======
//       </form>
>>>>>>> 6e3ff02... webstorm big changes crash
//       <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
//       </div>
//       {uploadBlock}
//     </div>
// )
