import React, {Component} from 'react'
import 'jquery'

if (process.env.BROWSER) {
    require('./confirmationmodal.scss')
}

export default class ConfirmationModal extends Component {

    render() {
        const {errorMessage} = this.props
        return (
            <div id='confirmationmodal'>
                <div className='modal'>

                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span onClick={(event) => this.handleCancel(event)} className='close'>×</span>
                            <p>Really?</p>
                        </div>
                        <div className='modal-body'>
                            <p>Do you wanna do this?</p>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={(event) => this.handleConfirm(event)}
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                                Confirm
                            </button>
                            <button onClick={(event) => this.handleCancel(event)}
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    handleCancel(event) {
        event.preventDefault()
        console.log('Cancel')
        this.props.actions.needActionConfirmation(false)
    }

    handleConfirm(event) {
        event.preventDefault()
        console.log('Confirm action')
        this.props.actions.callActionConfirmation()
    }

}

