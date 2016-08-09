import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger();

let finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore)


export default function configureStore(initialState = { todos: [], user: {} }) {
	console.log('store.js. This is used. i thought not')
  return finalCreateStore(rootReducer, initialState)
}
