import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
import reducer from './reducer'

import Immutable from 'immutable'

const store = createStore(
  reducer, 
  Immutable.fromJS(window.__INITIAL_STATE__),
  applyMiddleware(createLogger(), thunk)
)

export default store