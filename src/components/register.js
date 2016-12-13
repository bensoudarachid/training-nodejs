import React, { Component, PropTypes } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import Spinner from './spinner'
// import 'jquery'
import $ from 'jquery'
// import Snackbar from './snackbar'
const util = require('util')

const RegSuccessful = () => (
  <div>
      <p>Registration successful! An email will be sent to you. Please confirm your registration</p>
  </div>
)
const RegError = () => (
  <div>
      <p>Registration NOT successful! System error. We're working on it. Please try later.</p>
  </div>
)

const textInputClassnames = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label '


if (process.env.BROWSER) {
  require('./register.scss')
}


export default class Register extends Component {
  //<Spinner spinnerName='three-bounce' /> circle wordpress double-bounce<p>Loading...</p>
            // <input type='text' ref='email' className="form-control" placeholder='Email'/>
            // <input type='text' ref='username' className="form-control" placeholder='Username'/>
            // <input type='password' ref='password' className="form-control" placeholder='Password here'/>
  
  render() {
    var registererror = ''
    var isRegistrationFetching = ''
    var registrationStep = ''
    var registrationError = {}
    var usernameClasses = textInputClassnames
    if( this.props.auth ){
      registererror = this.props.auth.get('registererror')
      isRegistrationFetching = this.props.auth.get('isRegistrationFetching')
      registrationStep = this.props.auth.get('registrationStep')
      registrationError = this.props.auth.get('registrationError')
      usernameClasses = textInputClassnames + (registrationError.get('username')!==''?' is-invalid':'')
    }
    // var emailClasses = textInputClassnames + (registrationError.get('email')!==''?' is-invalid':'')
    // var passwordClasses = textInputClassnames + (registrationError.get('password')!==''?' is-invalid':'')
    // var passwordCheckClasses = textInputClassnames + (registrationError.get('passwordCheck')!==''?' is-invalid':'')

    // console.log('Register render. registrationError username valid = '+usernameClasses)
    // console.log('Register render. registrationError username = '+registrationError.get('username'))

    if (registererror){
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
    }
    //   return <div/>
    //<input type='password' ref='passwordcheck' className="form-control" placeholder='Password check'/>
//        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
//         Register
//       </button>
    
    switch (registrationStep) {
    case 1:
      return (
          <div id='register'>
            <form onSubmit={(event) => this.handleClick(event)}>
            <div className="container">
            <div className='row'>
              <div className='col-xs-12 col-md-6 col-lg-6'>
              <div id='usernameid' className={usernameClasses}>
                <input className='mdl-textfield__input' ref='username' type='text' id='usernameinput'/>
                <label className='mdl-textfield__label' htmlFor='passwordcheck'>User name</label>
                <span className="mdl-textfield__error">{registrationError.get('username')}</span>
              </div>
              </div>

              <div className='col-xs-12 col-md-6 col-lg-6'>
              <div className={textInputClassnames}>
                <input className='mdl-textfield__input' ref='email' type='text' id='email'/>
                <label className='mdl-textfield__label' htmlFor='passwordcheck'>Email</label>
              </div>
              </div>

              <div className='col-xs-12 col-md-6 col-lg-6'>
              <div className={textInputClassnames}>
                <input className='mdl-textfield__input' ref='password' type='password' id='password'/>
                <label className='mdl-textfield__label' htmlFor='passwordcheck'>Password</label>
              </div>
              </div>

              <div className='col-xs-12 col-md-6 col-lg-6'>
              <div className={textInputClassnames}>
                <input className='mdl-textfield__input' ref='passwordcheck' type='password' id='passwordcheck'/>
                <label className='mdl-textfield__label' htmlFor='passwordcheck'>Password check</label>
              </div>
              </div>

            </div>
            </div>
            <br/>
            <div className='footer'>
            {!isRegistrationFetching &&
            <button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
              Submit
            </button>
            }
            {isRegistrationFetching &&
            <Spinner/>
            }
            </div>
            </form>
          </div>
      )
    case 2:
      return <RegSuccessful />
    case 3:
      return <RegError />
    }
    return(
      <div>
        <p>Nothing returned</p>
      </div> 
    )
  }
            // {registererror &&
            // <AppDialog/>
            // }



  componentDidMount() {
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // const isRegistrationFetching = this.props.auth.get('isRegistrationFetching')
    // console.log('Registeration. mount')
    this.props.actions.registerInit()

    // var dialogInputs = document.querySelectorAll('.mdl-textfield__input')
    // for (var i = 0, l = dialogInputs.length; i < l; i++) {
    //   dialogInputs[i].MaterialTextfield.checkDirty()
    // }
  }
  componentDidUpdate() {
    // console.log('Registeration. comp update')
    // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // $('#usernameid').get(0).MaterialTextfield.checkDirty()
    //Need this code to get correct placeholderfloating  behaviour. otherwise content and placeholder overlap
    var dialogInputs = document.querySelectorAll('.mdl-textfield')
    for (var i = 0, l = dialogInputs.length; i < l; i++) {
      dialogInputs[i].MaterialTextfield.checkDirty()
    }

  }
  componentWillUnmount(){
    console.log('Registeration. unmount')
    this.props.actions.registerInit()
  }
  handleClick(event) {
    event.preventDefault()
    // const usernameref = this.refs.username
    const usernameref = $('#usernameid')
    const usernameinput = usernameref.find('.mdl-textfield__input')
    // console.log('Registeration. '+usernameinput[0].value)

    const password = this.refs.password
    const email = this.refs.email
    const passwordcheck = this.refs.passwordcheck
    const creds = {
      username: usernameinput[0].value.trim(),
      password: password.value,
      email: email.value.trim(),
      passwordCheck: passwordcheck.value
    }
    this.props.actions.registerUser(creds)

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

