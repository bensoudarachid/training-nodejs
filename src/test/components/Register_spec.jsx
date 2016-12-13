
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Register from '../../components/register'
import {expect, assert} from 'chai'
//import Immutable from 'immutable'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import actions from '../../redux/actions'
import {describe, beforeEach, afterEach, it} from 'mocha'
import {List, Map} from 'immutable'
import thunk from 'redux-thunk'
import nock from 'nock'
import { createStore, applyMiddleware } from 'redux' 
import createLogger from 'redux-logger'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
// import configureMockStore from 'redux-mock-store'
import rootReducer from '../../redux/reducers' 
import {Simulate} from 'react-addons-test-utils'
// import sinonChai from 'sinon-chai'
// chai.use(sinonChai)

// const logger = createLogger();
const initialState = {}  
const logger = createLogger()

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


const {renderIntoDocument,findRenderedDOMComponentsWithClass,scryRenderedDOMComponentsWithClass,
       scryRenderedDOMComponentsWithTag} = TestUtils

describe('Register', () => {
  
  // const registration = Map({username: 'abbas', email: 'hanalik@gmail.com', password: 'lala'})
  // const todofetch = Map({id: 2, task: 'Redux updated nock baby.', completed: false})
  // var auth = Map({registererror:'Scheiße',isFetching:false,registrationStep:1})
  var auth 
  beforeEach(() => {
    console.log('Register test. before each test now')
    // nock('http://abbaslearn.localhost:8083/').post('/register').query(registration).reply(200, '')
    auth = Map({registererror:'Scheiße',isFetching:false,registrationStep:1})
  })

  // afterEach(() => {
  //   nock.cleanAll()
  // })
  
  let index = 3

  it('tests simple query', function () {
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
    const wrapper = shallow(
      <Register auth={auth} />
    )
//    expect(wrapper.find('button')).to.have.length(3)
    console.log('Register spec. : '+wrapper.html())

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
  })
})
