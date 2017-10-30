import React, {Component, PropTypes} from 'react'
// import {FadingCircle} from 'better-react-spinkit'
import cookie from 'react-cookie'
import 'jquery'
import $ from 'jquery'
// import pathToBlogCoding from '../../images/Blog-CodingNeutral2.png'

import actions from '../../services/actions'
// const pathToBlogCoding = require('../../images/Blog-Coding.svg');
// const pathToBlogCoding = require('../../images/Blog-CodingNeutral2.png');
// import LogoSpinner from '../../components/shared/logospinner'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// const util = require('util')

// import { IndexLink, Link} from 'react-router'
// import Login from './login.js'
// import Logout from './logout.js'
// import { LogoutUser} from '../services/actions.js'
// import Bootstrap from '!style!css!../node_modules/bootstrap/dist/css/bootstrap.css'
// require('!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import { Button } from 'react-bootstrap'


if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./home.scss')
//   function imageload(event){
//     // console.log('++++++++++++++++homejs image load')
//     var idToken = cookie.load('jwt')
//     $('.imgwrap').each(function(i, el) {

//       var elm = $(el)
//       // var imgbg=elm.find('.imgbg')
//       var img=elm.find('.dataimg')
//       var imgSpinner=elm.find('.mdl-spinner')
//       if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
//         img[0].setAttribute('src', img[0].getAttribute('data-src')+ (img[0].getAttribute('data-src').includes('/api/')?('?access_token='+ idToken):''))
//         img[0].onload = function() {
//           // console.log('image loaded: '+img[0].getAttribute('data-src'))
//           img[0].removeAttribute('data-src')
//           imgSpinner.remove()

//           if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
//             if(elm.hasClass('animated'))
//               return
//             else{
//               animate(elm)
//             }
//           }

//         }
//       }
//       if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
//         if(elm.hasClass('animated'))
//           return
//         else{
//           animate(elm)
//         }
//       }

//     })
//   }

//   function animate(elm) {
//     var imgbg=elm.find('.imgbg')
//     var img=elm.find('.dataimg')
//     // var imgSpinner=elm.find('.spinner')
//     elm.addClass('animated')
//     var rdm = Math.floor(Math.random() * 3) + 1
//     var rdm2 = Math.floor(Math.random() * 2) + 1
//     var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
//     img.addClass('animated '+imgAnim+(rdm===3&&rdm2===1?' reverseanim':''))
//     // img.addClass('animated reverseanim '+imgAnim)
//     imgbg.removeClass('imgbg')
// // console.log('++++++++++++++++Random '+rdm)
//     var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm2===1?'fadeInLeft':'fadeInRight'
// // console.log('++++++++++++++++Random '+fadeIn)
//     imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
//   }

    // $(window).scroll(imageload)
    // $(window).resize(imageload)

}

class Home extends Component {

    constructor(props) {
        super(props)
        // this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        // var idToken = cookie.load('jwt')
        // console.log('++++++++++++++++homejs. compdidmount')
        $('.imgwrap').each(function (i, el) {
            // console.log('++++++++++++++++Appcomponent is here'+el)
            var elm = $(el)
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')

            setTimeout(() => {
                if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
                    img[0].setAttribute('src', img[0].getAttribute('data-src'))
                    img[0].onload = function () {
                        // console.log('image loaded on mount: '+img[0].getAttribute('data-src'))
                        img[0].removeAttribute('data-src')
                        imgSpinner.remove()

                        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                            imgSpinner.remove()
                            elm.addClass('animated')
                            // var rdm = Math.floor(Math.random() * 3) + 1
                            // var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                            // img.addClass('animated '+imgAnim)
                            // // img.addClass('animated rubberBand')
                            // if(imgbg.hasClass('animated'))
                            //   return
                            // else{
                            //   imgbg.removeClass('imgbg')
                            //   rdm = Math.floor(Math.random() * 2) + 1
                            //   var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
                            //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
                            // }

                            // var rdm = Math.floor(Math.random() * 3) + 1
                            // var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                            // img.addClass('animated '+imgAnim)
                            // // img.addClass('animated rubberBand')
                            if (imgbg.hasClass('animated'))
                                return
                            else {
                                imgbg.removeClass('imgbg')
                                // var rdm = Math.floor(Math.random() * 2) + 1
                                // var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
                                imgbg.addClass('animated imgwraptor')
                            }

                        }

                    }
                }

            }, 50)

        })
        // console.log('yeah man. Add listener')
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleScroll)
    }

// componentDidMount: function() {
//     window.addEventListener('scroll', this.handleScroll);
// },

    componentWillUnmount() {
        // console.log('yeah man. Remove listener')
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleScroll)
    }


    handleScroll(event) {
        // console.log('yeah man. i m listening'+this)
        // console.log('yeah man. i m listening'+this)
        // this.imageload(event)
        var idToken = cookie.load('jwt')
        var anim = function (elm) {
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            // var imgSpinner=elm.find('.spinner')
            // console.log('++++++++++++++++ Add class 4 WRAP ANIMATED')
            elm.addClass('animated')
            var rdm = Math.floor(Math.random() * 3) + 1
            var rdm2 = Math.floor(Math.random() * 2) + 1
            var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip'
            img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''))
            // img.addClass('animated reverseanim '+imgAnim)
            imgbg.removeClass('imgbg')
            var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight'
            imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor')
        }
        $('.imgwrap').each(function (i, el) {
            var elm = $(el)
            // var imgbg=elm.find('.imgbg')
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')
            if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
                img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? ('?access_token=' + idToken) : ''))
                img[0].onload = function () {
                    console.log('image loaded on scroll: ' + img[0].getAttribute('data-src'))
                    img[0].removeAttribute('data-src')
                    imgSpinner.remove()

                    if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                        if (elm.hasClass('animated')) {
                            return
                        } else {
                            // console.log('on load Animate now')
                            anim(elm)
                        }
                    }

                }
            }
            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                if (elm.hasClass('animated')) {
                    return
                }
                else {
                    anim(elm)
                }
            }
        })
    }

// <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
// <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
    // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/></div>
// <FadingCircle className='spinner' size={60}/>
    // <ReactCSSTransitionGroup
    //   component='div'
    //   transitionName="page"
    //   transitionEnterTimeout={800}
    //   transitionLeaveTimeout={500}
    //   transitionAppear={true}
    //   transitionAppearTimeout={800}
    //   transitionEnter={true}
    //   transitionLeave={true}                
    // >              
    // </ReactCSSTransitionGroup>            

    render() {
        // let authenticated = cookie.load('jwt') ? true : false
        // if( !authenticated && this.props.auth.get('loginactualurl')!=undefined && this.props.auth.get('loginactualurl')!='/')
        //   return (
        //     <div></div>
        //   )

        // {this.props.auth.get('loginProgress')?
        //   <div>
        //     <h1>Please login home</h1>
        //   </div>
        // :

        return (
            <div>
                <div className='home'>
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral2.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/rocket.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/planningdev.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/media.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home


// <div className="row">
//   <ul className='mdl-list'>
//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 1
//       </span>
//       <a className="mdl-list__item-primary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 2
//       </span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 3</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 4</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//   </ul>
// </div>
