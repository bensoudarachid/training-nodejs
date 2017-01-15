import React, { Component, PropTypes } from 'react'
// import {FadingCircle} from 'better-react-spinkit'
import cookie from 'react-cookie'
import 'jquery'
import $ from 'jquery'
import actions from '../../services/actions'

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
  // $.fn.sir3allah = function(event) {
  //   $('.imgwrap').each(function(i, el) {
  //     // console.log('++++++++++++++++Scroll'+el)
  //     var elm = $(el)
  //     var imgbg=elm.find('.imgbg')
  //     var img=elm.find('.dataimg')
  //     var imgSpinner=elm.find('.spinner')
  //     if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
  //       img[0].setAttribute('src', img[0].getAttribute('data-src'))
  //       img[0].onload = function() {
  //         console.log('image loaded: '+img[0].getAttribute('data-src'))
  //         img[0].removeAttribute('data-src')
  //         imgSpinner.remove()
  //       }
  //     }
  //     if (elm.visible(true)) {
  //       if(elm.hasClass('animated'))
  //         return
  //       else{
  //         // console.log('++++++++++++++++Appcomponent is visible'+elm)
  //         // imgSpinner.remove()
  //         elm.addClass('animated')
  //         var rdm = Math.floor(Math.random() * 3) + 1
  //         var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
  //         img.addClass('animated '+imgAnim)
  //         imgbg.removeClass('imgbg')
  //         rdm = Math.floor(Math.random() * 2) + 1  
  //     // console.log('++++++++++++++++Random '+rdm)
  //         var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
  //     // console.log('++++++++++++++++Random '+fadeIn)
  //         imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
  //       }
  //     } 
  //   })
  // }
  function imageload(event){
    console.log('++++++++++++++++homejs image load')
    var idToken = cookie.load('jwt')
    $('.imgwrap').each(function(i, el) {
      
      var elm = $(el)
      // var imgbg=elm.find('.imgbg')
      var img=elm.find('.dataimg')
      var imgSpinner=elm.find('.mdl-spinner')
      if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
        img[0].setAttribute('src', img[0].getAttribute('data-src')+ (img[0].getAttribute('data-src').includes('/api/')?('?access_token='+ idToken):''))
        img[0].onload = function() {
          // console.log('image loaded: '+img[0].getAttribute('data-src'))
          img[0].removeAttribute('data-src')
          imgSpinner.remove()

          if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
            if(elm.hasClass('animated'))
              return
            else{
              animate(elm)
            }
          }

        }
      }
      if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
        if(elm.hasClass('animated'))
          return
        else{
          animate(elm)
        }
      }

    })
  }
  
  function animate(elm) {
    var imgbg=elm.find('.imgbg')
    var img=elm.find('.dataimg')
    // var imgSpinner=elm.find('.spinner')
    elm.addClass('animated')
    var rdm = Math.floor(Math.random() * 3) + 1
    var rdm2 = Math.floor(Math.random() * 2) + 1
    var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
    img.addClass('animated '+imgAnim+(rdm===3&&rdm2===1?' reverseanim':''))
    // img.addClass('animated reverseanim '+imgAnim)
    imgbg.removeClass('imgbg')
// console.log('++++++++++++++++Random '+rdm)
    var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm2===1?'fadeInLeft':'fadeInRight'
// console.log('++++++++++++++++Random '+fadeIn)
    imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
  }

  $(window).scroll(imageload)
  $(window).resize(imageload)

}

class Home extends Component {

  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    // var idToken = cookie.load('jwt')
    console.log('++++++++++++++++homejs. compdidmount')
    $('.imgwrap').each(function(i, el) {
      // console.log('++++++++++++++++Appcomponent is here'+el)
      var elm = $(el)
      var imgbg=elm.find('.imgbg')
      var img=elm.find('.dataimg')
      var imgSpinner=elm.find('.mdl-spinner')
      

      if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
        img[0].setAttribute('src', img[0].getAttribute('data-src'))
        img[0].onload = function() {
          console.log('image loaded: '+img[0].getAttribute('data-src'))
          img[0].removeAttribute('data-src')
          imgSpinner.remove()

          if (elm.visible(true) &&!img[0].hasAttribute('data-src') ) {
            imgSpinner.remove()
            elm.addClass('animated') 
            var rdm = Math.floor(Math.random() * 3) + 1
            var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
            img.addClass('animated '+imgAnim)
            // img.addClass('animated rubberBand')
            if(imgbg.hasClass('animated'))
              return
            else{
              imgbg.removeClass('imgbg')
              rdm = Math.floor(Math.random() * 2) + 1
              var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
              imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
            }
          }

        }
      }
    })
  }

// <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
// <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
        // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/></div>
// <FadingCircle className='spinner' size={60}/>

  render() {
    // console.log('homejs. props.actions.url = '+this.props.actions.apiurl)
    // console.log('homejs. actions.url = '+actions.apiurl)
    return (
		<div id='home'>
		
		<div className="container">
			
			<div className="row">
				<div className="col-xs-12 col-md-4 col-lg-4">
          <div className='imgwrap'>
            <div className='imgbg'/>
            <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
            <img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/>
          </div>
          <p>1. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>
				<div className="col-xs-12 col-md-4 col-lg-4">
        <div className='imgwrap'><div className='imgbg'/><div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div><img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral1.png'} className='dataimg' alt='coding'/></div>
				<p>2. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>				
				<div className="col-xs-12 col-md-4 col-lg-4">
				<div className='imgwrap'><div className='imgbg'/><div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div><img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral1.png'} className='dataimg' alt='coding'/></div>
				<p>3. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>
				<div className="clearfix visible-md visible-lg"></div>
								
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-4 col-lg-4">
				<div className='imgwrap'><div className='imgbg'/><div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div><img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral2.png'} className='dataimg' alt='coding'/></div>
				<p>4. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>
				<div className="col-xs-12 col-md-4 col-lg-4">
				<div className='imgwrap'><div className='imgbg'/><div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div><img src={'./images/0.png'} data-src={'./images/Blog-PlanningNeutral2.png'} className='dataimg' alt='coding'/></div>
				<p>5. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>
				<div className="col-xs-12 col-md-4 col-lg-4">
				<div className='imgwrap'><div className='imgbg'/><div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div><img src={'./images/0.png'} data-src={'./images/Blog-DeployingNeutral2.png'} className='dataimg' alt='coding'/></div>
				<p>6. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. </p>
				</div>
				<div className="clearfix visible-md visible-lg"></div>
								
			</div>	

			<div className="row">	
        <ul className='mdl-list'>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <span className='glyphicon  glyphicon-user'></span>
              User 1
            </span> 
            <a className="mdl-list__item-primary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
          </li>

          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <span className='glyphicon  glyphicon-user'></span>
              User 2
            </span>
            <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
          </li>

          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <span className='glyphicon  glyphicon-user'></span>
              User 3</span>
            <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
          </li>

          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <span className='glyphicon  glyphicon-user'></span>
              User 4</span>
            <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
          </li>

        </ul>
			</div>

		</div>
        
		</div>
	)
  }
}
export default Home
