
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TodosList from '../../components/todos-list'
import TodosListItem from '../../components/todos-list-item'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import {describe, beforeEach, it} from 'mocha'
import {List, Map} from 'immutable'

const {renderIntoDocument,//findRenderedDOMComponentsWithTag,
       scryRenderedDOMComponentsWithTag} = TestUtils

describe('TodosList', () => {
  
  const todos = List.of(
      Map({id: 1, task: 'React', completed: false}),
      Map({id: 2, task: 'Redux', completed: false}),
      Map({id: 3, task: 'Immutable', completed: false}),
      Map({id: 4, task: 'Wanna3', completed: true})
    )
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
  it('find 4 TodosListItem components', function () {
    const filteropen = true
    const filterclosed = true
    // function handleClick() { done() }
    
    const wrapper = shallow(
      <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    )
    expect(wrapper.find('TodosListItem')).to.have.length(4)
    console.log('TodosList spec. find 4 TodosListItem components. html: '+wrapper.html())

  })


  it('renders a list with only the open items if only filterclosed is true', () => {
    // const todos = List.of(
    //   Map({id: 1, task: 'React', completed: false}),
    //   Map({id: 2, task: 'Redux', completed: false}),
    //   Map({id: 3, task: 'Immutable', completed: false}),
    //   Map({id: 4, task: 'Wanna3', completed: true})
    // )
    const filteropen = false
    const filterclosed = true
    // const filter = 'closed'
    // const filter = 'all'
    const component = renderIntoDocument(
      <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    )
    // console.log('component = ')
    // console.log( component )
    const items = scryRenderedDOMComponentsWithTag(component, 'tr')

    expect(items.length).to.equal( 1+1)
    expect(items[1].textContent).to.contain('Wanna3')
    // expect(items[2].textContent).to.contain('Redux')
  })
  it('renders a list with only the open items if only filteropen is true', () => {
    const todos = List.of(
      Map({id: 1, task: 'React', completed: false}),
      Map({id: 2, task: 'Redux', completed: false}),
      Map({id: 3, task: 'Immutable', completed: false}),
      Map({id: 4, task: 'Wanna3', completed: true})
    )
    const filteropen = true
    const filterclosed = false
    // const filter = 'closed'
    // const filter = 'all'
    const component = renderIntoDocument(
      <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    )
    // console.log('component = ')
    // console.log( component )
    const items = scryRenderedDOMComponentsWithTag(component, 'tr')

    expect(items.length).to.equal( 3+1)
    expect(items[1].textContent).to.contain('React')
    expect(items[2].textContent).to.contain('Redux')
  })
  it('renders a list with only the active items if all filter are true', () => {
    const todos = List.of(
      Map({id: 1, task: 'React', completed: false}),
      Map({id: 2, task: 'Redux', completed: false}),
      Map({id: 3, task: 'Immutable', completed: false}),
      Map({id: 4, task: 'Wanna3', completed: true})
    )
    const filteropen = true
    const filterclosed = true
    const component = renderIntoDocument(
      <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    )
    const items = scryRenderedDOMComponentsWithTag(component, 'tr')
    expect(items.length).to.equal( todos.size+1)
    expect(items[1].textContent).to.contain('React')
    expect(items[2].textContent).to.contain('Redux')
  })

})