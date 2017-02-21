import TrainingCreate from './components/trainingcreate'


import React, { Component } from 'react'
import TrainingEditList from './components/trainingeditlist'
import AdminTrainingList from './admin/admintraininglist'
import cookie from 'react-cookie'
import $ from 'jquery'

// import _ from 'lodash'
// import { ThreeBounce } from 'better-react-spinkit'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser')
  require('./trainingapp.scss')
  
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

  // $(document).ready(function() { 
  //   // textSwitchContainer = $('#textswitch')
  //   window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
  //   window.textswitcher()
  //   // textSwitchId = window.requestAnimationFrame(window.textswitcher)
  //   // setTimeout( function() {
  //   //   console.log('Cancel now : ')
  //   //   window.isTextSwitchAnimated = false
  //   // }, 12000 )

  // })

}



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

class TrainingApp extends Component {
  constructor(props) {
    super(props)
    // console.log('training list. Mixin in constructor')
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.isTextSwitchAnimated = false
    // textSwitchContainer = undefined //$('#textswitch')
    // textSwitchWrapContainer = undefined //$('#textswitch')
  }

// constructor(props) {
  //   super(props)

  //   this.state = {
  //     trainings
  //   }
  // }
  // static fetchData () {  
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
      // <div id="text-wrapper"> 
      //   <p id="textswitch">Welcome!</p>
      // </div>

  render() {
    // console.log('Render training app now')
    const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
    if (!isBrowser) {
      // console.log('+++++++++++++++++++++++++Trainingapp. environment is server')
      return <div/>
    }
    // console.log('+++++++++++++++++++++++++Trainingapp. environment is browser')
    const {auth} = this.props
    return (
      <div className='trainingapp'>
      <div id="textwrap"> 
        <p id="textswitch"></p>
      </div>
      <div>
        <div className='mdl-grid mdl-grid--no-spacing blockborder parampanel' >
          <TrainingCreate trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
        </div>
        {this.renderList()}
      </div>
      </div>
    )
  }

  renderList(){
    const { auth } = this.props
    const isAuthenticated = auth.get('isAuthenticated')
    // console.log('navjs is authenticated '+isAuthenticated)1
    
    console.log('trainingapp. authority '+auth.get('authority'))
    if( auth.get('authority')=='admin' ){
      return <AdminTrainingList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
    }
    else{
      return <TrainingEditList trainings={this.props.trainingappmap.get('trainings')} actions={this.props.actions}/>
    }
  }
  // saveTask(oldTask, newTask) {
  //   const foundTraining = _.find(this.state.trainings, (training) => training.task === oldTask);
  //   foundTraining.task = newTask;

  //   this.setState({
  //     trainings: this.state.trainings
  //   })
  // }
  // deleteTask(taskToDelete) {
  //   //        console.log('delete'+taskToDelete);
  //   _.remove(this.state.trainings, (training) => training.task === taskToDelete);
  //   this.setState({
  //     trainings: this.state.trainings
  //   });
  // }
  // toggleTask(task) {
  //   const foundTraining = this.state.trainings.find((training) =>  training.get('task') === task)
  //   // const foundTraining = _.find(this.state.trainings, (training) => training.task === task);
  //   foundTraining.isCompleted = !foundTraining.isCompleted;
  //   this.setState({
  //     trainings: this.state.trainings
  //   });
  // }
  componentDidMount() {
    // console.log('trainingappjs mounted')
    TrainingApp.fetchData(this.props.actions)

    window.switchTextArray = ['Java', 'Javascript', 'Spring Boot', 'Spring Security', 'Rest', 'Agile', 'Ooa', 'Ood', 'System Security', 'Sound Edition', 'Web-Design', 'E-Commerce', 'React', 'Html5', 'Css3', 'Virtualization', 'Flat design', 'Cloud', 'Angular', 'Json', 'Xml', 'Sql', 'Mysql', 'Hibernate', 'JPA', 'Webpack', 'Node.js', 'Git', 'Code Versioning', 'UML', 'Eclipse', 'Design Pattern', 'Music production', 'Sass']
    this.textswitcher()
  }
  componentWillUnmount() {
    this.isTextSwitchAnimated = false
  }

  //This is a necessary call when component is fetched on server side
  static fetchData(actions) {
    actions.retrieveTrainingsDispatcher()
  }
  // static fetchDataOld(actions) {
  //   var headers = {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Type': 'application/json'
  //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
  //   // 'Authorization': 'Bearer '+id_token
  //   }
  //   var id_token = cookie.load('jwt')
  //   if (id_token != '') {
  //     headers.Authorization = 'Bearer ' + id_token
  //     console.log('Ya trainings fetchData.  auth id token: ' + id_token)
  //   }
  //   else
  //     console.log('Ya trainings fetchData. Wahnsinn: no id_token')
  //   var test = 'This is abbas in the hood!'

