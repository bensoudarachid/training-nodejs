import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from './hello-world';
import App from './components/app';

let message = 'hello from entry';
console.log(message);


ReactDom.render(
  <App />,
  document.getElementById('root')
);