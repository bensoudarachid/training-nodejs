// import Immutable from 'immutable';
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import {port} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
import ApiConnection from '../apiconnection'
const url = ApiConnection.apiurl

const trainingservices = {
  retrieveTrainingsService: function() {
    console.log('Service retrieve trainings fetchData call '+ url)
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
      console.log('Ya trainings fetchData.  auth id token: ' + idToken)
    }
    else {
      console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
    }
    //var test = 'This is abbas in the hood!';

    return fetch(url+'/api/trainings/2373',
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
  updateTrainingService: function(training) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    console.log('Ya trainings save Data.  auth id token: ' + idToken)
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
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
    var body = JSON.stringify(training)
    //&scope=read%20write
    // console.log('body ' + body)
    const config = {
      method: 'POST',
      headers,
      body: body
    }
    // console.log('config ')
    // console.log(config)
    // var training = null;
    return fetch(url+'/api/training/updatetraining', config).then(response => response.json()
      .then(data => ({
        status: response.status,
        data
      })
    ))
  },
  uploadTrainingFileService: function(training, inputfile) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
//      'Content-Type': 'multipart/form-data' //for json paramter
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    console.log('Ya trainings save Data.  training id : ' + training.get('id'))
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
    }
    // var body = JSON.stringify(training)
    
    // var input = document.querySelector('input[type="file"]')

    var body = new FormData()
    body.append('uploadfile', inputfile)
    
    const config = {
      method: 'POST',
      headers,
      body: body
    }
    return fetch(url+'/api/training/'+training.get('id')+'/fileupload/', config)
    // .then(response => response.json()
    //   .then(data => ({
    //     status: response.status,
    //     data
    //   })
    // ))
    .then(res => res.text()
      .then(text => { 
        console.log('*****************************************************************returned text is '+text)
        return text.length ? JSON.parse(text) : {} 
      })
      .then(data => ({
        status: res.status,
        data
      })
    ))

    // return fetch(url+'/api/training/'+training.get('id')+'/fileupload/', config)
    // .then(response => ({
    //   status: response.status
    // })
    // )
  },
  deleteTrainingService: function(training) {
    var headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json' //for json paramter
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
    // 'Authorization': 'Bearer '+idToken
    }
    var idToken = cookie.load('jwt')
    console.log('Ya trainings save Data.  auth id token: ' + idToken)
    if (idToken !== '') {
      headers.Authorization = 'Bearer ' + idToken
    }
    else{
      console.log('trainings action. Wahnsinn: no idToken')
    }

    // var body = JSON.stringify({
    //   id: training.get('id'),
    //   task: training.get('task'),
    //   // userid: -1
    //   completed: training.get('completed')
    // })
    // training = training.set('task', null)
    var body = JSON.stringify(training)
    //&scope=read%20write
    console.log('body ' + body)
    const config = {
      method: 'POST',
      headers,
      body: body
    }
    console.warn('config ')
    // onsole.log(config)
    // var training = null;
    return fetch(url+'/api/training/deletetraining', config).then(response => response.json()
      .then(data => ({
        status: response.status,
        data
      })
    ))
  }


}

export default trainingservices