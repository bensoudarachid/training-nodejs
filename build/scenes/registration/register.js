import React, { Component, PropTypes } from 'react';
// import { ThreeBounce } from 'better-react-spinkit'
//import LogoSpinner from '../../components/shared/logospinner'
// import 'jquery'
import $ from 'jquery';
// import Snackbar from './snackbar'
const util = require('util');

const RegSuccessful = () => React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Registration successful! An email will be sent to you. Please confirm your registration'
  )
);
const RegError = () => React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Registration NOT successful! System error. We\'re working on it. Please try later.'
  )
);

const textInputClassnames = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';
// const textInputClassnames = 'mdl-textfield'


if (process.env.BROWSER) {
  require('./register.scss');
}

export default class Register extends Component {
  //<Spinner spinnerName='three-bounce' /> circle wordpress double-bounce<p>Loading...</p>
  // <input type='text' ref='email' className="form-control" placeholder='Email'/>
  // <input type='text' ref='username' className="form-control" placeholder='Username'/>
  // <input type='password' ref='password' className="form-control" placeholder='Password here'/>

  render() {
    var registererror = '';
    var isRegistrationFetching = '';
    var registrationStep = '';
    var registrationError = {};
    // var usernameClasses
    // var emailClasses
    // var passwordClasses
    // var passwordcheckClasses
    if (this.props.auth) {
      registererror = this.props.auth.get('registererror');
      isRegistrationFetching = this.props.auth.get('isRegistrationFetching');
      registrationStep = this.props.auth.get('registrationStep');
      registrationError = this.props.auth.get('registrationError');
      // usernameClasses = textInputClassnames + (registrationError.get('username')!==undefined?' is-invalid':'')
      // emailClasses = textInputClassnames + (registrationError.get('email')!==undefined?' is-invalid':'')
      // passwordClasses = textInputClassnames + (registrationError.get('password')!==undefined?' is-invalid':'')
      // passwordcheckClasses = textInputClassnames + (registrationError.get('passwordCheck')!==undefined?' is-invalid':'')
    }
    // console.log('Register render. registrationError email  = '+registrationError.get('email'))
    // console.log('Register render. registrationError email Classes = '+emailClasses)

    // var emailClasses = textInputClassnames + (registrationError.get('email')!==''?' is-invalid':'')
    // var passwordClasses = textInputClassnames + (registrationError.get('password')!==''?' is-invalid':'')
    // var passwordCheckClasses = textInputClassnames + (registrationError.get('passwordCheck')!==''?' is-invalid':'')

    // console.log('Register render. registrationError username valid = '+usernameClasses)


    if (registererror) {}
    //   // var snackbarContainer = document.querySelector('#appsnackbar')
    //   // var data = {
    //   //   message: 'An error has occured: '+registererror,
    //   //   timeout: 3000
    //   // }
    //   // snackbarContainer.MaterialSnackbar.showSnackbar(data)

    // var dialog = document.querySelector('#appdialog')
    // dialog.showModal()
    // mdl.mdl_open('#modal-demo')

    // setTimeout(function(){

    //   mdl.mdl_close('#modal-demo')

    // }, 3000)

    //   return <div/>
    //<input type='password' ref='passwordcheck' className="form-control" placeholder='Password check'/>
    //        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
    //         Register
    //       </button>
    //htmlFor='passwordcheck'
    switch (registrationStep) {
      case 1:
        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'register blockborder' },
            React.createElement(
              'form',
              { onSubmit: event => this.handleClick(event), noValidate: true },
              React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                  'div',
                  { className: 'row' },
                  React.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    React.createElement(
                      'div',
                      { className: textInputClassnames },
                      React.createElement('input', { className: 'mdl-textfield__input', ref: 'username', type: 'text', id: 'username', name: 'username' }),
                      React.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'username' },
                        'User name'
                      ),
                      React.createElement(
                        'span',
                        { className: 'mdl-textfield__error', htmlFor: 'username' },
                        registrationError.get('username')
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    React.createElement(
                      'div',
                      { className: textInputClassnames },
                      React.createElement('input', { className: 'mdl-textfield__input', ref: 'email', type: 'text', id: 'email', name: 'email' }),
                      React.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'email' },
                        'Email'
                      ),
                      React.createElement(
                        'span',
                        { className: 'mdl-textfield__error', htmlFor: 'email' },
                        registrationError.get('email')
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    React.createElement(
                      'div',
                      { className: textInputClassnames },
                      React.createElement('input', { className: 'mdl-textfield__input', ref: 'password', type: 'password', id: 'password', name: 'password' }),
                      React.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'password' },
                        'Password'
                      ),
                      React.createElement(
                        'span',
                        { className: 'mdl-textfield__error', htmlFor: 'password' },
                        registrationError.get('password')
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-6 col-lg-6' },
                    React.createElement(
                      'div',
                      { className: textInputClassnames },
                      React.createElement('input', { className: 'mdl-textfield__input', ref: 'passwordCheck', type: 'password', id: 'passwordCheck', name: 'passwordCheck' }),
                      React.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'passwordCheck' },
                        'Password check'
                      ),
                      React.createElement(
                        'span',
                        { className: 'mdl-textfield__error', htmlFor: 'passwordCheck' },
                        registrationError.get('passwordCheck')
                      )
                    )
                  )
                )
              ),
              React.createElement('br', null),
              React.createElement(
                'div',
                { className: 'footer' },
                !isRegistrationFetching && React.createElement(
                  'button',
                  { type: 'submit', className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' },
                  'Submit'
                ),
                isRegistrationFetching && React.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap', style: { width: '55px', height: '55px' } })
              )
            )
          )
        );
      case 2:
        return React.createElement(RegSuccessful, null);
      case 3:
        return React.createElement(RegError, null);
    }
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Nothing returned'
      )
    );
  }
  // {registererror &&
  // <AppDialog/>
  // }

  componentDidMount() {
    componentHandler.upgradeDom();
    // const isRegistrationFetching = this.props.auth.get('isRegistrationFetching')
    // console.log('Registeration. mount')
    this.props.actions.registerInit();

    // var dialogInputs = document.querySelectorAll('.mdl-textfield__input')
    // for (var i = 0, l = dialogInputs.length; i < l; i++) {
    //   dialogInputs[i].MaterialTextfield.checkDirty()
    // }
  }
  componentDidUpdate() {
    let registrationError = this.props.auth.get('registrationError');
    // console.log('Registeration. comp update')
    // componentHandler.upgradeDom()
    // $('#usernameid').get(0).MaterialTextfield.checkDirty()
    //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
    var dialogInputs = document.querySelectorAll('.mdl-textfield');
    for (var i = 0, l = dialogInputs.length; i < l; i++) {
      dialogInputs[i].MaterialTextfield.checkDirty();
      if (registrationError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined) dialogInputs[i].className += ' is-invalid';else {
        dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ');
        // console.log('Register. dialogInputs[i].className - invalid '+dialogInputs[i].className)
      }
    }
  }
  componentWillUnmount() {
    console.log('Registeration. unmount');
    this.props.actions.registerInit();
  }
  handleClick(event) {
    event.preventDefault();
    // const usernameref = this.refs.username
    // const usernameref = $('#usernameid')
    // const usernameinput = usernameref.find('.mdl-textfield__input')
    // console.log('Registeration. '+usernameinput[0].value)
    const username = this.refs.username;
    // console.log('Register User: '+this.refs.username.value)
    const password = this.refs.password;
    const email = this.refs.email;
    const passwordCheck = this.refs.passwordCheck;
    // console.log('Register passwordcheck: '+this.refs.passwordCheck.value)

    const creds = {
      // username: usernameinput[0].value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      email: email.value.trim(),
      passwordCheck: passwordCheck.value.trim()
    };
    this.props.actions.registerUser(creds);

    // const registrationError = this.props.auth.get('registrationError')
    // const usernamevalid = registrationError.get('username')!==''?'is-invalid':''
    // // if (registrationError.get('username') !== ''){
    // console.log('Registeration. add valid ' + usernamevalid)
    // usernameref.addClass(usernamevalid)

    // const registrationError = this.props.auth.get('registrationError')
    // if (registrationError.get('username') !== ''){
    //   usernameref.addClass('is-invalid')
    //   // const usernameerror = usernameref.find('.mdl-textfield__error')
    //   // usernameerror[0].value = 'Waaaak wak'
    //   return
    // }else{
    //   console.log('Registeration. Remove invalid')
    //   usernameref.removeClass('is-invalid')
    // }
  }
}