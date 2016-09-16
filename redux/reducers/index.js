import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import { routerReducer } from 'react-router-redux'
// import { FetchData, reducer as fetching } from 'redux-fetch-data';

const rootReducer = combineReducers({
  auth: authReducer,	
  // todoappmap: todoAppReducer,
  todoappmap: todoReducer,
  user: userReducer,
  routing: routerReducer
})

export default rootReducer
