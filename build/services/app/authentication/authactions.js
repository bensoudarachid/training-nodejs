'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = require('util');

var authactions = {
    requestLogin: function requestLogin(creds) {
        return {
            type: 'LOGIN_REQUEST',
            isFetching: true,
            creds: creds
        };
    },

    loginSuccess: function loginSuccess() {
        return {
            type: 'LOGIN_SUCCESS',
            isFetching: false,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
            authority: _reactCookie2.default.load('authority')
        };
    },

    receiveLogin: function receiveLogin(user) {
        var _this = this;

        return function (dispatch, getState) {
            console.log('auth actions user : ' + util.inspect(user, false, null));
            _reactCookie2.default.save('jwt', user.access_token, {
                path: '/'
            });
            _reactCookie2.default.save('authority', user.authority, {
                path: '/'
            });

            var req = getState().auth.get('loginrequest');
            if (req != undefined) dispatch(req(getState().auth.get('loginrequestparams')));
            dispatch(_this.loginSuccess());
        };
    },

    loginError: function loginError(message) {
        return {
            type: 'LOGIN_FAILURE',
            isFetching: false,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
            message: message
        };
    },

    receiveLogout: function receiveLogout() {
        _reactCookie2.default.remove('jwt', {
            path: '/'
        });
        _reactCookie2.default.remove('authority', {
            path: '/'
        });
        return {
            type: 'LOGOUT_SUCCESS',
            isFetching: false,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false
        };
    },

    requestLogout: function requestLogout() {
        return {
            type: 'LOGOUT_REQUEST',
            isFetching: true,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false
        };
    },

    logoutUser: function logoutUser() {
        console.log('actions logout user ');
        1;

        return function (dispatch) {
            dispatch(authactions.requestLogout());
            _actions2.default.logoutService(_reactCookie2.default.load('jwt')).then(function (response) {
                if (!response.ok) {
                    return Promise.reject();
                } else {
                    dispatch(authactions.receiveLogout());
                    window.routerHistory.push('/');
                }
            }).catch(function (err) {
                console.log('authactionsjs. Unhandled Login Error: ', err);
            });
        };
    },

    loginProcessStart: function loginProcessStart(message, promise, params) {
        var actualurl = window.location.pathname;
        return {
            type: 'LOGIN_PROCESS_START',
            message: message,
            actualurl: actualurl,
            promise: promise,
            params: params
        };
    },

    loginProcessEnd: function loginProcessEnd() {
        console.log('authactionsjs close modal');
        window.routerHistory.push('/');
        return {
            type: 'LOGIN_PROCESS_END'
        };
    },

    loginUser: function loginUser(creds) {
        return function (dispatch) {
            dispatch(authactions.requestLogin(creds));

            _actions2.default.loginUserService(creds).then(function (_ref) {
                var user = _ref.user,
                    response = _ref.response;

                if (!response.ok) {
                    dispatch(authactions.loginError(user.error_description));
                    return Promise.reject(user);
                } else {
                    dispatch(authactions.receiveLogin(user));
                }
            }).catch(function (err) {
                console.log('authactionsjs. Unhandled Login Error: ', err.error_description);

                if (err.error_description == undefined) {
                    return;
                }
                if (!err.error_description.includes('JDBCConnectionException')) dispatch(authactions.loginProcessStart(err.error_description));else dispatch(authactions.loginProcessStart('System error: Stale database connection'));
            });
        };
    },

    disconnect: function disconnect(dispatch, status, data) {
        if (status === 401 || data.error === 'invalid_token') {
            dispatch(_actions2.default.receiveLogout());
            return true;
        }
        return false;
    },

    requestRegister: function requestRegister(creds) {
        return {
            type: 'REGISTER_REQUEST',
            isRegistrationFetching: true,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
            creds: creds
        };
    },

    receiveRegister: function receiveRegister(user) {
        return {
            type: 'REGISTER_SUCCESS',
            user: user
        };
    },

    registerInit: function registerInit() {
        console.log('Actions. Init registration: ');
        return {
            type: 'REGISTER_INIT'
        };
    },

    registerUserError: function registerUserError(registererror) {
        console.log('Actions. Error registration: ');
        console.log(registererror);
        return {
            type: 'REGISTER_USER_ERROR',
            registererror: registererror
        };
    },

    registerSystemError: function registerSystemError(registererror) {
        console.log('Actions. Error registration: ');
        console.log(registererror);
        return {
            type: 'REGISTER_SYSTEM_ERROR',
            registererror: registererror
        };
    },

    validateUser: function validateUser(user) {
        return {
            type: 'REGISTER_VALIDATE',
            user: user
        };
    },

    registerUser: function registerUser(creds) {

        return function (dispatch, getState) {
            if (getState().auth.get('isRegistrationFetching')) {
                console.log('Fetching! Do nothing');
                return;
            }
            dispatch(_actions2.default.validateUser(creds));
            var registrationError = getState().auth.get('registrationError');
            if (registrationError.get('username') !== undefined || registrationError.get('email') !== undefined || registrationError.get('password') !== undefined || registrationError.get('passwordCheck') !== undefined) {
                return;
            }

            dispatch(_actions2.default.requestRegister(creds));
            return _actions2.default.registerUserService(creds).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                var error = data.error;
                if (status >= 400 && error != undefined) {
                    dispatch(_actions2.default.registerSystemError(error.message));
                } else if (error) {
                    dispatch(_actions2.default.registerUserError(error));
                } else {
                    console.log(data);
                    dispatch(_actions2.default.receiveRegister(data));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
            });
        };
    }
};

exports.default = authactions;