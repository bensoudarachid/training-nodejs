import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import actions from '../services/actions'
import 'jquery'
// import Stats from 'stats-js'
import $ from 'jquery'
global.jQuery = require('jquery')

// global.$ = require('jquery')
// import $ from 'jquery'

// import { ThreeBounce } from 'better-react-spinkit'
import { Component, PropTypes } from 'react'

import Nav from './navigation/nav'
import LoginModal from './loginmodal.js'
import Login from './login.js'
import AppModalDlg from './appmodaldlg.js'
// import waterpipe from './waterpipe.js'

// require('../styles/default.scss')


if (process.env.BROWSER) {
  
  require('./appcomponent.scss')
  require('./waterpipe.js')
  

  $(document).ready(function() { 




/*
 * requestAnimationFrame pollyfill
 */
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 )
      })
    }

// Init Stats
    // var stats = new Stats()
    // stats.setMode(0)
    // stats.domElement.style.position = 'absolute'
    // stats.domElement.style.left = '0px'
    // stats.domElement.style.top = '0px'
    // document.body.appendChild(stats.domElement);


/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 * @version 1.2.2
 * @author Acauã Montiel <contato@acauamontiel.com.br>
 * @license http://acaua.mit-license.org/
 */
    (function ($, window) {
    /**
     * Makes a nice constellation on canvas
     * @constructor Constellation
     */
      function Constellation (canvas, options) {
        var $canvas = $(canvas),
          context = canvas.getContext('2d'),
          defaults = {
            star: {
              // color: 'rgba(172, 186, 201, .99)', //silver
              // color: 'rgba(34, 167, 240, .99)', //blue
              color: 'rgba(255, 255, 255, .5)', //white
              // color: 'rgba(0, 0, 0, .99)', //black
              // color: 'rgba(108, 122, 137, .99)',
              width: 100,
              randomWidth: true
            },
            line: {
              color: 'rgba(255, 0, 0, .9)',
              width: 0.2
            },
            position: {
              x: 0, // This value will be overwritten at startup
              y: 0 // This value will be overwritten at startup
            },
            width: window.innerWidth,
            height: window.innerHeight,
            velocity: 0.1,
            length: 100,
            distance: 120,
            radius: 150,
            stars: []
          },
          config = $.extend(true, {}, defaults, options)

        function Star () {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height

          this.vx = (config.velocity - (Math.random() * 0.5))
          this.vy = (config.velocity - (Math.random() * 0.5))

          this.radius = config.star.randomWidth ? (Math.random() * config.star.width) : config.star.width
        }

        Star.prototype = {
          create: function(){
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            context.fill()
          },

          animate: function(){
            var i
            for (i = 0; i < config.length; i++) {

              var star = config.stars[i]

              if (star.y < 0 || star.y > canvas.height) {
                star.vx = star.vx
                star.vy = - star.vy
              } else if (star.x < 0 || star.x > canvas.width) {
                star.vx = - star.vx
                star.vy = star.vy
              }

              star.x += star.vx
              star.y += star.vy
            }
          },

          // line: function(){
          //   var length = config.length,
          //     iStar,
          //     jStar,
          //     i,
          //     j

          //   for (i = 0; i < length; i++) {
          //     for (j = 0; j < length; j++) {
          //       iStar = config.stars[i]
          //       jStar = config.stars[j]

          //       if (
          //                   (iStar.x - jStar.x) < config.distance &&
          //                   (iStar.y - jStar.y) < config.distance &&
          //                   (iStar.x - jStar.x) > - config.distance &&
          //                   (iStar.y - jStar.y) > - config.distance
          //               ) {
          //         if (
          //                       (iStar.x - config.position.x) < config.radius &&
          //                       (iStar.y - config.position.y) < config.radius &&
          //                       (iStar.x - config.position.x) > - config.radius &&
          //                       (iStar.y - config.position.y) > - config.radius
          //                   ) {
          //           context.beginPath()
          //           context.moveTo(iStar.x, iStar.y)
          //           context.lineTo(jStar.x, jStar.y)
          //           context.stroke()
          //           context.closePath()
          //         }
          //       }
          //     }
          //   }
          // }
        }

        this.createStars = function () {
          var length = config.length,
            star,
            i

          context.clearRect(0, 0, canvas.width, canvas.height)

          for (i = 0; i < length; i++) {
            config.stars.push(new Star())
            star = config.stars[i]

            star.create()
          }

//          star.line()
          star.animate()
        }

        this.setCanvas = function () {
          canvas.width = config.width
          canvas.height = config.height
        }

        this.setContext = function () {
          context.fillStyle = config.star.color
          context.strokeStyle = config.line.color
          context.lineWidth = config.line.width
        }

        this.setInitialPosition = function () {
          if (!options || !options.hasOwnProperty('position')) {
            config.position = {
              x: canvas.width * 0.5,
              y: canvas.height * 0.5
            }
          }
        }

        this.loop = function (callback) {
          callback()

          // setTimeout(
          //   window.requestAnimationFrame(function () {
          //     stats.begin() // Only for Stats
          //     this.loop(callback)
          //     // window.setTimeout(this.loop(callback), 1000 / 20)
          //     stats.end() // Only for Stats
          //   }.bind(this))
          // , 1000 / 10)
          setTimeout(function() {
            window.requestAnimationFrame(function () {
              // stats.begin() // Only for Stats
              this.loop(callback)
            // window.setTimeout(this.loop(callback), 1000 / 20)
              // stats.end() // Only for Stats
            }.bind(this))
          }.bind(this),(1000/10) )
          
        }

        this.bind = function () {
          $canvas.on('mousemove', function(e){
            config.position.x = e.pageX - $canvas.offset().left
            config.position.y = e.pageY - $canvas.offset().top
          })
        }

        this.init = function () {
          this.setCanvas()
          this.setContext()
          this.setInitialPosition()
          this.loop(this.createStars)
          this.bind()
        }
      }

      $.fn.constellation = function (options) {
        return this.each(function () {
          var c = new Constellation(this, options)
          c.init()
        })
      }
    })($, window)

