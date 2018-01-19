import {combineReducers} from 'redux'
import todoReducer from './todos/todoReducer'
import trainingReducer from './trainings/trainingReducer'

import authReducer from './app/authentication/authReducer'
import appReducer from './app/appReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    todoappmap: todoReducer,
    trainingappmap: trainingReducer,
    routing: routerReducer
})

export default rootReducer
