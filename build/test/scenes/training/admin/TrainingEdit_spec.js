'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _trainingedit = require('scenes/training/admin/trainingedit');

var _trainingedit2 = _interopRequireDefault(_trainingedit);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _actions = require('services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRedux = require('react-redux');

var _rootreducer = require('services/rootreducer');

var _rootreducer2 = _interopRequireDefault(_rootreducer);

var _mocha = require('mocha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import TestUtils from 'react-addons-test-utils'

// import TodosListItem from '../../../../../scenes/todo/admin/todoslistitem'


//import { combineReducers } from 'redux'

// import sinon from 'sinon'
require('sinon-as-promised');
var sinon = require('sinon').sandbox.create();

(0, _mocha.describe)('TrainingEdit', function () {
    var trainingappmap = void 0;
    var auth = void 0;
    // let stubcomponentDidMount
    (0, _mocha.it)('checks fetchdata call and connection to redux store', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var initialState, logger, mockStoreInitialized, mapStateToProps, mapDispatchToProps, TrainingEditConn, component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        mapDispatchToProps = function mapDispatchToProps(dispatch) {
                            return {
                                actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
                            };
                        };

                        mapStateToProps = function mapStateToProps(state) {
                            return state;
                        };

                        // it('checks fetchdata call and connection to redux store', function() {

                        sinon.stub(_actions2.default, 'retrieveTrainingService').resolves({
                            status: 200,
                            data: {
                                id: 5,
                                title: 'Training -------------------------------------Title',
                                secondaryTitle: 'Training -----------------------------Second Title',
                                shortDescription: 'Training ---------------------------Short desc',
                                longDescription: 'Training ----------------------------Long desc'
                            }
                        });
                        // sinon.stub(TrainingEdit, 'fetchData').resolves()
                        initialState = { auth: auth, trainingappmap: trainingappmap };

                        Object.keys(initialState).forEach(function (key) {
                            initialState[key] = _immutable2.default.fromJS(initialState[key]);
                        });

                        console.log('OKKKK #######################  initialState=' + require('util').inspect(initialState, false, null));
                        logger = (0, _reduxLogger2.default)();

                        //This version is complaining these are no reducers
                        // const rootReducer = combineReducers({
                        //   ...auth,
                        //   // app: undefined,
                        //   // todoappmap: todoAppReducer,
                        //   // todoappmap: undefined,
                        //   ...trainingappmap
                        //   // user: userReducer,
                        //   // routing: undefined
                        // })


                        mockStoreInitialized = (0, _redux.createStore)(_rootreducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
                        TrainingEditConn = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_trainingedit2.default);
                        _context.next = 11;
                        return (0, _enzyme.mount)(
                        // const component = mount(
                        //      <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
                        _react2.default.createElement(
                            _reactRedux.Provider,
                            { store: mockStoreInitialized },
                            _react2.default.createElement(TrainingEditConn, { params: { id: '5' } })
                        ));

                    case 11:
                        component = _context.sent;

                        // await sleep(1500);
                        component.update();
                        component.update();
                        component.update();
                        component.update();
                        // console.log('1. component='+require('util').inspect(component.html(), false, null))
                        console.log('1. component=' + require('util').inspect(component.html(), false, null));
                        // console.log('====================='+
                        //   require('util').inspect(mockStoreInitialized.getState().trainingappmap.get('edittraining'), false, null))
                        (0, _chai.expect)(mockStoreInitialized.getState().trainingappmap.get('edittraining').get('shortDescription')).to.contain('Training ---------------------------Short desc');
                        (0, _chai.expect)(_actions2.default.retrieveTrainingService).to.have.property('callCount', 1);
                        // component = await componentDidMount(
                        // component.find('TrainingEdit').componentDidUpdate()
                        component = (0, _enzyme.render)(_react2.default.createElement(
                            _reactRedux.Provider,
                            { store: mockStoreInitialized },
                            _react2.default.createElement(TrainingEditConn, { params: { id: '5' } })
                        ));

                        console.log('2. component=' + require('util').inspect(component.html(), false, null));

                        // expect(component.find('TrainingEdit')).to.have.length(1)
                        // expect(component.find('.mdl-textfield__input')).to.have.length(4)
                        (0, _chai.expect)(component.html()).to.contain('Training -----------------------------Second Title');
                        // expect(component.find('.mdl-spinner')).to.have.length(1)
                        // console.log('component.find(TrainingEdit)='+require('util').inspect(component.find('TrainingEdit'), false, null))

                    case 22:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    })));

    // it('calls fetchData on mount', function () {
    //   sinon.stub(TrainingEdit, 'fetchData')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.fetchData).to.have.property('callCount', 1)
    // })

    // it('contains at least 4 input fields and one field FileUploadInput', function () {

    //   const component = shallow(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(component.find('FileUploadInput')).to.have.length(1)
    //   expect(component.find('.mdl-textfield__input')).to.have.length(4)

    // })

    // it('reacts on title field changes by calling  by calling handleTitleChange', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)

    //   const titleInput = component.find('#title')
    //   titleInput.simulate('change', {target: {value: 'The new Unit'}})
    //   // titleInput.simulate('change', { key: 'ArrowLeft' })
    //   titleInput.simulate('change', {target: {value: 'The new Unit2'}})
    //   expect(TrainingEdit.prototype.handleTitleChange).to.have.property('callCount', 2)
    // })

    // it('reacts on submit by calling handleSave', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)

    //   var but = component.find('button')
    //   // var but = component.find('.mdl-button')
    //   expect(but).to.have.length(2)

    //   but.at(0).simulate('submit')
    //   expect(TrainingEdit.prototype.handleSave).to.have.property('callCount', 1)

    // })

    // it('reacts on delete by calling handleDelete', () => {
    //   sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    //   const component = mount(
    //     <TrainingEdit trainingappmap={trainingappmap} auth={auth}/>
    //   )
    //   expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1)
    //   var but = component.find('button')
    //   expect(but).to.have.length(2)
    //   but.at(1).simulate('click')
    //   expect(TrainingEdit.prototype.handleDelete).to.have.property('callCount', 1)
    // })

    (0, _mocha.beforeEach)(function () {
        // stubcomponentDidMount=sinon.stub(TrainingEdit.prototype, 'componentDidMount')
        auth = new _immutable2.default.Map({
            isFetching: false,
            isRegistrationFetching: false,
            isAuthenticated: true,
            authority: 'ADMIN',
            registrationStep: 1,
            registrationError: {}
        });
        trainingappmap = new _immutable2.default.Map({
            filterOpen: true,
            filterClosed: true,

            edittraining: new _immutable2.default.Map({
                secondaryTitle: 'Abbas',
                shortDescription: 'Abbas ----------------------------------------------is short',
                longDescription: 'Abbas -----------------------------------------------is long',
                duration: 12
            }),
            // loadTrainingImages: false,
            trainings: undefined, //Immutable.List([])
            trainingEditError: _immutable2.default.Map({}),
            isTrainingEditFetching: false
        });
        sinon.stub(_trainingedit2.default.prototype, 'handleSave');
        sinon.stub(_trainingedit2.default.prototype, 'handleDelete');
        sinon.stub(_trainingedit2.default.prototype, 'handleTitleChange');
        // sinon.stub(TrainingEdit.prototype, 'componentDidMount')
        // sinon.stub(TrainingEdit, 'fetchData')
        Object.keys(auth).forEach(function (key) {
            auth[key] = _immutable2.default.fromJS(auth[key]);
        });
        Object.keys(trainingappmap).forEach(function (key) {
            trainingappmap[key] = _immutable2.default.fromJS(trainingappmap[key]);
        });
    });

    // Object
    //     .keys(initialState)
    //     .forEach(key => {
    //       initialState[key] = Immutable.fromJS(initialState[key])
    //     })

    (0, _mocha.afterEach)(function () {
        sinon.restore();
    });
});

function sleep(time) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, time);
    });
}