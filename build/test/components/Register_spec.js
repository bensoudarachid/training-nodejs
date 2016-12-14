'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _register = require('../../components/register');

var _register2 = _interopRequireDefault(_register);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _actions = require('../../redux/actions');

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

var _reducers = require('../../redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

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


var renderIntoDocument = _reactAddonsTestUtils2.default.renderIntoDocument;
var findRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentsWithClass;
var scryRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithClass;
var scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;


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

  (0, _mocha.it)('tests simple query', function () {
    // var stub = sinon.stub(Register.type.prototype, 'componentDidMount').returns({})
    // const dispatch = sinon.spy(mockStoreInitialized, 'dispatch')
    // const component = renderIntoDocument(
    //   <Provider store={mockStoreInitialized}>
    //     <RegisterConn key={index} />
    //   </Provider>
    // )
    // const component = renderIntoDocument(
    //     <Register props={auth} />
    // )
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_register2.default, { auth: auth }));
    //    expect(wrapper.find('button')).to.have.length(3)
    console.log('Register spec. : ' + wrapper.html());

    // var buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    // expect(buttons).to.have.length(2)
    // Simulate.click(buttons[0])

    // expect(dispatch.calledOnce).to.equal(true)

    // buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    // Simulate.click(buttons[0])

    // expect(dispatch.calledOnce).to.equal(true)
    // expect(dispatch.calledWith({ type: 'LOADING_TODO', todo:todo })).is.true

    // const items = scryRenderedDOMComponentsWithClass(component, 'p')
    // console.log('++++++++++++++++++comp html : '+items[0].textContent)
    // console.log(component.store.getState().todoappmap.get('todos').get(0) )
    // expect(items[0].textContent).to.contain(todofetch.get('task'))
    // expect(props.updateTodo.calls.length).toBe(1)
    // expect(props.updateTodo.calledOnce).to.equal(true)
    // spy.should.have.been.calledOnce
    // assert.equal(spy.called, true)
    // expect(spy.calledOnce).is.true
    // expect(dispatch.calledWith({ type: 'UPDATE_TODO', todo })).is.true

    // expect(mockStoreInitialized.getState().todoappmap.get('todos')[0]).to.equal(todofetch)
    // expect(dispatch.calledWith({ type: 'LOADING_TODO', todo: Immutable.Map({ id: 2, task: 'Redux updated nock baby.', completed: false }) })).is.true
    // expect(dispatch.calledWith({ type: 'UPDATE_TODO', todo: Immutable.Map({ id: 2, task: 'Redux updated nock baby.', completed: false }) })).is.true
  });
});