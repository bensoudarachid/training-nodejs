import React, {Component} from 'react'
import 'jquery'
import Login from './login'

import './loginmodal.scss'

export default class LoginModal extends Component {

    render() {
        const {errorMessage} = this.props
        return (
            <div id='loginmodal'>
                <div className='modal'>

                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span onClick={(event) => this.handleClose(event)} className='close'>×</span>
                            <p>{this.props.auth.get('loginMessage')}</p>
                        </div>
                        <div className='modal-body'>
                            <Login
                                errorMessage={errorMessage}
                                onLoginClick={creds => this.props.actions.loginUser(creds)}
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

}





