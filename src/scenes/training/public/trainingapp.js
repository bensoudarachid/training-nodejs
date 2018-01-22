import React, {Component} from 'react'
import TrainingList from './traininglist'
import $ from 'jquery'
import PureRenderMixin from 'react-addons-pure-render-mixin'

var util = require('util')

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    require('../../../app/jquery.shuffleLetters.js')
    require('./trainingapp.scss')
}


class TrainingApp extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.isTextSwitchAnimated = false
    }


    static fetchData(actions, params) {
        console.log('Training list fetch data ')
        return actions.retrieveTrainingsDispatcher()
    }


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
                        <TrainingList trainings={this.props.trainingappmap.get('trainings')}
                                      actions={this.props.actions}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        TrainingApp.fetchData(this.props.actions)
        window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
        this.textswitcher()
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        this.isTextSwitchAnimated = false
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