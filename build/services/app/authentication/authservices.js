"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiconnection = require("../../../services/apiconnection");

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require("path");
console.log("----------------./ = %s", path.resolve("./"));
console.log("----------------__dirname = %s", path.resolve(__dirname));

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
        return fetch(authurl + '/oauth/token', config).then(function (response) {
            return response.json().then(function (user) {
                return {
                    user: user,
                    response: response
                };
            });
        }).catch(function (err) {
            console.log('hahaaaaaa' + err);
            throw { error: 'connectionfailure', error_description: 'Failed to connect. Please try later' };
        });
    },
    logoutService: function logoutService(idToken) {
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + idToken
            }
        };
        return fetch(authurl + '/oauth/logout', config);
    }
};

exports.default = authservices;