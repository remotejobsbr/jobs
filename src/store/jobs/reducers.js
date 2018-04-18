import createReducer from '../createReducer'

import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCESSFUL,
  FETCH_JOBS_FAILURE
} from './constants'

const initialState = {
  frontend: {
    frontendbr: undefined,
    reactbrasil: undefined
  },
  backend: {
    backendbr: undefined,
    soujava: undefined
  },
  mobile: {
    androiddevbr: undefined,
    cocoaheadsbrasil: undefined
  }
}

const reducer = createReducer(initialState, {
  [FETCH_JOBS]: (state, { payload: jobConfig }) => ({
    ...state,
    [jobConfig.type]: {
      ...state.frontEnd,
      [jobConfig.jobServiceName]: undefined
    }
  }),
  [FETCH_JOBS_SUCCESSFUL]: (state, { payload: { jobConfig, jobs } }) => ({
    ...state,
    [jobConfig.type]: {
      ...state.frontEnd,
      [jobConfig.jobServiceName]: jobs
    }
  }),
  [FETCH_JOBS_FAILURE]: (state, payload) => ({
    ...state,
    [payload.jobConfig.type]: {
      ...state.frontEnd,
      [payload.jobConfig]: undefined
    }
  })
})

export default reducer
