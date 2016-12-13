import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import { routerReducer } from 'react-router-redux'
// import { FetchData, reducer as fetching } from 'redux-fetch-data';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  // todoappmap: todoAppReducer,
  todoappmap: todoReducer,
  user: userReducer,
  routing: routerReducer
})

export default rootReducer
