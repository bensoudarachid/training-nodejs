'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _todoapp = require('../../components/todoapp');

var _todoapp2 = _interopRequireDefault(_todoapp);

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _immutable = require('immutable');

var _mocha = require('mocha');

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {List, Map} from 'immutable'

// const {renderIntoDocument,//findRenderedDOMComponentsWithTag,
//        scryRenderedDOMComponentsWithTag} = TestUtils

// import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react'
(0, _mocha.describe)('TodoApp', function () {
  var auth = {
    isAuthenticated: true
  };
  var todo = (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false });
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

  (0, _mocha.it)('mounts correctly', function () {
    // function handleClick() { done() }
    var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, task: 'React', completed: false }), (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false }), (0, _immutable.Map)({ id: 3, task: 'Immutable', completed: false }), (0, _immutable.Map)({ id: 4, task: 'Wanna3', completed: true }));
    // const stub =sinon.stub(TodoApp, 'componentDidMount', () => { todos })
    var stub = _sinon2.default.stub(_todoapp2.default.prototype, 'componentDidMount').returns(todos);
    // sinon.spy(TodoApp.prototype, 'componentDidMount')
    // const props = {
    //   auth
    // }
    // const wrapper = 
    // mount(<TodoApp {...props} />)
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_todoapp2.default, null));
    (0, _chai.expect)(_todoapp2.default.prototype.componentDidMount).to.have.property('callCount', 1);
    stub.restore();
    console.log('TodoApp spec. mounts correctly. html: ' + wrapper.html());
  });
});