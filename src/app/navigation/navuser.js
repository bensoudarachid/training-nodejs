import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from '../../services/actions.js'


import $ from 'jquery'

if (process.env.BROWSER) {
    require('./nav.scss')
}

class NavUser extends Component {

    handleLoginClick(event) {
        this.props.actions.loginProcessStart('Welcome')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')

        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        console.log('tenantName1=' + require('util').inspect(tenantName1, false, null))
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')

        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
                    <li>
                        <img id='logo' src={datasrc} className='logo' alt='logo'/>
                    </li>
                    <li>
                        <div>
                            <h2>{tenantName1}</h2>
                            <h3>{tenantName2}</h3>
                        </div>
                    </li>
                    <li>
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
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
                        {isBrowser && !isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.handleLoginClick(event)}>
                                <span className='glyphicon glyphicon-log-in'></span>
                                Login</a>
                        </li>
                        }
                        {isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
                                <span className='glyphicon glyphicon-log-out'></span>
                                Logout</a>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        )
    }

    getRightLogoUrl() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120
        } else {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82
        }
    }
}

export default NavUser



