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
var todoservices = {
    retrieveTodosService: function retrieveTodosService() {
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        return fetch(url + '/api/todos/2373', {
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
    updateTodoService: function updateTodoService(todo) {
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        var body = JSON.stringify(todo);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        return fetch(url + '/api/todo/updatetodo', config).then(function (response) {
            return response.json().then(function (data) {
                console.log('Print status now');
                console.log('Response Status = ' + response.status);

                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    uploadTodoFileService: function uploadTodoFileService(todo, inputfile) {
        var headers = {};
        var idToken = _reactCookie2.default.load('jwt');
        console.log('Ya todos save Data.  todo id : ' + todo.get('id'));
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
        return fetch(url + '/api/todo/' + todo.get('id') + '/fileupload/', config).then(function (res) {
            return res.text().then(function (text) {
                console.log('*****************************************************************returned text is ' + text);
                return text.length ? JSON.parse(text) : {};
            }).then(function (data) {
                return {
                    status: res.status,
                    data: data
                };
            });
        });
    },
    deleteTodoService: function deleteTodoService(todo) {
        var headers = {
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        console.log('Ya todos save Data.  auth id token: ' + idToken);
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        } else {
            console.log('todos action. Wahnsinn: no idToken');
        }
        var body = JSON.stringify(todo);
        console.log('body ' + body);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        console.warn('config ');
        return fetch(url + '/api/todo/deletetodo', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    }
};

exports.default = todoservices;