//import React from 'react';
var React = require('react');
//import ReactDom from 'react-dom';
var ReactDom = require('react-dom');

import HelloWorld from './hello-world';
import App from './components/app';

let message = 'hello from entry';
console.log(message);



ReactDom.render(
  <App />,
  document.getElementById('root')
);