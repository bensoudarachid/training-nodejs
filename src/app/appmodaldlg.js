import React, {Component, PropTypes} from 'react'
import 'jquery'
import $ from 'jquery'
import {IndexLink, Link} from 'react-router'

if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./appmodaldlg.scss')
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

export default class AppModalDlg extends Component {

    render() {
        // const { errorMessage } = this.props
        // var myStyle = {fontSize: 100, color: '#FF0000'}
        // console.log('appmodaldlgjs render')
        // <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
        return (
            <div id='appmodaldlg'>
                <div className='modal'>

<<<<<<< HEAD
    render() {
        // const { errorMessage } = this.props
        // var myStyle = {fontSize: 100, color: '#FF0000'}
        // console.log('appmodaldlgjs render')
        // <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
        return (
            <div id='appmodaldlg'>
                <div className='modal'>

=======
>>>>>>> 6e3ff02... webstorm big changes crash
                    <div className='modal-content'>
                        <div className='modal-header'>

                            <h1 className='glyphicon glyphicon-exclamation-sign'></h1>
                        </div>
                        <div className='modal-body'>
                            <p>{this.props.errorMessage}</p>
                        </div>
                        <div className='modal-footer'>
<<<<<<< HEAD
<<<<<<< HEAD
                            <button onClick={(event) => this.handleClose(event)}
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Ok
                            </button>
=======
                            <button onClick={(event) => this.handleClose(event)} className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Ok</button>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                            <button onClick={(event) => this.handleClose(event)}
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Ok
                            </button>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleClose(event) {
        console.log('appmodaldlgjs close modal')
        this.props.actions.appError(undefined)
    }

    // handleLoginClick(event) {
    //   // console.log('loginjs andle request login in progress click')
    //   // var modal = document.getElementById('myModal')
    //   // modal.style.display = 'block'
    //   this.props.onLoginProcessStartClick('Please login')
    // }
}
