import Immutable from 'immutable'
import actions from '../actions'

const todoactions = {

    createTodoInit: function (representTodo) {
        return {
            type: 'CREATE_TODO_INIT',
            todo: representTodo
        }
    },
    rejectTodo: function (representTodo) {
        console.log('Actions. Init registration: ')
        return {
            type: 'REJECT_TODO_INIT',
            representTodo: representTodo
        }
    },
    updateTodo: function (todo) {
        console.log('todo actions update todo')
        console.log(todo)
        return {
            type: 'UPDATE_TODO',
            todo
        }
    },
    uploadingTodoImg: function (todo, isUploading) {

        return {
            type: 'UPLOADING_TODO_IMAGE',
            todo,
            isUploading
        }
    },
    loadingTodo: function (todo) {

        return {
            type: 'LOADING_TODO',
            todo
        }
    },

    createTodo: function (text) {
        return (dispatch) => {
            var representTodo = Immutable.Map({

                task: text,


                loading: true
            })
            dispatch(todoactions.createTodoInit(representTodo))
            actions.updateTodoService(representTodo).then(
                ({status, data}) => {
                    if (status === 401) {
                        dispatch(actions.receiveLogout())
                    } else if (status >= 400) {
                        var error = data
                        dispatch(todoactions.rejectTodo(representTodo))
                    } else if (data.error === 'invalid_token') {

                        var errorDescription = data.error_description
                        dispatch(actions.receiveLogout())
                    } else if (data.error) {

                        var errorDescription = data.error_description
                        dispatch(todoactions.rejectTodo(representTodo))
                    } else {
                        dispatch(todoactions.addTodo(Immutable.Map(data), representTodo))
                    }
                },
<<<<<<< HEAD
<<<<<<< HEAD
                err => {
=======
                    err => {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                err => {
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    console.log('Status looks not good at all!' + err)
                    dispatch(todoactions.rejectTodo(representTodo))
                }
            )
        }
    },
    addTodo: function (todo, representTodo) {
        return {
            type: 'ADD_TODO',
            todo: todo,
            representTodo: representTodo
        }
    },
    addTodos: function (todos) {
        return {
            type: 'ADD_TODOS',
            todos: todos
        }
    },
    completeTodo: function (id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },
    uploadTodoFileDispatcher: function (todo, todoold, fileinput) {
        console.log('todoactions. uploadTodoFileDispatcher')
        return (dispatch) => {
            if (fileinput == undefined) {
                todoold = todoold.set('error', 'No file parameter provided')
                dispatch(todoactions.updateTodo(todoold))
                todoold = todoold.delete('error')
                setTimeout(() => {
                    dispatch(todoactions.updateTodo(todoold))
                }, 2500)
                return
            }
            if (fileinput.size > 500000) {
                todoold = todoold.set('error', 'File too large (200kb max)')
                dispatch(todoactions.updateTodo(todoold))
                todoold = todoold.delete('error')
                setTimeout(() => {
                    dispatch(todoactions.updateTodo(todoold))
                }, 2500)
                return
            }
            if (todo.get('loading') || todo.get('error')) {

                return
            }
            dispatch(todoactions.loadingTodo(todo))
            actions.uploadTodoFileService(todo, fileinput)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 413) {
                            todoold = todoold.set('error', 'File is too large')
<<<<<<< HEAD
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        } else if (status >= 400) {


                            todoold = todoold.set('error', 'System error')
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        } else if (data.error) {

                            var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        }
                        else {
                            dispatch(todoactions.updateTodo(todo))
                            dispatch(todoactions.uploadingTodoImg(todo, true))
                            dispatch(todoactions.uploadingTodoImg(todo, false))


                        }

                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        todoold = todoold.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todoold))
                        todoold = todoold.delete('error')
<<<<<<< HEAD
                        // dispatch(todoactions.uploadingTodoImg(todo,false))
=======
                ({status, data}) => {
                    if (actions.disconnect(dispatch, status, data))
                        return
                    else if (status == 413) {
                        console.log('Status file too large. ' + status)
                        todoold = todoold.set('error', 'File is too large')
                        dispatch(todoactions.updateTodo(todoold))
                        todoold = todoold.delete('error')
                        setTimeout(() => {
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        } else if (status >= 400) {
                            // var error = data
                            // console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                            todoold = todoold.set('error', 'System error')
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        } else if (data.error) {
                            // var error = data.error
                            var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        }
                        else {
                            dispatch(todoactions.updateTodo(todo))
                            dispatch(todoactions.uploadingTodoImg(todo, true))
                            dispatch(todoactions.uploadingTodoImg(todo, false))
                            // setTimeout(function() {
                            //   dispatch(todoactions.uploadingTodoImg(todo,false))
                            // },(2000) )
                            // dispatch(todoactions.loadingTodoFileOn())
                        }
                        // dispatch(todoactions.uploadingTodoImg(todo,false))
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! todo completed? ' + todoold.get('completed'))
                        todoold = todoold.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todoold))
                        todoold = todoold.delete('error')
<<<<<<< HEAD
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                        // dispatch(todoactions.uploadingTodoImg(todo,false))
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
=======

>>>>>>> f886b1f... clean code, remove console logs
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todoold))
                        }, 2500)
                    }
