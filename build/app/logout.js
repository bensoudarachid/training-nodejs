// components/Logout.js

// import React, { Component, PropTypes } from 'react'
import { Component, PropTypes } from 'react';

export default class Logout extends Component {

  render() {
    // const { onLogoutClick } = this.props
    // <button onClick={() => onLogoutClick()} className="btn btn-primary">

    return React.createElement(
      'button',
      { onClick: () => this.handleClick(), className: 'btn btn-primary' },
      React.createElement('span', { className: 'glyphicon glyphicon-log-out' }),
      ' Logout'
    );
  }

  handleClick() {
    this.props.onLogoutClick(this.props.auth.get('id_token'));
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};