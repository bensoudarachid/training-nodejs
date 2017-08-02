import React, { Component, PropTypes } from 'react';
import 'jquery';
import $ from 'jquery';
import Login from './login';
import { IndexLink, Link } from 'react-router';

if (process.env.BROWSER) {
  // console.log('Appcomponent. environment is browser')
  require('./loginmodal.scss');
  // $(document).ready(function() { 
  //   var modal = document.getElementById('myModal')

  // // Get the button that opens the modal
  // // var btn = $('myBtn')[0]
  //   var btn = document.getElementById('myBtn')
  //   // console.log('loginjs. myBtn '+btn)
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

export default class LoginModal extends Component {

  render() {
    const { errorMessage } = this.props;
    return React.createElement(
      'div',
      { id: 'loginmodal' },
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
              { onClick: event => this.handleClose(event), className: 'close' },
              '\xD7'
            ),
            React.createElement(
              'p',
              null,
              this.props.auth.get('loginMessage')
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(Login, {
              errorMessage: errorMessage,
              onLoginClick: creds => this.props.actions.loginUser(creds),
              onLoginProcessStartClick: this.props.actions.loginProcessStart
            })
          ),
          React.createElement('div', { className: 'modal-footer' })
        )
      )
    );
  }
  renderOld() {
    const { errorMessage } = this.props;

    return React.createElement(
      'div',
      { id: 'loginmodal' },
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
              { onClick: event => this.handleClose(event), className: 'close' },
              '\xD7'
            ),
            React.createElement(
              'p',
              null,
              this.props.auth.get('loginMessage')
            ),
            React.createElement(
              'h4',
              null,
              'Please login'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(Login, {
              errorMessage: errorMessage,
              onLoginClick: creds => this.props.actions.loginUser(creds),
              onLoginProcessStartClick: this.props.actions.loginProcessStart
            })
          ),
          React.createElement('div', { className: 'modal-footer' })
        )
      )
    );
  }
  handleClose(event) {
    console.log('loginmodaljs close modal');
    this.props.actions.loginProcessEnd();
  }

  // handleLoginClick(event) {
  //   // console.log('loginjs andle request login in progress click')
  //   // var modal = document.getElementById('myModal')
  //   // modal.style.display = 'block'
  //   this.props.onLoginProcessStartClick('Please login')
  // }     
}

// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }