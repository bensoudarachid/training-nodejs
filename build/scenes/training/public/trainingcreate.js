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

if (process.env.BROWSER) {
    require('./trainingcreate.scss');
}

var TrainingCreate = function (_React$Component) {
    _inherits(TrainingCreate, _React$Component);

    function TrainingCreate(props) {
        _classCallCheck(this, TrainingCreate);

        var _this = _possibleConstructorReturn(this, (TrainingCreate.__proto__ || Object.getPrototypeOf(TrainingCreate)).call(this, props));

        _this.state = {
            error: null
        };
        return _this;
    }

    _createClass(TrainingCreate, [{
        key: 'renderError',
        value: function renderError() {
            if (!this.state.error) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                { style: {
                        color: 'red'
                    } },
                this.state.error
            );
        }
<<<<<<< HEAD
=======

        // renderOld() {
        //   return (
        //     <form onSubmit={this.handleCreate.bind(this)}>
        //           <input type="text" placeholder="What do I need to do?" ref="createInput" />
        //               <button>Create</button>
        //               {this.renderError()}
        //       </form>
        //     )
        // }

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    }, {
        key: 'render',
        value: function render() {
            var errorClass = this.state.error ? 'error' : '';

            return _react2.default.createElement(
                'div',
                { id: 'trainingcreate',
                    className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                    'form',
                    { className: 'mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone',
                        onSubmit: this.handleCreate.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-textfield tf mdl-js-textfield' },
                            _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'createInput', id: 'createInput' }),
                            _react2.default.createElement(
                                'label',
                                { className: 'mdl-textfield__label', htmlFor: 'createInput' },
                                'New training...'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(
                            'button',
                            { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' },
                            'Create'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'bgp editsaveblock pad mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                    _react2.default.createElement(
                        'div',
                        { className: errorClass },
                        this.state.error
                    )
                )
            );
        }
    }, {
        key: 'handleCreate',
        value: function handleCreate(event) {
<<<<<<< HEAD
=======
            //    console.log('handle create call')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            event.preventDefault();

            var createInput = this.refs.createInput;
            var title = createInput.value;
            var validateInput = this.validateInput(title);
            if (validateInput) {
                this.setState({
                    error: validateInput
                });
                return;
            }

            this.setState({
                error: null
            });
<<<<<<< HEAD
=======
            // this.props.createTask(title);
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            this.props.actions.createTraining(title);
            this.refs.createInput.value = '';
        }
    }, {
        key: 'validateInput',
        value: function validateInput(title) {
            if (!title) {
                return 'Please enter a title.';
<<<<<<< HEAD
=======
                // } else if (_.find(this.props.trainings, (training) => training.get('title') === title)) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            } else if (this.props.trainings.find(function (training) {
                return training.get('title') === title;
            })) {
                return 'Title already exists.';
            } else {
                return null;
            }
        }
    }]);

    return TrainingCreate;
}(_react2.default.Component);

exports.default = TrainingCreate;