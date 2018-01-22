'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiconnection = require('../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;

var appservices = {
    retrieveTenantService: function retrieveTenantService() {
        console.log('-->   retrieveTenantService  <--');
        var requesturl = url;
        var headers = {
            'Content-Type': 'application/json'
        };
        return fetch(requesturl + '/api/profile/data', {
            method: 'GET',
            headers: headers
        }).then(function (response) {
            return response.text().then(function (text) {

                return text.length ? JSON.parse(text) : {};
            }).then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    }
};

exports.default = appservices;