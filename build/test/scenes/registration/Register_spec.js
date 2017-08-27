'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _register = require('scenes/registration/register');

var _register2 = _interopRequireDefault(_register);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _actions = require('services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _mocha = require('mocha');

var _immutable = require('immutable');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRedux = require('react-redux');

var _rootreducer = require('services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import sinonChai from 'sinon-chai'
// chai.use(sinonChai)

// const logger = createLogger();

// import configureMockStore from 'redux-mock-store'
var initialState = {};
//import Immutable from 'immutable'

var logger = (0, _reduxLogger2.default)();

// const mockStore = configureMockStore([ thunk ])
// const mockStoreInitialized = mockStore({ })
// const mockStoreInitialized = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

// function mapStateToProps(state) {
//   return state
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
//   }
// }

// var RegisterConn = connect(mapStateToProps, mapDispatchToProps)(Register)


var renderIntoDocument = _reactAddonsTestUtils2.default.renderIntoDocument,
    findRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;


(0, _mocha.describe)('Register', function () {

    // const registration = Map({username: 'abbas', email: 'hanalik@gmail.com', password: 'lala'})
    // const todofetch = Map({id: 2, task: 'Redux updated nock baby.', completed: false})
    // var auth = Map({registererror:'Scheiße',isFetching:false,registrationStep:1})
    var auth;
    (0, _mocha.beforeEach)(function () {
        console.log('Register test. before each test now');
        // nock('http://abbaslearn.localhost:8083/').post('/register').query(registration).reply(200, '')
        auth = (0, _immutable.Map)({ registererror: 'Scheiße', isFetching: false, registrationStep: 1 });
    });

    // afterEach(() => {
    //   nock.cleanAll()
    // })

    var index = 3;

    // it('tests simple query', function () {
    //   const wrapper = shallow(
    //     <Register auth={auth} />
    //   )
    //   console.log('Register spec. : '+wrapper.html())

    // })
});