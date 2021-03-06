'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appimage = require('components/shared/appimage');

var _appimage2 = _interopRequireDefault(_appimage);

require('./traininglistitem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// if (process.env.BROWSER) {
//     require('./traininglistitem.scss')
// }

var TrainingListItem = function (_React$Component) {
    _inherits(TrainingListItem, _React$Component);

    function TrainingListItem(props) {
        _classCallCheck(this, TrainingListItem);

        var _this = _possibleConstructorReturn(this, (TrainingListItem.__proto__ || Object.getPrototypeOf(TrainingListItem)).call(this, props));

        _this.state = {
            isEditing: false
        };
        return _this;
    }

    _createClass(TrainingListItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
        }
    }, {
        key: 'render',
        value: function render() {
            var title = this.props.training.get('title');
            var secondaryTitle = this.props.training.get('secondaryTitle') ? this.props.training.get('secondaryTitle') : '';
            var shortDescription = this.props.training.get('shortDescription') ? this.props.training.get('shortDescription') : '';
            var trainingid = this.props.training.get('id');
            var isUploading = this.props.training.get('isUploading');
            isUploading = isUploading == undefined ? false : true;
            var duration = this.props.training.get('duration') ? this.props.training.get('duration') / 8 : '0';
            var onlydays = Math.round(duration);
            var dayString = '';
            if (onlydays < 2) dayString = ' day';else dayString = ' days';
            return _react2.default.createElement(
                'div',
                { className: 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-grid mdl-grid--no-spacing blockborder trainingslistitem' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(_appimage2.default, { ref: 'uploadcomp', api: 'training', imgid: trainingid, isUploading: isUploading })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            title
                        ),
                        _react2.default.createElement(
                            'h5',
                            null,
                            secondaryTitle
                        )
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone ellipsis multiline shortdescription' },
                        shortDescription
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(
                            'span',
                            { className: 'promo' },
                            '20%'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' },
                        _react2.default.createElement('div', { className: 'buttonwrap' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(
                            'span',
                            { className: 'duration' },
                            duration + '' + dayString
                        )
                    )
                )
            );
        }
    }]);

    return TrainingListItem;
}(_react2.default.Component);

exports.default = TrainingListItem;