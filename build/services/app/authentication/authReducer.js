'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authReducer = function authReducer(auth, action) {

    if (!(auth instanceof _immutable2.default.Map)) {
        console.log('Auth reducer. Init Map. Need to find out why it s not a map ' + require('util').inspect(auth, false, null));
        auth = new _immutable2.default.Map({
            isFetching: false,
            isRegistrationFetching: false,
            isAuthenticated: _reactCookie2.default.load('jwt') ? true : false,
            authority: _reactCookie2.default.load('authority'),
            registrationStep: 1,
            registrationError: new _immutable2.default.Map({})
        });
    }
    var authenticated = false;
    if (process.env.NODE_ENV === 'test') authenticated = true;else authenticated = _reactCookie2.default.load('jwt') ? true : false;

    var authority = _reactCookie2.default.load('authority');
    auth = auth.set('isAuthenticated', authenticated);
    auth = auth.set('authority', authority);

    switch (action.type) {
        case 'LOGIN_PROCESS_START':
            auth = auth.set('loginMessage', action.message);
            auth = auth.set('loginProgress', true);
            auth = auth.set('loginactualurl', action.actualurl);
            auth = auth.set('loginrequest', action.promise);
            auth = auth.set('loginrequestparams', action.params);
            return auth;
        case 'LOGIN_PROCESS_END':
            console.log('authreducerjs. login progress end');
            auth = auth.remove('loginMessage');
            auth = auth.remove('loginProgress');
            auth = auth.remove('loginactualurl');
            return auth;

        case 'LOGIN_REQUEST':
            auth = auth.set('isFetching', true);
            auth = auth.set('usercreds', action.creds);
            auth = auth.remove('loginMessage');
            auth = auth.remove('loginProgress');
            return auth;

        case 'LOGIN_SUCCESS':
            console.log('+++++++++++++++++++++++++++++++++++++Reducer Authentication success. go back to url: ' + auth.get('loginactualurl'));
            auth = auth.set('isFetching', false);
            auth = auth.set('errorMessage', '');
            auth = auth.set('isAuthenticated', authenticated);
            auth = auth.set('authority', authority);
            auth = auth.remove('usercreds');
            auth = auth.remove('loginMessage');
            auth = auth.remove('loginProgress');
            auth = auth.remove('loginactualurl');
            auth = auth.remove('loginrequest');

            return auth;
        case 'LOGIN_FAILURE':
            auth = auth.set('isFetching', false);
            auth = auth.set('errorMessage', action.message);
            auth = auth.remove('usercreds');
            auth = auth.remove('loginProgress');
            auth = auth.remove('loginactualurl');
            auth = auth.remove('loginrequest');
            return auth;
        case 'LOGOUT_REQUEST':
            auth = auth.set('isFetching', true);
            auth = auth.remove('usercreds');
            return auth;

        case 'LOGOUT_SUCCESS':
            auth = auth.set('isFetching', false);
            auth = auth.set('isAuthenticated', authenticated);
            auth = auth.remove('loginMessage');
            auth = auth.remove('loginProgress');
            auth = auth.remove('loginactualurl');
            auth = auth.remove('loginrequest');
            return auth;
        case 'REGISTER_REQUEST':
            auth = auth.set('isRegistrationFetching', true);
            auth = auth.set('usercreds', action.creds);
            auth = auth.set('registererror', '');
            return auth;
        case 'REGISTER_SUCCESS':
            auth = auth.set('isRegistrationFetching', false);
            auth = auth.set('username', action.user.username);
            auth = auth.set('registrationStep', 2);
            return auth;
        case 'REGISTER_USER_ERROR':
            auth = auth.set('isRegistrationFetching', false);
            auth = auth.set('registrationError', new _immutable2.default.Map(action.registererror));
            return auth;
        case 'REGISTER_SYSTEM_ERROR':
            auth = auth.set('isRegistrationFetching', false);
            auth = auth.set('registererror', action.registererror);
            auth = auth.set('registrationStep', 3);
            return auth;
        case 'REGISTER_INIT':
            auth = auth.set('isRegistrationFetching', false);
            auth = auth.set('registererror', '');
            auth = auth.set('registrationStep', 1);
            return auth;
        case 'REGISTER_VALIDATE':
            console.log('auth reducer email ' + action.user.email);
            var userInputErrors = {};
            if (action.user.email.length === 0) userInputErrors.email = 'required';
            if (action.user.email.length > 0 && !_validator2.default.isEmail(action.user.email)) userInputErrors.email = 'not valid';

            if (action.user.username.length === 0) {
                console.log('username required');
                userInputErrors.username = 'required';
            } else if (!_validator2.default.isLength(action.user.username.trim(), 1, 25)) userInputErrors.username = 'too long (25 chars max)';
            if (action.user.password.length === 0) userInputErrors.password = 'required';else if (action.user.password.length < 8) userInputErrors.password = 'should be greater than 8 characters';

            if (!userInputErrors.password && action.user.password !== action.user.passwordCheck) userInputErrors.passwordCheck = 'password check different from password';
            console.log('Auth reducer action.user.email' + action.user.email);
            console.log('Auth reducer action.user.email is valid' + _validator2.default.isEmail(action.user.email));
            console.log('Auth reducer email error returned' + userInputErrors.email);

            auth = auth.set('registrationError', new _immutable2.default.Map(userInputErrors));
            return auth;

        default:
            return auth;
    }
};

exports.default = authReducer;