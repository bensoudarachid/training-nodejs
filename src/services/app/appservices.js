import ApiConnection from '../apiconnection'

const url = ApiConnection.apiurl + ApiConnection.appbasename

const appservices = {
    retrieveTenantService: function () {
        console.log('-->   retrieveTenantService  <--')
        let requesturl = url
        var headers = {
            'Content-Type': 'application/json'
        }
        return fetch(requesturl + '/api/profile/data',
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
}

export default appservices