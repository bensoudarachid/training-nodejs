import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;
// var IndexLink = require('react-router').IndexLink;
// var hashHistory = require('react-router').hashHistory;
// var browserHistory = require('react-router').Link;
// var IndexRoute = require('react-router').IndexRoute;

import TodoApp from './todoapp'
import UserApp from './userapp'
// var TodoApp = require('./todoapp');
// var UserApp = require('./userapp');

// if (process.env.BROWSER) {
require('./nav.scss')
// }

const Home = (props) => (
  <div>
    Hey there <br/>
    {props.title}<br />
    {props.subTitle}
  </div>
)
const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)
// const Address = () => <h1>We are located at 555 Jackson St.</h1>
const About = (props) => (
  <div>
    <h2>Welcome to the About page: {props.params.name}</h2>
  </div>
)

const Address = (props) => <div>
  <br />
  <Link onlyActiveOnIndex activeClassName='active' to='/address'>Twitter Feed</Link>&nbsp;
  <Link activeClassName='active' to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const NotFound = () => ( <h1>404.. This page is not found!</h1>)

// const Nav = () => (
//   <div>
//     <IndexLink activeClassName='active' to='/home'>Home</IndexLink>&nbsp;
//     <Link activeClassName='active' to='/address'>Address</Link>
//     <Link activeClassName='active' to='/todos'>Todos</Link>
//     <Link activeClassName='active' to='/userapp'>Users</Link>
//     <Link activeClassName='active' to='/about'>About</Link>
//   </div>
// )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path = '/' component={Container}>
          <Route path='home' component={Home}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='/todos' component={TodoApp} />
          <Route path='/userapp' component={UserApp} />
          <Route path='/address' component={Address}>
              <IndexRoute component={TwitterFeed} />
              <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div id="app-view">
//         <h1>App view</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default(
//   <Router history={browserHistory}>
//       <Route path = '/' component={Container}>
//           <Route path='home' component={Home}>
//             <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
//           </Route>
//           <Route path='/todos' component={TodoApp} />
//           <Route path='/userapp' component={UserApp} />
//           <Route path='/address' component={Address}>
//               <IndexRoute component={TwitterFeed} />
//               <Route path='instagram' component={Instagram} />
//           </Route>
//           <Route path='/about(/:name)' component={About} />
//           <Route path='*' component={NotFound} />
//       </Route>
//   </Router>
// );


// function mapStateToProps(state) {
//   return state
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default App
// export default connect( mapStateToProps, mapDispatchToProps )(App)
