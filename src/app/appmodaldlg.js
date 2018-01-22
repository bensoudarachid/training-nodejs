import React, {Component} from 'react'
import 'jquery'

if (process.env.BROWSER) {
    require('./appmodaldlg.scss')
}

export default class AppModalDlg extends Component {

    render() {
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

}
