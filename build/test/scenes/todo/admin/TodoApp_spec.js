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

// import {List, Map} from 'immutable'

// const {renderIntoDocument,//findRenderedDOMComponentsWithTag,
//        scryRenderedDOMComponentsWithTag} = TestUtils

describe('TodoApp', () => {
<<<<<<< HEAD:src/test/components/TodoApp_spec.jsx
    const auth = {
        isAuthenticated: true
    }
    const todo = Map({id: 2, task: 'Redux', completed: false})
    let index = 3
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
        const todos = List.of(
            Map({id: 1, task: 'React', completed: false}),
            Map({id: 2, task: 'Redux', completed: false}),
            Map({id: 3, task: 'Immutable', completed: false}),
            Map({id: 4, task: 'Wanna3', completed: true})
        )
        // const stub =sinon.stub(TodoApp, 'componentDidMount', () => { todos })
        const stub = sinon.stub(TodoApp.prototype, 'componentDidMount').returns(todos)
        // sinon.spy(TodoApp.prototype, 'componentDidMount')
        // const props = {
        //   auth
        // }
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
