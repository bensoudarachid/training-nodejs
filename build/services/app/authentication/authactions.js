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
<<<<<<< HEAD
=======
            // isAuthenticated: cookie.load('jwt') ? true : false,
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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

<<<<<<< HEAD
            var req = getState().auth.get('loginrequest');
            if (req != undefined) dispatch(req(getState().auth.get('loginrequestparams')));
            dispatch(_this.loginSuccess());
=======
            // window.routerHistory.push('/')
            // window.routerHistory.push(getState().auth.get('loginactualurl'))
            // dispatch(actions.retrieveUserTodosDispatcher()) //maybe we can save the action before login and dipatch here instead of pushing '/'
            var req = getState().auth.get('loginrequest');
            if (req != undefined) dispatch(req(getState().auth.get('loginrequestparams')));
            dispatch(_this.loginSuccess());
            // return {
            //   type: 'LOGIN_SUCCESS',
            //   isFetching: false,
            //   isAuthenticated: cookie.load('jwt') ? true : false,
            //   authority:cookie.load('authority')
            // // id_token: user.access_token
            // }
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
        //&scope=read%20write
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        1;

        return function (dispatch) {
            dispatch(authactions.requestLogout());
            _actions2.default.logoutService(_reactCookie2.default.load('jwt')).then(function (response) {
                if (!response.ok) {
<<<<<<< HEAD
=======
                    console.log('actions request logout not ok');
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    return Promise.reject();
                } else {
                    dispatch(authactions.receiveLogout());
                    window.routerHistory.push('/');
<<<<<<< HEAD
=======
                    // browserHistory.push(actions.appbasename+'/')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                }
            }).catch(function (err) {
                console.log('authactionsjs. Unhandled Login Error: ', err);
            });
        };
    },

    loginProcessStart: function loginProcessStart(message, promise, params) {
        var actualurl = window.location.pathname;
<<<<<<< HEAD
=======
        // window.routerHistory.push('/')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
        return function (dispatch) {
=======
        // console.log('actions login user ' + creds.username + ' .pass ' + creds.password)
        return function (dispatch) {
            // We dispatch requestLogin to kickoff the call to the API
            // console.log('actions request login ')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            dispatch(authactions.requestLogin(creds));

            _actions2.default.loginUserService(creds).then(function (_ref) {
                var user = _ref.user,
                    response = _ref.response;

                if (!response.ok) {
<<<<<<< HEAD
                    dispatch(authactions.loginError(user.error_description));
                    return Promise.reject(user);
                } else {
                    dispatch(authactions.receiveLogin(user));
                }
            }).catch(function (err) {
                console.log('authactionsjs. Unhandled Login Error: ', err.error_description);

                if (err.error_description == undefined) {
=======
                    console.log('++++++++++++++++authactions. login not ok');
                    // console.log(user)
                    // console.log(response)
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(authactions.loginError(user.error_description));
                    return Promise.reject(user);
                } else {
                    // console.log('loginUser user token '+user.access_token )
                    // If login was successful, set the token in local storage
                    // localStorage.setItem('access_token', user.id_token)
                    // Dispatch the success action
                    dispatch(authactions.receiveLogin(user));
                    // var currentRouteName = window.location.pathname.replace('/reactor','')
                    // window.routerHistory.push('/')
                    // window.routerHistory.push(currentRouteName)
                }
            }).catch(function (err) {
                console.log('++++++++++++++++++++++++++authactionsjs. Unhandled Login Error: ', err.error_description);

                if (err.error_description == undefined) {
                    console.log('Auth actions, Response: ' + util.inspect(err, false, null));
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
        // console.log('actions user access token: ' + user.access_token)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
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
<<<<<<< HEAD
=======
        // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++registrationactions validate user')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return {
            type: 'REGISTER_VALIDATE',
            user: user
        };
    },

    registerUser: function registerUser(creds) {
<<<<<<< HEAD
=======
        // console.log('actions register user '+creds.username+' .pass '+creds.password+' .email '+creds.email)
        // var body='username='+creds.username+'&password='+creds.password+'&email='+creds.email
        //&scope=read%20write
        // console.log('body '+body)
        // let config = {
        //   method: 'POST'
        //   , headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        //   , body: body
        // }
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985

        return function (dispatch, getState) {
            if (getState().auth.get('isRegistrationFetching')) {
                console.log('Fetching! Do nothing');
                return;
            }
            dispatch(_actions2.default.validateUser(creds));
            var registrationError = getState().auth.get('registrationError');
<<<<<<< HEAD
            if (registrationError.get('username') !== undefined || registrationError.get('email') !== undefined || registrationError.get('password') !== undefined || registrationError.get('passwordCheck') !== undefined) {
=======
            // console.log('+++++++++++++++++++++++++++reg actions. auth registrationError username '+registrationError.get('username'))
            if (registrationError.get('username') !== undefined || registrationError.get('email') !== undefined || registrationError.get('password') !== undefined || registrationError.get('passwordCheck') !== undefined) {
                // console.log('+++++++++++++++++++++++++++reg actions. reg error' + registrationError.get('username'))
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                return;
            }

            dispatch(_actions2.default.requestRegister(creds));
            return _actions2.default.registerUserService(creds).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                var error = data.error;
<<<<<<< HEAD
                if (status >= 400 && error != undefined) {
                    dispatch(_actions2.default.registerSystemError(error.message));
                } else if (error) {
                    dispatch(_actions2.default.registerUserError(error));
                } else {
                    console.log(data);
                    dispatch(_actions2.default.receiveRegister(data));
                }
            }, function (err) {
=======
                console.log('Auth actions, Response: ' + util.inspect(data, false, null));
                // console.log('Auth actions, Error: '+error)
                // console.log('Auth actions, Error: '+error.error)
                if (status >= 400 && error != undefined) {
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    dispatch(_actions2.default.registerSystemError(error.message));
                } else if (error) {
                    // var errorDescription = error.errorDescription
                    // console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription)
                    dispatch(_actions2.default.registerUserError(error));
                    // dispatch(actions.appError(error))
                } else {
                    console.log('Status looks good ');
                    console.log(data);
                    dispatch(_actions2.default.receiveRegister(data));
                    //          browserHistory.push('/registerconfirm/')
                }
            },
            //     .then(
            //       ({ status, resp }) => {
            //         console.log('Auth actions, Response: '+util.inspect(resp, false, null))
            //         var error = resp.error
            //         var user = resp.account
            //         if (status >= 400) {
            //           console.log('Status looks bad. '+status+'. error message = '+error.message)
            //           dispatch(actions.registerSystemError(error.message))
            //         } else if (user.error) {
            //           var errorDescription = error.errorDescription
            //           console.log('Todoapp fetch error = ' + error.error + ', description = ' + errorDescription)
            //           dispatch(actions.registerUserError(errorDescription))
            //           dispatch(actions.appError(errorDescription))
            //         } else {
            //           console.log('Status looks good ')
            //           console.log(user)
            //           dispatch(actions.receiveRegister(user))
            // //          browserHistory.push('/registerconfirm/')
            //         }
            //       },

            function (err) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                console.log('Status looks not good at all!' + err);
            });
        };
    }
};

exports.default = authactions;