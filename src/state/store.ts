import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

import { composeWithDevTools } from '@redux-devtools/extension'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'
const sagaMiddleware = createSagaMiddleware()
// const middlewares = [sagaMiddleware]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
