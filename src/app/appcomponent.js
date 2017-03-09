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
  // window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']  
  // require('./waterpipe.js')
  require('./appcomponent.scss')
  require('./bubbles.js')
  require('./waterpipebg.js')
  // require('./textswitcher.js')  
  require('./jquery.shuffleLetters.js')

  var modal = document.getElementById('myModal')
  window.onclick = function(event) {
    if (event.target == modal) {
        // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
      this.props.auth.onLoginProcessEndClick()
        // modal.style.display = 'none'
    }
  }
  // })
  // var rdm = 0
  // var lastrdm = 0
  // var textSwitchContainer = undefined //$('#textswitch')
  // window.isTextSwitchAnimated = true //$('#textswitch')

  // window.textswitcher = function() {
  //   window.isTextSwitchAnimated = true
  //   setTimeout( function() {
  //     console.log('isTextSwitchAnimated = '+window.isTextSwitchAnimated )
  //     if( window.isTextSwitchAnimated )
  //       window.requestAnimationFrame(window.textswitcher)
  //     else{
  //       console.log('I m out now ' )
  //       textSwitchContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $(this).removeClass()
  //         textSwitchContainer.text('')
  //       })
  //       return
  //     }

      
  //     while( lastrdm === rdm )
  //       rdm = Math.floor(Math.random() * window.switchTextArray.length)
  //     console.log('rdm = '+rdm +', lastrdm = '+lastrdm+' : '+window.switchTextArray[rdm]+' : ')
  //     lastrdm = rdm
  //       // divContainer[0].style.display = 'none'
  // //headShake 300 flash 300 fadeInLeft 300 rubberBand
  //     textSwitchContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $(this).removeClass()
  //     })
  //     setTimeout( function() {
  //       textSwitchContainer.shuffleLetters({
  //         'text': window.switchTextArray[rdm]
  //       })
  //         // setTimeout( function() {
  //         //   container.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         //     $(this).removeClass()
  //         //   })
  //         // }, 4600 )
  //     }, 450 )
  //       // await sleep(1000)
  //   }, 2000 )
  // }
  
  // $(document).ready(function() { 
  //   textSwitchContainer = $('#textswitch')
  //   window.switchTextArray = ['Karim', 'Said', 'Rachid', 'Ilyas', 'Yussef', 'Amine', 'Salma', 'Hadi', 'Mehdi']
  //   window.textswitcher()
  //   // textSwitchId = window.requestAnimationFrame(window.textswitcher)
  //   setTimeout( function() {
  //     console.log('Cancel now : ')
  //     window.isTextSwitchAnimated = false
  //   }, 12000 )
  // })  
}



class AppComponent extends React.Component {

  constructor() {1
    super(...arguments)
    // this.constructor.childContextTypes = {
    //   betterReactSpinkit: PropTypes.object
    // }
  }

  // getChildContext() {
  //   return {
  //     betterReactSpinkit: {
  //       color: '#505050', //'black'
  //       size: 15
  //     // ,fade: { duration: 0.3 }
  //     }
  //   }
  // }

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
      // <div id="wavybg-wrapper"> 
      //     <canvas id="canvs1">Your browser does not support HTML5 canvas.</canvas>
      // </div>
      // <div id="starbg-wrapper"> 
      //     <canvas id="canvs2">Your browser does not support HTML5 canvas.</canvas>
      // </div>

      // <div id="text-wrapper"> 
      //     <p id="textswitch">Welcome!</p>
      // </div>
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
          <canvas id="canvs1">Your browser does not support HTML5 canvas.</canvas>
      </div>
      <div id="starbg-wrapper"> 
          <canvas id="canvs2">Your browser does not support HTML5 canvas.</canvas>
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
        <div>
          <div id='contt'>
          {loginMessage?
            <div>
              <h1>{loginMessage}</h1>
            </div>
            :
            <div>
            { children }
            </div>
          }
          </div>
          {appError &&
          <div>
            <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
          </div>
          }
        </div>


      </div>
    )
  }
}

      // {loginMessage?
      //   <div>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //     <h1>{loginMessage}</h1>
      //   </div>
      //   :
      //   <div>
      //     <div id='contt'>
      //     { children }
      //     </div>
      //     {appError &&
      //     <div>
      //       <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
      //     </div>
      //     }
      //   </div>
      // }


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