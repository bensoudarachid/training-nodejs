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
import ApiConnection from '../../services/apiconnection'
import AppImage from '../../components/shared/appimage'
//import 'bootstrap/dist/js/bootstrap.js'
// import '../styles/default.scss'
var styles = undefined;
if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    styles = require('./nav.scss')
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

var datasrc = undefined

class NavPublic extends Component {
    // <div>
    //    </div>
    // {this.props.location.pathname!='/register' &&
//     	<Link activeClassName='active' to='/register'>Register</Link>
// }
//	<Button>Click me!</Button>

    constructor(){
        super()
        this.handleResize = this.handleResize.bind(this)
    }

    handleLoginClick(event) {
        console.log('loginjs andle request login in progress click')
        // var modal = document.getElementById('myModal')
        // modal.style.display = 'block'
        this.props.actions.loginProcessStart('Welcome')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')
        const isFetching = auth.get('isFetching')
        console.log('nav render: isfetching=' + require('util').inspect(isFetching, false, null))
        const authenticatingAnim = 'flash'
        const togglefetchingclass = 'navbar-toggle' + (isFetching ? ' ' + authenticatingAnim + ' animated toggloginfetch' : '')
        console.log('nav render: isfetching=' + require('util').inspect(togglefetchingclass, false, null))

        // datasrc = ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo'
        // datasrc += '?width=' + 120 + '&height=' + 120
        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        console.log('nav: logo = ' + datasrc)
        var tenantName1 = ''
        if( this.props.app.get('tenant') )
            tenantName1 = this.props.app.get('tenant').get('name1')
        console.log('tenantName1='+require('util').inspect(tenantName1, false, null))
        var tenantName2 = ''
        if( this.props.app.get('tenant') )
            tenantName2 = this.props.app.get('tenant').get('name2')

        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
                    <li>
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
                        <button id='togg' type="button" className={togglefetchingclass} data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <IndexLink activeClassName='active' to='/'>Home</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/trainings'>Training</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link activeClassName='active' to='/register'>Register</Link>
                        </li>
                        {isBrowser && !isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.handleLoginClick(event)}
                               className={isFetching ? authenticatingAnim + ' animated loginfetch' : ''}>
                                <span className='glyphicon glyphicon-log-in'>
                                </span>
                            </a>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        )
    }

    static fetchData(actions, params) {
         console.log('Call Tenant Edit fetch data  <-----------------------------')
        // console.log('Training edit. get training! param = '+util.inspect( params.id, false, null))

        //The return is necessary. if not the fetching is not resolved properly on the server side!
        return actions.retrieveTenantDispatcher()
        // return Promise.resolve(actions.retrieveTrainingDispatcher(params.id,hostname))
    }
    componentDidUpdate() {
        this.checkTitleMargin()
        const nav = $('#bsnavi')
        console.log('nav=' + nav[0])
        const {auth} = this.props
        const isFetching = auth.get('isFetching')
        if (isFetching)
            nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
    }
    checkTitleMargin() {
//        console.log('nav public update. ')
//         const nav = $('#bsnavi')
//         console.log('nav=' + nav[0])
//         const {auth} = this.props
//         const isFetching = auth.get('isFetching')
//         if (isFetching)
//             nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
        var tenantName2 = ''
        if( this.props.app.get('tenant') )
            tenantName2 = this.props.app.get('tenant').get('name2')
        console.log('componentDidMount tenantName2='+require('util').inspect(tenantName2, false, null))
        if( tenantName2 == '' ){
            $( ".logoblock" ).find( "h2" ).css( "margin-top", "25px" );
            $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
        }else{
            $( ".logoblock" ).find( "h2" ).css( "margin-top", "12px" );
            $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
        }

    }

    componentDidMount() {
        componentHandler.upgradeDom()
        console.log('addEventListener')
        window.addEventListener('resize', this.handleResize)
        NavPublic.fetchData(this.props.actions, this.props.params)

    }

    componentWillUnmount() {
        console.log('removeEventListener')
        window.removeEventListener('resize', this.handleResize)
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

    handleResize() {
        // console.log('Resize now')

            // $('#starbg-wrapper')[0].style.display = 'none'
            const newDatasrc = this.getRightLogoUrl()
            if (newDatasrc != this.datasrc) {
                console.log('Handle Resize now ' +this.datasrc)
                this.datasrc = newDatasrc
                $('#logo')[0].src = this.datasrc
                this.checkTitleMargin()
                // var tenantName2 = ''
                // if( this.props.app.get('tenant') )
                //     tenantName2 = this.props.app.get('tenant').get('name2')
                // console.log('handleResize tenantName2='+require('util').inspect(tenantName2, false, null))
                // if( tenantName2 == '' ){
                //     $( ".logoblock" ).find( "h2" ).css( "margin-top", "27px" );
                //     $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
                // }else{
                //     $( ".logoblock" ).find( "h2" ).css( "margin-top", "12px" );
                //     $( ".logoblock" ).find( "h2" ).css( "margin-left", "10px" );
                // }
            }
        // $('#starbg-wrapper')[0].style.display = 'block'
    }
}


// {isAuthenticated &&
// <li>
//     <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
//         <span className='glyphicon glyphicon-log-out'></span>
//     </a>
// </li>
// }


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