<<<<<<< HEAD
<<<<<<< HEAD
                )
=======
                    else {
                        dispatch(todoactions.updateTodo(todo))
                        dispatch(todoactions.uploadingTodoImg(todo, true))
                        dispatch(todoactions.uploadingTodoImg(todo, false))
                        // setTimeout(function() {
                        //   dispatch(todoactions.uploadingTodoImg(todo,false))
                        // },(2000) )
                        // dispatch(todoactions.loadingTodoFileOn())
                    }
                    // dispatch(todoactions.uploadingTodoImg(todo,false))
                },
                    err => {
                    console.log('Status looks not good at all!' + err)
                    console.log('Status looks not good at all! todo completed? ' + todoold.get('completed'))
                    todoold = todoold.set('error', 'System error')
                    dispatch(todoactions.updateTodo(todoold))
                    todoold = todoold.delete('error')
                    // dispatch(todoactions.uploadingTodoImg(todo,false))
                    setTimeout(() => {
                        dispatch(todoactions.updateTodo(todoold))
                    }, 2500)
                }
            )
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

        }
    },
    updateTodoDispatcher: function (todo, todoold) {
        console.log('todoactions. updateTodoDispatcher')
        return (dispatch) => {
            if (todo.get('loading') || todo.get('error')) {

                return
            }
            dispatch(todoactions.loadingTodo(todo))
            console.log('actions. update Todo version old: ' + todoold.get('userId') + '. new: ' + todo.get('version'))


            actions.updateTodoService(todo)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return

                        // if (status === 401) {
                        //   dispatch(actions.receiveLogout())
                        // } 
                        else if (status >= 400) {
                            var errorDescription
                            if (data.error) {
                                console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                                errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            }

                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                            // console.log('Todo action error loop. ' + i)
                            // }
                            // dispatch(todoactions.updateTodo(todoold))
                        }
                        // else if (data.error === 'invalid_token') {
                        //   // var error = data.error
                        //   var errorDescription = data.error_description
                        //   console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                        //   dispatch(actions.receiveLogout())
                        // } 
                        else if (data.error) {
                            // var error = data.error
                            errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            console.log(data)
                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        }
                        // else if(data.exception !== undefined){
                        //   // console.log('Status looks good. See if there is an exception message'+data.message)
                        //   // if(data.exception !== undefined)
                        //   //   console.log(data.message)
                        //   todoold = todoold.set('error', data.message)
                        //   dispatch(todoactions.updateTodo(todoold))
                        //   todoold = todoold.delete('error')
                        //   setTimeout(() => {
                        //     dispatch(todoactions.updateTodo(todoold))
                        //   }, 2500)
                        //   // var newtodos = todos.push(Immutable.Map(data))
                        //   // console.log('New todos ')
                        //   // console.log(newtodos)
                        //   // todos = todos.push(Immutable.Map({
                        //   //   task: action.text,
                        //   //   isCompleted: false,
                        //   //   id: maxid
                        //   // }))
                        //   // console.log('todo actions. todo representant : ')
                        //   // console.log(representTodo)

                        //   dispatch(todoactions.updateTodo(Immutable.Map(data)))
                        // // return newtodos;
                        // } 
                        else {
                            // console.log('Status looks good. See if there is an exception message')
                            // if(data.exception !== undefined)
                            //   console.log(data.message)
                            // var newtodos = todos.push(Immutable.Map(data))
                            // console.log('New todos ')
                            // console.log(newtodos)
                            // todos = todos.push(Immutable.Map({
                            //   task: action.text,
                            //   isCompleted: false,
                            //   id: maxid
                            // }))
                            // console.log('todo actions. todo representant : ')
                            // console.log(representTodo)

                            dispatch(todoactions.updateTodo(Immutable.Map(data)))
                            // return newtodos;
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! todo completed? ' + todoold.get('completed'))
                        todoold = todoold.set('error', 'System error')
=======
                ({status, data}) => {
                    if (actions.disconnect(dispatch, status, data))
                        return

                    // if (status === 401) {
                    //   dispatch(actions.receiveLogout())
                    // }
                    else if (status >= 400) {
                        var errorDescription
                        if (data.error) {
                            console.log('Status looks bad. ' + status + '. error message = ' + data.error)
                            errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                        }

                        todoold = todoold.set('error', errorDescription)
>>>>>>> 6e3ff02... webstorm big changes crash
                        dispatch(todoactions.updateTodo(todoold))
                        todoold = todoold.delete('error')
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todoold))
                        }, 2500)
<<<<<<< HEAD
                    }
                )
