'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../../services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import actions from '../../../services/actions'
// import PureRenderMixin from 'react-addons-pure-render-mixin'


if (process.env.BROWSER) {
  require('./appimage.scss');
}

var AppImage = function (_React$Component) {
  _inherits(AppImage, _React$Component);

  function AppImage(props) {
    _classCallCheck(this, AppImage);

    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    var _this = _possibleConstructorReturn(this, (AppImage.__proto__ || Object.getPrototypeOf(AppImage)).call(this, props));

    _this.state = {
      imageLoaded: undefined
    };
    return _this;
  }

  // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
  //     onLoad={this.handleImageLoaded.bind(this)}
  //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
  // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
  // {  isUploading && this.state.imageLoaded==undefined?
  // <div>HALLOOOOO</div>
  // :<div>weg</div>
  // }

  // <img id={'applicationlistitemimg'+imgid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
  //     onLoad={this.handleImageLoaded.bind(this)}
  //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

  _createClass(AppImage, [{
    key: 'render',
    value: function render() {
      var training = this.props.training;
      // const isUploading = training==undefined?'':training.get('saving')
      var isUploading = this.props.isUploading;
      isUploading = isUploading == undefined ? false : true;

      // console.log('ooooooooooooooooooooooooooooooooo ------ appimage. render now. isUploading '+isUploading )
      var imgid = this.props.imgid;
      var api = this.props.api;
      // const width = this.props.width
      // const height = this.props.height

      var elm = (0, _jquery2.default)('#imgwrap' + imgid);
      // var imgbg=elm.find('.imgbg')
      // console.log('----elm.style.width='+require('util').inspect(elm.width(), false, null))
      // console.log('----elm.style.height='+require('util').inspect(elm.height(), false, null))
      var width = elm.width();
      var height = elm.height();

      // const isUploading  = this.props.isUploading
      // console.log('applicationimage render. isUploading '+isUploading )
      // console.log('applicationimage render. this.state.imageLoaded '+this.state.imageLoaded )
      // if( isUploading == false){
      //   const imgid = this.props.imgid
      //   var elm = $('#imgwrap'+imgid)
      //   var image=elm.find('.dataimg')
      //   var img = image[0]
      //   img.setAttribute('data-src', ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
      // }

      var idToken = _reactCookie2.default.load('jwt');
      var idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken;
      console.log('app image idTokenParam=' + require('util').inspect(idTokenParam, false, null));
      return _react2.default.createElement(
        'div',
        { className: 'imgwrapper', id: 'imgwrap' + imgid },
        _react2.default.createElement(
          'div',
          { className: 'spinnerwrap' },
          _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' })
        ),
        _react2.default.createElement('img', { id: 'applicationimg' + imgid, src: './images/0.png', 'data-src': _apiconnection2.default.apiurl + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam,
          onLoad: this.handleImageLoaded.bind(this),
          onError: this.handleImageErrored.bind(this), className: 'dataimg', alt: 'coding' })
      );
      // return (
      //     <div className='imgwrapper' id={'imgwrap'+imgid} >
      //     {  this.state.imageLoaded==undefined?
      //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
      //         :<div/>
      //     }
      //         <img id={'applicationlistitemimg'+imgid} src={ApiConnection.apiurl+'/api/application/img/'+imgid+'?access_token='+ idToken}           
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
      // console.log('++++++++++++++++ applicationimage ++++++ componentDidMount ')
      // this.loadImage()
      // const imgid = this.props.imgid
      // var elm = $('#imgwrap'+imgid)
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
      // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate '+this.props.isUploading)   

      var imgid = this.props.imgid;
      var api = this.props.api;
      // const width = this.props.width
      // const height = this.props.height

      var elm = (0, _jquery2.default)('#imgwrap' + imgid);
      // var imgbg=elm.find('.imgbg')
      //    console.log('----elm.style.width='+require('util').inspect(Math.floor(elm.width()), false, null))
      //    console.log('----elm.style.height='+require('util').inspect(Math.floor(elm.height()), false, null))
      var width = Math.floor(elm.width());
      var height = Math.floor(elm.height());

      var image = elm.find('.dataimg');
      // var image=$('#applicationlistitemimg'+imgid)
      var img = image[0];
      // var img = document.getElementById('applicationlistitemimg'+imgid)
      // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


      if (this.props.isUploading == false) {
        //img is a jquery object img[0] is the dom object 
        var idToken = _reactCookie2.default.load('jwt');
        var idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken;
        // img[0].removeAttribute('src')
        // img.setAttribute('data-src', ApiConnection.apiurl+'/api/'+api+'/img/'+imgid+'?width='+width+'&height='+height+'&access_token='+ idToken+'&rdparam='+ Math.floor(Math.random() * 10000))
        img.setAttribute('data-src', _apiconnection2.default.apiurl + '/api/' + api + '/img/' + imgid + '?width=' + width + '&height=' + height + '' + idTokenParam + '&rdparam=' + Math.floor(Math.random() * 10000));
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
        // console.log('++++++++++++++++ applicationimage ++++++ componentDidUpdate setstate to true')
      }
    }
  }, {
    key: 'handleImageLoaded',
    value: function handleImageLoaded() {
      // console.log('applicationimage handleImageLoaded ')
      var imgid = this.props.imgid;
      var elm = (0, _jquery2.default)('#imgwrap' + imgid);
      var imgSpinner = elm.find('.mdl-spinner');

      var image = elm.find('.dataimg');
      var img = image[0];
      if (!img.hasAttribute('data-src')) {
        // this.props.imageLoaded = true
        // imgSpinner.remove()
        // console.log('++++++++++++++++ applicationimage ++++++ handleImageLoaded set background now' )
        img.style.display = 'block';
        if (img.getAttribute('src') != './images/0.png') img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #d7e7f4 95%, transparent 100%)';
        imgSpinner[0].style.display = 'none';
      } else this.setState({ imageLoaded: true });
    }
  }, {
    key: 'handleImageErrored',
    value: function handleImageErrored() {
      // console.log('applicationimage handleImageErrored ')
      var imgid = this.props.imgid;
      var elm = (0, _jquery2.default)('#imgwrap' + imgid);
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

      // const training=this.props.training
      // var isUploading = training==undefined?'':training.get('saving')
      var isUploading = this.props.isUploading;
      // isUploading = isUploading==undefined?false:true
      if (isUploading == undefined) return false;
      var imgid = this.props.imgid;
      var elm = (0, _jquery2.default)('#imgwrap' + imgid);
      // var imgSpinner=elm.find('.mdl-spinner')
      var image = elm.find('.dataimg');
      var img = image[0];
      // console.log('++++++++++++++++ applicationimage ++++++ img.hasAttribute(data-src): '+ img.hasAttribute('data-src')+', id: '+imgid+'  this.props.isUploading: '+ this.props.isUploading)
      if (img.hasAttribute('data-src') || this.props.isUploading && !img.hasAttribute('data-src')) {
        // if (!this.props.isUploading) {
        // console.log('-------------------++++++++++++++++ application image render')
        return true;
      }
      // console.log('-------------------++++++++++++++++ application image NO render')
      return false;
      // return true
    }

    // loadImage(){
    //   console.log('++++++++++++++++ applicationlistitem ++++++ imageload ')
    //   // console.log('++++++++++++++++ applicationlistitem ++++++ really loading now')
    //   const imgid = this.props.imgid
    //   var elm = $('#imgwrap'+imgid)
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

  return AppImage;
}(_react2.default.Component);

exports.default = AppImage;