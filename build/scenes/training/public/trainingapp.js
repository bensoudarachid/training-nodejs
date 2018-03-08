'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _traininglist = require('./traininglist');

var _traininglist2 = _interopRequireDefault(_traininglist);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

require('./trainingapp.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('stompjs')
// import SockJS from 'sockjs-client'
// var StompClient = require('stompjs').StompClient

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require);
};

if (process.env.BROWSER) {
    require('app/jquery.shuffleLetters.js');
}

var TrainingApp = function (_Component) {
    _inherits(TrainingApp, _Component);

    function TrainingApp(props) {
        _classCallCheck(this, TrainingApp);

        var eventSource;
        var stompClient = undefined;
        var websocket = undefined;
        var stompSubscription = undefined;

        var _this = _possibleConstructorReturn(this, (TrainingApp.__proto__ || Object.getPrototypeOf(TrainingApp)).call(this, props));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        _this.isTextSwitchAnimated = false;
        return _this;
    }

    _createClass(TrainingApp, [{
        key: 'render',

        // <button
        // className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdlroundbutton'
        // onClick={this.sendName.bind(this)}>
        // Send
        // </button>
        // <h3>Timestamp</h3>
        // <div id="timestamp"></div>
        //         <h3>Heap Memory Usage</h3>
        // <div id="heap"></div>
        //         <h3>Non Heap Memory Usage</h3>
        // <div id="nonheap"></div>

        value: function render() {
            var isBrowser = process.env.BROWSER;
            if (!isBrowser) {
                return _react2.default.createElement('div', null);
            }
            console.log('+++++++++++++++++++++++++Trainingapp. render');
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'trainingapp' },
                    _react2.default.createElement(
                        'span',
                        { id: 'textwrap' },
                        _react2.default.createElement('p', { id: 'textswitch' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_traininglist2.default, { trainings: this.props.trainingappmap.get('trainings'),
                            actions: this.props.actions })
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            TrainingApp.fetchData(this.props.actions);
            window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass'];
            this.textswitcher();
            if (process.env.BROWSER) {
                var socketUrl = 'http://192.168.99.100:15674/stomp';
                var successCallback = function () {
                    this.stompClient.send('/queue/jsa.sendqueue', {}, JSON.stringify({ 'time': new Date().toTimeString(), 'content': window.location.hostname }));
                    this.stompSubscription = this.stompClient.subscribe('/exchange/amq.topic/jsa.routingkey.abbaslearn', function (data) {
                        var body = data.body;
                        console.log('body=' + require('util').inspect(body, false, null));
                        var message = JSON.parse(body);
                        console.log('message=' + require('util').inspect(message.time, false, null));
                        (0, _jquery2.default)('#timestamp') //.text(message.time)
                        .shuffleLetters({
                            'text': message.time
                        });
                    }, {
                        'durable': false,
                        'auto-delete': true
                    });
                }.bind(this);

                var connectAndReconnect = function (socketUrl, successCallback) {
                    // if (this.stompClient!=undefined)
                    //     this.stompClient.disconnect()
                    // if (this.websocket !=undefined)
                    //     this.websocket.close()
                    // this.websocket =  new SockJS(socketUrl, null, { protocols_whitelist: ['xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'iframe-htmlfile', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] })
                    // this.stompClient = Stomp.over(this.websocket)
                    // this.stompClient.heartbeat.outgoing = 0
                    // this.stompClient.heartbeat.incoming = 0
                    // // this.stompClient = Stomp.client(socketUrl)
                    // this.stompClient.connect(
                    //     'guest',
                    //     'guest',
                    //     successCallback,
                    //     () => {
                    //         console.log('Oops! Reconnect')
                    //         setTimeout(() => {
                    //             connectAndReconnect(socketUrl, successCallback)
                    //         }, 4000)
                    //     },
                    //     '/'
                    // )

                }.bind(this);
                connectAndReconnect(socketUrl, successCallback);
            }
        }
    }, {
        key: 'sendName',
        value: function sendName(name) {
            console.log('Send');
            // this.stompClient.send("/api/guestbook", {}, "Wow")
            // this.stompClient.send('/queue/jsa.sendqueue', {'reply-to': '/temp-queue/foo'}, 'Wow')
            // this.stompClient.send('/queue/jsa.sendqueue', {"content-type":"text/plain"}, 'Hello, STOMP')
            // this.stompClient.send('/queue/jsa.sendqueue', {}, 'Hello, STOMP')
            // 'Content-Type': 'application/json'
            // text/html; charset=utf-8
            this.stompClient.send('/queue/jsa.sendqueue', {}, JSON.stringify({ 'time': new Date().toTimeString(), 'content': window.location.hostname }));
            // this.stompClient.send('/queue/j  sa.sendqueue', {'reply-to': '/temp-queue/foo'}, {'time':new Date().toTimeString(),'content':'payload'})
            // this.stompClient.send('/exchange/amq.direct/tenantname', {'reply-to': '/temp-queue/foo'}, 'Wow '+new Date().toTimeString())
            // this.stompClient.send("/queue/jsa.queue", {}, "Wow")
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('closing eventSource !');
            this.isTextSwitchAnimated = false;
            // this.eventSource.close()
            if (this.stompSubscription != undefined) this.stompSubscription.unsubscribe();
            if (this.stompClient != undefined) this.stompClient.disconnect();
            // this.websocket.disconnect()
        }
    }, {
        key: 'textswitcher',
        value: function textswitcher() {
            var textSwitchWrapContainer = (0, _jquery2.default)('#textwrap');
            var textSwitchContainer = (0, _jquery2.default)('#textswitch');
            var loop = function () {
                this.isTextSwitchAnimated = true;
                var rdm = 0;
                var lastrdm = 0;
                setTimeout(function () {
                    var animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;

                    if (this.isTextSwitchAnimated) {
                        animFrame(loop.bind(this));
                    } else {
                        textSwitchWrapContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            (0, _jquery2.default)(this).removeClass();
                            textSwitchContainer.text('');
                        });
                        return;
                    }
                    while (lastrdm === rdm) {
                        rdm = Math.floor(Math.random() * window.switchTextArray.length);
                    }lastrdm = rdm;
                    textSwitchWrapContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        (0, _jquery2.default)(this).removeClass();
                    });
                    setTimeout(function () {
                        textSwitchContainer.shuffleLetters({
                            'text': window.switchTextArray[rdm]
                        });
                    }.bind(this), 440);
                }.bind(this), 4000);
            }.bind(this);
            loop();
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(actions, params) {
            console.log('Training list fetch data ');
            return actions.retrieveTrainingsDispatcher();
        }
    }]);

    return TrainingApp;
}(_react.Component);

exports.default = TrainingApp;