=======
                        // console.log('Todo action error loop. ' + i)
=======
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status >= 400) {
                            var errorDescription
                            if (data.error) {
                                errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            }

                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        }
<<<<<<< HEAD
                        // else if (data.error === 'invalid_token') {
                        //   // var error = data.error
                        //   var errorDescription = data.error_description
                        //   console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                        //   dispatch(actions.receiveLogout())
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        // }
=======
>>>>>>> f886b1f... clean code, remove console logs
                        else if (data.error) {

                            errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error'
                            todoold = todoold.set('error', errorDescription)
                            dispatch(todoactions.updateTodo(todoold))
                            todoold = todoold.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todoold))
                            }, 2500)
                        }
                        else {
                            dispatch(todoactions.updateTodo(Immutable.Map(data)))
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        todoold = todoold.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todoold))
                        todoold = todoold.delete('error')
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todoold))
                        }, 2500)
                    }
<<<<<<< HEAD
                    // else if(data.exception !== undefined){
                    //   // console.log('Status looks good. See if there is an exception message'+data.message)
                    //   // if(data.exception !== undefined)
                    //   //   console.log(data.message)
                    //   todoold = todoold.set('error', data.message)
                    //   dispatch(todoactions.updateTodo(todoold))
                    //   todoold = todoold.delete('error')
                    //   setTimeout(() => {
                    //     dispatch(todoactions.updateTodo(todoold))
                    //   }, 2500)
                    //   // var newtodos = todos.push(Immutable.Map(data))
                    //   // console.log('New todos ')
                    //   // console.log(newtodos)
                    //   // todos = todos.push(Immutable.Map({
                    //   //   task: action.text,
                    //   //   isCompleted: false,
                    //   //   id: maxid
                    //   // }))
                    //   // console.log('todo actions. todo representant : ')
                    //   // console.log(representTodo)

                    //   dispatch(todoactions.updateTodo(Immutable.Map(data)))
                    // // return newtodos;
                    // }
                    else {
                        // console.log('Status looks good. See if there is an exception message')
                        // if(data.exception !== undefined)
                        //   console.log(data.message)
                        // var newtodos = todos.push(Immutable.Map(data))
                        // console.log('New todos ')
                        // console.log(newtodos)
                        // todos = todos.push(Immutable.Map({
                        //   task: action.text,
                        //   isCompleted: false,
                        //   id: maxid
                        // }))
                        // console.log('todo actions. todo representant : ')
                        // console.log(representTodo)

                        dispatch(todoactions.updateTodo(Immutable.Map(data)))
                        // return newtodos;
                    }
                },
                    err => {
                    console.log('Status looks not good at all!' + err)
                    console.log('Status looks not good at all! todo completed? ' + todoold.get('completed'))
                    todoold = todoold.set('error', 'System error')
                    dispatch(todoactions.updateTodo(todoold))
                    todoold = todoold.delete('error')
                    setTimeout(() => {
                        dispatch(todoactions.updateTodo(todoold))
                    }, 2500)
                }
            )
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        }
    },
    deleteTodo: function (id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    loadTodos: function (todosraw) {
        return {
            type: 'TODOS_LOADED',
            todos: todosraw
        }
    },
    retrieveUserTodosDispatcher: function () {

        return (dispatch) => {

            actions.retrieveTodosService()
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (status === 401) {

                            dispatch(actions.loginProcessStart('No access rights!', actions.retrieveUserTodosDispatcher))

                        } else if (status >= 400) {
                            var error = data
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                            dispatch(actions.receiveLogout())
                        } else if (data.error) {

                            var errorDescription = data.error_description
                            console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                            dispatch(actions.receiveLogout())
                        } else {
                            dispatch(actions.loadTodos(data))

                        }
                    })
<<<<<<< HEAD
<<<<<<< HEAD
=======
                ({status, data}) => {
                    if (status === 401) {
                        // dispatch(actions.receiveLogout())
                        dispatch(actions.loginProcessStart('No access rights!', actions.retrieveUserTodosDispatcher))

                    } else if (status >= 400) {
                        var error = data
                        console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                        dispatch(actions.receiveLogout())
                    } else if (data.error) {
                        // var error = data.error
                        var errorDescription = data.error_description
                        console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription)
                        dispatch(actions.receiveLogout())
                    } else {
                        dispatch(actions.loadTodos(data))
                        // dispatch(actions.loadingTodoFileOff())
                    }
                })
