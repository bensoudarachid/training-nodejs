import React from 'react';
import cookie from 'react-cookie';
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
// import util from 'util'
// import FileUploadInput from '../../../components/shared/fileuploadinput'
import AppImage from '../../../components/shared/appimage';
// import $ from 'jquery'
import TrainingImage from '../shared/trainingimage';

if (process.env.BROWSER) {
  require('./traininglistitem.scss');
}

export default class TrainingListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  componentDidMount() {
    componentHandler.upgradeDom();
    // this.loadImage()
  }
  // componentDidUpdate() {
  //   componentHandler.upgradeDom()
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
    const title = this.props.training.get('title');
    const secondaryTitle = this.props.training.get('secondaryTitle') ? this.props.training.get('secondaryTitle') : '';
    const shortDescription = this.props.training.get('shortDescription') ? this.props.training.get('shortDescription') : '';
    const trainingid = this.props.training.get('id');
    var isUploading = this.props.training.get('isUploading');
    isUploading = isUploading == undefined ? false : true;
    const duration = this.props.training.get('duration') ? this.props.training.get('duration') / 8 : '0';
    const onlydays = Math.round(duration);
    var dayString = '';
    if (onlydays < 2) dayString = ' day';else dayString = ' days';
    // <TrainingImage ref='uploadcomp' trainingid={trainingid} isUploading={isUploading}/>
    //<AppImage ref='uploadcomp' api='training' imgid={trainingid} isUploading={isUploading}/>
    return React.createElement(
      'div',
      { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone' },
      React.createElement(
        'div',
        { className: 'mdl-grid mdl-grid--no-spacing blockborder trainingslistitem' },
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
          React.createElement(AppImage, { ref: 'uploadcomp', api: 'training', imgid: trainingid, isUploading: isUploading })
        ),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone' },
          React.createElement(
            'h4',
            null,
            title
          ),
          React.createElement(
            'h5',
            null,
            secondaryTitle
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription' },
          shortDescription
        ),
        React.createElement('hr', null),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
          React.createElement(
            'span',
            { className: 'promo' },
            '20%'
          )
        ),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' },
          React.createElement('div', { className: 'buttonwrap' })
        ),
        React.createElement(
          'div',
          { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
          React.createElement(
            'span',
            { className: 'duration' },
            duration + '' + dayString
          )
        )
      )
    );
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