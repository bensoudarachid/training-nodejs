import React, {Component} from 'react'
import TrainingList from './traininglist'
import $ from 'jquery'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './trainingapp.scss'

// require('stompjs')
// import SockJS from 'sockjs-client'
// var StompClient = require('stompjs').StompClient

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    require('app/jquery.shuffleLetters.js')
}

class TrainingApp extends Component {

    constructor(props) {
        var eventSource
        // var stompClient = undefined
        // var websocket = undefined
        // var stompSubscription = undefined
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.isTextSwitchAnimated = false
    }

    static fetchData(actions, params) {
        console.log('Training list fetch data ')
        return actions.retrieveTrainingsDispatcher()
    }
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
//

        render() {
        const isBrowser = process.env.BROWSER
        if (!isBrowser) {
            return <div/>
        }
        console.log('+++++++++++++++++++++++++Trainingapp. render')
        return (
            <div>
                <div className='trainingapp'>
                    <span id="textwrap">
                        <p id="textswitch"></p>
                    </span>
                    <div>
                        <TrainingList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        TrainingApp.fetchData(this.props.actions)
        window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
        this.textswitcher()
        if (process.env.BROWSER) {
            // let socketUrl = 'http://192.168.99.100:31674/stomp'
            // let successCallback = function () {
            //     this.stompClient.send('/queue/jsa.sendqueue', {}, JSON.stringify({'time':new Date().toTimeString(),'content':window.location.hostname}))
            //     this.stompSubscription = this.stompClient.subscribe('/exchange/amq.topic/jsa.routingkey.abbaslearn', function (data) {
            //         var body = data.body
            //         console.log('body='+require('util').inspect(body, false, null))
            //         var message = JSON.parse(body)
            //         console.log('message=' + require('util').inspect(message.time, false, null))
            //         $('#timestamp')//.text(message.time)
            //             .shuffleLetters({
            //                 'text': message.time
            //             })
            //     }, {
            //         'durable': true,
            //         'auto-delete': true
            //     })
            // }.bind(this)

            // let connectAndReconnect = function (socketUrl, successCallback) {
            //     if (this.stompClient!=undefined)
            //         this.stompClient.disconnect()
            //     if (this.websocket !=undefined)
            //         this.websocket.close()
            //     this.websocket =  new SockJS(socketUrl, null, { protocols_whitelist: ['xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'iframe-htmlfile', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] })
            //     this.stompClient = Stomp.over(this.websocket)
            //     this.stompClient.heartbeat.outgoing = 0
            //     this.stompClient.heartbeat.incoming = 0
            //     // this.stompClient = Stomp.client(socketUrl)
            //     this.stompClient.connect(
            //         'guest',
            //         'guest',
            //         successCallback,
            //         () => {
            //             console.log('Oops! Reconnect')
            //             setTimeout(() => {
            //                 connectAndReconnect(socketUrl, successCallback)
            //             }, 4000)
            //         },
            //         '/'
            //     );
            //
            // }.bind(this)
            // connectAndReconnect(socketUrl, successCallback)
        }
    }

    sendName(name) {
        console.log('Send')
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        console.log('closing eventSource !')
        this.isTextSwitchAnimated = false
        // this.eventSource.close()
        // if(this.stompSubscription!=undefined )
        //     this.stompSubscription.unsubscribe()
        // if(this.stompClient!=undefined )
        //     this.stompClient.disconnect()
        // this.websocket.disconnect()
    }

    textswitcher() {
        const textSwitchWrapContainer = $('#textwrap')
        const textSwitchContainer = $('#textswitch')
        var loop = function () {
            this.isTextSwitchAnimated = true
            var rdm = 0
            var lastrdm = 0
            setTimeout(function () {
                var animFrame = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    null

                if (this.isTextSwitchAnimated) {
                    animFrame(loop.bind(this))
                } else {
                    textSwitchWrapContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass()
                        textSwitchContainer.text('')
                    })
                    return
                }
                while (lastrdm === rdm)
                    rdm = Math.floor(Math.random() * window.switchTextArray.length)
                lastrdm = rdm
                textSwitchWrapContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass()
                })
                setTimeout(function () {
                    textSwitchContainer.shuffleLetters({
                        'text': window.switchTextArray[rdm]
                    })
                }.bind(this), 440)
            }.bind(this), 4000)
        }.bind(this)
        loop()
    }

}

export default TrainingApp