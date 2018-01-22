'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _apiconnection = require('../../../services/apiconnection');

var _apiconnection2 = _interopRequireDefault(_apiconnection);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./trainingimage.scss');
}

var TrainingImage = function (_React$Component) {
    _inherits(TrainingImage, _React$Component);

    function TrainingImage(props) {
        _classCallCheck(this, TrainingImage);

        var _this = _possibleConstructorReturn(this, (TrainingImage.__proto__ || Object.getPrototypeOf(TrainingImage)).call(this, props));

        _this.state = {
            imageLoaded: undefined
        };
        return _this;
    }

<<<<<<< HEAD
    _createClass(TrainingImage, [{
        key: 'render',
        value: function render() {
            var trainingid = this.props.trainingid;
            var isUploading = this.props.isUploading;
            console.log('trainingimage render. isUploading ' + isUploading);
=======
    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
    // <div className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner'></div>
    // {  isUploading && this.state.imageLoaded==undefined?
    // <div>HALLOOOOO</div>
    // :<div>weg</div>
    // }

    // <img id={'traininglistitemimg'+trainingid} src='./images/0.png' data-src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
    //     onLoad={this.handleImageLoaded.bind(this)}
    //     onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>

    _createClass(TrainingImage, [{
        key: 'render',
        value: function render() {
            // console.log('todimage. render now')
            var trainingid = this.props.trainingid;
            var isUploading = this.props.isUploading;
            console.log('trainingimage render. isUploading ' + isUploading);
            // console.log('trainingimage render. this.state.imageLoaded '+this.state.imageLoaded )
            // if( isUploading == false){
            //   const trainingid = this.props.trainingid
            //   var elm = $('#imgwrap'+trainingid)
            //   var image=elm.find('.dataimg')
            //   var img = image[0]
            //   img.setAttribute('data-src', ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken+'&param='+ Math.floor(Math.random() * 10000))
            // }
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985

            var idToken = _reactCookie2.default.load('jwt');
            return _react2.default.createElement(
                'div',
                { className: 'imgwrapper', id: 'imgwrap' + trainingid },
                _react2.default.createElement(
                    'div',
                    { className: 'spinnerwrap' },
                    _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' })
                ),
                _react2.default.createElement('img', { id: 'traininglistitemimg' + trainingid, src: './images/0.png',
                    'data-src': _apiconnection2.default.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken,
                    onLoad: this.handleImageLoaded.bind(this),
                    onError: this.handleImageErrored.bind(this), className: 'dataimg', alt: 'coding' })
            );
<<<<<<< HEAD
=======
            // return (
            //     <div className='imgwrapper' id={'imgwrap'+trainingid} >
            //     {  this.state.imageLoaded==undefined?
            //         <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner"></div>
            //         :<div/>
            //     }
            //         <img id={'traininglistitemimg'+trainingid} src={ApiConnection.apiurl+'/api/training/img/'+trainingid+'?access_token='+ idToken}
            //             onLoad={this.handleImageLoaded.bind(this)}
            //             onError={this.handleImageErrored.bind(this)} className='dataimg' alt='coding'/>
            //     </div>
            // )
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
<<<<<<< HEAD
=======
            // componentHandler.upgradeDom()
            // console.log('++++++++++++++++ trainingimage ++++++ componentDidMount ')
            // this.loadImage()
            // const trainingid = this.props.trainingid
            // var elm = $('#imgwrap'+trainingid)
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
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
<<<<<<< HEAD
            componentHandler.upgradeAllRegistered();

            var trainingid = this.props.trainingid;
            var elm = (0, _jquery2.default)('#imgwrap' + trainingid);
            var image = elm.find('.dataimg');
            var img = image[0];

            if (this.props.isUploading == false) {
                var idToken = _reactCookie2.default.load('jwt');
                img.setAttribute('data-src', _apiconnection2.default.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000));
            }
            if (img.hasAttribute('data-src')) {
                var imgSpinner = elm.find('.mdl-spinner');
=======
            // componentHandler.upgradeDom()
            componentHandler.upgradeAllRegistered();
            // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate '+this.props.isUploading)

            var trainingid = this.props.trainingid;
            var elm = (0, _jquery2.default)('#imgwrap' + trainingid);
            // var imgbg=elm.find('.imgbg')
            var image = elm.find('.dataimg');
            // var image=$('#traininglistitemimg'+trainingid)
            var img = image[0];
            // var img = document.getElementById('traininglistitemimg'+trainingid)
            // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate go into if has attrib data src: '+img.hasAttribute('data-src'))


            if (this.props.isUploading == false) {
                //img is a jquery object img[0] is the dom object
                var idToken = _reactCookie2.default.load('jwt');
                // img[0].removeAttribute('src')
                img.setAttribute('data-src', _apiconnection2.default.apiurl + '/api/training/img/' + trainingid + '?access_token=' + idToken + '&rdparam=' + Math.floor(Math.random() * 10000));
            }
            // var imgSpinner=elm.find('.mdl-spinner')
            if (img.hasAttribute('data-src')) {
                //img is a jquery object img[0] is the dom object
                // img[0].removeAttribute('src')
                var imgSpinner = elm.find('.mdl-spinner');
                // imgSpinner.remove()
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                imgSpinner[0].style.display = 'block';
                img.style.display = 'none';
                img.setAttribute('src', img.getAttribute('data-src'));
                img.removeAttribute('data-src');
<<<<<<< HEAD
=======
                // console.log('++++++++++++++++ trainingimage ++++++ componentDidUpdate setstate to true')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            }
        }
    }, {
        key: 'handleImageLoaded',
        value: function handleImageLoaded() {
<<<<<<< HEAD
=======
            // console.log('trainingimage handleImageLoaded ')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            var trainingid = this.props.trainingid;
            var elm = (0, _jquery2.default)('#imgwrap' + trainingid);
            var imgSpinner = elm.find('.mdl-spinner');

            var image = elm.find('.dataimg');
            var img = image[0];
            if (!img.hasAttribute('data-src')) {
<<<<<<< HEAD
=======
                // this.props.imageLoaded = true
                // imgSpinner.remove()
                // console.log('++++++++++++++++ trainingimage ++++++ handleImageLoaded set background now' )
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                img.style.display = 'block';
                if (img.getAttribute('src') != './images/0.png') img.style.background = 'radial-gradient(circle closest-side at 50% 50%, white 0,  #69F 95%, transparent 100%)';
                imgSpinner[0].style.display = 'none';
            } else this.setState({ imageLoaded: true });
        }
    }, {
        key: 'handleImageErrored',
        value: function handleImageErrored() {
<<<<<<< HEAD
=======
            // console.log('trainingimage handleImageErrored ')
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            var trainingid = this.props.trainingid;
            var elm = (0, _jquery2.default)('#imgwrap' + trainingid);
            var imgSpinner = elm.find('.mdl-spinner');
            var image = elm.find('.dataimg');
            var img = image[0];
            imgSpinner[0].style.display = 'none';
            img.setAttribute('src', './images/0.png');
<<<<<<< HEAD
=======

            // this.setState({ imageLoaded: false })
            // this.props.imageLoaded = false
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
<<<<<<< HEAD
=======

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            var isUploading = this.props.isUploading;
            if (isUploading) return false;
            var trainingid = this.props.trainingid;
            var elm = (0, _jquery2.default)('#imgwrap' + trainingid);
<<<<<<< HEAD
            var image = elm.find('.dataimg');
            var img = image[0];
            if (img.hasAttribute('data-src') || this.props.isUploading && !img.hasAttribute('data-src')) {
=======
            // var imgSpinner=elm.find('.mdl-spinner')
            var image = elm.find('.dataimg');
            var img = image[0];
            // console.log('++++++++++++++++ trainingimage ++++++ img.hasAttribute(data-src): '+ img.hasAttribute('data-src')+', id: '+trainingid+'  this.props.isUploading: '+ this.props.isUploading)
            if (img.hasAttribute('data-src') || this.props.isUploading && !img.hasAttribute('data-src')) {
                // if (!this.props.isUploading) {
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                console.log('-------------------++++++++++++++++ training image render');
                return true;
            }
            return false;
        }
<<<<<<< HEAD
=======

        // loadImage(){
        //   console.log('++++++++++++++++ traininglistitem ++++++ imageload ')
        //   // console.log('++++++++++++++++ traininglistitem ++++++ really loading now')
        //   const trainingid = this.props.trainingid
        //   var elm = $('#imgwrap'+trainingid)
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

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
    }]);

    return TrainingImage;
}(_react2.default.Component);

exports.default = TrainingImage;