import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from '../../services/actions.js'


import $ from 'jquery'
import ApiConnection from '../../services/apiconnection'

if (process.env.BROWSER) {
    require('./nav.scss')
}

var datasrc = undefined

class NavAdmin extends Component {
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


        // if (process.env.BROWSER)
        //     datasrc = this.getRightLogoUrl()
        console.log('nav: logo = ' + datasrc)
        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        console.log('tenantName1=' + require('util').inspect(tenantName1, false, null))
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')

        return (
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left fadeIn animated">
                        <li>
                            <IndexLink activeClassName='active' to='/'>Home</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/admin/trainings'>Training</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/users'>User</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {isBrowser && !isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.handleLoginClick(event)}>
                                <span className='glyphicon glyphicon-log-in'></span>
                            </a>
                        </li>
                        }
                        {isAuthenticated &&
                        <li>
                            <a href='#' onClick={(event) => this.props.actions.logoutUser()}>
                                <span className='glyphicon glyphicon-log-out'></span>
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

    componentDidUpdate() {
        this.checkTitleMargin()
    }

    checkTitleMargin() {
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')
        console.log('componentDidMount tenantName2=' + require('util').inspect(tenantName2, false, null))
        if (tenantName2 == '') {
            $(".logoblock").find("h2").css("margin-top", "25px");
            $(".logoblock").find("h2").css("margin-left", "10px");
        } else {
            $(".logoblock").find("h2").css("margin-top", "12px");
            $(".logoblock").find("h2").css("margin-left", "10px");
        }

    }

    componentDidMount() {
        componentHandler.upgradeDom()
        console.log('addEventListener')
        window.addEventListener('resize', this.handleResize)
        NavAdmin.fetchData(this.props.actions, this.props.params)
    }

    componentWillUnmount() {
        console.log('removeEventListener')
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {
        const newDatasrc = this.getRightLogoUrl()
        if (newDatasrc != this.datasrc) {
            this.datasrc = newDatasrc
            $('#logo')[0].src = this.datasrc
            this.checkTitleMargin()
        }
    }

}

export default NavAdmin



