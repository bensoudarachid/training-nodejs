'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _betterReactSpinkit = require('better-react-spinkit');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _todosHeader = require('./todos-header');

var _todosHeader2 = _interopRequireDefault(_todosHeader);

var _todosListItem = require('./todos-list-item');

var _todosListItem2 = _interopRequireDefault(_todosListItem);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./todos-list.scss');
}

var TodosList = function (_React$Component) {
  _inherits(TodosList, _React$Component);

  function TodosList(props) {
    _classCallCheck(this, TodosList);

    var _this = _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).call(this, props));

    console.log('todo list. Mixin in constructor');
    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  _createClass(TodosList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this2 = this;

      // console.log('todo list filteropen ' + this.props.filteropen)
      // console.log('todo list filterclosed ' + this.props.filterclosed)
      if (this.props.todos) {
        return this.props.todos.filter(function (item) {
          return item.get('completed') && _this2.props.filterclosed || !item.get('completed') && _this2.props.filteropen;
        });
        // console.log('todo list get items. render items. Size = '+listtodos.size)
      }
      return _immutable2.default.List([]);
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      var items = this.getItems();
      // const props = _.omit(this.props, 'todos');
      // console.log('todo list. render items. Size = '+items.size)

      return items.map(function (todo, index) {
        // console.log('todo list. index = '+index)
        return _react2.default.createElement(_todosListItem2.default, { ind: index, todo: todo, actions: _this3.props.actions });
      });
    }
  }, {
    key: 'renderOld',
    value: function renderOld() {
      // console.log('Hi there from List. Props: '+this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(_todosHeader2.default, null),
          _react2.default.createElement(
            'tbody',
            null,
            this.renderItems()
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('Hi there from List. Props: '+this.props);
      // <div className="mdl-layout-spacer"></div>
      return _react2.default.createElement(
        'div',
        { className: 'todoslist' },
        this.renderItems()
      );
    }
  }, {
    key: 'renderNew',
    value: function renderNew() {
      // console.log('Hi there from List. Props: '+this.props);
      return _react2.default.createElement(
        'div',
        null,
        this.renderItems()
      );
    }
  }]);

  return TodosList;
}(_react2.default.Component);

exports.default = TodosList;