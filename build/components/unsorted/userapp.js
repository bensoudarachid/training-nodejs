import React, { Component } from 'react';
// import _ from 'lodash'

const users = [{
  name: 'abbas',
  malegender: true
}, {
  name: 'sa3diya',
  malegender: false
}, {
  name: 'hmida',
  malegender: true
}];

class UserApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users
    };
  }

  render() {
    //let test = 'App';
    //console.log("Hi there from "+test);
    //  alert("Hi "+test);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Users! mam0174'
      )
    );
  }

}
export default UserApp;