import cookie from 'react-cookie'
import ApiConnection from '../apiconnection'
const url = ApiConnection.apiurl + ApiConnection.appbasename

const trainingservices = {
    retrieveTrainingService: function (id) {
        console.log('retrieveTrainingService')
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
        console.log('retrieveTrainingsService')

        console.log('requesturl='+require('util').inspect(requesturl + '/api/training/item/' + id, false, null))
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
        ).then(
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
                    status: response.status,
                    data
                })
            ))
    },
    updateTrainingService: function (training, inputfile) {
        console.log('##############################################################updateTrainingService this is')
        var headers = {}
        var idToken = cookie.load('jwt')
        if (idToken != undefined)
            headers.Authorization = 'Bearer ' + idToken

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
                        status: res.status,
                        data
                    })
                ))
    },
    uploadTrainingFileService: function (training, inputfile) {
        console.log('uploadTrainingFileService')
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
            .then(res => res.text()
                .then(text => {
                    return text.length ? JSON.parse(text) : {}
                })
                .then(data => ({
                        status: res.status,
                        data
                    })
                ))
    },
    deleteTrainingService: function (training) {
        console.log('uploadTrainingFileService')
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
                    status: response.status,
                    data
                })
            ))
    }
}

export default trainingservices