
var path = require("path")
console.log("----------------./ = %s", path.resolve("./"))
console.log("----------------__dirname = %s", path.resolve(__dirname))

import ApiConnection from '../../../services/apiconnection'

const authurl = ApiConnection.apiurl + ApiConnection.appbasename
const authservices = {
    registerUserService: function (user) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        var body = 'username=' + user.username + '&password=' + user.password + '&email=' + user.email
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(authurl + '/register', config)
            .then(response =>{
                console.log('#### ##### ##### ##### ##### ##### ##### response='+require('util').inspect(response, false, null))
                return response.json().then(data => {return ({
                    status: response.status,
                    data
                })}
            )})
        // return fetch(authurl + '/register', config)
        //     .then(response => response.json().then(data => ({
        //             status: response.status,
        //             data
        //         })
        //     ))
    },
    loginUserService: function (creds) {
        var body = 'grant_type=password&username=' + creds.username + '&password=' + creds.password + '&client_id=clientapp&client_secret=123456'
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer('clientapp:123456').toString('base64')
            },
            body: body
        }

        return fetch(authurl + '/oauth/token', config)
            .then(response => {
                return response.json().then(user => {
                    console.log('user retrieved ='+require('util').inspect(user, false, null))
                    return ({
                    user,
                    response
                })})}
            )
            .catch(function (err) {
                console.log('hahaaaaaa' + err)
                throw {error: 'connectionfailure', error_description: 'Failed to connect. Please try later'}
            })
        // return fetch(authurl + '/oauth/token', config)
        //     .then(response => response.json().then(user => ({
        //             user,
        //             response
        //         }))
        //     )
        //     .catch(function (err) {
        //         console.log('hahaaaaaa' + err)
        //         throw {error: 'connectionfailure', error_description: 'Failed to connect. Please try later'}
        //     })
    },
    logoutService: function (idToken) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + idToken
            }
        }
        return fetch(authurl + '/oauth/logout', config)
    }
}

export default authservices