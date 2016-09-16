// import Immutable from 'immutable';
import cookie from 'react-cookie'

// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'


const services = {
  retrieveTodosService: function() {
    console.log('Service retrieve todos fetchData call')
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
      console.log('Ya todos fetchData.  auth id token: ' + idToken)
    }
    else {
      console.log('Service retrieve todos fetchData. Wahnsinn: no idToken')
    }
    //var test = 'This is abbas in the hood!';

    return fetch('http://127.0.0.1:8081/api/todos/2373',
      {
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
      }
    )
      .then(response => response.json().then(data => {
        console.log('Response Status = ' + response.status)
        // console.log('Response data size = ' + data.size())
        return ({
          status: response.status,
          data
        })
      }
      ))
  },
  updateTodoService: function(todo) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    console.log('Ya todos save Data.  auth id token: ' + idToken)
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
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
    var body = JSON.stringify(todo)
    //&scope=read%20write
    // console.log('body ' + body)
    const config = {
      method: 'POST',
      headers,
      body: body
    }
    // console.log('config ')
    // console.log(config)
    // var todo = null;
    return fetch('http://127.0.0.1:8081/api/todo/updatetodo', config).then(response => response.json()
      .then(data => ({
        status: response.status,
        data
      })
    ))
  },
  deleteTodoService: function(todo) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    console.log('Ya todos save Data.  auth id token: ' + idToken)
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
    }
    else{
      console.log('todos action. Wahnsinn: no idToken')
    }

    // var body = JSON.stringify({
    //   id: todo.get('id'),
    //   task: todo.get('task'),
    //   // userid: -1
    //   completed: todo.get('completed')
    // })
    // todo = todo.set('task', null)
    var body = JSON.stringify(todo)
    //&scope=read%20write
    console.log('body ' + body)
    const config = {
      method: 'POST',
      headers,
      body: body
    }
    console.warn('config ')
    // onsole.log(config)
    // var todo = null;
    return fetch('http://127.0.0.1:8081/api/todo/deletetodo', config).then(response => response.json()
      .then(data => ({
        status: response.status,
        data
      })
    ))
  },
  loginUserService: function(creds) {
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

    return fetch('http://localhost:8083/oauth/token', config)
      .then(response => response.json().then(user => ({
        user,
        response
      }))
    )
  },
  logoutService: function(idToken) {
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
    return fetch('http://localhost:8083/oauth/logout', config)
  }



}

export default services