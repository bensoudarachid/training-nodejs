'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoactions = {

    createTodoInit: function createTodoInit(representTodo) {
        return {
            type: 'CREATE_TODO_INIT',
            todo: representTodo
        };
    },
    rejectTodo: function rejectTodo(representTodo) {
        console.log('Actions. Init registration: ');
        return {
            type: 'REJECT_TODO_INIT',
            representTodo: representTodo
        };
    },
    updateTodo: function updateTodo(todo) {
        console.log('todo actions update todo');
        console.log(todo);
        return {
            type: 'UPDATE_TODO',
            todo: todo
        };
    },
    uploadingTodoImg: function uploadingTodoImg(todo, isUploading) {

        return {
            type: 'UPLOADING_TODO_IMAGE',
            todo: todo,
            isUploading: isUploading
        };
    },
    loadingTodo: function loadingTodo(todo) {

        return {
            type: 'LOADING_TODO',
            todo: todo
        };
    },

    createTodo: function createTodo(text) {
        return function (dispatch) {
            var representTodo = _immutable2.default.Map({

                task: text,

                loading: true
            });
            dispatch(todoactions.createTodoInit(representTodo));
            _actions2.default.updateTodoService(representTodo).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status === 401) {
                    dispatch(_actions2.default.receiveLogout());
                } else if (status >= 400) {
                    var error = data;
                    dispatch(todoactions.rejectTodo(representTodo));
                } else if (data.error === 'invalid_token') {

                    var errorDescription = data.error_description;
                    dispatch(_actions2.default.receiveLogout());
                } else if (data.error) {

                    var errorDescription = data.error_description;
                    dispatch(todoactions.rejectTodo(representTodo));
                } else {
                    dispatch(todoactions.addTodo(_immutable2.default.Map(data), representTodo));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                dispatch(todoactions.rejectTodo(representTodo));
            });
        };
    },
    addTodo: function addTodo(todo, representTodo) {
        return {
            type: 'ADD_TODO',
            todo: todo,
            representTodo: representTodo
        };
    },
    addTodos: function addTodos(todos) {
        return {
            type: 'ADD_TODOS',
            todos: todos
        };
    },
    completeTodo: function completeTodo(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        };
    },
    uploadTodoFileDispatcher: function uploadTodoFileDispatcher(todo, todoold, fileinput) {
        console.log('todoactions. uploadTodoFileDispatcher');
        return function (dispatch) {
            if (fileinput == undefined) {
                todoold = todoold.set('error', 'No file parameter provided');
                dispatch(todoactions.updateTodo(todoold));
                todoold = todoold.delete('error');
                setTimeout(function () {
                    dispatch(todoactions.updateTodo(todoold));
                }, 2500);
                return;
            }
            if (fileinput.size > 500000) {
                todoold = todoold.set('error', 'File too large (200kb max)');
                dispatch(todoactions.updateTodo(todoold));
                todoold = todoold.delete('error');
                setTimeout(function () {
                    dispatch(todoactions.updateTodo(todoold));
                }, 2500);
                return;
            }
            if (todo.get('loading') || todo.get('error')) {

                return;
            }
            dispatch(todoactions.loadingTodo(todo));
            _actions2.default.uploadTodoFileService(todo, fileinput).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status == 413) {
                    todoold = todoold.set('error', 'File is too large');
                    dispatch(todoactions.updateTodo(todoold));
                    todoold = todoold.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todoold));
                    }, 2500);
                } else if (status >= 400) {

                    todoold = todoold.set('error', 'System error');
                    dispatch(todoactions.updateTodo(todoold));
                    todoold = todoold.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todoold));
                    }, 2500);
                } else if (data.error) {

                    var errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    todoold = todoold.set('error', errorDescription);
                    dispatch(todoactions.updateTodo(todoold));
                    todoold = todoold.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todoold));
                    }, 2500);
                } else {
                    dispatch(todoactions.updateTodo(todo));
                    dispatch(todoactions.uploadingTodoImg(todo, true));
                    dispatch(todoactions.uploadingTodoImg(todo, false));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                todoold = todoold.set('error', 'System error');
                dispatch(todoactions.updateTodo(todoold));
                todoold = todoold.delete('error');

                setTimeout(function () {
                    dispatch(todoactions.updateTodo(todoold));
                }, 2500);
            });
        };
    },
    updateTodoDispatcher: function updateTodoDispatcher(todo, todoold) {
        console.log('todoactions. updateTodoDispatcher');
        return function (dispatch) {
            if (todo.get('loading') || todo.get('error')) {

                return;
            }
            dispatch(todoactions.loadingTodo(todo));
            console.log('actions. update Todo version old: ' + todoold.get('userId') + '. new: ' + todo.get('version'));

            _actions2.default.updateTodoService(todo).then(function (_ref3) {
                var status = _ref3.status,
                    data = _ref3.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;else if (status >= 400) {
                    var errorDescription;
                    if (data.error) {
                        errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    }

                    todoold = todoold.set('error', errorDescription);
                    dispatch(todoactions.updateTodo(todoold));
                    todoold = todoold.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todoold));
                    }, 2500);
                } else if (data.error) {

                    errorDescription = data.errorDescription !== undefined ? data.errorDescription : 'System error';
                    todoold = todoold.set('error', errorDescription);
                    dispatch(todoactions.updateTodo(todoold));
                    todoold = todoold.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todoold));
                    }, 2500);
                } else {
                    dispatch(todoactions.updateTodo(_immutable2.default.Map(data)));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                todoold = todoold.set('error', 'System error');
                dispatch(todoactions.updateTodo(todoold));
                todoold = todoold.delete('error');
                setTimeout(function () {
                    dispatch(todoactions.updateTodo(todoold));
                }, 2500);
            });
        };
    },
    deleteTodo: function deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        };
    },
    loadTodos: function loadTodos(todosraw) {
        return {
            type: 'TODOS_LOADED',
            todos: todosraw
        };
    },
    retrieveUserTodosDispatcher: function retrieveUserTodosDispatcher() {

        return function (dispatch) {

            _actions2.default.retrieveTodosService().then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;

                if (status === 401) {

                    dispatch(_actions2.default.loginProcessStart('No access rights!', _actions2.default.retrieveUserTodosDispatcher));
                } else if (status >= 400) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);
                    dispatch(_actions2.default.receiveLogout());
                } else if (data.error) {

                    var errorDescription = data.error_description;
                    console.log('Todoapp fetch error = ' + data.error + ', description = ' + errorDescription);
                    dispatch(_actions2.default.receiveLogout());
                } else {
                    dispatch(_actions2.default.loadTodos(data));
                }
            }).catch(function (err) {
                dispatch(_actions2.default.receiveLogout());
                console.log('todoactions.js Error retrieving data. error = ' + err);
            });
        };
    },
    deleteTodoSrv: function deleteTodoSrv(todo) {
        return function (dispatch) {
            if (todo.get('loading') || todo.get('error')) {
                console.log('todo actions toggle todo. Is loading or Error displaying. So no action');
                return;
            }
            dispatch(todoactions.loadingTodo(todo));
            console.log('actions. toggleTodo Todo 1');
            _actions2.default.deleteTodoService(todo).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

                if (_actions2.default.disconnect(dispatch, status, data)) return;
                if (status >= 400) {
                    var error = data;
                    console.log('Status looks bad. ' + status + '. error message = ' + error.message);

                    todo = todo.set('error', 'System error');
                    dispatch(todoactions.updateTodo(todo));
                    todo = todo.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todo));
                    }, 2500);
                } else if (data.error) {
                    todo = todo.set('error', 'System error');
                    dispatch(todoactions.updateTodo(todo));
                    todo = todo.delete('error');
                    setTimeout(function () {
                        dispatch(todoactions.updateTodo(todo));
                    }, 2500);
                } else {
                    console.log('Status looks good ');
                    console.log(data);

                    console.log('todo actions. todo representant : ');

                    dispatch(todoactions.deleteTodo(todo.get('id')));
                }
            }, function (err) {
                console.log('Status looks not good at all!' + err);
                console.log('Status looks not good at all! todo completed? ' + todo.get('completed'));
                todo = todo.set('error', 'System error');
                dispatch(todoactions.updateTodo(todo));
                todo = todo.delete('error');
                setTimeout(function () {
                    dispatch(todoactions.updateTodo(todo));
                }, 2500);
            });
        };
    },
    filterTodosOpen: function filterTodosOpen(filterTodos) {
        return {
            type: 'FILTER_TODOS_OPEN',
            filterOpen: filterTodos
        };
    },
    filterTodosClosed: function filterTodosClosed(filterTodos) {
        return {
            type: 'FILTER_TODOS_CLOSED',
            filterClosed: filterTodos
        };
    }

};

exports.default = todoactions;