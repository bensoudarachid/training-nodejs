'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiconnection = require('../../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var authurl = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;
var authservices = {
    registerUserService: function registerUserService(user) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var body = 'username=' + user.username + '&password=' + user.password + '&email=' + user.email;
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(authurl + '/register', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    loginUserService: function loginUserService(creds) {
        var body = 'grant_type=password&username=' + creds.username + '&password=' + creds.password + '&client_id=clientapp&client_secret=123456';
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer('clientapp:123456').toString('base64')
            },
            body: body
        };
=======
// const authurl = ApiConnection.apiurl
var authurl = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;
// import {expressPort} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
// import Immutable from 'immutable';


var authservices = {
    // apiurl:url,
    // expressPort:expressPort,
    // appbasename:appbasename,

    registerUserService: function registerUserService(user) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken

            // console.log('Register user service. user '+user.username+' pass '+user.password)
        };var body = 'username=' + user.username + '&password=' + user.password + '&email=' + user.email;
        //&scope=read%20write
        // console.log('body '+body)
        // let config = {
        //   method: 'POST'
        //   , headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        //   , body: body
        // }


        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(authurl + '/register', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    loginUserService: function loginUserService(creds) {
        var body = 'grant_type=password&username=' + creds.username + '&password=' + creds.password + '&client_id=clientapp&client_secret=123456';
        //&scope=read%20write
        // console.log('body '+body)
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer('clientapp:123456').toString('base64')
                //      `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
            },
            body: body
            // , body: JSON.stringify({
            //     grant_type: 'password'
            //   })

            // , 'body': `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
        };

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return fetch(authurl + '/oauth/token', config).then(function (response) {
            return response.json().then(function (user) {
                return {
                    user: user,
                    response: response
                };
            });
        }).catch(function (err) {
            console.log('hahaaaaaa' + err);
<<<<<<< HEAD
            throw { error: 'connectionfailure', error_description: 'Failed to connect. Please try later' };
=======
            throw { error: 'connectionfailure', error_description: 'Failed to connect. Please try later' //new Error('failed to connect')
            };
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        });
    },
    logoutService: function logoutService(idToken) {
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + idToken
<<<<<<< HEAD
            }
        };
        return fetch(authurl + '/oauth/logout', config);
    }
=======
                //      `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`

                // , body: body
                // , body: JSON.stringify({
                //     grant_type: 'password'
                //   })

                // , 'body': `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
            } };
        return fetch(authurl + '/oauth/logout', config);
    }

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
};

exports.default = authservices;