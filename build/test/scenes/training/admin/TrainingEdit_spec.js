function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React from 'react';
import Immutable from 'immutable';
// import TestUtils from 'react-addons-test-utils'
import TrainingEdit from 'scenes/training/admin/trainingedit';
// import TodosListItem from '../../../../../scenes/todo/admin/todoslistitem'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import actions from 'services/actions';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

// import sinon from 'sinon'
require('sinon-as-promised');
var sinon = require('sinon').sandbox.create();

import { describe, beforeEach, afterEach, it } from 'mocha';

import rootReducer from 'services/rootreducer';
const initialState = {};
const logger = createLogger();

const mockStoreInitialized = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
  };
}

var TrainingEditConn = connect(mapStateToProps, mapDispatchToProps)(TrainingEdit);

describe('TrainingEdit', () => {
  let trainingappmap;
  let auth;
  // let stubcomponentDidMount
  beforeEach(function () {
    // stubcomponentDidMount=sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    auth = new Immutable.Map({
      isFetching: false,
      isRegistrationFetching: false,
      isAuthenticated: true,
      authority: 'ADMIN',
      registrationStep: 1,
      registrationError: new Immutable.Map({})
    });
    trainingappmap = new Immutable.Map({
      filterOpen: true,
      filterClosed: true,

      edittraining: Immutable.Map({
        secondaryTitle: 'Abbas',
        shortDescription: 'Abbas is short',
        longDescription: 'Abbas is long',
        duration: 12
      }),
      // loadTrainingImages: false,
      trainings: undefined, //Immutable.List([])
      trainingEditError: Immutable.Map({}),
      isTrainingEditFetching: false
    });
    sinon.stub(TrainingEdit.prototype, 'handleSave');
    sinon.stub(TrainingEdit.prototype, 'handleDelete');
    sinon.stub(TrainingEdit.prototype, 'handleTitleChange');
    // sinon.stub(TrainingEdit.prototype, 'componentDidMount')
    // sinon.stub(TrainingEdit, 'fetchData')
  });

  afterEach(function () {
    sinon.restore();
  });

  it('checks fetchdata call and connection to redux store', _asyncToGenerator(function* () {

    sinon.stub(actions, 'retrieveTrainingService').resolves({
      status: 200,
      data: {
        id: 5,
        title: 'Training Title',
        secondaryTitle: 'Training Second Title',
        shortDescription: 'Training Short desc',
        longDescription: 'Training Long desc'
      }
    });
    // sinon.stub(TrainingEdit, 'fetchData').resolves()
    const component = yield mount(React.createElement(
      Provider,
      { store: mockStoreInitialized },
      React.createElement(TrainingEditConn, { trainingappmap: trainingappmap, auth: auth, params: { id: '5' } })
    ));
    expect(actions.retrieveTrainingService).to.have.property('callCount', 1);
    expect(component.find('.mdl-textfield__input')).to.have.length(4);
    expect(component.find('TrainingEdit')).to.have.length(1);
    // console.log('component.find(TrainingEdit)='+require('util').inspect(component.find('TrainingEdit'), false, null))
  }));

  it('calls fetchData on mount', function () {
    sinon.stub(TrainingEdit, 'fetchData');
    const component = mount(React.createElement(TrainingEdit, { trainingappmap: trainingappmap, auth: auth }));
    expect(TrainingEdit.fetchData).to.have.property('callCount', 1);
  });

  it('contains at least 4 input fields and one field FileUploadInput', function () {

    const component = shallow(React.createElement(TrainingEdit, { trainingappmap: trainingappmap, auth: auth }));
    expect(component.find('FileUploadInput')).to.have.length(1);
    expect(component.find('.mdl-textfield__input')).to.have.length(4);
  });

  it('reacts on title field changes by calling  by calling handleTitleChange', () => {
    sinon.stub(TrainingEdit.prototype, 'componentDidMount');
    const component = mount(React.createElement(TrainingEdit, { trainingappmap: trainingappmap, auth: auth }));
    expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1);

    const titleInput = component.find('#title');
    titleInput.simulate('change', { target: { value: 'The new Unit' } });
    // titleInput.simulate('change', { key: 'ArrowLeft' })
    titleInput.simulate('change', { target: { value: 'The new Unit2' } });
    expect(TrainingEdit.prototype.handleTitleChange).to.have.property('callCount', 2);
  });

  it('reacts on submit by calling handleSave', () => {
    sinon.stub(TrainingEdit.prototype, 'componentDidMount');
    const component = mount(React.createElement(TrainingEdit, { trainingappmap: trainingappmap, auth: auth }));
    expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1);

    var but = component.find('button');
    // var but = component.find('.mdl-button')
    expect(but).to.have.length(2);

    but.at(0).simulate('submit');
    expect(TrainingEdit.prototype.handleSave).to.have.property('callCount', 1);
  });

  it('reacts on delete by calling handleDelete', () => {
    sinon.stub(TrainingEdit.prototype, 'componentDidMount');
    const component = mount(React.createElement(TrainingEdit, { trainingappmap: trainingappmap, auth: auth }));
    expect(TrainingEdit.prototype.componentDidMount).to.have.property('callCount', 1);
    var but = component.find('button');
    expect(but).to.have.length(2);
    but.at(1).simulate('click');
    expect(TrainingEdit.prototype.handleDelete).to.have.property('callCount', 1);
  });
});