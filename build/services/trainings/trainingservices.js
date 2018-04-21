'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;

var trainingservices = {
    retrieveTrainingService: function retrieveTrainingService(id) {
        console.log('retrieveTrainingService');
        var requesturl = url;
        var headers = {
            'Content-Type': 'application/json'
        };

        var idToken = _reactCookie2.default.load('jwt');

        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        return fetch(requesturl + '/api/training/item/' + id, {
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
    },
    // retrieveTrainingsService: async function () {
    //     let requesturl = url
    //     var headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     var idToken = cookie.load('jwt')
    //     if (idToken != undefined) {
    //         headers.Authorization = 'Bearer ' + idToken
    //     }
    //     var response = await fetch(requesturl + '/api/trainings/2373',
    //         {
    //             method: 'GET',
    //             headers
    //         }
    //     )
    //     return ({
    //         status: response.status,
    //         data: response.json()
    //     })
    // },

    retrieveTrainingsService: function retrieveTrainingsService() {
        console.log('retrieveTrainingsService');
        var requesturl = url;
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        return fetch(requesturl + '/api/trainings/2373', {
            method: 'GET',
            headers: headers
        }).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    updateTrainingServiceOld: function updateTrainingServiceOld(training) {
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        var body = JSON.stringify(training);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(url + '/api/training/updatetraining', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    updateTrainingService: function updateTrainingService(training, inputfile) {
        console.log('##############################################################updateTrainingService this is');
        var headers = {};
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) headers.Authorization = 'Bearer ' + idToken;

        var trainingbody = JSON.stringify(training);
        var body = new FormData();
        body.append('trainingParam', new Blob([trainingbody], { type: 'application/json' }));
        body.append('uploadfile', inputfile);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(url + '/api/training/updatetraining/', config).then(function (res) {
            return res.text().then(function (text) {

                return text.length ? JSON.parse(text) : {};
            }).then(function (data) {
                return {
                    status: res.status,
                    data: data
                };
            });
        });
    },
    uploadTrainingFileService: function uploadTrainingFileService(training, inputfile) {
        console.log('uploadTrainingFileService');
        var headers = {};
        var idToken = _reactCookie2.default.load('jwt');

        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        var body = new FormData();
        body.append('uploadfile', inputfile);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(url + '/api/training/' + training.get('id') + '/fileupload/', config).then(function (res) {
            return res.text().then(function (text) {
                return text.length ? JSON.parse(text) : {};
            }).then(function (data) {
                return {
                    status: res.status,
                    data: data
                };
            });
        });
    },
    deleteTrainingService: function deleteTrainingService(training) {
        console.log('uploadTrainingFileService');
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        var body = JSON.stringify(training);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(url + '/api/training/deletetraining', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    }
};

exports.default = trainingservices;