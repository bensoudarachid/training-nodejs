import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  routing: routerReducer
})

export default rootReducer
