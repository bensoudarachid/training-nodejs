import React from 'react'
// var React = require('react');
import ReactDom from 'react-dom'
// var ReactDom = require('react-dom');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
import { routes } from '../components/routes';

// let message = 'hello from entry baby'+routes[0].path;
// console.log(message);


// ReactDom.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDom.render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('root')
);
