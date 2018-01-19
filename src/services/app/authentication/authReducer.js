import cookie from 'react-cookie'
import Immutable from 'immutable'
import validator from 'validator'

<<<<<<< HEAD
// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token has expired.

<<<<<<< HEAD
let authReducer = function (auth = new Immutable.Map({
    isFetching: false,
    isRegistrationFetching: false,
    isAuthenticated: cookie.load('jwt') ? true : false,
    authority: cookie.load('authority'),
    registrationStep: 1,
    registrationError: new Immutable.Map({
        // username: '',
        // email: '',
        // password: '',
        // passwordCheck: ''
    })
}), action) {

    if (!(auth instanceof Immutable.Map)) {
        console.log('Auth reducer. Init Map. Need to find out why it s not a map')
=======
let authReducer = function (auth
                            // = new Immutable.Map({
                            //   isFetching: false,
                            //   isRegistrationFetching: false,
                            //   isAuthenticated: cookie.load('jwt') ? true : false,
                            //   authority: cookie.load('authority'),
                            //   registrationStep:1,
                            //   registrationError: new Immutable.Map({
                            //     // username: '',
                            //     // email: '',
                            //     // password: '',
                            //     // passwordCheck: ''
                            //   })
                            // })
    , action) {
=======
let authReducer = function (auth, action) {
>>>>>>> b06ef94... clean code, remove comments

    if (!(auth instanceof Immutable.Map)) {
        console.log('Auth reducer. Init Map. Need to find out why it s not a map ' + require('util').inspect(auth, false, null))
>>>>>>> 6e3ff02... webstorm big changes crash
        auth = new Immutable.Map({
            isFetching: false,
            isRegistrationFetching: false,
            isAuthenticated: cookie.load('jwt') ? true : false,
            authority: cookie.load('authority'),
            registrationStep: 1,
<<<<<<< HEAD
            registrationError: new Immutable.Map({
                // username: '',
                // email: '',
                // password: '',
                // passwordCheck: ''
            })
        })
    }
    let authenticated = cookie.load('jwt') ? true : false
    let authority = cookie.load('authority')
    //let authenticated = true 
=======
            registrationError: new Immutable.Map({})
        })
    }
    let authenticated = false
    if (process.env.NODE_ENV === 'test')
        authenticated = true
    else
        authenticated = cookie.load('jwt') ? true : false

    let authority = cookie.load('authority')
<<<<<<< HEAD
    //let authenticated = true
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments
    auth = auth.set('isAuthenticated', authenticated)
    auth = auth.set('authority', authority)

    switch (action.type) {
        case 'LOGIN_PROCESS_START':
            auth = auth.set('loginMessage', action.message)
            auth = auth.set('loginProgress', true)
            auth = auth.set('loginactualurl', action.actualurl)
            auth = auth.set('loginrequest', action.promise)
            auth = auth.set('loginrequestparams', action.params)
            return auth
        case 'LOGIN_PROCESS_END':
            console.log('authreducerjs. login progress end')
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            return auth
<<<<<<< HEAD
<<<<<<< HEAD
        // return Object.assign({}, _.omit(auth, ['loginMessage','loginProgress']), {})  
=======
        // return Object.assign({}, _.omit(auth, ['loginMessage','loginProgress']), {})
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments

        case 'LOGIN_REQUEST':
            auth = auth.set('isFetching', true)
            auth = auth.set('usercreds', action.creds)
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            return auth

        case 'LOGIN_SUCCESS':
            console.log('+++++++++++++++++++++++++++++++++++++Reducer Authentication success. go back to url: ' + auth.get('loginactualurl'))
            auth = auth.set('isFetching', false)
            auth = auth.set('errorMessage', '')
            auth = auth.set('isAuthenticated', authenticated)
            auth = auth.set('authority', authority)
            auth = auth.remove('usercreds')
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')

            return auth
        case 'LOGIN_FAILURE':
            auth = auth.set('isFetching', false)
            auth = auth.set('errorMessage', action.message)
            auth = auth.remove('usercreds')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth
        case 'LOGOUT_REQUEST':
            auth = auth.set('isFetching', true)
            auth = auth.remove('usercreds')
            return auth

        case 'LOGOUT_SUCCESS':
            auth = auth.set('isFetching', false)
            auth = auth.set('isAuthenticated', authenticated)
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth
        case 'REGISTER_REQUEST':
            auth = auth.set('isRegistrationFetching', true)
            auth = auth.set('usercreds', action.creds)
            auth = auth.set('registererror', '')
            return auth
        case 'REGISTER_SUCCESS':
            auth = auth.set('isRegistrationFetching', false)
            auth = auth.set('username', action.user.username)
            auth = auth.set('registrationStep', 2)
            return auth
        case 'REGISTER_USER_ERROR':
            auth = auth.set('isRegistrationFetching', false)
            auth = auth.set('registrationError', new Immutable.Map(action.registererror))
            return auth
        case 'REGISTER_SYSTEM_ERROR':
            auth = auth.set('isRegistrationFetching', false)
            auth = auth.set('registererror', action.registererror)
            auth = auth.set('registrationStep', 3)
            return auth
        case 'REGISTER_INIT':
            auth = auth.set('isRegistrationFetching', false)
            auth = auth.set('registererror', '')
            auth = auth.set('registrationStep', 1)
            return auth
        case 'REGISTER_VALIDATE':
            console.log('auth reducer email ' + action.user.email)
            var userInputErrors = {}
            if (action.user.email.length === 0)
                userInputErrors.email = 'required'
            if (action.user.email.length > 0 && !validator.isEmail(action.user.email))
                userInputErrors.email = 'not valid'
<<<<<<< HEAD

            if (action.user.username.length === 0) {
                console.log('username required')
                // registrationError = registrationError.set('username','user name required')
                userInputErrors.username = 'required'
            }
            else if (!validator.isLength(action.user.username.trim(), 1, 25))
                userInputErrors.username = 'too long (25 chars max)'
            if (action.user.password.length === 0)
            // registrationError = registrationError.set('password','password required')
                userInputErrors.password = 'required'
            else if (action.user.password.length < 8)
                userInputErrors.password = 'should be greater than 8 characters'

            if (!userInputErrors.password && action.user.password !== action.user.passwordCheck)
            // registrationError = registrationError.set('passwordCheck','password check different from password')
                userInputErrors.passwordCheck = 'password check different from password'
            console.log('Auth reducer action.user.email' + action.user.email)
            console.log('Auth reducer action.user.email is valid' + validator.isEmail(action.user.email))
            console.log('Auth reducer email error returned' + userInputErrors.email)

=======

            if (action.user.username.length === 0) {
                console.log('username required')
                userInputErrors.username = 'required'
            }
            else if (!validator.isLength(action.user.username.trim(), 1, 25))
                userInputErrors.username = 'too long (25 chars max)'
            if (action.user.password.length === 0)
                userInputErrors.password = 'required'
            else if (action.user.password.length < 8)
                userInputErrors.password = 'should be greater than 8 characters'

            if (!userInputErrors.password && action.user.password !== action.user.passwordCheck)
                userInputErrors.passwordCheck = 'password check different from password'
            console.log('Auth reducer action.user.email' + action.user.email)
            console.log('Auth reducer action.user.email is valid' + validator.isEmail(action.user.email))
            console.log('Auth reducer email error returned' + userInputErrors.email)

>>>>>>> 6e3ff02... webstorm big changes crash
            auth = auth.set('registrationError', new Immutable.Map(userInputErrors))
            return auth

        default:
            return auth
    }
}

export default authReducer