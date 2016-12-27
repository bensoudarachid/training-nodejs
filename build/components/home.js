'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _betterReactSpinkit = require('better-react-spinkit');

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { IndexLink, Link} from 'react-router'
// import Login from './login.js'
// import Logout from './logout.js'
// import { LogoutUser} from '../redux/actions.js'
// import Bootstrap from '!style!css!../node_modules/bootstrap/dist/css/bootstrap.css'
// require('!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import { Button } from 'react-bootstrap'


if (process.env.BROWSER) {
  (function () {
    // $.fn.sir3allah = function(event) {
    //   $('.imgwrap').each(function(i, el) {
    //     // console.log('++++++++++++++++Scroll'+el)
    //     var elm = $(el)
    //     var imgbg=elm.find('.imgbg')
    //     var img=elm.find('.module')
    //     var imgSpinner=elm.find('.spinner')
    //     if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
    //       img[0].setAttribute('src', img[0].getAttribute('data-src'))
    //       img[0].onload = function() {
    //         console.log('image loaded: '+img[0].getAttribute('data-src'))
    //         img[0].removeAttribute('data-src')
    //         imgSpinner.remove()
    //       }
    //     }
    //     if (elm.visible(true)) {
    //       if(elm.hasClass('animated'))
    //         return
    //       else{
    //         // console.log('++++++++++++++++Appcomponent is visible'+elm)
    //         // imgSpinner.remove()
    //         elm.addClass('animated')
    //         var rdm = Math.floor(Math.random() * 3) + 1
    //         var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
    //         img.addClass('animated '+imgAnim)
    //         imgbg.removeClass('imgbg')
    //         rdm = Math.floor(Math.random() * 2) + 1  
    //     // console.log('++++++++++++++++Random '+rdm)
    //         var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
    //     // console.log('++++++++++++++++Random '+fadeIn)
    //         imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
    //       }
    //     } 
    //   })
    // }
    var imageload = function imageload(event) {
      var idToken = _reactCookie2.default.load('jwt');
      (0, _jquery2.default)('.imgwrap').each(function (i, el) {
        // console.log('++++++++++++++++Scroll'+el)
        var elm = (0, _jquery2.default)(el);
        // var imgbg=elm.find('.imgbg')
        var img = elm.find('.module');
        var imgSpinner = elm.find('.mdl-spinner');
        if (img.load(true) && img[0].hasAttribute('data-src')) {
          //img is a jquery object img[0] is the dom object 
          img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? '?access_token=' + idToken : ''));
          img[0].onload = function () {
            // console.log('image loaded: '+img[0].getAttribute('data-src'))
            img[0].removeAttribute('data-src');
            imgSpinner.remove();

            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
              if (elm.hasClass('animated')) return;else {
                // console.log('++++++++++++++++Appcomponent is visible'+elm)
                animate(elm);
                //     elm.addClass('animated')
                //     var rdm = Math.floor(Math.random() * 3) + 1
                //     var rdm2 = Math.floor(Math.random() * 2) + 1
                //     var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                //     img.addClass('animated '+imgAnim+(rdm===3&&rdm2===1?' reverseanim':''))
                //     // img.addClass('animated reverseanim '+imgAnim)
                //     imgbg.removeClass('imgbg')
                // // console.log('++++++++++++++++Random '+rdm)
                //     var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm2===1?'fadeInLeft':'fadeInRight'
                // // console.log('++++++++++++++++Random '+fadeIn)
                //     imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
              }
            }
          };
        }
        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
          if (elm.hasClass('animated')) return;else {
            // console.log('++++++++++++++++Appcomponent is visible'+elm)
            animate(elm);
            //     elm.addClass('animated')
            //     var rdm = Math.floor(Math.random() * 3) + 1
            //     var rdm2 = Math.floor(Math.random() * 2) + 1
            //     var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
            //     img.addClass('animated '+imgAnim+(rdm===3&&rdm2===1?' reverseanim':''))
            //     // img.addClass('animated reverseanim '+imgAnim)
            //     imgbg.removeClass('imgbg')
            // // console.log('++++++++++++++++Random '+rdm)
            //     var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm2===1?'fadeInLeft':'fadeInRight'
            // // console.log('++++++++++++++++Random '+fadeIn)
            //     imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
          }
        }
      });
    };

    var animate = function animate(elm) {
      var imgbg = elm.find('.imgbg');
      var img = elm.find('.module');
      // var imgSpinner=elm.find('.spinner')
      elm.addClass('animated');
      var rdm = Math.floor(Math.random() * 3) + 1;
      var rdm2 = Math.floor(Math.random() * 2) + 1;
      var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip';
      img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''));
      // img.addClass('animated reverseanim '+imgAnim)
      imgbg.removeClass('imgbg');
      // console.log('++++++++++++++++Random '+rdm)
      var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight';
      // console.log('++++++++++++++++Random '+fadeIn)
      imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor');
    };

    // console.log('Appcomponent. environment is browser')
    require('./home.scss');

    (0, _jquery2.default)(window).scroll(imageload);
    (0, _jquery2.default)(window).resize(imageload);
  })();
}

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('exports?componentHandler!material-design-lite/material.js').upgradeDom();
      var idToken = _reactCookie2.default.load('jwt');

      (0, _jquery2.default)('.imgwrap').each(function (i, el) {
        // console.log('++++++++++++++++Appcomponent is here'+el)
        var elm = (0, _jquery2.default)(el);
        var imgbg = elm.find('.imgbg');
        var img = elm.find('.module');
        var imgSpinner = elm.find('.mdl-spinner');

        if (img.load(true) && img[0].hasAttribute('data-src')) {
          //img is a jquery object img[0] is the dom object 
          // img[0].setAttribute('src', img[0].getAttribute('data-src')+ '?access_token='+ idToken)
          img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? '?access_token=' + idToken : ''));
          img[0].onload = function () {
            console.log('image loaded: ' + img[0].getAttribute('data-src'));
            img[0].removeAttribute('data-src');
            imgSpinner.remove();

            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
              imgSpinner.remove();
              elm.addClass('animated');
              var rdm = Math.floor(Math.random() * 3) + 1;
              var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip';
              img.addClass('animated ' + imgAnim);
              // img.addClass('animated rubberBand')
              if (imgbg.hasClass('animated')) return;else {
                imgbg.removeClass('imgbg');
                rdm = Math.floor(Math.random() * 2) + 1;
                var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm === 1 ? 'fadeInLeft' : 'fadeInRight';
                imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor');
                // imgbg.addClass('animated jello') //imgwraptoranimated
              }
            }
          };
        }

        // if (elm.visible(true) &&!img[0].hasAttribute('data-src') ) {
        //   imgSpinner.remove()
        //   elm.addClass('animated') 
        //   var rdm = Math.floor(Math.random() * 3) + 1
        //   var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
        //   img.addClass('animated '+imgAnim)
        //   // img.addClass('animated rubberBand') 
        //   if(imgbg.hasClass('animated'))
        //     return
        //   else{
        //     imgbg.removeClass('imgbg')
        //     rdm = Math.floor(Math.random() * 2) + 1  
        //     var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
        //     imgbg.addClass('animated '+imgbgAnim+' imgwraptor') 
        //     // imgbg.addClass('animated jello') //imgwraptoranimated
        //   }
        // }
      });
    }

    // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='module' alt='coding'/></div>
    // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='module' alt='coding'/></div>
    // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='module' alt='coding'/></div>
    // <FadingCircle className='spinner' size={60}/>

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './api/todo/img/1234', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '1. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-DeployingNeutral1.png', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '2. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-PlanningNeutral1.png', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '3. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement('div', { className: 'clearfix visible-md visible-lg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-CodingNeutral2.png', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '1. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-DeployingNeutral2.png', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '2. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4 col-lg-4' },
              _react2.default.createElement(
                'div',
                { className: 'imgwrap' },
                _react2.default.createElement('div', { className: 'imgbg' }),
                _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-PlanningNeutral2.png', className: 'module', alt: 'coding' })
              ),
              _react2.default.createElement(
                'p',
                null,
                '3. We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
              )
            ),
            _react2.default.createElement('div', { className: 'clearfix visible-md visible-lg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 col-sm-4 col-sm-push-4 boxlogo' },
              'LOGO'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 col-sm-8' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-6 col-sm-pull-6 boxb' },
                  'B'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-6 boxa' },
                  'A'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;