>>>>>>> 6e3ff02... webstorm big changes crash
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                // .then(data => {
                //     console.log('todoapp. data fetch ')
                //     console.log(data)
                //     if (data.error == 'invalid_token')
                //       actions.receiveLogout()
                //     else
                //       actions.loadTodos(data)
                //     // actions.addTodos(data.todos)
                // })
=======


>>>>>>> f886b1f... clean code, remove console logs
                .catch(err => {
                    dispatch(actions.receiveLogout())
                    console.log('todoactions.js Error retrieving data. error = ' + err)

                })
        }
    },
    deleteTodoSrv: function (todo) {
        return (dispatch) => {
            if (todo.get('loading') || todo.get('error')) {
                console.log('todo actions toggle todo. Is loading or Error displaying. So no action')
                return
            }
            dispatch(todoactions.loadingTodo(todo))
            console.log('actions. toggleTodo Todo 1')
            actions.deleteTodoService(todo)
                .then(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        if (status >= 400) {
                            var error = data
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)


                            todo = todo.set('error', 'System error')
<<<<<<< HEAD
                            dispatch(todoactions.updateTodo(todo))
                            todo = todo.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todo))
                            }, 2500)
                            // console.log('Todo action error loop. ' + i)
                            // }
                            // dispatch(todoactions.updateTodo(todo))
                        } else if (data.error) {
                            todo = todo.set('error', 'System error')
                            dispatch(todoactions.updateTodo(todo))
                            todo = todo.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todo))
                            }, 2500)
                        } else {
                            console.log('Status looks good ')
                            console.log(data)
                            // var newtodos = todos.push(Immutable.Map(data))
                            // console.log('New todos ')
                            // console.log(newtodos)
                            // todos = todos.push(Immutable.Map({
                            //   task: action.text,
                            //   isCompleted: false,
                            //   id: maxid
                            // }))
                            console.log('todo actions. todo representant : ')
                            // console.log(representTodo)

                            dispatch(todoactions.deleteTodo(todo.get('id')))
                            // return newtodos;
                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! todo completed? ' + todo.get('completed'))
=======
                ({status, data}) => {
                    if (actions.disconnect(dispatch, status, data))
                        return
                    if (status >= 400) {
                        var error = data
                        console.log('Status looks bad. ' + status + '. error message = ' + error.message)
                        // for (var i = 0; i < 3; i++) {

                        todo = todo.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todo))
                        todo = todo.delete('error')
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todo))
                        }, 2500)
                        // console.log('Todo action error loop. ' + i)
                        // }
                        // dispatch(todoactions.updateTodo(todo))
                    } else if (data.error) {
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                            dispatch(todoactions.updateTodo(todo))
                            todo = todo.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todo))
                            }, 2500)


                        } else if (data.error) {
                            todo = todo.set('error', 'System error')
                            dispatch(todoactions.updateTodo(todo))
                            todo = todo.delete('error')
                            setTimeout(() => {
                                dispatch(todoactions.updateTodo(todo))
                            }, 2500)
                        } else {
                            console.log('Status looks good ')
                            console.log(data)


                            console.log('todo actions. todo representant : ')


                            dispatch(todoactions.deleteTodo(todo.get('id')))

                        }
                    },
                    err => {
                        console.log('Status looks not good at all!' + err)
                        console.log('Status looks not good at all! todo completed? ' + todo.get('completed'))
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
                        todo = todo.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todo))
                        todo = todo.delete('error')
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todo))
                        }, 2500)
