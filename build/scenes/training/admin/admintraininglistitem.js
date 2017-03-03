'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _trainingimage = require('../shared/trainingimage');

var _trainingimage2 = _interopRequireDefault(_trainingimage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Immutable from 'immutable'
// import { Pulse, FoldingCube, ThreeBounce, FadingCircle } from 'better-react-spinkit'
// import util from 'util'
// import FileUploadInput from '../../../components/shared/fileuploadinput'
// import actions from '../../../services/actions'
// import $ from 'jquery'


if (process.env.BROWSER) {
  require('./admintraininglistitem.scss');
}

var AdminTrainingListItem = function (_React$Component) {
  _inherits(AdminTrainingListItem, _React$Component);

  function AdminTrainingListItem(props) {
    _classCallCheck(this, AdminTrainingListItem);

    var _this = _possibleConstructorReturn(this, (AdminTrainingListItem.__proto__ || Object.getPrototypeOf(AdminTrainingListItem)).call(this, props));

    _this.state = {
      isEditing: false
    };
    return _this;
  }

  _createClass(AdminTrainingListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      // this.loadImage()
    }
    // componentDidUpdate() {
    //   require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
    //   var dialogInputs = document.querySelectorAll('.mdl-textfield')
    //   for (var i = 0, l = dialogInputs.length; i < l; i++) {
    //     dialogInputs[i].MaterialTextfield.checkDirty()
    //   }
    // }

  }, {
    key: 'render',
    value: function render() {
      var title = this.props.training.get('title');
      var shortDescription = this.props.training.get('shortDescription') ? this.props.training.get('shortDescription') : '';
      var trainingid = this.props.training.get('id');
      var isUploading = this.props.training.get('isUploading');
      var duration = this.props.training.get('duration') ? this.props.training.get('duration') / 8 : '0';

      return _react2.default.createElement(
        'div',
        { className: 'mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone' },
        _react2.default.createElement(
          'div',
          { className: 'mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone blockborder admintrainingslistitem' },
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
            _react2.default.createElement(_trainingimage2.default, { ref: 'uploadcomp', trainingid: trainingid, isUploading: isUploading })
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
              'Introduction a la belle vie'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone' },
            _react2.default.createElement(
              'p',
              null,
              shortDescription
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--3-col mdl-cell--1-col-tablet mdl-cell--1-col-phone' },
            _react2.default.createElement(
              'span',
              { className: 'promo' },
              '20%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' },
            _react2.default.createElement(
              'p',
              null,
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--1-col-phone' },
            _react2.default.createElement(
              'span',
              { className: 'duration' },
              duration + ' jours'
            )
          )
        )
      );
    }
  }]);

  return AdminTrainingListItem;
}(_react2.default.Component);

// }
// else 
//   return (
//     <div className='mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={errorClass}>{error}</div></div>
//       <div className='mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone'><div className={loadingClass}>{loadingContent}</div></div>
//       <form className='pad mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--5-col-tablet mdl-cell--4-col-phone' onSubmit={this.onSaveClick.bind(this)}>
//         <div className='mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--4-col-phone' style={titleStyle} onClick={this.handleToggle.bind(this)}><p>{title}</p></div>
//       </form>      
//       <div className='editsaveblock pad mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone'>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored right-items' onClick={this.handleDelete.bind(this)} disabled={disabled}>Delete</button>
//         <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored editbutton active right-items' onClick={this.onEditClick.bind(this)} disabled={disabled}>Edit</button>
//       </div>
//       {uploadBlock}
//     </div>
// )


exports.default = AdminTrainingListItem;