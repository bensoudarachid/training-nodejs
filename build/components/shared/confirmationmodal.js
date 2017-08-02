import React, { Component, PropTypes } from 'react';
import 'jquery';
import $ from 'jquery';

import { IndexLink, Link } from 'react-router';

if (process.env.BROWSER) {
  // console.log('Appcomponent. environment is browser')
  require('./confirmationmodal.scss');
  // $(document).ready(function() { 
  //   var modal = document.getElementById('myModal')

  // // Get the button that opens the modal
  // // var btn = $('myBtn')[0]
  //   var btn = document.getElementById('myBtn')
  //   // console.log('confirmationjs. myBtn '+btn)
  // // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName('close')[0]

  // // When the user clicks the button, open the modal 
  //   btn.onclick = function() {
  //     modal.style.display = 'block'
  //   }

  // // When the user clicks on <span> (x), close the modal
  //   span.onclick = function() {
  //     modal.style.display = 'none'
  //   }

  // // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     if (event.target == modal) {
  //       modal.style.display = 'none'
  //     }
  //   }

  // })
}

export default class ConfirmationModal extends Component {

  render() {
    const { errorMessage } = this.props;
    return React.createElement(
      'div',
      { id: 'confirmationmodal' },
      React.createElement(
        'div',
        { className: 'modal' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'div',
            { className: 'modal-header' },
            React.createElement(
              'span',
              { onClick: event => this.handleCancel(event), className: 'close' },
              '\xD7'
            ),
            React.createElement(
              'p',
              null,
              'Really?'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(
              'p',
              null,
              'Do you wanna do this?'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-footer' },
            React.createElement(
              'button',
              { onClick: event => this.handleConfirm(event), className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
              'Confirm'
            ),
            React.createElement(
              'button',
              { onClick: event => this.handleCancel(event), className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
              'Cancel'
            )
          )
        )
      )
    );
  }

  handleCancel(event) {
    event.preventDefault();
    console.log('Cancel');
    // this.props.actions.needDeleteTrainingConfirmation(false)
    this.props.actions.needActionConfirmation(false);
  }

  handleConfirm(event) {
    event.preventDefault();
    console.log('Confirm action');
    // this.props.actions.deleteEditTrainingDispatcher() //this.props.training
    this.props.actions.callActionConfirmation();
  }

  // handleConfirmationClick(event) {
  //   // console.log('confirmationjs andle request confirmation in progress click')
  //   // var modal = document.getElementById('myModal')
  //   // modal.style.display = 'block'
  //   this.props.onConfirmationProcessStartClick('Please confirmation')
  // }     
}

// Confirmation.propTypes = {
//   onConfirmationClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }