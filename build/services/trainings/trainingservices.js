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

// import {port} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
// import Immutable from 'immutable';
var trainingservices = {
  retrieveTrainingService: function retrieveTrainingService(id, hostname) {

    var requesturl = url;
    if (hostname != undefined) requesturl = _apiconnection2.default.getApiConnection(hostname) + _apiconnection2.default.appbasename;
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = _reactCookie2.default.load('jwt');

    console.log('training fetchData. url: ' + url + '/api/training/item/' + id);
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
      // console.log('Ya trainings fetchData.  auth id token: ' + headers.Authorization)
    }
    // else {
    //   console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
    // }
    //var test = 'This is abbas in the hood!';
    console.log('Call training server fetch now!. URL = ' + requesturl + '/api/training/item/' + id);
    return fetch(requesturl + '/api/training/item/' + id, {
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
        //        console.log('Print status now')
        //        console.log('Response Status = ' + response.status)
        // console.log('Response data size = ' + data.size())
        return {
          status: response.status,
          data: data
        };
      });
    });
  },
  retrieveTrainingsService: function retrieveTrainingsService(hostname) {
    var sessionId = _reactCookie2.default.load('JSESSIONID');
    console.log('Service retrieve trainings fetchData call ' + url + ' session id: ' + sessionId);
    var requesturl = url;
    if (hostname != undefined)
      // requesturl = ApiConnection.getApiConnection(hostname)
      requesturl = _apiconnection2.default.getApiConnection(hostname) + _apiconnection2.default.appbasename;
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = _reactCookie2.default.load('jwt');
    // console.log('Ya trainings fetchData.  auth id token: ' + idToken)
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
      // console.log('Ya trainings fetchData.  auth id token: ' + headers.Authorization)
    }
    // else {
    //   console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
    // }
    //var test = 'This is abbas in the hood!';
    // console.log('------------------Call retrieveTrainingsService fetch data now from '+ requesturl+'/api/trainings/2373')
    return fetch(requesturl + '/api/trainings/2373', {
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
        //        console.log('Print Response Status now ')
        console.log('Response Status = ' + response.status);
        // console.log('Response data size = ' + data.size())
        return {
          status: response.status,
          data: data
        };
      });
    });
  },
  updateTrainingServiceOld: function updateTrainingServiceOld(training) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = _reactCookie2.default.load('jwt');
    // console.log('trainings save Data.  auth id token: ' + idToken)
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    }
    // else
    //   console.log('trainings action. Wahnsinn: no idToken')

    // var body = JSON.stringify({
    //   id: training.get('id'),
    //   task: training.get('task'),
    //   // userid: -1
    //   completed: training.get('completed')
    // })
    // training = training.set('task', null)
    var body = JSON.stringify(training);
    //&scope=read%20write
    // console.log('body ' + body)
    var config = {
      method: 'POST',
      headers: headers,
      body: body
    };
    // console.log('config ')
    // console.log(config)
    // var training = null;

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
    console.log('inputfile=' + require('util').inspect(inputfile, false, null));
    var headers = {
      // 'Content-Type': 'multipart/form-data'
      // 'Content-Type': 'multipart/form-data; boundary=B0EC8D07-EBF1-4EA7-966C-E492A9F2C36E'
      //'Content-Type':'undefined'
      // 'Content-Type':'multipart/mixed'
      // 'Content-Type': 'application/octet-stream'
      // 'Content-Type': 'application/json'
    };
    var idToken = _reactCookie2.default.load('jwt');
    // console.log('trainings save Data.  training id : ' + training.get('id'))
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    }
    var trainingbody = JSON.stringify(training);
    var body = new FormData();
    // body.append('trainingParam', trainingbody)
    body.append('trainingParam', new Blob([trainingbody], { type: 'application/json' }));
    // body.append('title', training.get('title'))
    // body.append('secondaryTitle', training.get('secondaryTitle'))
    // body.append('shortDescription', training.get('shortDescription'))
    // body.append('longDescription', training.get('longDescription'))
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
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      //      'Content-Type': 'multipart/form-data' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = _reactCookie2.default.load('jwt');
    // console.log('trainings save Data.  training id : ' + training.get('id'))
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    }
    // var body = JSON.stringify(training)

    // var input = document.querySelector('input[type="file"]')

    var body = new FormData();
    body.append('uploadfile', inputfile);

    var config = {
      method: 'POST',
      headers: headers,
      body: body
    };
    return fetch(url + '/api/training/' + training.get('id') + '/fileupload/', config)
    // .then(response => response.json()
    //   .then(data => ({
    //     status: response.status,
    //     data
    //   })
    // ))
    .then(function (res) {
      return res.text().then(function (text) {
        return text.length ? JSON.parse(text) : {};
      }).then(function (data) {
        return {
          status: res.status,
          data: data
        };
      });
    });

    // return fetch(url+'/api/training/'+training.get('id')+'/fileupload/', config)
    // .then(response => ({
    //   status: response.status
    // })
    // )
  },
  deleteTrainingService: function deleteTrainingService(training) {
    console.log('delete training=' + require('util').inspect(training, false, null));
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = _reactCookie2.default.load('jwt');
    // console.log('trainings save Data.  auth id token: ' + idToken)
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    }
    // else{
    //   console.log('trainings action. Wahnsinn: no idToken')
    // }

    // var body = JSON.stringify({
    //   id: training.get('id'),
    //   task: training.get('task'),
    //   // userid: -1
    //   completed: training.get('completed')
    // })
    // training = training.set('task', null)
    var body = JSON.stringify(training);
    //&scope=read%20write
    console.log('body ' + body);
    var config = {
      method: 'POST',
      headers: headers,
      body: body
    };
    // console.warn('config ')
    // onsole.log(config)
    // var training = null;
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