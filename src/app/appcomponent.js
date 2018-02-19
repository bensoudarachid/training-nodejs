import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../services/actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'jquery'
import $ from 'jquery'
import ConfirmationModal from '../components/shared/confirmationmodal'

import Nav from './navigation/nav'
import LoginModal from './loginmodal.js'
import AppModalDlg from './appmodaldlg.js'
import './appcomponent.scss'


global.jQuery = require('jquery')

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    var modal = document.getElementById('myModal')
    window.onclick = function (event) {
        if (event.target == modal) {
            this.props.auth.onLoginProcessEndClick()
        }
    }
}

class AppComponent extends React.Component {

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        componentHandler.upgradeDom()

        if (process.env.BROWSER) {
            require('./waterpipebg.js')
            require('./bubbles.js')
        }
        this.handleBubblesVisibility()
        window.addEventListener('scroll', this.handleBubblesVisibility)
        window.addEventListener('resize', this.handleBubblesVisibility)
        if (process.env.BROWSER) {

            var webSocket = new WebSocket('ws://127.0.0.1:8080/counter')
            webSocket.onmessage = function(message) {
                console.log('ws message', message)
            }
            webSocket.onopen = function() {
                console.log('ws open')
            }
            webSocket.onclose = function() {
                console.log('ws close')
            }
            webSocket.onerror = function wserror(message) {
                console.log('ws Error', message)
            }

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location && process.env.BROWSER) {
            this.props.actions.savePreviousLocation(this.props.location.pathname)
        }
    }

    handleBubblesVisibility(event) {
        if ($(window).width() < 480)
            $('#starbg-wrapper')[0].style.visibility = 'hidden'
        else
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
                        app={this.props.app}
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

    getSubstringUntilNth(str, pattern, n) {
        return str.split(pattern, n).join(pattern)
    }

    updateChildren(children, props) {
        var childrenBack = React.Children.map(children,
            function (child) {
                const segment = this.getSubstringUntilNth(props.location.pathname, '/', 2)
                const x = {...props}
                return React.cloneElement(child, {...props, key: segment})
            }.bind(this))
        return childrenBack
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
