import React, {Component} from 'react'
import NavUser from './navuser'
import NavPublic from './navpublic'
import NavAdmin from './navadmin'
import {LogoutUser} from '../../services/actions.js'
import $ from 'jquery'
import ApiConnection from '../../services/apiconnection'


if (process.env.BROWSER) {
    require('./nav.scss')

    $(document).ready(function () {
        $(document).click(function (event) {

            var clickover = $(event.target)

            if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') && !clickover.hasClass('navbar-toggle')) {
                $('button.navbar-toggle').click()
            }
        })
    })
<<<<<<< HEAD

<<<<<<< HEAD
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

=======
>>>>>>> b06ef94... clean code, remove comments
=======
>>>>>>> e791b46... One single navigation component with changing navigation links depending on user role
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
//require('./nav.scss')
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

//require('./nav.scss')

<<<<<<< HEAD
class Nav extends Component {
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
=======

class Nav extends Component {
>>>>>>> b06ef94... clean code, remove comments


=======
var datasrc = undefined
class Nav extends Component {
>>>>>>> e791b46... One single navigation component with changing navigation links depending on user role
    handleLoginClick(event) {
        this.props.actions.loginProcessStart('Welcome to Roya')
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
        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')
        auth.get('authority')
        console.log('auth.get(authority)=' + require('util').inspect(auth.get('authority'), false, null))
        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
                    <li className="logocontainer">
                        {process.env.BROWSER &&
                        <img id='logo' src={datasrc} className='logo' alt='logo'/>
                        }
                    </li>
                    <li>
                        <div>
                            <h2>{tenantName1}</h2>
                            <h3>{tenantName2}</h3>
                        </div>
                    </li>
                    <li>
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
                {(auth.get('authority') == 'admin') &&
                <NavAdmin
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
                {(auth.get('authority') == 'user') &&
                <NavUser
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
                {(auth.get('authority') == undefined) &&
                <NavPublic
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
            </nav>
        )
    }

    componentDidUpdate() {
        this.checkTitleMargin()
        const nav = $('#bsnavi')
        console.log('nav=' + nav[0])
        const {auth} = this.props
        const isFetching = auth.get('isFetching')
        console.log('isFetching=' + require('util').inspect(isFetching, false, null))
        if (isFetching)
            nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
        else
            nav[0].style.border = '5px solid rgba(97,182,249, 0.3)'
    }

    checkTitleMargin() {
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')
        console.log('componentDidMount tenantName2=' + require('util').inspect(tenantName2, false, null))
        if (tenantName2 == '') {
            $(".logoblock").find("h2").css("margin-top", "25px");
            $(".logoblock").find("h2").css("margin-left", "10px");
        } else {
            $(".logoblock").find("h2").css("margin-top", "12px");
            $(".logoblock").find("h2").css("margin-left", "10px");
        }

    }

    getRightLogoUrl() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120
        } else {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82
        }
    }
}

export default Nav
<<<<<<< HEAD
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


//     <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
//     <ul className='navbar-header logoblock'>
//     <li><img id='logo' src={'./images/RoyaLogoNeutralH120.png'} className='logo' alt='Roya logo'/></li>
//     <li>
//       <div>
//       <h2>Roya</h2>
//       <h3>Software</h3>
//       </div>
//     </li>
//     <li>
//       <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//     </li>   
//   </ul>
//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav navbar-left">
//       <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
//       <li><Link activeClassName='active' to='/todos'>Todos</Link></li>
//       <li><Link activeClassName='active' to='/trainings'>Training</Link></li>
//       </ul>
//       <ul className="nav navbar-nav navbar-right">
//       <li><Link activeClassName='active' to='/register'>Register</Link></li>
// {isBrowser && !isAuthenticated &&
//   <li><a href='#' onClick={(event) => this.handleLoginClick(event)}><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
// }
// {isAuthenticated &&
//   <li>
//   <a href='#' onClick={(event) => this.props.actions.logoutUser()}><span className='glyphicon glyphicon-log-out'></span> Logout</a>
//   </li>
// }     
//       </ul>
//     </div>
//   </nav>
=======
>>>>>>> b06ef94... clean code, remove comments
