
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Register from 'scenes/registration/register';
import { expect, assert } from 'chai';
//import Immutable from 'immutable'
import { shallow } from 'enzyme';
import sinon from 'sinon';
import actions from 'services/actions';
import { describe, beforeEach, afterEach, it } from 'mocha';
import { List, Map } from 'immutable';
import thunk from 'redux-thunk';
import nock from 'nock';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store'
import rootReducer from 'services/rootreducer';
import { Simulate } from 'react-addons-test-utils';
// import sinonChai from 'sinon-chai'
// chai.use(sinonChai)

// const logger = createLogger();
const initialState = {};
const logger = createLogger();

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


const { renderIntoDocument, findRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag } = TestUtils;

describe('Register', () => {

  // const registration = Map({username: 'abbas', email: 'hanalik@gmail.com', password: 'lala'})
  // const todofetch = Map({id: 2, task: 'Redux updated nock baby.', completed: false})
  // var auth = Map({registererror:'Scheiße',isFetching:false,registrationStep:1})
  var auth;
  beforeEach(() => {
    console.log('Register test. before each test now');
    // nock('http://abbaslearn.localhost:8083/').post('/register').query(registration).reply(200, '')
    auth = Map({ registererror: 'Scheiße', isFetching: false, registrationStep: 1 });
  });

  // afterEach(() => {
  //   nock.cleanAll()
  // })

  let index = 3;

  // it('tests simple query', function () {
  //   const wrapper = shallow(
  //     <Register auth={auth} />
  //   )
  //   console.log('Register spec. : '+wrapper.html())

  // })
});