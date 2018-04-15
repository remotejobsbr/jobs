import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { all } from 'redux-saga/effects'

// Reducers
import jobsReducer from './jobs/reducers'

// Sagas
import jobsSagas from './jobs/sagas'

export function * rootSaga () {
  yield all([jobsSagas()])
}

export default combineReducers({
  jobs: jobsReducer,
  form: formReducer
})
