import React, {Component, PropTypes} from 'react'
import 'jquery'
import $ from 'jquery'
import {IndexLink, Link} from 'react-router'

if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./appmodaldlg.scss')
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

export default class AppModalDlg extends Component {

    render() {
        // const { errorMessage } = this.props
        // var myStyle = {fontSize: 100, color: '#FF0000'}
        // console.log('appmodaldlgjs render')
        // <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
        return (
            <div id='appmodaldlg'>
                <div className='modal'>

                    <div className='modal-content'>
                        <div className='modal-header'>

                            <h1 className='glyphicon glyphicon-exclamation-sign'></h1>
                        </div>
                        <div className='modal-body'>
                            <p>{this.props.errorMessage}</p>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={(event) => this.handleClose(event)}
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>Ok
                            </button>
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
