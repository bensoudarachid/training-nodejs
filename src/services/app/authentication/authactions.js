import cookie from 'react-cookie'
import actions from '../../actions'

const util = require('util')

let authactions = {
    requestLogin: function (creds) {
        return {
            type: 'LOGIN_REQUEST',
            isFetching: true,
            creds
        }
    },

    loginSuccess: function () {
        return {
            type: 'LOGIN_SUCCESS',
            isFetching: false,
            isAuthenticated: cookie.load('jwt') ? true : false,
            authority: cookie.load('authority')
        }
    },

    receiveLogin: function (user) {
        return (dispatch, getState) => {
            console.log('auth actions user : ' + util.inspect(user, false, null))
            cookie.save('jwt', user.access_token, {
                path: '/'
            })
            cookie.save('authority', user.authority, {
                path: '/'
            })

            const req = getState().auth.get('loginrequest')
            if (req != undefined)
                dispatch(req(getState().auth.get('loginrequestparams')))
            dispatch(this.loginSuccess())
        }
    },

    loginError: function (message) {
        return {
            type: 'LOGIN_FAILURE',
            isFetching: false,
            isAuthenticated: cookie.load('jwt') ? true : false,
            message
        }
    },

    receiveLogout: function () {
        cookie.remove('jwt', {
            path: '/'
        })
        cookie.remove('authority', {
            path: '/'
        })
        return {
            type: 'LOGOUT_SUCCESS',
            isFetching: false,
            isAuthenticated: cookie.load('jwt') ? true : false
        }
    },

    requestLogout: function () {
        return {
            type: 'LOGOUT_REQUEST',
            isFetching: true,
            isAuthenticated: cookie.load('jwt') ? true : false
        }
    },

    logoutUser: function () {
        console.log('actions logout user ')
        1

        return dispatch => {
            dispatch(authactions.requestLogout())
            actions.logoutService(cookie.load('jwt'))
                .then(response => {
                    if (!response.ok) {
                        console.log('actions request logout not ok')
                        return Promise.reject()
                    } else {
                        dispatch(authactions.receiveLogout())
                        window.routerHistory.push('/')
                    }
                }).catch(err => {
                console.log('authactionsjs. Unhandled Login Error: ', err)
            })
        }
    },

    loginProcessStart: function (message, promise, params) {
        const actualurl = window.location.pathname
        return {
            type: 'LOGIN_PROCESS_START',
            message,
            actualurl,
            promise,
            params
        }
    },

    loginProcessEnd: function () {
        console.log('authactionsjs close modal')
        window.routerHistory.push('/')
        return {
            type: 'LOGIN_PROCESS_END'
        }
    },

    loginUser: function (creds) {
        return dispatch => {
            dispatch(authactions.requestLogin(creds))

            actions.loginUserService(creds)
                .then(({user, response}) => {
                    if (!response.ok) {
                        console.log('++++++++++++++++authactions. login not ok')
                        dispatch(authactions.loginError(user.error_description))
                        return Promise.reject(user)
                    } else {
                        dispatch(authactions.receiveLogin(user))
                    }
                }).catch(err => {
                console.log('++++++++++++++++++++++++++authactionsjs. Unhandled Login Error: ', err.error_description)

                if (err.error_description == undefined) {
                    console.log('Auth actions, Response: ' + util.inspect(err, false, null))
                    return
                }
                if (!err.error_description.includes('JDBCConnectionException'))
                    dispatch(authactions.loginProcessStart(err.error_description))
                else
                    dispatch(authactions.loginProcessStart('System error: Stale database connection'))
            })
        }
    },

    disconnect: function (dispatch, status, data) {
        if (status === 401 || data.error === 'invalid_token') {
            dispatch(actions.receiveLogout())
            return true
        }
        return false
    },

    requestRegister: function (creds) {
        return {
            type: 'REGISTER_REQUEST',
            isRegistrationFetching: true,
            isAuthenticated: cookie.load('jwt') ? true : false,
            creds
        }
    },

    receiveRegister: function (user) {
        return {
            type: 'REGISTER_SUCCESS',
            user
        }
    },

    registerInit: function () {
        console.log('Actions. Init registration: ')
        return {
            type: 'REGISTER_INIT'
        }
    },

    registerUserError: function (registererror) {
        console.log('Actions. Error registration: ')
        console.log(registererror)
        return {
            type: 'REGISTER_USER_ERROR',
            registererror
        }
    },

    registerSystemError: function (registererror) {
        console.log('Actions. Error registration: ')
        console.log(registererror)
        return {
            type: 'REGISTER_SYSTEM_ERROR',
            registererror
        }
    },

    validateUser: function (user) {
        return {
            type: 'REGISTER_VALIDATE',
            user: user
        }
    },

    registerUser: function (creds) {

        return (dispatch, getState) => {
            if (getState().auth.get('isRegistrationFetching')) {
                console.log('Fetching! Do nothing')
                return
            }
            dispatch(actions.validateUser(creds))
            const registrationError = getState().auth.get('registrationError')
            if (registrationError.get('username') !== undefined || registrationError.get('email') !== undefined || registrationError.get('password') !== undefined || registrationError.get('passwordCheck') !== undefined) {
                return
            }

            dispatch(actions.requestRegister(creds))
            return actions.registerUserService(creds)
                .then(
                    ({status, data}) => {
                        var error = data.error
                        console.log('Auth actions, Response: ' + util.inspect(data, false, null))
                        if (status >= 400 && error != undefined) {
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                            dispatch(actions.registerSystemError(error.message))
                        } else if (error) {
                            dispatch(actions.registerUserError(error))
                        } else {
                            console.log('Status looks good ')
                            console.log(data)
                            dispatch(actions.receiveRegister(data))
                        }
                    },

                    err => {
                        console.log('Status looks not good at all!' + err)
                    }
                )
        }
    }
}

export default authactions