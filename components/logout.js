// components/Logout.js

import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props
      // <button onClick={() => onLogoutClick()} className="btn btn-primary">

    return (
      <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
        Logout
      </button>
    )
  }

  handleClick(event) {
    this.props.onLogoutClick(this.props.auth.id_token)
  }     
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}