import React, {Component, PropTypes} from 'react'
import 'jquery'
import $ from 'jquery'
import Login from './login'
import {IndexLink, Link} from 'react-router'

if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./loginmodal.scss')
<<<<<<< HEAD
    // $(document).ready(function() { 
=======
    // $(document).ready(function() {
>>>>>>> 6e3ff02... webstorm big changes crash
    //   var modal = document.getElementById('myModal')

    // // Get the button that opens the modal
    // // var btn = $('myBtn')[0]
    //   var btn = document.getElementById('myBtn')
    //   // console.log('loginjs. myBtn '+btn)
    // // Get the <span> element that closes the modal
    //   var span = document.getElementsByClassName('close')[0]

<<<<<<< HEAD
    // // When the user clicks the button, open the modal 
=======
    // // When the user clicks the button, open the modal
>>>>>>> 6e3ff02... webstorm big changes crash
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


<<<<<<< HEAD
export default class LoginModal extends Component {

    render() {
        const {errorMessage} = this.props
        return (
            <div id='loginmodal'>
=======
export default
class LoginModal extends Component {

    render() {
        const { errorMessage } = this.props
        return (
            <div id='loginmodal' >
>>>>>>> 6e3ff02... webstorm big changes crash
                <div className='modal'>

                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
                            <p>{this.props.auth.get('loginMessage')}</p>
                        </div>
                        <div className='modal-body'>
                            <Login
                                errorMessage={errorMessage}
<<<<<<< HEAD
                                onLoginClick={creds => this.props.actions.loginUser(creds)}
=======
                                onLoginClick={ creds => this.props.actions.loginUser(creds) }
>>>>>>> 6e3ff02... webstorm big changes crash
                                onLoginProcessStartClick={this.props.actions.loginProcessStart}
                            />
                        </div>
                        <div className='modal-footer'>

                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderOld() {
<<<<<<< HEAD
        const {errorMessage} = this.props

        return (
            <div id='loginmodal'>
=======
        const { errorMessage } = this.props

        return (
            <div id='loginmodal' >
>>>>>>> 6e3ff02... webstorm big changes crash
                <div className='modal'>

                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
                            <p>{this.props.auth.get('loginMessage')}</p>
                            <h4>Please login</h4>
                        </div>
                        <div className='modal-body'>
                            <Login
                                errorMessage={errorMessage}
<<<<<<< HEAD
                                onLoginClick={creds => this.props.actions.loginUser(creds)}
=======
                                onLoginClick={ creds => this.props.actions.loginUser(creds) }
>>>>>>> 6e3ff02... webstorm big changes crash
                                onLoginProcessStartClick={this.props.actions.loginProcessStart}
                            />
                        </div>
                        <div className='modal-footer'>

                        </div>
                    </div>

                </div>
            </div>
        )
    }

    handleClose(event) {
        console.log('loginmodaljs close modal')
        this.props.actions.loginProcessEnd()
    }

    // handleLoginClick(event) {
    //   // console.log('loginjs andle request login in progress click')
    //   // var modal = document.getElementById('myModal')
    //   // modal.style.display = 'block'
    //   this.props.onLoginProcessStartClick('Please login')
<<<<<<< HEAD
    // }     
=======
    // }
>>>>>>> 6e3ff02... webstorm big changes crash
}

// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
//   errorMessage: PropTypes.string
// }