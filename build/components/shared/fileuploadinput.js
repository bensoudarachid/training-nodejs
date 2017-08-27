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

// require('../../../node_modules/material-design-lite/dist//material.css')
// require('../../../node_modules/material-design-lite/dist/material.js')


if (process.env.BROWSER) {
    //  console.log('Appcomponent. environment is browser')
    require('./fileuploadinput.scss');
}

var FileUploadInput = function (_Component) {
    _inherits(FileUploadInput, _Component);

    function FileUploadInput(props) {
        _classCallCheck(this, FileUploadInput);

        // var fileInputTextDiv = document.getElementById('file_input_text_div')
        // var fileInput = document.getElementById('file_input_file')
        // var fileInputText = document.getElementById('file_input_text')
        var _this = _possibleConstructorReturn(this, (FileUploadInput.__proto__ || Object.getPrototypeOf(FileUploadInput)).call(this, props));

        _this.changeInputText = _this.changeInputText.bind(_this);
        return _this;
    }

    // <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored schedulebutton">
    //   <span className='glyphicon glyphicon-upload '></span>
    // </button>
    // <input ref='file_input_file' onChange={this.changeInputText} className='none' type='file' id={id} disabled={this.props.disabled}/>


    _createClass(FileUploadInput, [{
        key: 'render',
        value: function render() {
            var id = this.props.id;
            var disabled = this.props.disabled ? 'disabled' : '';

            return _react2.default.createElement(
                'div',
                { className: 'file_input_div' },
                _react2.default.createElement(
                    'div',
                    { className: 'file_input' },
                    _react2.default.createElement(
                        'label',
                        {
                            className: 'justify image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored' + disabled },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-upload ' + disabled }),
                        _react2.default.createElement('input', { ref: 'file_input_file', onChange: this.changeInputText, className: 'none', type: 'file',
                            id: id, disabled: this.props.disabled })
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: 'uploadlabel', ref: 'file_input_text', name: 'file_input_text' },
                        'No image'
                    )
                )
            );
        }

        // <input ref='file_input_text' name='file_input_text' className="mdl-textfield mdl-js-textfield" type="text" disabled readonly/>
        // <div ref='file_input_text_div' className='bgr mdl-textfield mdl-js-textfield'>
        //   <input ref='file_input_text' name='file_input_text' className='bgp file_input_text mdl-textfield__input' type='text' disabled readonly />
        // </div>
        //<label className='mdl-textfield__label' htmlFor='file_input_text'></label>

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            // componentHandler.upgradeDom()
            var fileInput = this.refs.file_input_file;
            fileInput.addEventListener('change', this.changeInputText);
            fileInput.addEventListener('change', this.changeState);
        }
    }, {
        key: 'changeInputText',
        value: function changeInputText(event) {
            event.preventDefault();
            // const fileInputTextDiv = this.refs.file_input_text_div
            var fileInput = this.refs.file_input_file;
            var fileInputText = this.refs.file_input_text;
            var str = fileInput.value;
            if (str == '') str = 'No Image';
            // var str = value
            var i;
            if (str.lastIndexOf('\\')) {
                i = str.lastIndexOf('\\') + 1;
            } else if (str.lastIndexOf('/')) {
                i = str.lastIndexOf('/') + 1;
            }
            fileInputText.innerHTML = str.slice(i, str.length);
            // fileInputText.value = str.slice(i, str.length)
        }

        // changeState() {
        //   const fileInputTextDiv = this.refs.file_input_text_div
        //   var fileInput = this.refs.file_input_file
        //   var fileInputText = this.refs.file_input_text
        //   if (fileInputText.value.length != 0) {
        //     if (!fileInputTextDiv.classList.contains('is-focused')) {
        //       fileInputTextDiv.classList.add('is-focused')
        //     }
        //   } else {
        //     if (fileInputTextDiv.classList.contains('is-focused')) {
        //       fileInputTextDiv.classList.remove('is-focused')
        //     }
        //   }
        // }

    }]);

    return FileUploadInput;
}(_react.Component);

exports.default = FileUploadInput;