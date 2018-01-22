'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bigcalendaredit = require('../../../components/shared/bigcalendaredit');

var _bigcalendaredit2 = _interopRequireDefault(_bigcalendaredit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');

if (process.env.BROWSER) {
    require('./trainingschedule.scss');
}

var TrainingSchedule = function (_React$Component) {
    _inherits(TrainingSchedule, _React$Component);

    function TrainingSchedule(props) {
        _classCallCheck(this, TrainingSchedule);

        return _possibleConstructorReturn(this, (TrainingSchedule.__proto__ || Object.getPrototypeOf(TrainingSchedule)).call(this, props));
    }

    _createClass(TrainingSchedule, [{
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

            var training = this.props.trainingappmap.get('edittraining');
            if (!training) return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap',
                    style: {
                        width: '55px',
                        height: '55px'
                    } })
            );

            var id = training == undefined ? '' : training.get('id');

            if (!auth.get('isAuthenticated')) {
                console.log('TrainingSchedule render : SORRY. NOT AUTHENTICATED!');
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Needs authentication'
                    )
                );
            } else {
                var date1 = new Date(2001, 0, 7, 10, 30, 0, 0);
                var date2 = new Date(2001, 0, 7, 12, 0, 0, 0);

                return _react2.default.createElement(
                    'div',
                    { className: 'trainingschedule blockborder' },
                    _react2.default.createElement(_bigcalendaredit2.default, { trainingappmap: this.props.trainingappmap, actions: this.props.actions })
                );
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Training schedule componentWillUnmount');
            this.props.actions.loadEditTraining(undefined);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            TrainingSchedule.fetchData(this.props.actions, this.props.params);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            componentHandler.upgradeDom();
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            console.log('Training list fetch data. Params = ' + require('util').inspect(params, false, null));
            console.log('Training schedule. get training! param = ' + util.inspect(params.id, false, null));

            return actions.retrieveTrainingDispatcher(params);
        }
    }]);

    return TrainingSchedule;
}(_react2.default.Component);

exports.default = TrainingSchedule;