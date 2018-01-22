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
                    console.log('Print status now')
                    console.log('Response Status = ' + response.status)

                    return ({
                        status: response.status,
                        data
                    })
                }
            ))
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
            .then(res => res.text()
                .then(text => {
                    console.log('*****************************************************************returned text is ' + text)
                    return text.length ? JSON.parse(text) : {}
                })
                .then(data => ({
                        status: res.status,
                        data
                    })
                ))
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
                    status: response.status,
                    data
                })
            ))
    }
}

export default todoservices