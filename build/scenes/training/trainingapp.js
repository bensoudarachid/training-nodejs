'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _trainingcreate = require('./components/trainingcreate');

var _trainingcreate2 = _interopRequireDefault(_trainingcreate);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _traininglist = require('./components/traininglist');

var _traininglist2 = _interopRequireDefault(_traininglist);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import _ from 'lodash'
// import { ThreeBounce } from 'better-react-spinkit'


if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser');
  require('./trainingapp.scss');
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

var TrainingApp = function (_Component) {
  _inherits(TrainingApp, _Component);

  function TrainingApp(props) {
    _classCallCheck(this, TrainingApp);

    // console.log('training list. Mixin in constructor')
    var _this = _possibleConstructorReturn(this, (TrainingApp.__proto__ || Object.getPrototypeOf(TrainingApp)).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    // const {auth} = this.props
    // if(process.env.BROWSER && !this.props.auth.get('isAuthenticated')){
    //   console.log('trainingapp start login process')
    //   this.props.actions.loginProcessStart('No access rights!')
    // }
    return _this;
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


  _createClass(TrainingApp, [{
    key: 'render',
    value: function render() {
      // console.log('Render training app now')
      var isBrowser = process.env.BROWSER; //typeof window !== 'undefined';
      if (!isBrowser) {
        // console.log('+++++++++++++++++++++++++Trainingapp. environment is server')
        return _react2.default.createElement('div', null);
      }
      // console.log('+++++++++++++++++++++++++Trainingapp. environment is browser')
      var auth = this.props.auth;

      return _react2.default.createElement(
        'div',
        { className: 'trainingapp' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Trainings. Please proceed now'
          ),
          _react2.default.createElement(_trainingcreate2.default, { trainings: this.props.trainingappmap.get('trainings'), actions: this.props.actions }),
          _react2.default.createElement(_traininglist2.default, { trainings: this.props.trainingappmap.get('trainings'), actions: this.props.actions })
        )
      );
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

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('trainingappjs mounted')
      TrainingApp.fetchData(this.props.actions);
    }
    //This is a necessary call when component is fetched on server side

  }], [{
    key: 'fetchData',
    value: function fetchData(actions) {
      actions.retrieveTrainingsDispatcher();
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

  }]);

  return TrainingApp;
}(_react.Component);

exports.default = TrainingApp;