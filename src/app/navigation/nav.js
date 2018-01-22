import React, {Component} from 'react'
import NavUser from './navuser'
import NavPublic from './navpublic'
import NavAdmin from './navadmin'
import {LogoutUser} from '../../services/actions.js'
import $ from 'jquery'
import ApiConnection from '../../services/apiconnection'


if (process.env.BROWSER) {
    require('./nav.scss')

    $(document).ready(function () {
        $(document).click(function (event) {

            var clickover = $(event.target)

            if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') && !clickover.hasClass('navbar-toggle')) {
                $('button.navbar-toggle').click()
            }
        })
    })
}

var datasrc = undefined
class Nav extends Component {
    handleLoginClick(event) {
        this.props.actions.loginProcessStart('Welcome to Roya')
    }

    render() {
        const isBrowser = typeof window !== 'undefined'
        const {auth} = this.props
        const isAuthenticated = auth.get('isAuthenticated')
        if (process.env.BROWSER)
            datasrc = this.getRightLogoUrl()
        var tenantName1 = ''
        if (this.props.app.get('tenant'))
            tenantName1 = this.props.app.get('tenant').get('name1')
        var tenantName2 = ''
        if (this.props.app.get('tenant'))
            tenantName2 = this.props.app.get('tenant').get('name2')
        auth.get('authority')
        console.log('auth.get(authority)=' + require('util').inspect(auth.get('authority'), false, null))
        return (
            <nav id='bsnavi' className='navbar navbar-default navbar-fixed-top' role="navigation">
                <ul className='navbar-header logoblock'>
                    <li className="logocontainer">
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
                        <button id='togg' type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
                {(auth.get('authority') == 'admin') &&
                <NavAdmin
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
                {(auth.get('authority') == 'user') &&
                <NavUser
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
                {(auth.get('authority') == undefined) &&
                <NavPublic
                    actions={this.props.actions}
                    auth={this.props.auth}
                    app={this.props.app}
                />
                }
            </nav>
        )
    }

    componentDidUpdate() {
        this.checkTitleMargin()
        const nav = $('#bsnavi')
        console.log('nav=' + nav[0])
        const {auth} = this.props
        const isFetching = auth.get('isFetching')
        console.log('isFetching=' + require('util').inspect(isFetching, false, null))
        if (isFetching)
            nav[0].style.border = '5px solid rgba(240, 168, 48, 0.7)'
        else
            nav[0].style.border = '5px solid rgba(97,182,249, 0.3)'
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

    getRightLogoUrl() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 120 + '&height=' + 120
        } else {
            return ApiConnection.apiurl + ApiConnection.appbasename + '/api/profile/logo' + '?width=' + 82 + '&height=' + 82
        }
    }
}

export default Nav
