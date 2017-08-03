import React, {Component, PropTypes} from 'react'
// import {FadingCircle} from 'better-react-spinkit'
import cookie from 'react-cookie'
import 'jquery'
import $ from 'jquery'
import actions from '../../services/actions'
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
<<<<<<< HEAD
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
=======
        componentHandler.upgradeDom()
>>>>>>> 6e3ff02... webstorm big changes crash
        // var idToken = cookie.load('jwt')
        // console.log('++++++++++++++++homejs. compdidmount')
        $('.imgwrap').each(function (i, el) {
            // console.log('++++++++++++++++Appcomponent is here'+el)
            var elm = $(el)
            var imgbg = elm.find('.imgbg')
            var img = elm.find('.dataimg')
            var imgSpinner = elm.find('.mdl-spinner')

            setTimeout(() => {
<<<<<<< HEAD
                if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
                if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
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
<<<<<<< HEAD
                            //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
=======
                            //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
>>>>>>> 6e3ff02... webstorm big changes crash
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
<<<<<<< HEAD
            if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
=======
            if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object
>>>>>>> 6e3ff02... webstorm big changes crash
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
<<<<<<< HEAD
        // :        
=======
        // :
>>>>>>> 6e3ff02... webstorm big changes crash

        return (
            <div>
                <div className='home'>
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'}
                                         className='dataimg' alt='coding'/>
<<<<<<< HEAD
                                </div>
                                <p>1. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Coding.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>1. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                </div>
                                <p>1. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'}
                                         className='dataimg' alt='coding'/></div>
                                <p>2. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>2. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Deploying.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>2. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'}
                                         className='dataimg' alt='coding'/></div>
                                <p>3. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'} className='dataimg' alt='coding'/>
                                </div>
                                <p>3. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-Planning.svg'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>3. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="clearfix visible-md visible-lg"></div>

                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>4. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>4. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                    <div
                                        className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>4. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>5. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>5. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>5. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className='imgwrap'>
                                    <div className='imgbg'/>
<<<<<<< HEAD
<<<<<<< HEAD
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'}
                                         className='dataimg' alt='coding'/></div>
                                <p>6. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
=======
                                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'} className='dataimg' alt='coding'/>
                                </div>
                                <p>6. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                                    <div
                                        className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
                                    <img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'}
                                         className='dataimg' alt='coding'/>
                                </div>
                                <p>6. We have the mission to accompany companies in any project and support them
                                    implement secure information, management, communication or e-commerce systems. We
                                    support our customers from analysis and the conception, through development,
                                    integration and adaptation until the deployment and the maintenance of these
                                    systems. </p>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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


<<<<<<< HEAD
// <div className="row"> 
=======
// <div className="row">
>>>>>>> 6e3ff02... webstorm big changes crash
//   <ul className='mdl-list'>
//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 1
<<<<<<< HEAD
//       </span> 
=======
//       </span>
>>>>>>> 6e3ff02... webstorm big changes crash
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
