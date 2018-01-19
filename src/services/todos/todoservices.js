import cookie from 'react-cookie'
import ApiConnection from '../apiconnection'
const url = ApiConnection.apiurl + ApiConnection.appbasename
const todoservices = {
    retrieveTodosService: function () {
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        return fetch(url + '/api/todos/2373',
            {
                method: 'GET',
                headers
            }
        )
            .then(response => response.json().then(data => {
                    return ({
                        status: response.status,
                        data
                    })
                }
            ))
    },
    updateTodoService: function (todo) {
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        var body = JSON.stringify(todo)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(url + '/api/todo/updatetodo', config).then(response => response.json()
            .then(data => {
<<<<<<< HEAD
<<<<<<< HEAD
                    console.log('Print status now')
                    console.log('Response Status = ' + response.status)

                    return ({
                        status: response.status,
                        data
                    })
                }
            ))
=======
                console.log('Print status now')
                console.log('Response Status = ' + response.status)

                return ({
                    status: response.status,
                    data
                })
            }
        ))
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                    console.log('Print status now')
                    console.log('Response Status = ' + response.status)

                    return ({
                        status: response.status,
                        data
                    })
                }
            ))
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
    },
    uploadTodoFileService: function (todo, inputfile) {
        var headers = {}
        var idToken = cookie.load('jwt')
        console.log('Ya todos save Data.  todo id : ' + todo.get('id'))
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
        return fetch(url + '/api/todo/' + todo.get('id') + '/fileupload/', config)
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
                    console.log('*****************************************************************returned text is ' + text)
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

        // return fetch(url+'/api/todo/'+todo.get('id')+'/fileupload/', config)
        // .then(response => ({
        //   status: response.status
        // })
        // )
=======
>>>>>>> f886b1f... clean code, remove console logs
    },
    deleteTodoService: function (todo) {
        var headers = {
            'Content-Type': 'application/json'
        }
        var idToken = cookie.load('jwt')
        console.log('Ya todos save Data.  auth id token: ' + idToken)
        if (idToken != undefined) {
            headers.Authorization = 'Bearer ' + idToken
        }
        else {
            console.log('todos action. Wahnsinn: no idToken')
        }
        var body = JSON.stringify(todo)
        console.log('body ' + body)
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        console.warn('config ')
        return fetch(url + '/api/todo/deletetodo', config).then(response => response.json()
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

export default todoservices