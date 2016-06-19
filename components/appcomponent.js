import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
if (process.env.BROWSER) {
  require('./nav.scss')
}




const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink> 
    <Link activeClassName='active' to='/address'>Address</Link>
    <Link activeClassName='active' to='/todos'>Todos</Link>
    <Link activeClassName='active' to='/users'>Users</Link>
    <Link activeClassName='active' to='/about'>About</Link>
  </div>
)


class AppComponent extends React.Component {

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

      // AppComponent.fetchData().then(response => response.json())
      // .then(data => {
      //   // console.log(data.todos)
      //   this.props.actions.addTodos(data.todos);
      // })
      // .catch(err => console.log('Booooo' + err));

    
    var children = updateChildren(this.props.children, this.props);
    return (
      <div>
        <Nav/>
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