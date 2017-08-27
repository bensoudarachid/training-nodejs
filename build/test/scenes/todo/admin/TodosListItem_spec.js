'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _todoslistitem = require('scenes/todo/admin/todoslistitem');

var _todoslistitem2 = _interopRequireDefault(_todoslistitem);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _mocha = require('mocha');

var _immutable = require('immutable');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _actions = require('services/actions');

var _actions2 = _interopRequireDefault(_actions);

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

// import sinon from 'sinon'
var initialState = {};
// import configureMockStore from 'redux-mock-store'

//import Immutable from 'immutable'

var logger = (0, _reduxLogger2.default)();

// const mockStore = configureMockStore([ thunk ])
// const mockStoreInitialized = mockStore({ })
var mockStoreInitialized = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
    };
}

var TodosListItemConn = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_todoslistitem2.default);

var renderIntoDocument = _reactAddonsTestUtils2.default.renderIntoDocument,
    findRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithClass = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;


(0, _mocha.describe)('TodosListItem', function () {

    var todo = (0, _immutable.Map)({ id: 2, task: 'Redux.', completed: false });
    var todofetch = (0, _immutable.Map)({ id: 2, task: 'Redux updated nock baby.', completed: false });

    (0, _mocha.beforeEach)(function () {
        console.log('TodosListItem test. before each test now');
        (0, _nock2.default)('http://127.0.0.1:8081').post('/api/todo/updatetodo').query(todo).reply(200, todofetch);
    });

    (0, _mocha.afterEach)(function () {
        _nock2.default.cleanAll();
    });

    var index = 3;
    // let filteropen = true
    // let filterclosed = true
    // beforeEach(function() {
    //   let todos = List.of(
    //     Map({id: 1, task: 'React', completed: false}),
    //     Map({id: 2, task: 'Redux', completed: false}),
    //     Map({id: 3, task: 'Immutable', completed: false}),
    //     Map({id: 4, task: 'Wanna3', completed: true})
    //   )
    //   let filteropen = true
    //   let filterclosed = true
    // })

    (0, _mocha.it)('renders one single item', function () {
        // function handleClick() { done() }
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_todoslistitem2.default, { key: index, todo: todo }));
        (0, _chai.expect)(wrapper.find('.todoslistitem')).to.have.length(1);
    });
    (0, _mocha.it)('renders finds 3 buttons', function () {
        // function handleClick() { done() }
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_todoslistitem2.default, { key: index, todo: todo }));
        (0, _chai.expect)(wrapper.find('button')).to.have.length(3);
        // console.log('TodosListItem spec. renders finds 3 buttons html: '+wrapper.html())
    });
    (0, _mocha.it)('renders finds Edit button', function () {
        // function handleClick() { done() }
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_todoslistitem2.default, { key: index, todo: todo }));
        var but = wrapper.find('.editbutton');
        (0, _chai.expect)(but).to.have.length(1);
        // but.onEditClick = sinon.spy()
        // const onButtonClick = sinon.spy()

        // console.log('TodosListItem spec. renders finds Edi7t button. Html: '+but.html())
        // but.simulate('click')
        // but = wrapper.find('.savebutton')
        // but.simulate('click')

        // Simulate.click(but)
        // expect(but.onEditClick).to.have.property('callCount', 2)
        // expect(but.onSaveClick.called).to.be.ok()
    });
    // it('renders and finds Edit button tani', function () {
    //   const dispatch = sinon.spy(mockStoreInitialized, 'dispatch')
    //   const component = renderIntoDocument(
    //     <Provider store={mockStoreInitialized}>
    //       <TodosListItemConn key={index} todo={todo} />
    //     </Provider>
    //   )

    //   var buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    //   expect(buttons).to.have.length(3)
    //   Simulate.click(buttons[0])

    //   buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    //   Simulate.click(buttons[0])
    // })
});