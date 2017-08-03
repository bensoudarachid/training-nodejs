import {combineReducers} from 'redux'
import todoReducer from './todos/todoReducer'
import trainingReducer from './trainings/trainingReducer'
// import userReducer from './userReducer'
import authReducer from './app/authentication/authReducer'
import appReducer from './app/appReducer'
import {routerReducer} from 'react-router-redux'
// import { FetchData, reducer as fetching } from 'redux-fetch-data';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    // todoappmap: todoAppReducer,
    todoappmap: todoReducer,
    trainingappmap: trainingReducer,
    // user: userReducer,
    routing: routerReducer
})

export default rootReducer
