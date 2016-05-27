import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    var test = 'hi';
    console.log("Hiy "+test);
  //  alert("Hi "+test);
    return <h1>Hello World!</h1>
  }
}