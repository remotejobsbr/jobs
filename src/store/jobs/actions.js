import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCESSFUL,
  FETCH_JOBS_FAILURE
} from './constants'

export const fetchJobs = jobConfig => ({
  type: FETCH_JOBS,
  payload: jobConfig
})

export const fetchJobsSuccessful = ({ jobConfig, jobs }) => ({
  type: FETCH_JOBS_SUCCESSFUL,
  payload: { jobConfig, jobs }
})

export const fetchJobsFailure = ({ jobConfig, error }) => ({
  type: FETCH_JOBS_FAILURE,
  payload: { jobConfig, error }
})
