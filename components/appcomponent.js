import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'


import { Component, PropTypes } from 'react'
import { ThreeBounce } from 'better-react-spinkit'



import Nav from './nav.js'
if (process.env.BROWSER) {
  require('./nav.scss')
}




// const Navi = () => (
//   <div>
//     <IndexLink activeClassName='active' to='/'>Home</IndexLink> 
//     <Link activeClassName='active' to='/address'>Address</Link>
//     <Link activeClassName='active' to='/todos'>Todos</Link>
//     <Link activeClassName='active' to='/users'>Users</Link>
//     <Link activeClassName='active' to='/about/hana?food=pizza'>About</Link>
//   </div>
// )


class AppComponent extends React.Component {

  constructor() {
    super(...arguments);

    this.constructor.childContextTypes = {
      betterReactSpinkit: PropTypes.object
    };
  }

  getChildContext () {
    return {
      betterReactSpinkit: {
        color: '#505050', //'black'
        size: 15
        // ,fade: { duration: 0.3 }
      }
    }
  }
  // static fetchData() {
  //   console.log('todos component is mounted. Do nothing'+ JSON.stringify({
  //       param: 'abbas'
  //     }))
  //   var test='This is abbas in the hood!'
  //   return fetch('/api/todoslist', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Content-Type': 'application/json'
  //     },
  //     // body: 'param=value' //if no json in header
  //     body: JSON.stringify({
  //       testparam: test
  //     })
  //   })
  // }
  
  render() {
      const { dispatch, quote, auth, errorMessage, isSecretQuote } = this.props
      // AppComponent.fetchData().then(response => response.json())
      // .then(data => {
      //   // console.log(data.todos)
      //   this.props.actions.addTodos(data.todos);
      // })
      // .catch(err => console.log('Booooo' + err));

    var children = updateChildren(this.props.children, this.props);
    return (
      <div>
        <Nav
          actions={this.props.actions}
          isAuthenticated={auth.isAuthenticated}
          errorMessage={auth.errorMessage}
          auth={this.props.auth}
          location={this.props.location}
        />
        <h2>Welcome to my App</h2>
        { children }
      </div>
      );
  }
}


function updateChildren(children, props) {
  var childrenBack = React.Children.map(children, function(child) {
    // return React.cloneElement(child, {
    //   actions: props.actions,
    //   todos: props.todos
    // })
    return React.cloneElement(child, { ...props })
  })
  return childrenBack
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
  }
}

// export default connect(mapStateToProps)(AppComponent);
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
// export default AppComponent;