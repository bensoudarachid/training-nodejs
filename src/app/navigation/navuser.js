import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from '../../services/actions.js'
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

<<<<<<< HEAD
    // $(document).ready(function() { 
    //   $('body').click(function(event) {
    //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
=======
    // $(document).ready(function() {
    //   $('body').click(function(event) {
    //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
>>>>>>> 6e3ff02... webstorm big changes crash
    //     if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') ) {
    //       $('.navbar-collapse').collapse('toggle')
    //     }
    //   })
    // })

}
<<<<<<< HEAD
=======

//require('./nav.scss')
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

//require('./nav.scss')

class NavUser extends Component {
    // <div>
<<<<<<< HEAD
    //    </div>    
=======
    //    </div>
>>>>>>> 6e3ff02... webstorm big changes crash
    // {this.props.location.pathname!='/register' &&
//     	<Link activeClassName='active' to='/register'>Register</Link>
// }
//	<Button>Click me!</Button>


    handleLoginClick(event) {
        // console.log('loginjs andle request login in progress click')
        // var modal = document.getElementById('myModal')
        // modal.style.display = 'block'
        this.props.actions.loginProcessStart('Welcome')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
<<<<<<< HEAD
<<<<<<< HEAD
        const {auth} = this.props
=======
        const { auth } = this.props
>>>>>>> 6e3ff02... webstorm big changes crash
=======
        const {auth} = this.props
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        const isAuthenticated = auth.get('isAuthenticated')

        var tenantName1 = ''
        if( this.props.app.get('tenant') )
            tenantName1 = this.props.app.get('tenant').get('name1')
        console.log('tenantName1='+require('util').inspect(tenantName1, false, null))
        var tenantName2 = ''
        if( this.props.app.get('tenant') )
            tenantName2 = this.props.app.get('tenant').get('name2')

        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        // console.log('nav: isBrowser'+isBrowser)
        //&& this.props.location.pathname!='/register'
        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
<<<<<<< HEAD
                    <li><img id='logo' src={'/images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/></li>
=======
                    <li>
                        <img id='logo' src={datasrc} className='logo' alt='logo'/>
                    </li>
>>>>>>> 6e3ff02... webstorm big changes crash
                    <li>
                        <div>
                            <h2>{tenantName1}</h2>
                            <h3>{tenantName2}</h3>
                        </div>
                    </li>
                    <li>
<<<<<<< HEAD
<<<<<<< HEAD
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
=======
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left">
<<<<<<< HEAD
                        <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
                        <li><Link activeClassName='active' to='/trainings'>Training</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {isBrowser && !isAuthenticated &&
                        <li><a href='#' onClick={(event) => this.handleLoginClick(event)}><span
                            className='glyphicon glyphicon-log-in'></span> Login</a></li>
                        }
                        {isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.props.actions.logoutUser()}><span
                                className='glyphicon glyphicon-log-out'></span> Logout</a>
                        </li>
                        }
=======
                        <li>
                            <IndexLink activeClassName='active' to='/'>Home</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/trainings'>Training</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
<<<<<<< HEAD
{isBrowser && !isAuthenticated &&
<li>
    <a href='#' onClick={(event) => this.handleLoginClick(event)}>
        <span className='glyphicon glyphicon-log-in'></span>
    Login</a>
</li>
    }
{isAuthenticated &&
<li>
    <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
        <span className='glyphicon glyphicon-log-out'></span>
    Logout</a>
</li>
    }
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        {isBrowser && !isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.handleLoginClick(event)}>
                                <span className='glyphicon glyphicon-log-in'></span>
                                Login</a>
                        </li>
                        }
                        {isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
                                <span className='glyphicon glyphicon-log-out'></span>
                                Logout</a>
                        </li>
                        }
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    </ul>
                </div>
            </nav>
        )
    }
    getRightLogoUrl() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            // $('#starbg-wrapper')[0].style.display = 'none'
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120
        } else {
            // $('#starbg-wrapper')[0].style.display = 'none'
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82
        }
    }

}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6e3ff02... webstorm big changes crash
=======

>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
// <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>

export default NavUser
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

<<<<<<< HEAD
//    </div>    
=======
//    </div>
>>>>>>> 6e3ff02... webstorm big changes crash
