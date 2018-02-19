'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _todoslist = require('scenes/todo/admin/todoslist');

var _todoslist2 = _interopRequireDefault(_todoslist);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _mocha = require('mocha');

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderIntoDocument = _reactAddonsTestUtils2.default.renderIntoDocument,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;


(0, _mocha.describe)('TodosList', function () {

    var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, task: 'React', completed: false }), (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false }), (0, _immutable.Map)({ id: 3, task: 'Immutable', completed: false }), (0, _immutable.Map)({ id: 4, task: 'Wanna3', completed: true }));
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
    (0, _mocha.it)('find 4 TodosListItem components', function () {
        var filteropen = true;
        var filterclosed = true;
        // function handleClick() { done() }

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_todoslist2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
        (0, _chai.expect)(wrapper.find('TodosListItem')).to.have.length(4);
        // console.log('TodosList spec. find 4 TodosListItem components. html: '+wrapper.html())
    });

    (0, _mocha.it)('renders a list with only the open items if only filterclosed is true', function () {
        // var componentHandler = window['Google'].mdl.componentHandler
        var filteropen = false;
        var filterclosed = true;
        // const filter = 'closed'
        // const filter = 'all'
        var stub1 = _sinon2.default.stub(_todoslist2.default.prototype, 'componentDidMount');
        var stub2 = _sinon2.default.stub(_todoslist2.default.prototype, 'componentDidUpdate');

        var component = (0, _enzyme.mount)(_react2.default.createElement(_todoslist2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
        // console.log('component = ')
        // console.log( component )
        console.log('component=' + require('util').inspect(component.find('.todoslistitem').length, false, null));
        (0, _chai.expect)(component.find('.todoslistitem')).to.have.length(1);
        // const items = scryRenderedDOMComponentsWithTag(component, 'tr')

        // expect(items.length).to.equal( 1+1)
        // expect(component.find('.todoslistitem').contains('Wanna3')).to.equal(true)
        (0, _chai.expect)(component.text()).to.contain('Wanna3');
        console.log('component.text()=' + require('util').inspect(component.text(), false, null));
        (0, _chai.expect)(_todoslist2.default.prototype.componentDidMount).to.have.property('callCount', 1);
        console.log('expect(TodosList.prototype.componentDidMount).callCount=' + require('util').inspect(_todoslist2.default.prototype.componentDidMount.callCount, false, null));
        (0, _chai.expect)(_todoslist2.default.prototype.componentDidUpdate).to.have.property('callCount', 0);
        stub1.restore();
        stub2.restore();
        // expect(component.find('.todoslistitem').contains('Redux')).to.equal(false)
    });

    // it('renders a list with only the open items if only filteropen is true', () => {
    //   const todos = List.of(
    //     Map({id: 1, task: 'React', completed: false}),
    //     Map({id: 2, task: 'Redux', completed: false}),
    //     Map({id: 3, task: 'Immutable', completed: false}),
    //     Map({id: 4, task: 'Wanna3', completed: true})
    //   )
    //   const filteropen = true
    //   const filterclosed = false
    //   // const filter = 'closed'
    //   // const filter = 'all'
    //   const component = render(
    //     <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    //   )
    //   // console.log('component = ')
    //   // console.log( component )
    //   expect(component.find('.todoslistitem')).to.have.length(3)
    //   // expect(items.length).to.equal( 3+1)
    //   // expect(items[1].textContent).to.contain('React')
    //   // expect(items[2].textContent).to.contain('Redux')
    // })
    // it('renders a list with only the active items if all filter are true', () => {
    //   const todos = List.of(
    //     Map({id: 1, task: 'React', completed: false}),
    //     Map({id: 2, task: 'Redux', completed: false}),
    //     Map({id: 3, task: 'Immutable', completed: false}),
    //     Map({id: 4, task: 'Wanna3', completed: true})
    //   )
    //   const filteropen = true
    //   const filterclosed = true
    //   const component = renderIntoDocument(
    //     <TodosList filteropen={filteropen} filterclosed={filterclosed} todos={todos} />
    //   )
    //   const items = scryRenderedDOMComponentsWithTag(component, 'tr')
    //   expect(items.length).to.equal( todos.size+1)
    //   expect(items[1].textContent).to.contain('React')
    //   expect(items[2].textContent).to.contain('Redux')
    // })
});