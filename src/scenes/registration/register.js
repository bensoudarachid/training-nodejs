import React, {Component} from 'react'

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

const textInputClassnames = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'

if (process.env.BROWSER) {
    require('./register.scss')
}

export default class Register extends Component {
    render() {
        var registererror = ''
        var isRegistrationFetching = ''
        var registrationStep = ''
        var registrationError = {}
        if (this.props.auth) {
            registererror = this.props.auth.get('registererror')
            isRegistrationFetching = this.props.auth.get('isRegistrationFetching')
            registrationStep = this.props.auth.get('registrationStep')
            registrationError = this.props.auth.get('registrationError')
        }

        switch (registrationStep) {
            case 1:
                return (
                    <div>
                        <div className='register blockborder'>
                            <form onSubmit={(event) => this.handleClick(event)} noValidate>
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-xs-12 col-md-6 col-lg-6'>
                                            <div className={textInputClassnames}>
                                                <input className='mdl-textfield__input' ref='username' type='text'
                                                       id='username' name='username'/>
                                                <label className='mdl-textfield__label' htmlFor='username'>User
                                                    name</label>
                                                <span className="mdl-textfield__error"
                                                      htmlFor='username'>{registrationError.get('username')}</span>
                                            </div>
                                        </div>

                                        <div className='col-xs-12 col-md-6 col-lg-6'>
                                            <div className={textInputClassnames}>
                                                <input className='mdl-textfield__input' ref='email' type='text'
                                                       id='email' name='email'/>
                                                <label className='mdl-textfield__label' htmlFor='email'>Email</label>
                                                <span className="mdl-textfield__error"
                                                      htmlFor='email'>{registrationError.get('email')}</span>
                                            </div>
                                        </div>

                                        <div className='col-xs-12 col-md-6 col-lg-6'>
                                            <div className={textInputClassnames}>
                                                <input className='mdl-textfield__input' ref='password' type='password'
                                                       id='password' name='password'/>
                                                <label className='mdl-textfield__label'
                                                       htmlFor='password'>Password</label>
                                                <span className="mdl-textfield__error"
                                                      htmlFor='password'>{registrationError.get('password')}</span>
                                            </div>
                                        </div>

                                        <div className='col-xs-12 col-md-6 col-lg-6'>
                                            <div className={textInputClassnames}>
                                                <input className='mdl-textfield__input' ref='passwordCheck'
                                                       type='password' id='passwordCheck' name='passwordCheck'/>
                                                <label className='mdl-textfield__label' htmlFor='passwordCheck'>Password
                                                    check</label>
                                                <span className="mdl-textfield__error"
                                                      htmlFor='passwordCheck'>{registrationError.get('passwordCheck')}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br/>
                                <div className='footer'>
                                    {!isRegistrationFetching &&
                                    <button type='submit'
                                            className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                                        Submit
                                    </button>
                                    }
                                    {isRegistrationFetching &&
                                    <span
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap'
                                        style={{
                                            width: '55px',
                                            height: '55px'
                                        }}></span>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                )
            case 2:
                return <RegSuccessful/>
            case 3:
                return <RegError/>
        }
        return (
            <div>
                <p>Nothing returned</p>
            </div>
        )
    }


    componentDidMount() {
        componentHandler.upgradeDom()
        this.props.actions.registerInit()

    }

    componentDidUpdate() {
        let registrationError = this.props.auth.get('registrationError')
        var dialogInputs = document.querySelectorAll('.mdl-textfield')
        for (var i = 0, l = dialogInputs.length; i < l; i++) {
            dialogInputs[i].MaterialTextfield.checkDirty()
            if (registrationError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined)
                dialogInputs[i].className += ' is-invalid'
            else {
                dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ')
            }
        }
    }

    componentWillUnmount() {
        console.log('Registeration. unmount')
        this.props.actions.registerInit()
    }

    handleClick(event) {
        event.preventDefault()
        const username = this.refs.username
        const password = this.refs.password
        const email = this.refs.email
        const passwordCheck = this.refs.passwordCheck

        const creds = {
            username: username.value.trim(),
            password: password.value.trim(),
            email: email.value.trim(),
            passwordCheck: passwordCheck.value.trim()
        }
        this.props.actions.registerUser(creds)
    }
}
