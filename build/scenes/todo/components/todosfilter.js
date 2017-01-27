'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import _ from 'lodash'

if (process.env.BROWSER) {
  require('./todosfilter.scss');
}

var TodosFilter = function (_React$Component) {
  _inherits(TodosFilter, _React$Component);

  function TodosFilter(props) {
    _classCallCheck(this, TodosFilter);

    return _possibleConstructorReturn(this, (TodosFilter.__proto__ || Object.getPrototypeOf(TodosFilter)).call(this, props));

    // this.state = {
    //   error: null
    // };
  }
  // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>open</p></div>
  // <div className='mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone'><p>closed</p></div>

  //defaultChecked={this.props.filterTodos!==undefined}


  _createClass(TodosFilter, [{
    key: 'render',
    value: function render() {
      // console.log('filter todos. filter = '+this.props.filterTodos)
      return _react2.default.createElement(
        'div',
        { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-col-phone' },
        _react2.default.createElement(
          'div',
          { id: 'todosfilter', className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone checkboxinput' },
            _react2.default.createElement(
              'label',
              { className: 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect', 'for': 'checkbox2' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'checkbox1', className: 'mdl-checkbox__input', ref: 'filterOpen', defaultChecked: this.props.filteropen, onClick: this.handleFilterOpen.bind(this) }),
              _react2.default.createElement(
                'span',
                { className: 'mdl-checkbox__label' },
                'Open'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' },
            _react2.default.createElement(
              'label',
              { className: 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkboxinput', 'for': 'checkbox2' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'checkbox2', className: 'mdl-checkbox__input', ref: 'filterTodosClosed', defaultChecked: this.props.filterclosed, onClick: this.handleFilterClosed.bind(this) }),
              _react2.default.createElement(
                'span',
                { className: 'mdl-checkbox__label' },
                'Closed'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'renderOld',
    value: function renderOld() {
      // console.log('filter todos. filter = '+this.props.filterTodos)
      return _react2.default.createElement(
        'div',
        { id: 'todosfilter' },
        _react2.default.createElement(
          'p',
          null,
          'open'
        ),
        _react2.default.createElement('input', { type: 'checkbox', ref: 'filterOpen',
          defaultChecked: this.props.filteropen,
          onClick: this.handleFilterOpen.bind(this) }),
        _react2.default.createElement(
          'p',
          null,
          'closed'
        ),
        _react2.default.createElement('input', { type: 'checkbox', ref: 'filterTodosClosed',
          defaultChecked: this.props.filterclosed,
          onClick: this.handleFilterClosed.bind(this) })
      );
    }
  }, {
    key: 'handleFilterOpen',
    value: function handleFilterOpen(event) {
      // event.preventDefault();
      // const filterOpen = this.refs.filterOpen

      var filterOpen = event.target.checked; //filterAllInput.value
      // var filter = undefined
      // if (filterAllChecked)
      //   filter = 'all'
      // console.log('filter todos. Open. Checkbox'+ event.target.checked+', Filter '+filterOpen)
      this.props.actions.filterTodosOpen(filterOpen);
    }
  }, {
    key: 'handleFilterClosed',
    value: function handleFilterClosed(event) {
      // event.preventDefault();
      // const filterOpen = this.refs.filterOpen

      var filterClosed = event.target.checked; //filterAllInput.value
      // var filter = undefined
      // if (filterAllChecked)
      //   filter = 'all'
      // console.log('filter todos. handle toggle all. Checkbox'+ event.target.checked+', Filter '+filterClosed)
      this.props.actions.filterTodosClosed(filterClosed);
    }
  }, {
    key: 'validateInput',
    value: function validateInput(task) {
      if (!task) {
        return 'Please enter a task.';
        // } else if (_.find(this.props.todos, (todo) => todo.get('task') === task)) {
      } else if (this.props.todos.find(function (todo) {
        return todo.get('task') === task;
      })) {
        return 'Task already exists';
      } else {
        return null;
      }
    }
  }]);

  return TodosFilter;
}(_react2.default.Component);

exports.default = TodosFilter;