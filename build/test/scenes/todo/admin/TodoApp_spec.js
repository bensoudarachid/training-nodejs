<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/test/components/TodoApp_spec.jsx
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TodoApp from '../../components/todoapp'
import {expect} from 'chai'
=======

import React from 'react';
import TestUtils from 'react-addons-test-utils';
// import TodoApp from '../../../../../scenes/todo/todoapp'
import TodoApp from 'scenes/todo/todoapp';
import { expect } from 'chai';
>>>>>>> 6e3ff02... webstorm big changes crash:build/test/scenes/todo/admin/TodoApp_spec.js
// import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react'
import sinon from 'sinon';
import { List, Map } from 'immutable';

<<<<<<< HEAD:src/test/components/TodoApp_spec.jsx
import {describe, beforeEach, it} from 'mocha'
import {
    describeWithDOM,
    mount,
    shallow,
    spyLifecycle
} from 'enzyme'
=======
import { describe, beforeEach, it } from 'mocha';
import { describeWithDOM, mount, shallow, spyLifecycle } from 'enzyme';
>>>>>>> 6e3ff02... webstorm big changes crash:build/test/scenes/todo/admin/TodoApp_spec.js
=======
=======
>>>>>>> 9b89bb1... add server build
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _todoapp = require('scenes/todo/todoapp');

var _todoapp2 = _interopRequireDefault(_todoapp);

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _immutable = require('immutable');

var _mocha = require('mocha');

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
<<<<<<< HEAD
>>>>>>> 5de5723... test github push
=======
>>>>>>> 9b89bb1... add server build

// import {List, Map} from 'immutable'

// const {renderIntoDocument,//findRenderedDOMComponentsWithTag,
//        scryRenderedDOMComponentsWithTag} = TestUtils

<<<<<<< HEAD
<<<<<<< HEAD
describe('TodoApp', () => {
<<<<<<< HEAD:src/test/components/TodoApp_spec.jsx
    const auth = {
        isAuthenticated: true
    }
    const todo = Map({id: 2, task: 'Redux', completed: false})
    let index = 3
=======
=======
>>>>>>> 9b89bb1... add server build
// import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react'

// import TodoApp from '../../../../../scenes/todo/todoapp'
(0, _mocha.describe)('TodoApp', function () {
    var auth = {
        isAuthenticated: true
    };
    var todo = (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false });
    var index = 3;
<<<<<<< HEAD
>>>>>>> 5de5723... test github push
=======
>>>>>>> 9b89bb1... add server build
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

<<<<<<< HEAD
<<<<<<< HEAD
    it('mounts correctly', function () {
        // function handleClick() { done() }
        const todos = List.of(
            Map({id: 1, task: 'React', completed: false}),
            Map({id: 2, task: 'Redux', completed: false}),
            Map({id: 3, task: 'Immutable', completed: false}),
            Map({id: 4, task: 'Wanna3', completed: true})
        )
        // const stub =sinon.stub(TodoApp, 'componentDidMount', () => { todos })
        const stub = sinon.stub(TodoApp.prototype, 'componentDidMount').returns(todos)
=======
=======
>>>>>>> 9b89bb1... add server build
    (0, _mocha.it)('mounts correctly', function () {
        // function handleClick() { done() }
        var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, task: 'React', completed: false }), (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false }), (0, _immutable.Map)({ id: 3, task: 'Immutable', completed: false }), (0, _immutable.Map)({ id: 4, task: 'Wanna3', completed: true }));
        // const stub =sinon.stub(TodoApp, 'componentDidMount', () => { todos })
        var stub = _sinon2.default.stub(_todoapp2.default.prototype, 'componentDidMount').returns(todos);
<<<<<<< HEAD
>>>>>>> 5de5723... test github push
=======
>>>>>>> 9b89bb1... add server build
        // sinon.spy(TodoApp.prototype, 'componentDidMount')
        // const props = {
        //   auth
        // }
<<<<<<< HEAD
<<<<<<< HEAD
        // const wrapper = 
        // mount(<TodoApp {...props} />)
        const wrapper = mount(<TodoApp/>)
        expect(TodoApp.prototype.componentDidMount).to.have.property('callCount', 1)
        stub.restore()
        console.log('TodoApp spec. mounts correctly. html: ' + wrapper.html())

    })
})
=======
  const auth = {
    isAuthenticated: true
  };
  const todo = Map({ id: 2, task: 'Redux', completed: false });
  let index = 3;
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

  it('mounts correctly', function () {
    // function handleClick() { done() }
    const todos = List.of(Map({ id: 1, task: 'React', completed: false }), Map({ id: 2, task: 'Redux', completed: false }), Map({ id: 3, task: 'Immutable', completed: false }), Map({ id: 4, task: 'Wanna3', completed: true }));
    // const stub =sinon.stub(TodoApp, 'componentDidMount', () => { todos })
    const stub = sinon.stub(TodoApp.prototype, 'componentDidMount').returns(todos);
    // sinon.spy(TodoApp.prototype, 'componentDidMount')
    // const props = {
    //   auth
    // }
    // const wrapper = 
    // mount(<TodoApp {...props} />)
    const wrapper = mount(React.createElement(TodoApp, null));
    expect(TodoApp.prototype.componentDidMount).to.have.property('callCount', 1);
    stub.restore();
    // console.log('TodoApp spec. mounts correctly. html: '+wrapper.html())
  });
});
>>>>>>> 6e3ff02... webstorm big changes crash:build/test/scenes/todo/admin/TodoApp_spec.js
=======
=======
>>>>>>> 9b89bb1... add server build
        // const wrapper =
        // mount(<TodoApp {...props} />)
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_todoapp2.default, null));
        (0, _chai.expect)(_todoapp2.default.prototype.componentDidMount).to.have.property('callCount', 1);
        stub.restore();
        // console.log('TodoApp spec. mounts correctly. html: '+wrapper.html())
    });
<<<<<<< HEAD
});
>>>>>>> 5de5723... test github push
=======
});
>>>>>>> 9b89bb1... add server build
