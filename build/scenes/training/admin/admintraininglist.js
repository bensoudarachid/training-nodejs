'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _admintraininglistitem = require('./admintraininglistitem');

var _admintraininglistitem2 = _interopRequireDefault(_admintraininglistitem);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { ThreeBounce } from 'better-react-spinkit'


if (process.env.BROWSER) {
  require('./admintraininglist.scss');
}

var AdminTrainingList = function (_React$Component) {
  _inherits(AdminTrainingList, _React$Component);

  function AdminTrainingList(props) {
    _classCallCheck(this, AdminTrainingList);

    // console.log('training list. Mixin in constructor')
    var _this = _possibleConstructorReturn(this, (AdminTrainingList.__proto__ || Object.getPrototypeOf(AdminTrainingList)).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  _createClass(AdminTrainingList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
    }

    // getItems() {
    //   if (this.props.trainings) {
    //     return this.props.trainings.filter(
    //       (item) => 
    //         item.get('completed') && this.props.filterclosed ||
    //         !item.get('completed') && this.props.filteropen
    //     )
    //     // console.log('training list get items. render items. Size = '+listtrainings.size)
    //   }
    //   return Immutable.List([])
    // }

  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var items = this.props.trainings;
      // const props = _.omit(this.props, 'trainings');
      // console.log('training list. render items. Size = '+items.size)

      return items.map(function (training, index) {
        // console.log('training list. index = '+index)
        return _react2.default.createElement(_admintraininglistitem2.default, { ind: index, training: training, actions: _this2.props.actions });
      });
    }

    // <div className='trainingslist'>
    //     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
    //       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><p>Heeee! The admin list</p></div>
    //     </div>
    // </div>

  }, {
    key: 'render',
    value: function render() {
      // console.log('Hi there from training list List. Props: '+this.props.trainings.size)
      // <div className="mdl-layout-spacer"></div>
      // const title = this.props.training.get('title')
      // if(this.props.trainings==undefined)
      //   return (
      //     <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' style={{width:'55px',height:'55px'}}></div>
      // )

      return _react2.default.createElement(
        'div',
        { className: 'admintrainingslist', style: { width: '100%' } },
        this.props.trainings == undefined ? _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active', style: { width: '55px', height: '55px' } }) : _react2.default.createElement(
          'span',
          { className: 'admintrainingslistwrap mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
          this.renderItems()
        )
      );
    }
    // renderNew() {
    //   // console.log('Hi there from List. Props: '+this.props);
    //   return (
    //     <div>
    //       {this.renderItems()}
    //     </div>
    //   )
    // }

  }]);

  return AdminTrainingList;
}(_react2.default.Component);

exports.default = AdminTrainingList;