import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TodosListItem from 'scenes/todo/admin/todoslistitem'
import {expect, assert} from 'chai'
//import Immutable from 'immutable'
import {shallow} from 'enzyme'
// import sinon from 'sinon'
import {describe, beforeEach, afterEach, it} from 'mocha'
import {List, Map} from 'immutable'


import thunk from 'redux-thunk'
import nock from 'nock'
import actions from 'services/actions'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
// import configureMockStore from 'redux-mock-store'
import rootReducer from 'services/rootreducer'
// import sinonChai from 'sinon-chai'
// chai.use(sinonChai)

// const logger = createLogger();
const initialState = {}
const logger = createLogger()

// const mockStore = configureMockStore([ thunk ])
// const mockStoreInitialized = mockStore({ })
const mockStoreInitialized = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch) //we dont need to pass dispatch down anymore. actions are now wrapped
    }
}

var TodosListItemConn = connect(mapStateToProps, mapDispatchToProps)(TodosListItem)


import {
    Simulate
} from 'react-addons-test-utils'

const {
    renderIntoDocument, findRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag
} = TestUtils

describe('TodosListItem', () => {

    const todo = Map({id: 2, task: 'Redux.', completed: false})
    const todofetch = Map({id: 2, task: 'Redux updated nock baby.', completed: false})

    beforeEach(() => {
        console.log('TodosListItem test. before each test now')
        nock('http://127.0.0.1:8081').post('/api/todo/updatetodo').query(todo).reply(200, todofetch)
    })

    afterEach(() => {
        nock.cleanAll()
    })

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

    it('renders one single item', function () {
        // function handleClick() { done() }
        const wrapper = shallow(
            <TodosListItem key={index} todo={todo}/>
        )
        expect(wrapper.find('.todoslistitem')).to.have.length(1)
    })
    it('renders finds 3 buttons', function () {
        // function handleClick() { done() }
        const wrapper = shallow(
            <TodosListItem key={index} todo={todo}/>
        )
        expect(wrapper.find('button')).to.have.length(3)
        // console.log('TodosListItem spec. renders finds 3 buttons html: '+wrapper.html())
    })
    it('renders finds Edit button', function () {
        // function handleClick() { done() }
        const wrapper = shallow(
            <TodosListItem key={index} todo={todo}/>
        )
        var but = wrapper.find('.editbutton')
        expect(but).to.have.length(1)
        // but.onEditClick = sinon.spy()
        // const onButtonClick = sinon.spy()

        // console.log('TodosListItem spec. renders finds Edi7t button. Html: '+but.html())
        // but.simulate('click')
        // but = wrapper.find('.savebutton')
        // but.simulate('click')

        // Simulate.click(but)
        // expect(but.onEditClick).to.have.property('callCount', 2)
        // expect(but.onSaveClick.called).to.be.ok()

    })
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
})
