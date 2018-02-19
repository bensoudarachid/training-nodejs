import React, {Component, PropTypes} from 'react'
import 'jquery'

import './login.scss'

export default class Login extends Component {

    render() {
        const {errorMessage} = this.props
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
                            <button type='submit'
                                    className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored button'>
                                <span className='glyphicon glyphicon-log-in'></span>
                                Login
                            </button>
                        </li>
                    </ul>
                    {errorMessage &&
                    <p style={{fontSize: 25, color: '#FF0000'}}>{errorMessage}</p>
                    }
                </form>
            </div>
        )
    }

    handleClick(event) {
        event.preventDefault()
        var username = this.refs.username.value.trim()
        var password = this.refs.password.value.trim()
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
