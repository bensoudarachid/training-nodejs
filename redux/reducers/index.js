import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import { routerReducer } from 'react-router-redux';
import { FetchData, reducer as fetching } from 'redux-fetch-data';

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  routing: routerReducer,
  fetching
})

export default rootReducer