  //   return fetch('http://127.0.0.1:8081/api/trainings/2373'
  //     , {
  //       method: 'GET',
  //       headers
  //     // headers: {
  //     //   'Content-Type': 'application/x-www-form-urlencoded',
  //     //   'Content-Type': 'application/json',
  //     //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
  //     //   'Authorization': 'Bearer '+id_token
  //     // }
  //     // ,
  //     // body: JSON.stringify({
  //     //   testparam: test
  //     // })
  //     // body: 'testparam='+test //if no json in header
  //     }
  //   )
  //     .then(response => response.json().then(data => {
  //       console.log('Response Status = ' + response.status)
  //       return ({
  //         status: response.status,
  //         data
  //       })
  //     }
  //     ))
  //     .then(
  //       ({status, data}) => {
  //         if (status === 401) {
  //           actions.receiveLogout()
  //         } else if (status >= 400) {
  //           var error = data
  //           console.log('Status looks bad. ' + status + '. error message = ' + error.message)
  //           actions.receiveLogout()
  //         } else if (data.error) {
  //           // var error = data.error
  //           var errorDescription = data.error_description
  //           console.log('Trainingapp fetch error = ' + data.error + ', description = ' + errorDescription)
  //           actions.receiveLogout()
  //         } else {
  //           actions.loadTrainings(data)
  //         }
  //       })
  //     // .then(data => {
  //     //     console.log('trainingapp. data fetch ')
  //     //     console.log(data)
  //     //     if (data.error == 'invalid_token')
  //     //       actions.receiveLogout()
  //     //     else
  //     //       actions.loadTrainings(data)
  //     //     // actions.addTrainings(data.trainings)
  //     // })
  //     .catch(err => console.log('Hooooo. Status = ' + status + ', error = ' + err))
  // }


  textswitcher() {
    const textSwitchWrapContainer = $('#textwrap')
    const textSwitchContainer = $('#textswitch')
    var loop = function(){
      this.isTextSwitchAnimated = true
      setTimeout( function() {
        // console.log('isTextSwitchAnimated = '+this.isTextSwitchAnimated )


        var animFrame = window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  null 
        // var that = this
        // animFrame( function() { that.textswitcher() } )
        
        if( this.isTextSwitchAnimated ){
          // window.requestAnimationFrame(this.textswitcher.bind(this))
          // textSwitchWrapContainer.removeClass('fadeOutLeft')
          // textSwitchWrapContainer.removeClass('fadeOutLeft animated')
          animFrame(loop.bind(this))
        }else{
          console.log('I m out now ' )
          textSwitchWrapContainer.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            // console.log('Remove fade out class' )
            $(this).removeClass()
            textSwitchContainer.text('')
          })
          return
        }

        
        while( lastrdm === rdm )
          rdm = Math.floor(Math.random() * window.switchTextArray.length)
        // console.log('rdm = '+rdm +', lastrdm = '+lastrdm+' : '+window.switchTextArray[rdm]+' : ')
        lastrdm = rdm
          // divContainer[0].style.display = 'none'
    //headShake 300 flash 300 fadeInLeft 300 rubberBand
        textSwitchWrapContainer.removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass()
        })
        setTimeout( function() {
          textSwitchContainer.shuffleLetters({
            'text': window.switchTextArray[rdm]
          })
            // setTimeout( function() {
            //   container.removeClass().addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            //     $(this).removeClass()
            //   })
            // }, 4600 )
        }.bind(this), 440 )
          // await sleep(1000)
      }.bind(this), 3000 )
    }.bind(this)
    loop()
  }


// static fetchDataOrig(actions) {  
//   console.log('trainings fetchData. Do nothing'+ JSON.stringify({
//       param: 'abbas'
//     }))
//   var test='This is abbas in the hood!'
//   return fetch('http://127.0.0.1:8081/api/trainings'
//     ,{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Type': 'application/json' 
//       },
//       // body: 'testparam='+test //if no json in header
//       body: JSON.stringify({
//         testparam: test
//       })
//     }
//   )
//   .then(response => response.json())
//   .then(data => {
//       console.log('trainingapp. component mounted ' +data.trainings)
//       actions.addTrainings(data.trainings)
//   })
//   .catch(err => console.log('Hooooo' + err))
// }
}
export default TrainingApp