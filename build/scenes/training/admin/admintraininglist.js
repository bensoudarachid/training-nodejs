'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _admintraininglistitem = require('./admintraininglistitem');

var _admintraininglistitem2 = _interopRequireDefault(_admintraininglistitem);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./admintraininglist.scss');
}

var AdminTrainingList = function (_React$Component) {
    _inherits(AdminTrainingList, _React$Component);

    function AdminTrainingList(props) {
        _classCallCheck(this, AdminTrainingList);

<<<<<<< HEAD
=======
        // console.log('training list. Mixin in constructor')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var _this = _possibleConstructorReturn(this, (AdminTrainingList.__proto__ || Object.getPrototypeOf(AdminTrainingList)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(AdminTrainingList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var items = this.props.trainings;
<<<<<<< HEAD
            if (items == undefined) return _react2.default.createElement('div', null);
            return items.map(function (training, index) {
=======
            // const props = _.omit(this.props, 'trainings');
            // console.log('training list. render items. Size = '+items.size)
            if (items == undefined) return _react2.default.createElement('div', null);
            return items.map(function (training, index) {
                // console.log('training list. index = '+index)
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                return _react2.default.createElement(_admintraininglistitem2.default, { ind: index, training: training, actions: _this2.props.actions });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'admintrainingslist' },
<<<<<<< HEAD
                this.props.trainings == undefined ? _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap',
=======
                this.props.trainings == undefined ?
                //if i use div instead of span, big parts of the view are not clickable!
                _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap',
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    style: {
                        width: '55px',
                        height: '55px'
                    } }) : _react2.default.createElement(
                    'div',
                    { className: 'admintrainingslistwrap mdl-grid mdl-grid--no-spacing' },
                    this.renderItems()
                )
            );
        }
    }]);

    return AdminTrainingList;
}(_react2.default.Component);

exports.default = AdminTrainingList;