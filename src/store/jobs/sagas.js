import { all, call, takeLatest, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

export function * fetchJobs ({ payload: jobConfig }) {
  try {
    const jobs = yield call(services.fetchJobs, jobConfig.jobServiceName)
    yield put(actions.fetchJobsSuccessful({ jobConfig, jobs }))
  } catch (error) {
    yield put(actions.fetchJobsFailure({ jobConfig, error }))
  }
}

// Watchers
export function * watchFetchJobs () {
  yield takeLatest(types.FETCH_JOBS, fetchJobs)
}

export default function * authSagas () {
  yield all([watchFetchJobs()])
}
