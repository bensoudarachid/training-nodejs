import React, { Component, PropTypes } from 'react'
var Spinner = require('react-spinkit');

export default class Register extends Component {
//<Spinner spinnerName='three-bounce' /> circle wordpress double-bounce<p>Loading...</p>
  render() {
    const { registererror, isFetching } = this.props.auth
    // console.log('error = '+registererror)
    return (
      <div>
        <input type='text' ref='email' className="form-control" placeholder='Email'/>
        <input type='text' ref='username' className="form-control" placeholder='Username'/>
        <input type='password' ref='password' className="form-control" placeholder='Password here'/>
        <input type='password' ref='passwordcheck' className="form-control" placeholder='Password check'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Register
        </button>

        {registererror &&
          <p>Errors: {registererror}</p>
        }
        {isFetching &&
          <p><Spinner spinnerName='three-bounce' noFadeIn/></p>

        }
      </div>
    )
  }

  componentDidMount() {
      console.log('register component mounted')
      this.props.actions.registerInit()
  }
  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const email = this.refs.email
    const passwordcheck = this.refs.passwordcheck
    const creds = { username: username.value.trim(), password: password.value.trim(),email: email.value.trim() }
    this.props.actions.registerUser(creds)
  }     
}

