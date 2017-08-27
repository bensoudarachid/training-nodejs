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
    require('./trainingcommandpanel.scss');
}

var TrainingCommandPanel = function (_React$Component) {
    _inherits(TrainingCommandPanel, _React$Component);

    function TrainingCommandPanel(props) {
        _classCallCheck(this, TrainingCommandPanel);

        var _this = _possibleConstructorReturn(this, (TrainingCommandPanel.__proto__ || Object.getPrototypeOf(TrainingCommandPanel)).call(this, props));

        _this.state = {
            error: null
        };
        return _this;
    }

    _createClass(TrainingCommandPanel, [{
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

        // renderOld() {
        //   return (
        //     <form onSubmit={this.handleCreate.bind(this)}>
        //           <input type="text" placeholder="What do I need to do?" ref="searchInput" />
        //               <button>Create</button>
        //               {this.renderError()}
        //       </form>
        //     )
        // }

    }, {
        key: 'render',
        value: function render() {
            var errorClass = this.state.error ? 'error' : '';

            return _react2.default.createElement(
                'div',
                { id: 'trainingcommandpanel',
                    className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                _react2.default.createElement(
                    'form',
                    {
                        className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone',
                        onSubmit: this.handleSearch.bind(this) },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--10-col mdl-cell--7-col-tablet mdl-cell--3-col-phone' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mdl-textfield tf mdl-js-textfield' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', ref: 'searchInput', id: 'searchInput' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label', htmlFor: 'searchInput' },
                                    'Search...'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
                            _react2.default.createElement(
                                'button',
                                { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored ' },
                                'Search'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                        _react2.default.createElement(
                            'button',
                            { className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items',
                                onClick: this.handleNew.bind(this) },
                            'New'
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
        key: 'handleSearch',
        value: function handleSearch(event) {
            console.log('handle search call');
            event.preventDefault();

            // const searchInput = this.refs.searchInput
            // const title = searchInput.value
            // const validateInput = this.validateInput(title)
            // if (validateInput) {
            //   this.setState({
            //     error: validateInput
            //   })
            //   return
            // }

            // this.setState({
            //   error: null
            // })
            // // this.props.createTask(title);
            // this.props.actions.createTraining(title)
            // this.refs.searchInput.value = ''
        }
    }, {
        key: 'handleNew',
        value: function handleNew(event) {
            console.log('handle New call');
            event.preventDefault();
            this.props.actions.newTraining();
            // window.routerHistory.push('trainings/item/new')
        }

        // validateInput(title) {
        //   if (!title) {
        //     return 'Please enter a title.'
        //   // } else if (_.find(this.props.trainings, (training) => training.get('title') === title)) {
        //   } else if (this.props.trainings.find((training) =>  training.get('title') === title) ){
        //     return 'Title already exists.'
        //   } else {
        //     return null
        //   }
        // }

    }]);

    return TrainingCommandPanel;
}(_react2.default.Component);

exports.default = TrainingCommandPanel;