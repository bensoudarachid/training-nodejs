import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <Link activeClassName='active' to='/address'>Address</Link>
    <Link activeClassName='active' to='/todos'>Todos</Link>
    <Link activeClassName='active' to='/userapp'>Users</Link>
    <Link activeClassName='active' to='/about'>About</Link>
  </div>
)

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<Nav/>
        <h2>Welcome to my App</h2>

        { this.props.children }
      </div>
    );
  }
}