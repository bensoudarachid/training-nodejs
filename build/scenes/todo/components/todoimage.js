'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actions = require('../../../services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoImage = function (_React$Component) {
  _inherits(TodoImage, _React$Component);

  function TodoImage(props) {
    _classCallCheck(this, TodoImage);

    var _this = _possibleConstructorReturn(this, (TodoImage.__proto__ || Object.getPrototypeOf(TodoImage)).call(this, props));

    _this.state = {
      imageLoaded: undefined
    };
    return _this;
  }

  // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={actions.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
  //     onLoad={this.handleImageLoaded.bind(this)}
  //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
  // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
  // {  isUploading && this.state.imageLoaded==undefined?
  // <div>HALLOOOOO</div>
  // :<div>weg</div>
  // }

  // <img id={'todolistitemimg'+taskid} src='./images/0.png' data-src={actions.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
  //     onLoad={this.handleImageLoaded.bind(this)}
  //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

  _createClass(TodoImage, [{
    key: 'render',
    value: function render() {
      // console.log('todimage. render now')
      var taskid = this.props.taskid;
      var isUploading = this.props.isUploading;
      // console.log('todoimage render. isUploading '+isUploading )
      // console.log('todoimage render. this.state.imageLoaded '+this.state.imageLoaded )

      var idToken = _reactCookie2.default.load('jwt');
      return _react2.default.createElement(
        'div',
        { className: 'imgwrapper', id: 'imgwrap' + taskid },
        _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
        _react2.default.createElement('img', { id: 'todolistitemimg' + taskid, src: './images/0.png', 'data-src': _actions2.default.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken,
          onLoad: this.handleImageLoaded.bind(this),
          onError: this.handleImageErrored.bind(this), className: 'dataimg', alt: 'coding' })
      );
      // return (
      //     <div className='imgwrapper' id={'imgwrap'+taskid} >
      //     {  this.state.imageLoaded==undefined?
      //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
      //         :<div/>
      //     }
      //         <img id={'todolistitemimg'+taskid} src={actions.apiurl+'/api/todo/img/'+taskid+'?access_token='+ idToken}           
      //             onLoad={this.handleImageLoaded.bind(this)}
      //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
      //     </div>
      // )
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
      // console.log('++++++++++++++++ todoimage ++++++ componentDidMount ')
      // this.loadImage()
      // const taskid = this.props.taskid
      // var elm = $('#imgwrap'+taskid)
      // // var imgbg=elm.find('.imgbg')
      // var img=elm.find('.dataimg')
      // // var imgSpinner=elm.find('.mdl-spinner')
      // if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
      //   img[0].removeAttribute('src')
      //   img[0].setAttribute('src', img[0].getAttribute('data-src'))
      //   img[0].removeAttribute('data-src')
      //   this.setState({
      //     imageLoaded: undefined
      //   })
      // }        
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // require('exports?componentHandler!material-design-lite/material.js').upgradeDom()
      require('exports?componentHandler!material-design-lite/material.js').upgradeAllRegistered();
      // console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate ')   

      var taskid = this.props.taskid;
      var elm = (0, _jquery2.default)('#imgwrap' + taskid);
      // var imgbg=elm.find('.imgbg')
      var image = elm.find('.dataimg');
      // var image=$('#todolistitemimg'+taskid)
      var img = image[0];
      // var img = document.getElementById('todolistitemimg'+taskid)
      // console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


      if (this.props.isUploading) {
        //img is a jquery object img[0] is the dom object 
        var idToken = _reactCookie2.default.load('jwt');
        // img[0].removeAttribute('src')
        img.setAttribute('data-src', _actions2.default.apiurl + '/api/todo/img/' + taskid + '?access_token=' + idToken + '&param=' + Math.floor(Math.random() * 10000));
      }
      // var imgSpinner=elm.find('.mdl-spinner')
      if (img.hasAttribute('data-src')) {
        //img is a jquery object img[0] is the dom object 
        // img[0].removeAttribute('src')
        var imgSpinner = elm.find('.mdl-spinner');
        // imgSpinner.remove()
        imgSpinner[0].style.display = 'block';
        img.style.display = 'none';
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
        // console.log('++++++++++++++++ todoimage ++++++ componentDidUpdate setstate to true')
      }
    }
  }, {
    key: 'handleImageLoaded',
    value: function handleImageLoaded() {
      // console.log('todoimage handleImageLoaded ')
      this.setState({ imageLoaded: true });
      // this.props.imageLoaded = true
      var taskid = this.props.taskid;
      var elm = (0, _jquery2.default)('#imgwrap' + taskid);
      var imgSpinner = elm.find('.mdl-spinner');

      var image = elm.find('.dataimg');
      var img = image[0];
      if (!img.hasAttribute('data-src')) {
        // imgSpinner.remove()
        // console.log('++++++++++++++++ todoimage ++++++ handleImageLoaded set background now' )
        img.style.display = 'block';
        if (img.getAttribute('src') != './images/0.png') img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)';
        imgSpinner[0].style.display = 'none';
      }
    }
  }, {
    key: 'handleImageErrored',
    value: function handleImageErrored() {
      console.log('todoimage handleImageErrored ');
      var taskid = this.props.taskid;
      var elm = (0, _jquery2.default)('#imgwrap' + taskid);
      var imgSpinner = elm.find('.mdl-spinner');
      var image = elm.find('.dataimg');
      var img = image[0];
      imgSpinner[0].style.display = 'none';
      img.setAttribute('src', './images/0.png');

      // this.setState({ imageLoaded: false })
      // this.props.imageLoaded = false
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isUploading = this.props.isUploading;
      // console.log('++++++++++++++++ todoimage ++++++ shouldComponentUpdate'+ isUploading)
      if (!this.props.isUploading) {
        return true;
      }
      return false;
    }

    // loadImage(){
    //   console.log('++++++++++++++++ todolistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ todolistitem ++++++ really loading now')
    //   const taskid = this.props.taskid
    //   var elm = $('#imgwrap'+taskid)
    //   // var imgbg=elm.find('.imgbg')
    //   var img=elm.find('.dataimg')
    //   // var imgSpinner=elm.find('.mdl-spinner')

    //   if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
    //     img[0].setAttribute('src', img[0].getAttribute('data-src'))
    //     img[0].onload = function() {
    //       img[0].removeAttribute('data-src')
    //       // imgSpinner.remove()
    //       this.setState({
    //         imageLoaded: true
    //       })
    //     }.bind(this)
    //     img[0].onerror = function() {
    //       img[0].setAttribute('src', './images/0.png')
    //       this.setState({
    //         imageLoaded: true
    //       })
    //     }.bind(this)
    //   }    
    // }

  }]);

  return TodoImage;
}(_react2.default.Component);

exports.default = TodoImage;