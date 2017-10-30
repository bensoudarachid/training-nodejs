'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _actions = require('../../services/actions');

var _actions2 = _interopRequireDefault(_actions);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {FadingCircle} from 'better-react-spinkit'

// import pathToBlogCoding from '../../images/Blog-CodingNeutral2.png'

// const pathToBlogCoding = require('../../images/Blog-Coding.svg');
// const pathToBlogCoding = require('../../images/Blog-CodingNeutral2.png');
// import LogoSpinner from '../../components/shared/logospinner'


// const util = require('util')

// import { IndexLink, Link} from 'react-router'
// import Login from './login.js'
// import Logout from './logout.js'
// import { LogoutUser} from '../services/actions.js'
// import Bootstrap from '!style!css!../node_modules/bootstrap/dist/css/bootstrap.css'
// require('!style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import { Button } from 'react-bootstrap'


if (process.env.BROWSER) {
    // console.log('Appcomponent. environment is browser')
    require('./home.scss');
    //   function imageload(event){
    //     // console.log('++++++++++++++++homejs image load')
    //     var idToken = cookie.load('jwt')
    //     $('.imgwrap').each(function(i, el) {

    //       var elm = $(el)
    //       // var imgbg=elm.find('.imgbg')
    //       var img=elm.find('.dataimg')
    //       var imgSpinner=elm.find('.mdl-spinner')
    //       if (img.load(true) && img[0].hasAttribute('data-src')) {//img is a jquery object img[0] is the dom object 
    //         img[0].setAttribute('src', img[0].getAttribute('data-src')+ (img[0].getAttribute('data-src').includes('/api/')?('?access_token='+ idToken):''))
    //         img[0].onload = function() {
    //           // console.log('image loaded: '+img[0].getAttribute('data-src'))
    //           img[0].removeAttribute('data-src')
    //           imgSpinner.remove()

    //           if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
    //             if(elm.hasClass('animated'))
    //               return
    //             else{
    //               animate(elm)
    //             }
    //           }

    //         }
    //       }
    //       if (elm.visible(true)&&!img[0].hasAttribute('data-src')) {
    //         if(elm.hasClass('animated'))
    //           return
    //         else{
    //           animate(elm)
    //         }
    //       }

    //     })
    //   }

    //   function animate(elm) {
    //     var imgbg=elm.find('.imgbg')
    //     var img=elm.find('.dataimg')
    //     // var imgSpinner=elm.find('.spinner')
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
    //   }

    // $(window).scroll(imageload)
    // $(window).resize(imageload)
}

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
        // this.handleScroll = this.handleScroll.bind(this)
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentHandler.upgradeDom();
            // var idToken = cookie.load('jwt')
            // console.log('++++++++++++++++homejs. compdidmount')
            (0, _jquery2.default)('.imgwrap').each(function (i, el) {
                // console.log('++++++++++++++++Appcomponent is here'+el)
                var elm = (0, _jquery2.default)(el);
                var imgbg = elm.find('.imgbg');
                var img = elm.find('.dataimg');
                var imgSpinner = elm.find('.mdl-spinner');

                setTimeout(function () {
                    if (img.load(true) && img[0].hasAttribute('data-src')) {
                        //img is a jquery object img[0] is the dom object
                        img[0].setAttribute('src', img[0].getAttribute('data-src'));
                        img[0].onload = function () {
                            // console.log('image loaded on mount: '+img[0].getAttribute('data-src'))
                            img[0].removeAttribute('data-src');
                            imgSpinner.remove();

                            if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                                imgSpinner.remove();
                                elm.addClass('animated');
                                // var rdm = Math.floor(Math.random() * 3) + 1
                                // var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                                // img.addClass('animated '+imgAnim)
                                // // img.addClass('animated rubberBand')
                                // if(imgbg.hasClass('animated'))
                                //   return
                                // else{
                                //   imgbg.removeClass('imgbg')
                                //   rdm = Math.floor(Math.random() * 2) + 1
                                //   var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
                                //   imgbg.addClass('animated '+imgbgAnim+' imgwraptor')
                                // }

                                // var rdm = Math.floor(Math.random() * 3) + 1
                                // var imgAnim = rdm===1?'rubberBand':rdm===2?'jello':'flip'
                                // img.addClass('animated '+imgAnim)
                                // // img.addClass('animated rubberBand')
                                if (imgbg.hasClass('animated')) return;else {
                                    imgbg.removeClass('imgbg');
                                    // var rdm = Math.floor(Math.random() * 2) + 1
                                    // var imgbgAnim = imgAnim==='jello'?'rubberBand':imgAnim==='rubberBand'?'jello':rdm===1?'fadeInLeft':'fadeInRight'
                                    imgbg.addClass('animated imgwraptor');
                                }
                            }
                        };
                    }
                }, 50);
            });
            // console.log('yeah man. Add listener')
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleScroll);
        }

        // componentDidMount: function() {
        //     window.addEventListener('scroll', this.handleScroll);
        // },

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // console.log('yeah man. Remove listener')
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            // console.log('yeah man. i m listening'+this)
            // console.log('yeah man. i m listening'+this)
            // this.imageload(event)
            var idToken = _reactCookie2.default.load('jwt');
            var anim = function anim(elm) {
                var imgbg = elm.find('.imgbg');
                var img = elm.find('.dataimg');
                // var imgSpinner=elm.find('.spinner')
                // console.log('++++++++++++++++ Add class 4 WRAP ANIMATED')
                elm.addClass('animated');
                var rdm = Math.floor(Math.random() * 3) + 1;
                var rdm2 = Math.floor(Math.random() * 2) + 1;
                var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip';
                img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''));
                // img.addClass('animated reverseanim '+imgAnim)
                imgbg.removeClass('imgbg');
                var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight';
                imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor');
            };
            (0, _jquery2.default)('.imgwrap').each(function (i, el) {
                var elm = (0, _jquery2.default)(el);
                // var imgbg=elm.find('.imgbg')
                var img = elm.find('.dataimg');
                var imgSpinner = elm.find('.mdl-spinner');
                if (img.load(true) && img[0].hasAttribute('data-src')) {
                    //img is a jquery object img[0] is the dom object
                    img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? '?access_token=' + idToken : ''));
                    img[0].onload = function () {
                        console.log('image loaded on scroll: ' + img[0].getAttribute('data-src'));
                        img[0].removeAttribute('data-src');
                        imgSpinner.remove();

                        if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                            if (elm.hasClass('animated')) {
                                return;
                            } else {
                                // console.log('on load Animate now')
                                anim(elm);
                            }
                        }
                    };
                }
                if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
                    if (elm.hasClass('animated')) {
                        return;
                    } else {
                        anim(elm);
                    }
                }
            });
        }

        // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
        // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./api/todo/img/1234'} className='dataimg' alt='coding'/></div>
        // <div className='imgwrap'><div className='imgbg'/><FadingCircle className='spinner' size={60}/><img src={'./images/0.png'} data-src={'./images/Blog-CodingNeutral1.png'} className='dataimg' alt='coding'/></div>
        // <FadingCircle className='spinner' size={60}/>
        // <ReactCSSTransitionGroup
        //   component='div'
        //   transitionName="page"
        //   transitionEnterTimeout={800}
        //   transitionLeaveTimeout={500}
        //   transitionAppear={true}
        //   transitionAppearTimeout={800}
        //   transitionEnter={true}
        //   transitionLeave={true}                
        // >              
        // </ReactCSSTransitionGroup>            

    }, {
        key: 'render',
        value: function render() {
            // let authenticated = cookie.load('jwt') ? true : false
            // if( !authenticated && this.props.auth.get('loginactualurl')!=undefined && this.props.auth.get('loginactualurl')!='/')
            //   return (
            //     <div></div>
            //   )

            // {this.props.auth.get('loginProgress')?
            //   <div>
            //     <h1>Please login home</h1>
            //   </div>
            // :

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'home' },
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
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-CodingNeutral2.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-Deploying.svg',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/Blog-Planning.svg',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
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
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/rocket.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/planningdev.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 col-md-4 col-lg-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'imgwrap' },
                                    _react2.default.createElement('div', { className: 'imgbg' }),
                                    _react2.default.createElement('div', {
                                        className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active spinner' }),
                                    _react2.default.createElement('img', { src: './images/0.png', 'data-src': './images/media.png',
                                        className: 'dataimg', alt: 'coding' })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'We have the mission to accompany companies in any project and support them implement secure information, management, communication or e-commerce systems. We support our customers from analysis and the conception, through development, integration and adaptation until the deployment and the maintenance of these systems. '
                                )
                            ),
                            _react2.default.createElement('div', { className: 'clearfix visible-md visible-lg' })
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

// <div className="row">
//   <ul className='mdl-list'>
//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 1
//       </span>
//       <a className="mdl-list__item-primary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 2
//       </span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 3</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//     <li className="mdl-list__item">
//       <span className="mdl-list__item-primary-content">
//         <span className='glyphicon  glyphicon-user'></span>
//         User 4</span>
//       <a className="mdl-list__item-secondary-action" href="#"><span className='glyphicon glyphicon-leaf'></span></a>
//     </li>

//   </ul>
// </div>