import { combineReducers, createStore, applyMiddleware } from 'redux'
import { save, load } from 'redux-localstorage-simple'

import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const reducersCombined = combineReducers(reducers)

const sagaMiddleware = createSagaMiddleware()

const options = {
  namespace: 'weather-app-store',
  states: ['Weather']
}

const skipLoggerActions = []
const mylogger = createLogger({
  predicate: (getState, action) =>
    process.env.NODE_ENV !== 'production' && skipLoggerActions.indexOf(action.type) === -1
})

const store = createStore(reducersCombined, load(options), applyMiddleware(sagaMiddleware, mylogger, save(options)))

window.store = store
export default store
