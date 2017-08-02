import React, { Component, PropTypes } from 'react'
import 'jquery'
import $ from 'jquery'


if (process.env.BROWSER) {
//  console.log('Login Component. environment is browser')
    require('./login.scss')
    // require('materialize-css/sass/materialize.scss')
    // require('materialize-css/sass/style.scss')
    // require('materialize-css/sass/components/_color.scss')

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

export default
class Login extends Component {
    // <li><button onClick={(event) => this.handleClick(event)} className='btn btn-primary'>
    //  <span className='glyphicon glyphicon-log-in'></span> Login
    // </button></li>
    // </ul>
    // <li>
    // <input type='submit' value='Login' className='btn btn-primary'/>
    // </li>

    // <li>
    //     <button type='submit' className='btn btn-primary'>
    //       <span className='glyphicon glyphicon-log-in'></span> Login
    //     </button>
    // </li>

    // <li>
    // <TextField type='text' ref='username' className='inputfield' hintText='type your login here' floatingLabelText='Login'/>
    // </li>
    // <li>
    // <TextField type='password' ref='password' className='inputfield' hintText='type your password here' floatingLabelText='Password'/>
    // </li>

    render() {
        const { errorMessage } = this.props
        // var myStyle = {fontSize: 100, color: '#FF0000'}
        //       <li><input type='text' ref='username' className='form-control' placeholder='Username'/></li>
        //<input type='password' ref='password' className='form-control' placeholder='Password'/>
        return (
            <div id='loginform'>

                <form onSubmit={this.handleClick.bind(this)}>
                    <ul>
                        <li>
                            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                <input className='mdl-textfield__input' ref='username' type='text' id='username'/>
                                <label className='mdl-textfield__label' htmlFor='username'>Login</label>
                            </div>
                        </li>
                        <li>
                            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                                <input className='mdl-textfield__input' ref='password' type='password' id='password'/>
                                <label className='mdl-textfield__label' htmlFor='password'>Password</label>
                            </div>
                        </li>
                        <li>
                            <button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored button'>
                                <span className='glyphicon glyphicon-log-in'></span>
                            Login</button>
                        </li>
                    </ul>
        {errorMessage &&
        <p style={{fontSize: 25, color: '#FF0000'}}>{errorMessage}</p>
            }
                </form>
            </div>
        )
    }

    // <li>
    //   <FlatButton className='button' type='submit'><span className='glyphicon glyphicon-log-in'></span> Login</FlatButton>
    // </li>

    handleClick(event) {
        event.preventDefault()
        // console.log('login. Login value = '+this.refs.username.getValue())
        // const username = this.refs.username.getValue().trim()
        // const password = this.refs.password.getValue().trim()
        var username = this.refs.username.value.trim()
        var password = this.refs.password.value.trim()
        // console.log('login. Login value = '+username)
        const creds = {username: username, password: password}
        this.props.onLoginClick(creds)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}
