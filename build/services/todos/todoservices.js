// import Immutable from 'immutable';
// import Immutable from 'immutable'
import cookie from 'react-cookie';
// import {port} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'

import ApiConnection from '../apiconnection';
// const url = ApiConnection.apiurl
const url = ApiConnection.apiurl + ApiConnection.appbasename;

// var port = -12
// if (process.env.NODE_ENV === 'production')
//   port=8082
// else
//   port=8081
// var isBrowser = typeof window !== 'undefined'
// var url = ''
// var authurl = ''
// // const appbasename = '/reactor'
// const appbasename = ''
// if( isBrowser ){
//   authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   // authurl= 'http:'+'//'+'abbaslearning.royasoftware.com'+':8083'
//   // url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+location.port: '')+appbasename
//   url = authurl
//   // authurl= window.location.protocol+'//'+window.location.hostname+':8083'
//   console.log('services call url '+url)
// }else{
//   url = 'http:'+'//'+'127.0.0.1'+(port ? ':'+port: '')+appbasename
//   authurl= 'http:'+'//'+'127.0.0.1'+':8083'
//   console.log('services call local url '+url)
// }
const todoservices = {
  // apiurl:url,
  // port:port,
  // appbasename:appbasename,
  retrieveTodosService: function () {
    // console.log('Service retrieve todos fetchData call '+ url)
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = cookie.load('jwt');
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
      // console.log('Ya todos fetchData.  auth id token: ' + idToken)
    }
    // else {
    //   console.log('Service retrieve todos fetchData. Wahnsinn: no idToken')
    // }
    //var test = 'This is abbas in the hood!';

    return fetch(url + '/api/todos/2373', {
      method: 'GET',
      headers
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
    }).then(response => response.json().then(data => {
      // console.log('Response Status = ' + response.status)
      // console.log('Response data size = ' + data.size())
      return {
        status: response.status,
        data
      };
    }));
  },
  updateTodoService: function (todo) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = cookie.load('jwt');
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
    const config = {
      method: 'POST',
      headers,
      body: body
      // console.log('config ')
      // console.log(config)
      // var todo = null;
    };return fetch(url + '/api/todo/updatetodo', config).then(response => response.json().then(data => {
      console.log('Print status now');
      console.log('Response Status = ' + response.status);

      return {
        status: response.status,
        data
      };
    }));
  },
  uploadTodoFileService: function (todo, inputfile) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      //      'Content-Type': 'multipart/form-data' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = cookie.load('jwt');
    console.log('Ya todos save Data.  todo id : ' + todo.get('id'));
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    }
    // var body = JSON.stringify(todo)

    // var input = document.querySelector('input[type="file"]')

    var body = new FormData();
    body.append('uploadfile', inputfile);

    const config = {
      method: 'POST',
      headers,
      body: body
    };
    return fetch(url + '/api/todo/' + todo.get('id') + '/fileupload/', config)
    // .then(response => response.json()
    //   .then(data => ({
    //     status: response.status,
    //     data
    //   })
    // ))
    .then(res => res.text().then(text => {
      console.log('*****************************************************************returned text is ' + text);
      return text.length ? JSON.parse(text) : {};
    }).then(data => ({
      status: res.status,
      data
    })));

    // return fetch(url+'/api/todo/'+todo.get('id')+'/fileupload/', config)
    // .then(response => ({
    //   status: response.status
    // })
    // )
  },
  deleteTodoService: function (todo) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
      // 'Authorization': 'Bearer '+idToken
    };
    var idToken = cookie.load('jwt');
    console.log('Ya todos save Data.  auth id token: ' + idToken);
    if (idToken != undefined) {
      headers.Authorization = 'Bearer ' + idToken;
    } else {
      console.log('todos action. Wahnsinn: no idToken');
    }

    // var body = JSON.stringify({
    //   id: todo.get('id'),
    //   task: todo.get('task'),
    //   // userid: -1
    //   completed: todo.get('completed')
    // })
    // todo = todo.set('task', null)
    var body = JSON.stringify(todo);
    //&scope=read%20write
    console.log('body ' + body);
    const config = {
      method: 'POST',
      headers,
      body: body
    };
    console.warn('config ');
    // onsole.log(config)
    // var todo = null;
    return fetch(url + '/api/todo/deletetodo', config).then(response => response.json().then(data => ({
      status: response.status,
      data
    })));
  }

};

export default todoservices;