'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var url = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;
var todoservices = {
    retrieveTodosService: function retrieveTodosService() {
        var headers = {
            'Content-Type': 'application/json'
=======
// const url = ApiConnection.apiurl
// import Immutable from 'immutable';
// import Immutable from 'immutable'
var url = _apiconnection2.default.apiurl + _apiconnection2.default.appbasename;

// var expressPort = -12
// if (process.env.NODE_ENV === 'production')
//   expressPort=8082
// else
//   expressPort=8081
// var isBrowser = typeof window !== 'undefined'
// var url = ''
// var authurl = ''
// // const appbasename = '/reactor'
// const appbasename = ''
// if( isBrowser ){
//   authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   // authurl= 'http:'+'//'+'abbaslearning.royasoftware.com'+':8083'
//   // url = window.location.protocol+'//'+window.location.hostname+(window.location.expressPort ? ':'+location.expressPort: '')+appbasename
//   url = authurl
//   // authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   console.log('services call url '+url)
// }else{
//   url = 'http:'+'//'+'127.0.0.1'+(expressPort ? ':'+expressPort: '')+appbasename
//   authurl= 'http:'+'//'+'127.0.0.1'+':8083'
//   console.log('services call local url '+url)
// }

// import {expressPort} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'

var todoservices = {
    // apiurl:url,
    // expressPort:expressPort,
    // appbasename:appbasename,
    retrieveTodosService: function retrieveTodosService() {
        // console.log('Service retrieve todos fetchData call '+ url)
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
<<<<<<< HEAD
        }
        return fetch(url + '/api/todos/2373', {
            method: 'GET',
            headers: headers
        }).then(function (response) {
            return response.json().then(function (data) {
=======
            // console.log('Ya todos fetchData.  auth id token: ' + idToken)
        }
        // else {
        //   console.log('Service retrieve todos fetchData. Wahnsinn: no idToken')
        // }
        //var test = 'This is abbas in the hood!';

        return fetch(url + '/api/todos/2373', {
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
            return response.json().then(function (data) {
                // console.log('Response Status = ' + response.status)
                // console.log('Response data size = ' + data.size())
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    },
    updateTodoService: function updateTodoService(todo) {
        var headers = {
<<<<<<< HEAD
            'Content-Type': 'application/json'
        };
        var idToken = _reactCookie2.default.load('jwt');
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        var body = JSON.stringify(todo);
=======
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        };
        var idToken = _reactCookie2.default.load('jwt');
        console.log('Ya todos save Data.  auth id token: ' + idToken);
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
        // else
        //   console.log('todos action. Wahnsinn: no idToken')

        // var body = JSON.stringify({
        //   id: todo.get('id'),
        //   task: todo.get('task'),
        //   // userid: -1
        //   completed: todo.get('completed')
        // })
        // todo = todo.set('task', null)
        var body = JSON.stringify(todo);
        //&scope=read%20write
        // console.log('body ' + body)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var config = {
            method: 'POST',
            headers: headers,
            body: body
<<<<<<< HEAD
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
=======
            // console.log('config ')
            // console.log(config)
            // var todo = null;
        };return fetch(url + '/api/todo/updatetodo', config).then(function (response) {
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
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            //      'Content-Type': 'multipart/form-data' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        };
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var idToken = _reactCookie2.default.load('jwt');
        console.log('Ya todos save Data.  todo id : ' + todo.get('id'));
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        }
<<<<<<< HEAD
        var body = new FormData();
        body.append('uploadfile', inputfile);
=======
        // var body = JSON.stringify(todo)

        // var input = document.querySelector('input[type="file"]')

        var body = new FormData();
        body.append('uploadfile', inputfile);

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var config = {
            method: 'POST',
            headers: headers,
            body: body
<<<<<<< HEAD
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
=======
        };
        return fetch(url + '/api/todo/' + todo.get('id') + '/fileupload/', config)
        // .then(response => response.json()
        //   .then(data => ({
        //     status: response.status,
        //     data
        //   })
        // ))
        .then(function (res) {
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

        // return fetch(url+'/api/todo/'+todo.get('id')+'/fileupload/', config)
        // .then(response => ({
        //   status: response.status
        // })
        // )
    },
    deleteTodoService: function deleteTodoService(todo) {
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        };
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var idToken = _reactCookie2.default.load('jwt');
        console.log('Ya todos save Data.  auth id token: ' + idToken);
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken;
        } else {
            console.log('todos action. Wahnsinn: no idToken');
        }
<<<<<<< HEAD
        var body = JSON.stringify(todo);
=======

        // var body = JSON.stringify({
        //   id: todo.get('id'),
        //   task: todo.get('task'),
        //   // userid: -1
        //   completed: todo.get('completed')
        // })
        // todo = todo.set('task', null)
        var body = JSON.stringify(todo);
        //&scope=read%20write
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        console.log('body ' + body);
        var config = {
            method: 'POST',
            headers: headers,
            body: body
        };
        console.warn('config ');
<<<<<<< HEAD
=======
        // onsole.log(config)
        // var todo = null;
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return fetch(url + '/api/todo/deletetodo', config).then(function (response) {
            return response.json().then(function (data) {
                return {
                    status: response.status,
                    data: data
                };
            });
        });
    }
<<<<<<< HEAD
=======

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
};

exports.default = todoservices;