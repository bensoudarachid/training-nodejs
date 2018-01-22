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
                err => {
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
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        else if (status == 413) {
                            todoold = todoold.set('error', 'File is too large')
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

                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todoold))
                        }, 2500)
                    }
                )

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
                )
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
                    ({status, data}) => {
                        if (actions.disconnect(dispatch, status, data))
                            return
                        if (status >= 400) {
                            var error = data
                            console.log('Status looks bad. ' + status + '. error message = ' + error.message)


                            todo = todo.set('error', 'System error')
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
                        todo = todo.set('error', 'System error')
                        dispatch(todoactions.updateTodo(todo))
                        todo = todo.delete('error')
                        setTimeout(() => {
                            dispatch(todoactions.updateTodo(todo))
                        }, 2500)

                    }
                )
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