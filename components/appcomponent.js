import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'




const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink> 
    <Link activeClassName='active' to='/address'>Address</Link>
    <Link activeClassName='active' to='/todos'>Todos</Link>
    <Link activeClassName='active' to='/userapp'>Users</Link>
    <Link activeClassName='active' to='/about'>About</Link>
  </div>
)


class AppComponent extends React.Component {
  render() {
    // var children = this.props.children
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
    return React.cloneElement(child, {
      actions: actions,
      todos: props.todos,
      dispatch: props.dispatch
    })
  })
  return childrenBack
}

function mapStateToProps(state) {
  return state
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(mapStateToProps)(AppComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
// export default AppComponent;