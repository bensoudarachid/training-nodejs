import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from 'services/actions.js'


import $ from 'jquery'

require('./nav.scss')

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
        )
    }

}

export default NavUser



