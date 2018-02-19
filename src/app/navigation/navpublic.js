import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from 'services/actions.js'


import $ from 'jquery'
import ApiConnection from 'services/apiconnection'
import AppImage from 'components/shared/appimage'

var styles = undefined;
styles = require('./nav.scss')

var datasrc = undefined

class NavPublic extends Component {

    constructor() {
        super()
        this.handleResize = this.handleResize.bind(this)
    }

    handleLoginClick(event) {
        this.props.actions.loginProcessStart('Welcome')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')
        const isFetching = auth.get('isFetching')
        const authenticatingAnim = 'flash'
        const togglefetchingclass = 'navbar-toggle' + (isFetching ? ' ' + authenticatingAnim + ' animated toggloginfetch' : '')
        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')

        return (
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
        )
    }

    static fetchData(actions, params) {
        console.log('Call Tenant Edit fetch data  <-----------------------------')

        return actions.retrieveTenantDispatcher()
    }

    componentDidMount() {
        componentHandler.upgradeDom()
        console.log('addEventListener')
        window.addEventListener('resize', this.handleResize)
        NavPublic.fetchData(this.props.actions, this.props.params)

    }

    componentWillUnmount() {
        //console.log('removeEventListener')
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {

        const newDatasrc = this.getRightLogoUrl()
        if (newDatasrc != this.datasrc) {
            console.log('Handle Resize now ' + this.datasrc)
            this.datasrc = newDatasrc
            $('#logo')[0].src = this.datasrc
            this.checkTitleMargin()
        }
    }
}

export default NavPublic
