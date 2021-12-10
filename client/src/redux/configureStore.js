import { applyMiddleware, combineReducers, createStore } from 'redux'
import { posts, categories, registration, authorization } from './ducks'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
	diff: true,
	collapsed: true,
})

export const store = createStore(
	combineReducers({ posts, categories, registration, authorization }),
	applyMiddleware(thunk, logger)
)
