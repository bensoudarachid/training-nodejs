import React, { Component, PropTypes } from 'react'
import { IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import { LogoutUser} from '../../services/actions.js'
// import Bootstrap from '!style!css!../node_modules/bootstrap/dist/css/bootstrap.css'
// require('!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import { Button } from 'react-bootstrap'

//import 'bootstrap/dist/css/bootstrap.css'

import $ from 'jquery'
//import 'bootstrap/dist/js/bootstrap.js'
// import '../styles/default.scss'

if (process.env.BROWSER) {
  // console.log('Appcomponent. environment is browser')
  require('./nav.scss')
//   function sir3allah(event){
//     var logotitleElm2 = $('#bsnavi h2')
//     // var rdm = Math.floor(Math.random() * 2) + 1
//     // var rdm2 = Math.floor(Math.random() * 2) + 1
//     var imgAnim = 'flash'//rdm===1?'flash':'flash' //flash
//     // console.log('anim='+imgAnim)
//     var timeout=800//rdm===1?800:350
//     logotitleElm2.addClass('animated '+imgAnim) //+(rdm===3&&rdm2===1?' reverseanim':'')
//     setTimeout(() => {
//       logotitleElm2.removeClass('animated')
//       logotitleElm2.removeClass(imgAnim)
//     }, timeout)
    
//   }
//   window.requestAnimFrame = (function(){
//     return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             console.log('Halli')
//             window.setTimeout(callback, 1000 / 2)
//           }
//   }
// )();

//   (function loop(){
//     // console.log('Halli')
//     sir3allah(undefined)
//     setTimeout(function() {
//       requestAnimFrame(loop)
//     },(30000) ) //1000/100
//   })()

  // $(document).ready(function () {
  //   $(document).click(function (event) {
  //     var clickover = $(event.target)
  //     var _opened = $('.navbar-collapse').hasClass('navbar-collapse in')
  //     if (_opened === true && !clickover.hasClass('navbar-toggle')) {
  //       $('button.navbar-toggle').click()
  //     }
  //   })
  // })

  // $(document).ready(function() { 
  //   $('body').click(function(event) {
  //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
  //     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
  //       $('.navbar-collapse').collapse('toggle')
  //     }
  //   })
  // })


}
//require('./nav.scss')



class NavPublic extends Component {
	// <div>
 //    </div>    
 // {this.props.location.pathname!='/register' &&
//     	<Link activeClassName='active' to='/register'>Register</Link>
// }
//	<Button>Click me!</Button>


  handleLoginClick(event) {
    console.log('loginjs andle request login in progress click')
    // var modal = document.getElementById('myModal')
    // modal.style.display = 'block'
    this.props.actions.loginProcessStart('Welcome to Roya')
  }     

  render() {
    const isBrowser = typeof window !== 'undefined'
    const { auth } = this.props
    const isAuthenticated = auth.get('isAuthenticated')

    // console.log('nav: isBrowser'+isBrowser)
	//&& this.props.location.pathname!='/register'
    return (
    <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
    <ul className='navbar-header logoblock'>
		<li><img id='logo' src={'/images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/></li>
		<li>
			<div>
			<h2>ROYA</h2>
			<h3>SOFTWARE</h3>
			</div>
		</li>
		<li>
			<button id='togg' type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
		</li>		
	</ul>
		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav navbar-left">
			<li><IndexLink activeClassName='active' to='/'>Thread</IndexLink></li>
      <li><Link activeClassName='active' to='/trainings'>Training</Link></li>
			</ul>
			<ul className="nav navbar-nav navbar-right">
			<li><Link activeClassName='active' to='/register'>Register</Link></li>
{isBrowser && !isAuthenticated &&
	<li><a href='#' onClick={(event) => this.handleLoginClick(event)}><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
}
{isAuthenticated &&
	<li>
	<a href='#' onClick={(event) => this.props.actions.logoutUser()}><span className='glyphicon glyphicon-log-out'></span> Logout</a>
	</li>
}			
			</ul>
		</div>
	</nav>
    )
  }
}
			// <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>

export default NavPublic
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
