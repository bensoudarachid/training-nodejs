'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _traininglistitem = require('./traininglistitem');

var _traininglistitem2 = _interopRequireDefault(_traininglistitem);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./traininglist.scss');
}

var TrainingList = function (_React$Component) {
    _inherits(TrainingList, _React$Component);
<<<<<<< HEAD

    function TrainingList(props) {
        _classCallCheck(this, TrainingList);

        var _this = _possibleConstructorReturn(this, (TrainingList.__proto__ || Object.getPrototypeOf(TrainingList)).call(this, props));

=======

    function TrainingList(props) {
        _classCallCheck(this, TrainingList);

        // console.log('training list. Mixin in constructor')
        var _this = _possibleConstructorReturn(this, (TrainingList.__proto__ || Object.getPrototypeOf(TrainingList)).call(this, props));

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(TrainingList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
<<<<<<< HEAD
=======

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

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var items = this.props.trainings;
<<<<<<< HEAD

            return items.map(function (training, index) {
=======
            // const props = _.omit(this.props, 'trainings');
            // console.log('training list. render items. Size = '+items.size)

            return items.map(function (training, index) {
                // console.log('training list. index = '+index)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                return _react2.default.createElement(_traininglistitem2.default, { ind: index, training: training, actions: _this2.props.actions });
            });
        }
    }, {
        key: 'render',
        value: function render() {
<<<<<<< HEAD
            return _react2.default.createElement(
                'div',
                { className: 'traininglist' },
                this.props.trainings == undefined ? _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active', style: {
                        width: '55px',
                        height: '55px'
                    } }) : _react2.default.createElement(
                    'div',
                    { className: 'traininglistwrap mdl-grid mdl-grid--no-spacing' },
                    this.renderItems()
=======
            return (
                // key={'traininglist'+Math.random()}
                _react2.default.createElement(
                    'div',
                    { className: 'traininglist' },
                    this.props.trainings == undefined ? _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active', style: {
                            width: '55px',
                            height: '55px'
                        } }) : _react2.default.createElement(
                        'div',
                        { className: 'traininglistwrap mdl-grid mdl-grid--no-spacing' },
                        this.renderItems()
                    )
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                )
            );
        }
    }, {
        key: 'renderTest',
        value: function renderTest() {
<<<<<<< HEAD
=======
            // console.log('Hi there from List. Props: '+this.props);
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            return _react2.default.createElement('span', null);
        }
    }]);

    return TrainingList;
}(_react2.default.Component);

exports.default = TrainingList;