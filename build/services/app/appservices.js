'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;
// const url = ApiConnection.apiurl

// import {expressPort} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
// import Immutable from 'immutable';
var appservices = {
    retrieveTenantService: function retrieveTenantService() {
        console.log('-->   retrieveTenantService  <--');
        var requesturl = url;
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken

            // if (hostname != undefined) {
            //     // requesturl = ApiConnection.getApiConnection(hostname) + ApiConnection.appbasename
            //     headers.OldClientHost = '' + hostname
            // }
            // var idToken = cookie.load('jwt')

            // if (idToken != undefined) {
            //     // headers.Authorization = 'Bearer ' + idToken
            // }
            // else {
            //   console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
            // }
            //var test = 'This is abbas in the hood!';
        };console.log('Call training server fetch now!. URL = ' + requesturl + '/api/profile/data');
        return fetch(requesturl + '/api/profile/data', {
            method: 'GET',
            headers: headers
            // headers: {
            //   'Content-Type': 'application/x-www-form-urlencoded',
            //   'Content-Type': 'application/json',
            //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            //   'Authorization': 'Bearer '+idToken
            // }
            // ,
            // body: JSON.stringify({
            //   testparam: test
            // })
            // body: 'testparam='+test //if no json in header
        }).then(function (response) {
            return response.text().then(function (text) {
                // return text.length ? JSON.parse(text,ApiConnection.reviver) : {}
                return text.length ? JSON.parse(text) : {};
            })
            // response => response.json()
            .then(function (data) {
                // console.log('data='+require('util').inspect(data, false, null))
                //        console.log('Print status now')
                //        console.log('Response Status = ' + response.status)
                // console.log('Response data size = ' + data.size())
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    }

};

exports.default = appservices;