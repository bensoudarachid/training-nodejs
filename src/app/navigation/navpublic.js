import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Login from '../login.js'
import Logout from '../logout.js'
import {LogoutUser} from '../../services/actions.js'


import $ from 'jquery'
import ApiConnection from '../../services/apiconnection'
import AppImage from '../../components/shared/appimage'

var styles = undefined;
if (process.env.BROWSER) {
    styles = require('./nav.scss')


}

var datasrc = undefined

class NavPublic extends Component {

    constructor() {
        super()
        this.handleResize = this.handleResize.bind(this)
    }

    handleLoginClick(event) {
        console.log('loginjs andle request login in progress click')
        this.props.actions.loginProcessStart('Welcome')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')
        const isFetching = auth.get('isFetching')
        console.log('nav render: isfetching=' + require('util').inspect(isFetching, false, null))
        const authenticatingAnim = 'flash'
        const togglefetchingclass = 'navbar-toggle' + (isFetching ? ' ' + authenticatingAnim + ' animated toggloginfetch' : '')
        console.log('nav render: isfetching=' + require('util').inspect(togglefetchingclass, false, null))

        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        console.log('nav: logo = ' + datasrc)
        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        console.log('tenantName1=' + require('util').inspect(tenantName1, false, null))
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')

        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
                    <li>
                        {process.env.BROWSER &&
                        <img id='logo' src={datasrc} className='logo' alt='logo'/>
                        }
                    </li>
                    <li>
                        <div>
                            <h2>{tenantName1}</h2>
                            <h3>{tenantName2}</h3>
                        </div>
                    </li>
                    <li>
                        <button id='togg' type="button" className={togglefetchingclass} data-toggle="collapse"
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
            </nav>
        )
    }

    static fetchData(actions, params) {
        console.log('Call Tenant Edit fetch data  <-----------------------------')

        return actions.retrieveTenantDispatcher()
    }

    componentDidUpdate() {
        this.checkTitleMargin()
        const nav = $('#bsnavi')
        console.log('nav=' + nav[0])
        const {auth} = this.props
        const isFetching = auth.get('isFetching')
        if (isFetching)
            nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
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
        NavPublic.fetchData(this.props.actions, this.props.params)

    }

    componentWillUnmount() {
        console.log('removeEventListener')
        window.removeEventListener('resize', this.handleResize)
    }

    getRightLogoUrl() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120
        } else {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82
        }
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



