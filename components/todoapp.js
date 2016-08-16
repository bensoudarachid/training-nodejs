import CreateTodo from './create-todo'
import React, { Component } from 'react'
import TodosList from './todos-list'
import _ from 'lodash'
// import Immutable from 'Immutable'

require('es6-promise').polyfill();
require('isomorphic-fetch');


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


  render() {
    //let test = 'App';
    //console.log("Hi there from "+test);
    //  alert("Hi "+test);
    // createTask={this.createTask.bind(this)}
    //            <CreateTodo todos={this.props.todos} dispatch={this.props.dispatch} actions={this.props.actions}/>
    // deleteTask={this.deleteTask.bind(this)}
    const { auth } = this.props  
    return (
      <div>
      {!auth.isAuthenticated &&
      <div>
        No right access here. Please login
      </div>
      }
      {auth.isAuthenticated &&
      <div>
              <h1>React to dos!!!!</h1>
              <CreateTodo todos={this.props.todos} addTodo={this.props.actions.addTodo}/>
              <TodosList todos={this.props.todos} actions={this.props.actions}
        // toggleTask={this.toggleTask.bind(this)}
        // saveTask={this.saveTask.bind(this)}
        // deleteTask={this.deleteTask.bind(this)}
        />
      </div>
      }
      </div>
      );
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
    console.log('Todos mounted' + this.props.auth.id_token)
    TodoApp.fetchData(this.props.actions, this.props.auth.id_token)

    // var test='This is abbas in the hoodd!'
    // fetch('http://127.0.0.1:8080/api/todoslist', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //     ,'Content-Type': 'application/json'
    //   },
    //   // body: 'testparam=value' //if no json in header
    //   body: JSON.stringify({
    //     testparam: test
    //   })
    // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('todoapp. component mounted ' +data.todos)
      //   this.props.actions.addTodos(data.todos);
      // })
      // .catch(err => console.log('Booooo' + err));
  }

  static fetchData(actions, id_token='') {
    var headers=  {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json'
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
          // 'Authorization': 'Bearer '+id_token
    }
    if( id_token!='' ){
      headers.Authorization='Bearer '+id_token
      console.log('Ya todos fetchData.  auth id token: '+ id_token)
    }
    else
      console.log('Ya todos fetchData. Wahnsinn: no id_token')
    var test='This is abbas in the hood!'

    return fetch('http://127.0.0.1:8081/api/todos/2373'
      ,{
        method: 'GET',
        headers
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
        //   'Content-Type': 'application/json',
        //   // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoicGFwaWRha29zIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTQ2ODQ0ODY2OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImViMzQwNzMzLTA1MTItNDcxOS04Nzc4LWQ1M2VmMWY4N2MzOCIsImNsaWVudF9pZCI6ImNsaWVudGFwcCJ9.c_Ezkr191Ww7dWB2MEUj98XNQXsdmVdVmuIXQ_kKm3o'
        //   'Authorization': 'Bearer '+id_token
        // }
        // ,
        // body: JSON.stringify({
        //   testparam: test
        // })
        // body: 'testparam='+test //if no json in header
      }
    )
    .then(response => response.json())
    .then(data => {
        console.log('todoapp. data fetch ')
        console.log(data)
        if (data.error == 'invalid_token')
          actions.receiveLogout()
        else
          actions.loadTodos(data)
        // actions.addTodos(data.todos)
    })
    .catch(err => console.log('Hooooo' + err))
  }




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