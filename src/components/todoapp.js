import CreateTodo from './create-todo'
import TodosFilter from './todos-filter'

import React, { Component } from 'react'
import TodosList from './todos-list'
import cookie from 'react-cookie'
// import _ from 'lodash'
import { ThreeBounce } from 'better-react-spinkit'
import PureRenderMixin from 'react-addons-pure-render-mixin'

if (process.env.BROWSER) {
  console.log('Appcomponent. environment is browser')
  require('./todoapp.scss')
}

// import Immutable from 'immutable'

// require('es6-promise').polyfill();
// require('isomorphic-fetch');


// const todos = [
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

class TodoApp extends Component {
  constructor(props) {
    super(props)
    console.log('todo list. Mixin in constructor')
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    // const {auth} = this.props
    if(process.env.BROWSER && !this.props.auth.get('isAuthenticated')){
      console.log('todoapp start login process')
      this.props.actions.loginProcessStart('No access rights!')
    }
  }

// constructor(props) {
  //   super(props)

  //   this.state = {
  //     todos
  //   }
  // }
  // static fetchData () {  
  //   console.log('todoapp. load todos')
  //   var test='This is abbas in the hood!'

  //   fetch('/api/todoslist', {
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
  //       // console.log(data.todos)
  //       // this.props.actions.addTodos(data.todos);
  //       return this.props.actions.loadTodos(data);
  //     })
  //     .catch(err => console.log('Booooo' + err));
  // }

//createTodo={this.props.actions.createTodo}
// {this.props.todoappmap.get('filterOpen')}
      // toggleTask={this.toggleTask.bind(this)}
      // saveTask={this.saveTask.bind(this)}
      // deleteTask={this.deleteTask.bind(this)}

  render() {

    const isBrowser = process.env.BROWSER//typeof window !== 'undefined';
    if (!isBrowser) {
      // console.log('+++++++++++++++++++++++++Todoapp. environment is server')
      return <div/>
    }
    // console.log('+++++++++++++++++++++++++Todoapp. environment is browser')
    const {auth} = this.props
    // console.log('Render todoapp authenticated ? ' + auth.get('isAuthenticated'))
    //  alert("Hi "+test);
    // createTask={this.createTask.bind(this)}
    //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    // deleteTask={this.deleteTask.bind(this)}
    return (
      <div className='todoapp container'>
      {!auth.get('isAuthenticated') &&
      <div>
        No right access here. Please login
      </div>
      }
      {auth.get('isAuthenticated') &&
      <div>
        <h3>To dos. Please proceed now</h3>
        <TodosFilter filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')} actions={this.props.actions} />
        <CreateTodo todos={this.props.todoappmap.get('todos')} actions={this.props.actions}/>
        <TodosList todos={this.props.todoappmap.get('todos')} filteropen={this.props.todoappmap.get('filterOpen')} filterclosed={this.props.todoappmap.get('filterClosed')}  actions={this.props.actions}/>
      </div>
      }
      </div>
      )
  }
  // saveTask(oldTask, newTask) {
  //   const foundTodo = _.find(this.state.todos, (todo) => todo.task === oldTask);
  //   foundTodo.task = newTask;

  //   this.setState({
  //     todos: this.state.todos
  //   })
  // }
  // deleteTask(taskToDelete) {
  //   //        console.log('delete'+taskToDelete);
  //   _.remove(this.state.todos, (todo) => todo.task === taskToDelete);
  //   this.setState({
  //     todos: this.state.todos
  //   });
  // }
  // toggleTask(task) {
  //   const foundTodo = this.state.todos.find((todo) =>  todo.get('task') === task)
  //   // const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
  //   foundTodo.isCompleted = !foundTodo.isCompleted;
  //   this.setState({
  //     todos: this.state.todos
  //   });
  // }
  componentDidMount() {
    console.log('todoappjs mounted')
    TodoApp.fetchData(this.props.actions)
  }
  //This is a necessary call when component is fetched on server side
  static fetchData(actions) {
    actions.retrieveUserTodosDispatcher()
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
  //     console.log('Ya todos fetchData.  auth id token: ' + id_token)
  //   }
  //   else
  //     console.log('Ya todos fetchData. Wahnsinn: no id_token')
  //   var test = 'This is abbas in the hood!'

  //   return fetch('http://127.0.0.1:8081/api/todos/2373'
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
  //           console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
  //           actions.receiveLogout()
  //         } else {
  //           actions.loadTodos(data)
  //         }
  //       })
  //     // .then(data => {
  //     //     console.log('todoapp. data fetch ')
  //     //     console.log(data)
  //     //     if (data.error == 'invalid_token')
  //     //       actions.receiveLogout()
  //     //     else
  //     //       actions.loadTodos(data)
  //     //     // actions.addTodos(data.todos)
  //     // })
  //     .catch(err => console.log('Hooooo. Status = ' + status + ', error = ' + err))
  // }




// static fetchDataOrig(actions) {  
//   console.log('todos fetchData. Do nothing'+ JSON.stringify({
//       param: 'abbas'
//     }))
//   var test='This is abbas in the hood!'
//   return fetch('http://127.0.0.1:8081/api/todos'
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
//       console.log('todoapp. component mounted ' +data.todos)
//       actions.addTodos(data.todos)
//   })
//   .catch(err => console.log('Hooooo' + err))
// }
}
export default TodoApp