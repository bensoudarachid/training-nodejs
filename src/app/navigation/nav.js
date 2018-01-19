import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import NavUser from './navuser'
import NavPublic from './navpublic'
import NavAdmin from './navadmin'
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
    //     console.log('click somewhere in browser should close toggle menu')
    //     var clickover = $(event.target)
    //     var _opened = $('.navbar-collapse').hasClass('navbar-collapse in')
    //     if (_opened === true && !clickover.hasClass('navbar-toggle')) {
    //       $('button.navbar-toggle').click()
    //     }
    //   })
    // })

    $(document).ready(function () {
        $(document).click(function (event) {
            // console.log('click somewhere in browser should close toggle menu')
            var clickover = $(event.target)

            if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') && !clickover.hasClass('navbar-toggle')) {
                $('button.navbar-toggle').click()
            }
        })
    })

}


class Nav extends Component {


    handleLoginClick(event) {
        this.props.actions.loginProcessStart('Welcome to Roya')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')
        if (auth.get('authority') == 'admin') {
            return (
                <NavAdmin
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
            )
        } else if (auth.get('authority') == 'user') {
            return (
                <NavUser
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
            )
        } else {
            // console.log('nav: guest? authority = '+auth.get('authority'))
            return (
                <NavPublic
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
            )
        }
    }
}



export default Nav
