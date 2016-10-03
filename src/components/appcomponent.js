import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import actions from '../redux/actions'

import { ThreeBounce } from 'better-react-spinkit'
import { Component, PropTypes } from 'react'

import Nav from './nav.js'
if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser')
  require('./appcomponent.scss')
}

class AppComponent extends React.Component {

  constructor() {
    super(...arguments)
    this.constructor.childContextTypes = {
      betterReactSpinkit: PropTypes.object
    }
  }

  getChildContext() {
    return {
      betterReactSpinkit: {
        color: '#505050', //'black'
        size: 15
      // ,fade: { duration: 0.3 }
      }
    }
  }


      // <div>
      //   <Nav
      //     actions={this.props.actions}
      //     isAuthenticated={auth.isAuthenticated}
      //     errorMessage={auth.errorMessage}
      //     auth={this.props.auth}
      //     location={this.props.location}
      //   />
      //   {!isBrowser &&
      //   <div style="background-color:red;height=100px;"><h2>mama</h2><ThreeBounce color='red' size={18} fade={{duration: 0.3}}/></div>
      //   }  
      //   <h2>Welcome to The todo homepage man!</h2>
      //   { children }
      // </div>

  render() {
    const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
    const isBrowser = typeof window !== 'undefined'

    // AppComponent.fetchData().then(response => response.json())
    // .then(data => {
    //   // console.log(data.todos)
    //   this.props.actions.addTodos(data.todos);
    // })
    // .catch(err => console.log('Booooo' + err));
  //        <img src="/images/RoyaFacebookIdea1.png" alt="Smiley face" height="99" width="453" />      
//style={{color: 'red'}}
    var children = updateChildren(this.props.children, this.props)
    return (
      <div>
        <Nav
          actions={this.props.actions}
          isAuthenticated={auth.isAuthenticated}
          errorMessage={auth.errorMessage}
          auth={this.props.auth}
          location={this.props.location}
        />
        {!isBrowser &&
         <div id='wait'><ThreeBounce size={18} fade={{duration: 0.01}}/></div>
        }  
        <h2>Welcome to The todo homepage</h2>
        { children }
      </div>
      )
  }
}


function updateChildren(children, props) {
  var childrenBack = React.Children.map(children, function(child) {
    // return React.cloneElement(child, {
    //   actions: props.actions,
    //   todos: props.todos
    // })
    return React.cloneElement(child, {
      ...props
    })
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
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
// export default AppComponent;