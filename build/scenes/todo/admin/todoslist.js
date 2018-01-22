'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _todoslistitem = require('./todoslistitem');

var _todoslistitem2 = _interopRequireDefault(_todoslistitem);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./todoslist.scss');
}

var TodosList = function (_React$Component) {
    _inherits(TodosList, _React$Component);

    function TodosList(props) {
        _classCallCheck(this, TodosList);

<<<<<<< HEAD
=======
        // console.log('todo list. Mixin in constructor')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var _this = _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(TodosList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
<<<<<<< HEAD
=======
            //    console.log('mounted')
            // componentHandler.upgradeDom()
            // require('exports-loader?mdl=componentHandler!material-design-lite/material').upgradeDom()
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
<<<<<<< HEAD
            componentHandler.upgradeAllRegistered();
            console.log('componentHandler=' + require('util').inspect(componentHandler, false, null));
=======
            //    console.log('updated')
            componentHandler.upgradeAllRegistered();
            console.log('componentHandler=' + require('util').inspect(componentHandler, false, null));
            // componentHandler.upgradeAllRegistered()
            // require('exports-loader?mdl=componentHandler!material-design-lite/material').upgradeAllRegistered()
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        }
    }, {
        key: 'getItems',
        value: function getItems() {
            var _this2 = this;

<<<<<<< HEAD
=======
            // console.log('todo list filteropen ' + this.props.filteropen)
            // console.log('todo list filterclosed ' + this.props.filterclosed)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            if (this.props.todos) {
                return this.props.todos.filter(function (item) {
                    return item.get('completed') && _this2.props.filterclosed || !item.get('completed') && _this2.props.filteropen;
                });
<<<<<<< HEAD
=======
                // console.log('todo list get items. render items. Size = '+listtodos.size)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            }
            return _immutable2.default.List([]);
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this3 = this;

            var items = this.getItems();
<<<<<<< HEAD

            return items.map(function (todo, index) {
                return _react2.default.createElement(_todoslistitem2.default, { ind: index, todo: todo, actions: _this3.props.actions });
            });
        }
    }, {
        key: 'render',
        value: function render() {
=======
            // const props = _.omit(this.props, 'todos');
            // console.log('todo list. render items. Size = '+items.size)

            return items.map(function (todo, index) {
                // console.log('todo list. index = '+index)
                return _react2.default.createElement(_todoslistitem2.default, { ind: index, todo: todo, actions: _this3.props.actions });
                // return <div style={{width:'60%',margin:'auto',backgroundColor:'orange'}}>WOOOOOW {todo.get('id')}</div>
            });
        }

        // renderO() {
        //   if(this.props.todos==undefined)
        //     return (
        //       <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' style={{width:'55px',height:'55px'}}></div>
        //     )
        //   return (
        //     <div className='todoslist'>
        //     {this.renderItems()}
        //     </div>
        //   )
        // }

    }, {
        key: 'render',
        value: function render() {
            // console.log('Hi there from List. Props: '+this.props);
            // {this.props.todos==undefined?
            //           <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
            //         :
            //           <div/>
            // }
            // Putting <div></div> instead of <span></span> produces a ununderstandlable scroll mess!
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            return _react2.default.createElement(
                'div',
                { className: 'todoslist' },
                this.props.todos == undefined ? _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active', style: {
                        width: '55px',
                        height: '55px'
                    } }) : _react2.default.createElement(
                    'span',
                    null,
                    this.renderItems()
                )
            );
        }
    }]);

    return TodosList;
}(_react2.default.Component);

exports.default = TodosList;