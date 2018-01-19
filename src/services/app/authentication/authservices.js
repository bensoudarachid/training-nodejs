import ApiConnection from '../../apiconnection'
const authurl = ApiConnection.apiurl + ApiConnection.appbasename
const authservices = {
    registerUserService: function (user) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        var body = 'username=' + user.username + '&password=' + user.password + '&email=' + user.email
        const config = {
            method: 'POST',
            headers,
            body: body
        }
        return fetch(authurl + '/register', config)
            .then(response => response.json().then(data => ({
                    status: response.status,
                    data
                })
            ))
    },
    loginUserService: function (creds) {
        var body = 'grant_type=password&username=' + creds.username + '&password=' + creds.password + '&client_id=clientapp&client_secret=123456'
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer('clientapp:123456').toString('base64')
            },
            body: body
        }
        return fetch(authurl + '/oauth/token', config)
            .then(response => response.json().then(user => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    user,
                    response
                }))
            )
<<<<<<< HEAD
=======
                user,
                response
            }))
        )
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
            .catch(function (err) {
                console.log('hahaaaaaa' + err)
                throw {error: 'connectionfailure', error_description: 'Failed to connect. Please try later'}
            })
    },
    logoutService: function (idToken) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + idToken
            }
        }
        return fetch(authurl + '/oauth/logout', config)
    }
}

export default authservices