import React, { Component, PropTypes } from 'react'
import { IndexLink, Link} from 'react-router'
import Login from './login.js'
import Logout from './logout.js'

import { LogoutUser} from '../redux/actions.js'


class Nav extends Component {
	// <div>
 //    </div>    
	render () {
		const { dispatch, isAuthenticated, errorMessage } = this.props		
		return (
		  <div>
		    <IndexLink activeClassName='active' to='/'>Home</IndexLink> 
		    <Link activeClassName='active' to='/address'>Address</Link>
	  {isAuthenticated &&
		    <Link activeClassName='active' to='/todos/applp'>Todos</Link>
	  }
		    <Link activeClassName='active' to='/users'>Users</Link>
		    <Link activeClassName='active' to='/about/hana?food=pizza'>About</Link>


	  {!isAuthenticated && this.props.location.pathname!='/register' &&
		  <Login
		  errorMessage={errorMessage}
		  onLoginClick={ creds => this.props.actions.loginUser(creds) }
		  />
	  }
	  {!isAuthenticated && this.props.location.pathname!='/register' &&
	      <Link activeClassName='active' to='/register'>Register</Link>
	  }

	  {isAuthenticated &&
	  	<Logout auth={this.props.auth} onLogoutClick={tokenid => this.props.actions.logoutUser(tokenid)} />
	  }



		  </div>
		)
	}
}
export default Nav
	// <div>

	//   {!isAuthenticated &&
	// 	  <Login
	// 	  errorMessage={errorMessage}
	// 	  onLoginClick={ creds => dispatch(loginUser(creds)) }
	// 	  />
	//   }

	//   {isAuthenticated &&
	//   	<Logout onLogoutClick={() => dispatch(logoutUser())} />
	//   }

 //    </div>    
