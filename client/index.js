import React from 'react'
// var React = require('react');
import ReactDom from 'react-dom'
// var ReactDom = require('react-dom');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import configureStore from '../redux/store'
import { createStore, applyMiddleware } from 'redux' 
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'  
import { syncHistoryWithStore } from 'react-router-redux'  
// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();


// import HelloWorld from '../hello-world';
// import TodoApp from '../components/todoapp';
// import UserApp from '../components/userapp';
// import App from '../components/app.jsx';
import AppComponent from '../components/appcomponent';
import { routes } from '../components/routes';
import rootReducer from '../redux/reducers' 

// let message = 'hello from entry baby'+routes[0].path;
// console.log(message);


// ReactDom.render(
//   <App />,
//   document.getElementById('root')
// );

// let initialState = {
//   todos: [{
//     id: 0,
//     completed: false,
//     text: 'Initial todo for demo purposes'
//   }],
//   user: {
//     username: 'kurt',
//     id: 13
//   }
// }
//let store = configureStore(initialState)


const initialState = window.__REDUX_STATE__  
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
// let store = configureStore(initialState)
syncHistoryWithStore(browserHistory, store)

// store={store}
ReactDom.render(
  <Provider store={store}>
	  <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
   	// <Router routes={routes} history={browserHistory} />
// <Router children={routes} history={browserHistory} />
   	// <AppComponent />
//  	<App />

  // <Provider store={store}>
	 //  <App />
  // </Provider>,
  // 