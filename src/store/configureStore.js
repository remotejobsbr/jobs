import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { rootSaga } from './index'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose

const sagaMiddleware = createSagaMiddleware()

export default ({ initialState } = {}) => {
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )

  let store = createStore(rootReducer, initialState, enhancer)

  sagaMiddleware.run(rootSaga)

  return { store }
}