<<<<<<< HEAD
<<<<<<< HEAD

                    }
                )
=======
                    } else {
                        console.log('Status looks good ')
                        console.log(data)
                        // var newtodos = todos.push(Immutable.Map(data))
                        // console.log('New todos ')
                        // console.log(newtodos)
                        // todos = todos.push(Immutable.Map({
                        //   task: action.text,
                        //   isCompleted: false,
                        //   id: maxid
                        // }))
                        console.log('todo actions. todo representant : ')
                        // console.log(representTodo)
=======
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests

                    }
<<<<<<< HEAD
                },
                    err => {
                    console.log('Status looks not good at all!' + err)
                    console.log('Status looks not good at all! todo completed? ' + todo.get('completed'))
                    todo = todo.set('error', 'System error')
                    dispatch(todoactions.updateTodo(todo))
                    todo = todo.delete('error')
                    setTimeout(() => {
                        dispatch(todoactions.updateTodo(todo))
                    }, 2500)

                }
            )
>>>>>>> 6e3ff02... webstorm big changes crash
=======
                )
>>>>>>> 08d053b... webstorm 2017 reformatted code .install webpack-3, adapt extract-text-plugin. find a solution to have all app css in one file and still get js splitted by request-ensure method.(using different entries). fix the messy relative import paths through webpack resolve.modules. fix testing resolve paths by adding set NODE_PATH=./src&& mocha... in the beginning of the test command.Fix Public training -> Login -> Admin Training. No list there. Add mocha chai enzyme sinon tests using full rendering method mount for TodoList component in order to check internal method calls. Add training calendar.Add tests for training edit buttons. submit and delete. Move to babel es2017 and use async await in sinon tests
        }


    },
    filterTodosOpen: function (filterTodos) {
        return {
            type: 'FILTER_TODOS_OPEN',
            filterOpen: filterTodos
        }

    },
    filterTodosClosed: function (filterTodos) {
        return {
            type: 'FILTER_TODOS_CLOSED',
            filterClosed: filterTodos
        }

    }


}

export default todoactions