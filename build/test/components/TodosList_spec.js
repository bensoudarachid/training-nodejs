'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _todosList = require('../../components/todos-list');

var _todosList2 = _interopRequireDefault(_todosList);

var _todosListItem = require('../../components/todos-list-item');

var _todosListItem2 = _interopRequireDefault(_todosListItem);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _mocha = require('mocha');

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderIntoDocument = _reactAddonsTestUtils2.default.renderIntoDocument;
var scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag;


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

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_todosList2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
    (0, _chai.expect)(wrapper.find('TodosListItem')).to.have.length(4);
    console.log('TodosList spec. find 4 TodosListItem components. html: ' + wrapper.html());
  });

  (0, _mocha.it)('renders a list with only the open items if only filterclosed is true', function () {
    // const todos = List.of(
    //   Map({id: 1, task: 'React', completed: false}),
    //   Map({id: 2, task: 'Redux', completed: false}),
    //   Map({id: 3, task: 'Immutable', completed: false}),
    //   Map({id: 4, task: 'Wanna3', completed: true})
    // )
    var filteropen = false;
    var filterclosed = true;
    // const filter = 'closed'
    // const filter = 'all'
    var component = renderIntoDocument(_react2.default.createElement(_todosList2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
    // console.log('component = ')
    // console.log( component )
    var items = scryRenderedDOMComponentsWithTag(component, 'tr');

    (0, _chai.expect)(items.length).to.equal(1 + 1);
    (0, _chai.expect)(items[1].textContent).to.contain('Wanna3');
    // expect(items[2].textContent).to.contain('Redux')
  });
  (0, _mocha.it)('renders a list with only the open items if only filteropen is true', function () {
    var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, task: 'React', completed: false }), (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false }), (0, _immutable.Map)({ id: 3, task: 'Immutable', completed: false }), (0, _immutable.Map)({ id: 4, task: 'Wanna3', completed: true }));
    var filteropen = true;
    var filterclosed = false;
    // const filter = 'closed'
    // const filter = 'all'
    var component = renderIntoDocument(_react2.default.createElement(_todosList2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
    // console.log('component = ')
    // console.log( component )
    var items = scryRenderedDOMComponentsWithTag(component, 'tr');

    (0, _chai.expect)(items.length).to.equal(3 + 1);
    (0, _chai.expect)(items[1].textContent).to.contain('React');
    (0, _chai.expect)(items[2].textContent).to.contain('Redux');
  });
  (0, _mocha.it)('renders a list with only the active items if all filter are true', function () {
    var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, task: 'React', completed: false }), (0, _immutable.Map)({ id: 2, task: 'Redux', completed: false }), (0, _immutable.Map)({ id: 3, task: 'Immutable', completed: false }), (0, _immutable.Map)({ id: 4, task: 'Wanna3', completed: true }));
    var filteropen = true;
    var filterclosed = true;
    var component = renderIntoDocument(_react2.default.createElement(_todosList2.default, { filteropen: filteropen, filterclosed: filterclosed, todos: todos }));
    var items = scryRenderedDOMComponentsWithTag(component, 'tr');
    (0, _chai.expect)(items.length).to.equal(todos.size + 1);
    (0, _chai.expect)(items[1].textContent).to.contain('React');
    (0, _chai.expect)(items[2].textContent).to.contain('Redux');
  });
});