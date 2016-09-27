import React, { Component, PropTypes } from 'react'
import { IndexLink, Link} from 'react-router'
import Login from './login.js'
import Logout from './logout.js'

import { LogoutUser} from '../redux/actions.js'


class Nav extends Component {
	// <div>
 //    </div>    
 // {this.props.location.pathname!='/register' &&
//     	<Link activeClassName='active' to='/register'>Register</Link>
// }

  render () {
    const isBrowser = typeof window !== 'undefined'
    const { dispatch, isAuthenticated, errorMessage } = this.props
    console.log('nav: isAuthenticated'+isAuthenticated)
    console.log('nav: isBrowser'+isBrowser)
    return (
	<div>
	<IndexLink activeClassName='active' to='/'>Home</IndexLink> 
	<Link activeClassName='active' to='/address'>Address</Link>
	<Link activeClassName='active' to='/users'>Users</Link>
	<Link activeClassName='active' to='/about/hana?food=pizza'>About</Link>
	<Link activeClassName='active' to='/register'>Register</Link>
	{isAuthenticated &&
	<Link activeClassName='active' to='/todos'>Todos</Link>
	}


	{isBrowser && !isAuthenticated && this.props.location.pathname!='/register' &&
	<Login
	errorMessage={errorMessage}
	onLoginClick={ creds => this.props.actions.loginUser(creds) }
	/>
	}

	{isAuthenticated &&
	<div><Logout auth={this.props.auth} onLogoutClick={() => this.props.actions.logoutUser()} /></div>
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
