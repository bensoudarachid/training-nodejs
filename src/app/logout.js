// components/Logout.js

// import React, { Component, PropTypes } from 'react'
import {Component, PropTypes} from 'react'

export default class Logout extends Component {

    render() {
        // const { onLogoutClick } = this.props
        // <button onClick={() => onLogoutClick()} className="btn btn-primary">

        return (
            <button onClick={() => this.handleClick()} className="btn btn-primary">
<<<<<<< HEAD
                <span className='glyphicon glyphicon-log-out'></span> Logout
=======
                <span className='glyphicon glyphicon-log-out'></span>
<<<<<<< HEAD
            Logout
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                Logout
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            </button>
        )
    }

    handleClick() {
        this.props.onLogoutClick(this.props.auth.get('id_token'))
    }
}

Logout.propTypes = {
    onLogoutClick: PropTypes.func.isRequired
}