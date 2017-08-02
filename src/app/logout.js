// components/Logout.js

// import React, { Component, PropTypes } from 'react'
import {Component, PropTypes} from 'react'

export default
class Logout extends Component {

    render() {
        // const { onLogoutClick } = this.props
        // <button onClick={() => onLogoutClick()} className="btn btn-primary">

        return (
            <button onClick={() => this.handleClick()} className="btn btn-primary">
<<<<<<< HEAD
                <span className='glyphicon glyphicon-log-out'></span> Logout
=======
                <span className='glyphicon glyphicon-log-out'></span>
            Logout
>>>>>>> 6e3ff02... webstorm big changes crash
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