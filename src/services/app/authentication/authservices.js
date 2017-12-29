// import Immutable from 'immutable';
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import {expressPort} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
import ApiConnection from '../../apiconnection'
// const authurl = ApiConnection.apiurl
const authurl = ApiConnection.apiurl + ApiConnection.appbasename

const authservices = {
    // apiurl:url,
    // expressPort:expressPort,
    // appbasename:appbasename,

    registerUserService: function (user) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        // console.log('Register user service. user '+user.username+' pass '+user.password)
        var body = 'username=' + user.username + '&password=' + user.password + '&email=' + user.email
        //&scope=read%20write
        // console.log('body '+body)
        // let config = {
        //   method: 'POST'
        //   , headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        //   , body: body
        // }


        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(authurl + '/register', config)
            .then(response => response.json().then(data => ({
                    status: response.status,
                    data
                })
            ))
    },
    loginUserService: function (creds) {
        var body = 'grant_type=password&username=' + creds.username + '&password=' + creds.password + '&client_id=clientapp&client_secret=123456'
        //&scope=read%20write
        // console.log('body '+body)
        const config = {
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
        }
        // console.log('++++++++++++++++++++++++++++++++++++++++++++++++authurl='+require('util').inspect(authurl, false, null))
        // const testurl = 'http://abbaslearn.schoolapi.royasoftware.com:8070'
        return fetch(authurl + '/oauth/token', config)
            .then(response => response.json().then(user => ({
                    user,
                    response
                }))
            )
            .catch(function (err) {
                console.log('hahaaaaaa' + err)
                throw {error: 'connectionfailure', error_description: 'Failed to connect. Please try later'} //new Error('failed to connect')
            })
    },
    logoutService: function (idToken) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + idToken
                //      `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
            }
            // , body: body
            // , body: JSON.stringify({
            //     grant_type: 'password'
            //   })

            // , 'body': `username=${creds.username}&password=${creds.password}&client_id=clientapp&client_secret=123456&grant_type=password&scope=read%20write`
        }
        return fetch(authurl + '/oauth/logout', config)
    }


}

export default authservices