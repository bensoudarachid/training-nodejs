'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _fileuploadinput = require('components/shared/fileuploadinput');

var _fileuploadinput2 = _interopRequireDefault(_fileuploadinput);

var _appimage = require('components/shared/appimage');

var _appimage2 = _interopRequireDefault(_appimage);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

require('./trainingedit.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrainingEdit = function (_React$Component) {
    _inherits(TrainingEdit, _React$Component);

    function TrainingEdit(props) {
        _classCallCheck(this, TrainingEdit);

        var _this = _possibleConstructorReturn(this, (TrainingEdit.__proto__ || Object.getPrototypeOf(TrainingEdit)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(TrainingEdit, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var auth = this.props.auth;

            var training = this.props.trainingappmap.get('edittraining');

            var isTrainingEditFetching = this.props.trainingappmap.get('isTrainingEditFetching');
            var trainingEditError = this.props.trainingappmap.get('trainingEditError');
            var id = training == undefined ? '' : training.get('id');
            //        console.log('trainingedit.js render. training = ' + require('util').inspect(training, false, null))
            //        console.log('trainingedit.js render. training id = ' + require('util').inspect(id, false, null))
            var title = training == undefined ? '' : training.get('title');
            var secondaryTitle = training == undefined ? '' : training.get('secondaryTitle');
            var shortDescription = training == undefined ? '' : training.get('shortDescription');
            var longDescription = training == undefined ? '' : training.get('longDescription');
            var duration = training == undefined ? '' : training.get('duration');
            var needActionConfirmation = training == undefined ? '' : training.get('needDeleteConfirmation');

            var error = training == undefined ? '' : training.get('error');
            var errorClass = error ? 'error' : '';
            var saving = training == undefined ? '' : training.get('saving');
            if (saving == undefined) saving = false;
            var disabled = saving ? 'disabled' : '';

            if (!auth.get('isAuthenticated')) return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Needs authentication'
                )
            );else if (training == undefined) return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('span', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap',
                    style: {
                        width: '55px',
                        height: '55px'
                    } })
            );else return _react2.default.createElement(
                'div',
                { className: 'trainingedit blockborder' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(event) {
                            return _this2.handleSave(event);
                        }, noValidate: true },
                    _react2.default.createElement(
                        'span',
                        { className: 'mdl-grid mdl-grid--no-spacing' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'div',
                                { className: errorClass },
                                error
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone' },
                            _react2.default.createElement(_appimage2.default, { api: 'training', imgid: id, isUploading: saving })
                        ),
                        _react2.default.createElement(
                            'span',
                            {
                                className: 'mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone fileuploadinput' },
                            _react2.default.createElement(_fileuploadinput2.default, { id: 'uploadfile-' + id, disabled: disabled,
                                actions: this.props.actions })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'span',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'title', type: 'text',
                                    id: 'title', name: 'title', value: title,
                                    onChange: function onChange(event) {
                                        return _this2.handleTitleChange(event);
                                    }, disabled: saving }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label', htmlFor: 'title' },
                                    'Title'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'mdl-textfield__error',
                                        htmlFor: 'title' },
                                    trainingEditError.get('title')
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'span',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'secondaryTitle',
                                    type: 'text', id: 'secondaryTitle', name: 'secondaryTitle', value: secondaryTitle,
                                    onChange: function onChange(event) {
                                        return _this2.handleSecondaryTitleChange(event);
                                    },
                                    disabled: saving }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label',
                                        htmlFor: 'secondaryTitle' },
                                    'Secondary title'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'mdl-textfield__error',
                                        htmlFor: 'secondaryTitle' },
                                    trainingEditError.get('secondaryTitle')
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'span',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('input', { className: 'mdl-textfield__input ' + disabled, ref: 'shortDescription',
                                    type: 'text', id: 'shortDescription', name: 'shortDescription',
                                    value: shortDescription,
                                    onChange: function onChange(event) {
                                        return _this2.handleShortDescriptionChange(event);
                                    },
                                    disabled: saving }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label',
                                        htmlFor: 'shortDescription' },
                                    'Short description'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'mdl-textfield__error',
                                        htmlFor: 'shortDescription' },
                                    trainingEditError.get('shortDescription')
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
                            _react2.default.createElement(
                                'span',
                                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                                _react2.default.createElement('textarea', { className: 'mdl-textfield__input ' + disabled, ref: 'longDescription',
                                    type: 'text', id: 'longDescription', name: 'longDescription', rows: '7',
                                    value: longDescription,
                                    onChange: function onChange(event) {
                                        return _this2.handleLongDescriptionChange(event);
                                    },
                                    disabled: saving }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'mdl-textfield__label',
                                        htmlFor: 'longDescription' },
                                    'Long Description'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'mdl-textfield__error',
                                        htmlFor: 'longDescription' },
                                    trainingEditError.get('longDescription')
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        saving ? _react2.default.createElement('div', {
                            className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinnerwrap' }) : _react2.default.createElement(
                            'div',
                            { key: 'trainingeditbuttonsarenotrerenderedproperlyaftersubmit' + Math.random() },
                            _react2.default.createElement(
                                'button',
                                { id: 'sub', type: 'submit',
                                    className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-save' })
                            ),
                            _react2.default.createElement(
                                'button',
                                { id: 'deletetheshit', onClick: function onClick(event) {
                                        return _this2.handleDelete(event);
                                    },
                                    className: 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-erase' })
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'handleTitleChange',
        value: function handleTitleChange(e) {
            this.props.actions.handleTrainingEditChange('title', e.target.value);
        }
    }, {
        key: 'handleSecondaryTitleChange',
        value: function handleSecondaryTitleChange(e) {
            this.props.actions.handleTrainingEditChange('secondaryTitle', e.target.value);
        }
    }, {
        key: 'handleShortDescriptionChange',
        value: function handleShortDescriptionChange(e) {
            this.props.actions.handleTrainingEditChange('shortDescription', e.target.value);
        }
    }, {
        key: 'handleLongDescriptionChange',
        value: function handleLongDescriptionChange(e) {
            this.props.actions.handleTrainingEditChange('longDescription', e.target.value);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Training edit componentWillUnmount');
            this.props.actions.loadEditTraining(undefined);
            this.props.actions.setTrainingUserInputError(undefined);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            TrainingEdit.fetchData(this.props.actions, this.props.params);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            componentHandler.upgradeDom();
            var trainingEditError = this.props.trainingappmap.get('trainingEditError');
            var dialogInputs = document.querySelectorAll('.mdl-textfield');
            for (var i = 0, l = dialogInputs.length; i < l; i++) {
                if (dialogInputs[i].MaterialTextfield != undefined) dialogInputs[i].MaterialTextfield.checkDirty();
                if (trainingEditError.get(dialogInputs[i].MaterialTextfield.input_.id) !== undefined) dialogInputs[i].className += ' is-invalid';else {
                    dialogInputs[i].className = dialogInputs[i].className.replace(' is-invalid', ' ');
                }
            }
        }
    }, {
        key: 'handleSave',
        value: function handleSave(event) {
            console.log('Save Training ');
            event.preventDefault();
            var title = this.refs.title;
            var secondaryTitle = this.refs.secondaryTitle;
            var shortDescription = this.refs.shortDescription;
            var longDescription = this.refs.longDescription;
            var trainingid = this.props.trainingappmap.get('edittraining').get('id');
            var fileinput = document.querySelector('#uploadfile-' + trainingid);

            var training = {
                title: title.value.trim(),
                secondaryTitle: secondaryTitle.value.trim(),
                shortDescription: shortDescription.value.trim(),
                longDescription: longDescription.value.trim()
            };
            training = this.props.trainingappmap.get('edittraining').merge(_immutable2.default.Map(training));
            this.props.actions.updateTrainingDispatcher(training, this.props.trainingappmap.get('edittraining'), fileinput.files[0]);
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(event) {
            event.preventDefault();
            this.props.actions.needActionConfirmation(true, this.props.actions.deleteEditTrainingDispatcher, {});
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            console.log('fetchData params=' + require('util').inspect(params, false, null));
            return actions.retrieveTrainingDispatcher(params);
        }
    }]);

    return TrainingEdit;
}(_react2.default.Component);

exports.default = TrainingEdit;