// Init plugin

    $('#canvs').constellation({
      star: {
        width: 3
      },
      // line: {
      //   color: 'rgba(150, 125, 105, .5)'
      // },
      radius: 50
    })


    setTimeout(() => {
      $('#wavybg-wrapper').addClass('fadein')

    }, 1800)
    var color = $('.parampanel').css('background-color')
    var smokyBGNow = $('#wavybg-wrapper').waterpipe({
      gradientStart: '#6bc1ff',
      // gradientEnd: '#6C7A89',
      // gradientEnd: '#9caab9',
      // gradientEnd: '#bccad9',
      // gradientEnd: '#ffffff',
      gradientEnd: '#dfefff',


      smokeOpacity: 0.05,
      smokeSize: 0.2,
      numCircles: 5,
      maxMaxRad: 150,
      minMaxRad: 1,
      minRadFactor: 0.5,
      iterations: 4,
      drawsPerFrame: 45,
      lineWidth: 1,
      speed: 1,
      // bgColorInner: '#6bc1ff',
      bgColorInner: '#c5d3e2',
      // bgColorOuter: '#003870'
      // bgColorOuter: '#004790'
      // bgColorOuter: '#ffffff'
      bgColorOuter: '#2980b9'

    })


    var modal = document.getElementById('myModal')

    window.onclick = function(event) {
      if (event.target == modal) {
        // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
        this.props.auth.onLoginProcessEndClick()
        // modal.style.display = 'none'
      }
    }
  })


}

class AppComponent extends React.Component {

  constructor() {
    super(...arguments)
    this.constructor.childContextTypes = {
      betterReactSpinkit: PropTypes.object
    }
  }

  getChildContext() {
    return {
      betterReactSpinkit: {
        color: '#505050', //'black'
        size: 15
      // ,fade: { duration: 0.3 }
      }
    }
  }

  componentDidMount(){
    require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
  }

        // <Nav
        //   actions={this.props.actions}
        //   isAuthenticated={auth.get('isAuthenticated')}
        //   errorMessage={auth.get('errorMessage')}
        //   auth={this.props.auth}
        //   location={this.props.location}
        // />

  render() {
    const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
    const isBrowser = typeof window !== 'undefined'
    const loginMessage = auth.get('loginMessage') 
    const loginProgress = auth.get('loginProgress')
    const registererror = this.props.auth.get('registererror')
    const appError = this.props.app.get('appError')
    var children = updateChildren(this.props.children, this.props)

    return (
      <div id='appcomp'>
      <div id="wavybg-wrapper"> 
          <canvas>Your browser does not support HTML5 canvas.</canvas>
      </div>
      <div id="starbg-wrapper"> 
          <canvas id="canvs">Your browser does not support HTML5 canvas.</canvas>
      </div>
      
      <div>
        <Nav
          actions={this.props.actions}
          auth={this.props.auth}
        />
      </div>
      {loginProgress &&
      <div>
      <LoginModal
          actions={this.props.actions}
          auth={this.props.auth}
      />
      </div>
      }

        <div id='contt'>
  
        { children }
        </div>
        {appError &&
        <div>
          <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
        </div>
        }

      </div>
      )
  }
}


function updateChildren(children, props) {
  var childrenBack = React.Children.map(children, function(child) {
    // return React.cloneElement(child, {
    //   actions: props.actions,
    //   todos: props.todos
    // })
    return React.cloneElement(child, {
      ...props
    })
  })
  return childrenBack
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
  }
}

// export default connect(mapStateToProps)(AppComponent);
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
// export default AppComponent;