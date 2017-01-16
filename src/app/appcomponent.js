import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import actions from '../services/actions'
import 'jquery'
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
  
  // console.log('Appcomponent. environment is browser')
  // require('material-design-lite/dist/material.js')
  // require('material-design-lite/dist//material.css')
  
  // require('../../js/material.js')
  // require('../../css/material.css')

  $(document).ready(function() { 
    // require('../js/mdl.js')
    // require('../css/mdl.css')
    // const dialogPolyfill = require('dialog-polyfill')
    // var dialog = document.querySelector('#appdialog')
    // if (!dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog)
    // }
    
    // dialog.querySelector('.close').addEventListener('click', function() {
    //   dialog.close()
    // })
    // setTimeout(() => {
      // document.getElementById('wavybg-wrapper').style.visibility='visible'
    // }, 1500)

    var smokyBGNow = $('#wavybg-wrapper').waterpipe({
    //Default values
      gradientStart: '#6bc1ff',
      // gradientStart: '#FCEBB6',
      gradientEnd: '#ffca76',
      smokeOpacity: 0.05,
      smokeSize: 0.2,
      numCircles: 5,
      maxMaxRad: 150,
      minMaxRad: 1,
      minRadFactor: 0.5,
      iterations: 4,
      drawsPerFrame: 4,
      lineWidth: 1,
      speed: 1,
      bgColorInner: '#6bc1ff',
      // bgColorInner: '#FCEBB6',
      bgColorOuter: '#003870'
      // bgColorOuter: '#cee8ff'
    })

    // $('#wavybg-wrapper').show()
    

    var modal = document.getElementById('myModal')

  // When the user clicks anywhere outside of the modal, close it
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
      // <div>
      //   <Nav
      //     actions={this.props.actions}
      //     isAuthenticated={auth.isAuthenticated}
      //     errorMessage={auth.errorMessage}
      //     auth={this.props.auth}
      //     location={this.props.location}
      //   />
      //   {!isBrowser &&
      //   <div style='background-color:red;height=100px;'><h2>mama</h2><ThreeBounce color='red' size={18} fade={{duration: 0.3}}/></div>
      //   }  
      //   <h2>Welcome to The todo homepage man!</h2>
      //   { children }
      // </div>

        // <div id='appsnackbar' className='mdl-js-snackbar mdl-snackbar'>
        //   <div className='mdl-snackbar__text'></div>
        //   <button className='mdl-snackbar__action' type='button'></button>
        // </div>


      // <div className="mdl-grid">
      // <div className="mdl-layout mdl-js-layout">
      //   <main className="mdl-layout__content">

      //   <div id='contt'>
      //   { children }
      //   </div>
      //   {appError &&
      //   <div>
      //     <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: '+appError}/>
      //   </div>
      //   }

      //   </main>
      // </div>  
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
          <canvas>Your browser does not support HTML5 canvas.</canvas>
      </div>
      
      <div>
        <Nav
          actions={this.props.actions}
          isAuthenticated={auth.get('isAuthenticated')}
          errorMessage={auth.get('errorMessage')}
          auth={this.props.auth}
          location={this.props.location}
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