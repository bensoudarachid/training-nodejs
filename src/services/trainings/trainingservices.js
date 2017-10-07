// import Immutable from 'immutable';
import Immutable from 'immutable'
import cookie from 'react-cookie'
// import {expressPort} from '../../server7'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// import {browserHistory} from 'react-router';
// import { getIsFetching } from '../reducers'
import ApiConnection from '../apiconnection'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6e3ff02... webstorm big changes crash
=======

>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
const url = ApiConnection.apiurl + ApiConnection.appbasename
// const url = ApiConnection.apiurl

const trainingservices = {
    retrieveTrainingService: function (id) {

        let requesturl = url
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        // if (hostname != undefined) {
        //     // requesturl = ApiConnection.getApiConnection(hostname) + ApiConnection.appbasename
        //     headers.OldClientHost = '' + hostname
        // }
        var idToken = cookie.load('jwt')

        console.log('training fetchData. url: ' + url + '/api/training/item/' + id)
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
            // console.log('Ya trainings fetchData.  auth id token: ' + headers.Authorization)
        }
        // else {
        //   console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
        // }
        //var test = 'This is abbas in the hood!';
        console.log('Call training server fetch now!. URL = ' + requesturl + '/api/training/item/' + id)
        return fetch(requesturl + '/api/training/item/' + id,
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
            .then(
                response => response.text()
                    .then(text => {
                        // return text.length ? JSON.parse(text,ApiConnection.reviver) : {}
                        return text.length ? JSON.parse(text) : {}
                    })
                // response => response.json()
                    .then(data => {
//        console.log('Print status now')
//        console.log('Response Status = ' + response.status)
                    // console.log('Response data size = ' + data.size())
                    return ({
                        status: response.status,
                        data
                    })
                }
            ))
    },
    retrieveTrainingsService: function () {
        // var sessionId = cookie.load('JSESSIONID')
        console.log('Service retrieve trainings fetchData')
        let requesturl = url
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
            // ,'ClientHost': ''+hostname//.replace("school.", "schoolapi.")
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        // if (hostname != undefined) {
        //     // requesturl = ApiConnection.getApiConnection(hostname)
        //     // requesturl = ApiConnection.getApiConnection(hostname) + ApiConnection.appbasename
        //     // headers.ClientHost = '' + hostname
        // }
        var idToken = cookie.load('jwt')
        console.log('Ya trainings fetchData.  auth id token: ' + idToken)
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
            // console.log('Ya trainings fetchData.  auth id token: ' + headers.Authorization)
        }
        // else {
        //   console.log('Service retrieve trainings fetchData. Wahnsinn: no idToken')
        // }
        //var test = 'This is abbas in the hood!';
        // console.log('------------------Call retrieveTrainingsService fetch data now from '+ requesturl+'/api/trainings/2373')
        return fetch(requesturl + '/api/trainings/2373',
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
            .then(
                //This works too transforming the text response into json. But without the conversion
                response => response.json()
//This is the version to use if you dont have a JSON polyfill to take over the parse function in 'apiconnection'
                // response => response.text()
                // .then(text => {
                //     return text.length ? JSON.parse(text,JSON.reviver) : {}
                // })
                .then(data => {
//        console.log('Print Response Status now ')
                    console.log('Response Status = ' + response.status)
                    // console.log('Response data size = ' + data.size())
                    return ({
                        status: response.status,
                        data
                    })
                }
            ))

    },
    updateTrainingServiceOld: function (training) {
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        var idToken = cookie.load('jwt')
        // console.log('trainings save Data.  auth id token: ' + idToken)
        if (idToken != undefined) {
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

        return fetch(url + '/api/training/updatetraining', config).then(response => response.json()
            .then(data => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    status: response.status,
                    data
                })
            ))
<<<<<<< HEAD
=======
                status: response.status,
                data
            })
        ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    },
    updateTrainingService: function (training, inputfile) {
//        console.log('inputfile=' + require('util').inspect(inputfile, false, null))
        var headers = {
            // 'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'multipart/form-data; boundary=B0EC8D07-EBF1-4EA7-966C-E492A9F2C36E'
            //'Content-Type':'undefined'
            // 'Content-Type':'multipart/mixed'
            // 'Content-Type': 'application/octet-stream'
            // 'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        // console.log('trainings save Data.  training id : ' + training.get('id'))
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        var trainingbody = JSON.stringify(training)
        var body = new FormData()
        // body.append('trainingParam', trainingbody)
        body.append('trainingParam', new Blob([trainingbody], {type: 'application/json'}))
        // body.append('title', training.get('title'))
        // body.append('secondaryTitle', training.get('secondaryTitle'))
        // body.append('shortDescription', training.get('shortDescription'))
        // body.append('longDescription', training.get('longDescription'))
        body.append('uploadfile', inputfile)

        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(url + '/api/training/updatetraining/', config)
            .then(res => res.text()
                .then(text => {
                    // return text.length ? JSON.parse(text,ApiConnection.reviver) : {}
                    return text.length ? JSON.parse(text) : {}
                })
                .then(data => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        status: res.status,
                        data
                    })
                ))
<<<<<<< HEAD
=======
                    status: res.status,
                    data
                })
            ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    },
    uploadTrainingFileService: function (training, inputfile) {
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
//      'Content-Type': 'multipart/form-data' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        var idToken = cookie.load('jwt')
        // console.log('trainings save Data.  training id : ' + training.get('id'))
        if (idToken != undefined) {
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
        return fetch(url + '/api/training/' + training.get('id') + '/fileupload/', config)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        // .then(response => response.json()
        //   .then(data => ({
        //     status: response.status,
        //     data
        //   })
        // ))
<<<<<<< HEAD
=======
            // .then(response => response.json()
            //   .then(data => ({
            //     status: response.status,
            //     data
            //   })
            // ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            .then(res => res.text()
                .then(text => {
                    return text.length ? JSON.parse(text) : {}
                })
                .then(data => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        status: res.status,
                        data
                    })
                ))
<<<<<<< HEAD
=======
                    status: res.status,
                    data
                })
            ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

        // return fetch(url+'/api/training/'+training.get('id')+'/fileupload/', config)
        // .then(response => ({
        //   status: response.status
        // })
        // )
    },
    deleteTrainingService: function (training) {
        console.log('delete training=' + require('util').inspect(training, false, null))
        var headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json' //for json paramter
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
            // 'Authorization': 'Bearer '+idToken
        }
        var idToken = cookie.load('jwt')
        // console.log('trainings save Data.  auth id token: ' + idToken)
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
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
        var body = JSON.stringify(training)
        //&scope=read%20write
        console.log('body ' + body)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        // console.warn('config ')
        // onsole.log(config)
        // var training = null;
        return fetch(url + '/api/training/deletetraining', config).then(response => response.json()
            .then(data => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    status: response.status,
                    data
                })
            ))
<<<<<<< HEAD
=======
                status: response.status,
                data
            })
        ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    }

}

export default trainingservices