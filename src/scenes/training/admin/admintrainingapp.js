import React, {Component} from 'react'
import AdminTrainingList from './admintraininglist'
import TrainingCommandPanel from './trainingcommandpanel'
import $ from 'jquery'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './admintrainingapp.scss'

var util = require('util')

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    require('app/jquery.shuffleLetters.js')

    var rdm = 0
    var lastrdm = 0
}

export default class AdminTrainingApp extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.isTextSwitchAnimated = false
    }

    static fetchData(actions, params) {
        return actions.retrieveTrainingsDispatcher()
    }

    render() {
        const isBrowser = process.env.BROWSER
        if (!isBrowser) {
            return <div/>
        }
        return (
            <div>
                <div className='admintrainingapp'>
                    <span id="textwrap">
                        <p id="textswitch"></p>
                    </span>
                    <div>
                        <div className='blockborder parampanel commandpanel'>
                            <TrainingCommandPanel trainings={this.props.trainingappmap.get('trainings')}
                                                  actions={this.props.actions}/>
                        </div>
                        <AdminTrainingList trainings={this.props.trainingappmap.get('trainings')}
                                           actions={this.props.actions}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        AdminTrainingApp.fetchData(this.props.actions)
        window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
        this.textswitcher()
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        this.isTextSwitchAnimated = false
        this.props.actions.loadTrainings(undefined)
    }

    textswitcher() {
        const textSwitchWrapContainer = $('#textwrap')
        const textSwitchContainer = $('#textswitch')
        var loop = function () {
            this.isTextSwitchAnimated = true
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
