'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import actions from '../services/actions'


var TodoImage = function (_React$Component) {
  _inherits(TodoImage, _React$Component);

  function TodoImage() {
    _classCallCheck(this, TodoImage);

    return _possibleConstructorReturn(this, (TodoImage.__proto__ || Object.getPrototypeOf(TodoImage)).apply(this, arguments));
  }

  _createClass(TodoImage, [{
    key: 'render',
    value: function render() {
      var taskid = this.props.taskid;
      var idToken = _reactCookie2.default.load('jwt');
      // 	console.log(this.props)
      //  <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>
      return _react2.default.createElement(
        'div',
        { className: 'imgwrap', id: 'imgwrap' + taskid },
        _react2.default.createElement('img', { id: 'todolistitemimg' + taskid, src: _apiconnection2.default.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken, className: 'dataimg', alt: 'coding' })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
      this.loadImage();
    }
  }, {
    key: 'loadImage',
    value: function loadImage() {
      console.log('++++++++++++++++ todolistitem ++++++ imageload ');
      // const loadImages = this.props.loadimages
      // if( !loadImages) 
      //   return
      // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
      // const taskid = this.props.get('taskid')
      // var elm = $('#imgwrap'+taskid)
      // // var imgbg=elm.find('.imgbg')
      // var img=elm.find('.dataimg')
      // // var imgSpinner=elm.find('.mdl-spinner')

      // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
      //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
      //   img[0].onload = function() {
      //     img[0].removeAttribute('data-src')
      //     // imgSpinner.remove()
      //     this.setState({
      //       imageLoaded: true
      //     })

      //   }.bind(this)
      // }    
    }
  }]);

  return TodoImage;
}(_react2.default.Component);

exports.default = TodoImage;