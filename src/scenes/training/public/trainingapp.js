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
<<<<<<< HEAD

    var rdm = 0
    var lastrdm = 0
    // var textSwitchId = undefined
    // var textSwitchContainer = undefined //$('#textswitch')
    // var textSwitchWrapContainer = undefined //$('#textswitch')
    // window.isTextSwitchAnimated = true //$('#textswitch')

    // window.textswitcher = function() {
    //   window.isTextSwitchAnimated = true
    //   setTimeout( function() {
    //     console.log('isTextSwitchAnimated = '+window.isTextSwitchAnimated )
    //     textSwitchWrapContainer = $('#textwrap')
    //     textSwitchContainer = $('#textswitch')
    //     if( window.isTextSwitchAnimated )
    //       window.requestAnimationFrame(window.textswitcher)
    //     else{
    //       console.log('I m out now ' )
    //       textSwitchWrapContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $(this).removeClass()
    //         textSwitchWrapContainer.text('')
    //       })
    //       return
    //     }


    //     while( lastrdm === rdm )
    //       rdm = Math.floor(Math.random() * window.switchTextArray.length)
    //     console.log('rdm = '+rdm +', lastrdm = '+lastrdm+' : '+window.switchTextArray[rdm]+' : ')
    //     lastrdm = rdm
    //       // divContainer[0].style.display = 'none'
    // //headShake 300 flash 300 fadeInLeft 300 rubberBand
    //     textSwitchWrapContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $(this).removeClass()
    //     })
    //     setTimeout( function() {
    //       textSwitchContainer.shuffleLetters({
    //         'text': window.switchTextArray[rdm]
    //       })
    //         // setTimeout( function() {
    //         //   container.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         //     $(this).removeClass()
    //         //   })
    //         // }, 4600 )
    //     }, 450 )
    //       // await sleep(1000)
    //   }, 2000 )
    // }

<<<<<<< HEAD
    // $(document).ready(function() { 
=======
    // $(document).ready(function() {
>>>>>>> 6e3ff02... webstorm big changes crash
    //   // textSwitchContainer = $('#textswitch')
    //   window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
    //   window.textswitcher()
    //   // textSwitchId = window.requestAnimationFrame(window.textswitcher)
    //   // setTimeout( function() {
    //   //   console.log('Cancel now : ')
    //   //   window.isTextSwitchAnimated = false
    //   // }, 12000 )

    // })

=======
>>>>>>> b06ef94... clean code, remove comments
}


class TrainingApp extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.isTextSwitchAnimated = false
    }

<<<<<<< HEAD
// constructor(props) {
    //   super(props)

    //   this.state = {
    //     trainings
    //   }
    // }
<<<<<<< HEAD
    // static fetchData () {  
=======
    // static fetchData () {
>>>>>>> 6e3ff02... webstorm big changes crash
    //   console.log('trainingapp. load trainings')
    //   var test='This is abbas in the hood!'

    //   fetch('/api/trainingslist', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Content-Type': 'application/json'
    //     },
    //     // body: 'param=value' //if no json in header
    //     body: JSON.stringify({
    //       testparam: test
    //     })
    //   }).then( response => response.json())
    //     .then(data => {
    //       // console.log(data.trainings)
    //       // this.props.actions.addTrainings(data.trainings);
    //       return this.props.actions.loadTrainings(data);
    //     })
    //     .catch(err => console.log('Booooo' + err));
    // }

//createTraining={this.props.actions.createTraining}
// {this.props.trainingappmap.get('filterOpen')}
    // toggleTask={this.toggleTask.bind(this)}
    // saveTask={this.saveTask.bind(this)}
    // deleteTask={this.deleteTask.bind(this)}

    // render() {
    //   console.log('Render training app now')
    //   const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
    //   if (!isBrowser) {
    //     // console.log('+++++++++++++++++++++++++Trainingapp. environment is server')
    //     return <div/>
    //   }
    //   // console.log('+++++++++++++++++++++++++Trainingapp. environment is browser')
    //   const {auth} = this.props
    //   return (
    //     <div className='trainingapp'>
    //     {!auth.get('isAuthenticated') &&
    //     <div>
    //       No right access here. Please login
    //     </div>
    //     }
    //     {auth.get('isAuthenticated') &&
    //     <div>
    //       <h3>Trainings. Please proceed now</h3>
    //       <CreateTraining trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
    //       <TrainingList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
    //     </div>
    //     }
    //     </div>
    //     )
    // }

    // renderTodo() {

    //   const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
    //   if (!isBrowser) {
    //     // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
    //     return <div/>
    //   }
    //   // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
    //   const {auth} = this.props
    //   // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
    //   //  alert("Hi "+test);
    //   // createTask={this.createTask.bind(this)}
    //   //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    //   // deleteTask={this.deleteTask.bind(this)}
    //   return (
    //     <div className='todoapp'>
    //     {!auth.get('isAuthenticated') &&
    //     <div>
    //       No right access here. Please login
    //     </div>
    //     }
    //     {auth.get('isAuthenticated') &&
    //     <div>
    //     <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel' >
    //       <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions}/>
    //       <TodoCreate todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
    //     </div>
    //     <TodosList todos={this.props.todoappmap.get('todos')} filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')}  actions={this.props.actions}/>
    //     </div>
    //     }
    //     </div>
    //     )
    // }
<<<<<<< HEAD
    // <div id="text-wrapper"> 
=======
    // <div id="text-wrapper">
>>>>>>> 6e3ff02... webstorm big changes crash
    //   <p id="textswitch">Welcome!</p>
    // </div>
=======

    static fetchData(actions, params) {
        console.log('Training list fetch data ')
        return actions.retrieveTrainingsDispatcher()
    }
>>>>>>> b06ef94... clean code, remove comments


    render() {
        const isBrowser = process.env.BROWSER
        if (!isBrowser) {
            return <div/>
        }
        console.log('+++++++++++++++++++++++++Trainingapp. render')
        return (
            <div>
                <div className='trainingapp'>
<<<<<<< HEAD
        <span id="textwrap"> 
          <p id="textswitch"></p>
        </span>
                    <div>
                        <TrainingList trainings={this.props.trainingappmap.get('trainings')}
                                      actions={this.props.actions}/>
=======
                    <span id="textwrap">
                        <p id="textswitch"></p>
                    </span>
                    <div>
<<<<<<< HEAD
                        <TrainingList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        <TrainingList trainings={this.props.trainingappmap.get('trainings')}
                                      actions={this.props.actions}/>
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
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