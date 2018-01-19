import React, {Component} from 'react'
import AdminTrainingList from './admintraininglist'
import TrainingCommandPanel from './trainingcommandpanel'
import $ from 'jquery'
import PureRenderMixin from 'react-addons-pure-render-mixin'

var util = require('util')

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
    return c(require)
}

if (process.env.BROWSER) {
    require('../../../app/jquery.shuffleLetters.js')
    require('./admintrainingapp.scss')
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // require('./trainingedit.scss')
    // require('./trainingschedule.scss')
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> b06ef94... clean code, remove comments

    var rdm = 0
    var lastrdm = 0
}

<<<<<<< HEAD

// import Immutable from 'immutable'

// require('es6-promise').polyfill();
// require('isomorphic-fetch');


// const trainings = [
//   {
//     task: 'make react tuto',
//     isCompleted: false
//   },
//   {
//     task: 'eat dinner',
//     isCompleted: true
//   },
//   {
//     task: 'Beat it',
//     isCompleted: false
//   }
// ];
// import 'node-fetch'

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b06ef94... clean code, remove comments
export default class AdminTrainingApp extends Component {
=======
export default
class AdminTrainingApp extends Component {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
export default class AdminTrainingApp extends Component {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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
<<<<<<< HEAD
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
=======
                    <span id="textwrap">
                        <p id="textswitch"></p>
                    </span>
                    <div>
                        <div className='blockborder parampanel commandpanel'>
                            <TrainingCommandPanel trainings={this.props.trainingappmap.get('trainings')}
                                                  actions={this.props.actions}/>
                        </div>
<<<<<<< HEAD
                        <AdminTrainingList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        <AdminTrainingList trainings={this.props.trainingappmap.get('trainings')}
                                           actions={this.props.actions}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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
