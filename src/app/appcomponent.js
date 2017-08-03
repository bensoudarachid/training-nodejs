import React from 'react'
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import actions from '../services/actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import Stats from 'stats-js'
import 'jquery'
import $ from 'jquery'
import ConfirmationModal from '../components/shared/confirmationmodal'

global.jQuery = require('jquery')

// global.$ = require('jquery')
// import $ from 'jquery'

import { Component, PropTypes } from 'react'

import Nav from './navigation/nav'
import LoginModal from './loginmodal.js'
import Login from './login.js'
import AppModalDlg from './appmodaldlg.js'
// import waterpipe from './waterpipe.js'

// require('../styles/default.scss')
if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    require('./appcomponent.scss')
    var modal = document.getElementById('myModal')
    window.onclick = function (event) {
        if (event.target == modal) {
            // const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
            this.props.auth.onLoginProcessEndClick()
            // modal.style.display = 'none'
        }
    }
}


class AppComponent extends React.Component {

    constructor() {
        super(...arguments)
    }


    componentDidMount() {
        require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
        // console.log('window width = '+$(window).width())

        if (process.env.BROWSER) {
            require('./waterpipebg.js')
            require('./bubbles.js')
        }
        this.handleBubblesVisibility()
        window.addEventListener('scroll', this.handleBubblesVisibility)
        window.addEventListener('resize', this.handleBubblesVisibility)
    }


    componentWillReceiveProps(nextProps) {
        // console.log('app. this.props.location='+require('util').inspect(this.props.location, false, null))
        //console.log('app. nextProps.location='+require('util').inspect(nextProps.location, false, null))
        if (nextProps.location !== this.props.location && process.env.BROWSER) {
            this.props.actions.savePreviousLocation(this.props.location.pathname)
        }
    }


    handleBubblesVisibility(event) {
        if ($(window).width() < 480)
        // $('#starbg-wrapper')[0].style.display = 'none'
            $('#starbg-wrapper')[0].style.visibility = 'hidden'
        else
        // $('#starbg-wrapper')[0].style.display = 'block'
            $('#starbg-wrapper')[0].style.visibility = 'visible'
    }

    render() {
        const {dispatch, quote, auth, errorMessage, isSecretQuote} = this.props
        const isBrowser = typeof window !== 'undefined'
        const loginMessage = auth.get('loginMessage')
        const loginProgress = auth.get('loginProgress')
        const registererror = this.props.auth.get('registererror')
        const appError = this.props.app.get('appError')
        const confirmationActionFunction = this.props.app.get('confirmationActionFunction')

        var children = this.updateChildren(this.props.children, this.props)


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
      {confirmationActionFunction &&
      <div>
          <ConfirmationModal actions={this.props.actions}/>
      </div>
          }

                <div>
                    <div id='contt'>
                        <div>
                            <ReactCSSTransitionGroup
                                component='div'
                                transitionName="page"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={200}
                                transitionAppear={false}
                                transitionEnter={true}
                                transitionLeave={true}
                            >
                {children}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
          {appError &&
          <div>
              <AppModalDlg actions={this.props.actions} errorMessage={'Error occured: ' + appError}/>
          </div>
              }
                </div>

            </div>

        )
    }

    updateChildren(children, props) {
        var childrenBack = React.Children.map(children,
            function(child) {
                const segment =this.getSubstringUntilNth(props.location.pathname, '/', 2);
                return React.cloneElement(child, {...props, key:segment})
    }.bind(this))
        return childrenBack
}


getSubstringUntilNth(str, pattern, n)
{
    return str.split(pattern, n).join(pattern)
}
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