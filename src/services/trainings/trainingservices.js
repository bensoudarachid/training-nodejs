import cookie from 'react-cookie'
import ApiConnection from '../apiconnection'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6e3ff02... webstorm big changes crash
=======

>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
=======
>>>>>>> f886b1f... clean code, remove console logs
const url = ApiConnection.apiurl + ApiConnection.appbasename

const trainingservices = {
    retrieveTrainingService: function (id) {
        let requesturl = url
        var headers = {
            'Content-Type': 'application/json'
        }

        var idToken = cookie.load('jwt')

        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        return fetch(requesturl + '/api/training/item/' + id,
            {
                method: 'GET',
                headers
            }
        )
            .then(
                response => response.text()
                    .then(text => {
                        return text.length ? JSON.parse(text) : {}
                    })
                    .then(data => {
                            return ({
                                status: response.status,
                                data
                            })
                        }
                    ))
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

    retrieveTrainingsService: function () {
        let requesturl = url
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        return fetch(requesturl + '/api/trainings/2373',
            {
                method: 'GET',
                headers
            }
        )
            .then(
                response => response.json()
                    .then(data => {
                            return ({
                                status: response.status,
                                data
                            })
                        }
                    ))
    },
    updateTrainingServiceOld: function (training) {
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        var body = JSON.stringify(training)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
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
        var headers = {}
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        var trainingbody = JSON.stringify(training)
        var body = new FormData()
        body.append('trainingParam', new Blob([trainingbody], {type: 'application/json'}))
        body.append('uploadfile', inputfile)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(url + '/api/training/updatetraining/', config)
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
    },
    uploadTrainingFileService: function (training, inputfile) {
        var headers = {}
        var idToken = cookie.load('jwt')

        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
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
=======
>>>>>>> f886b1f... clean code, remove console logs
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
=======
>>>>>>> f886b1f... clean code, remove console logs
    },
    deleteTrainingService: function (training) {
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        var body = JSON.stringify(training)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
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