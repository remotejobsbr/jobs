import * as actions from '../actions'

describe('auth actions', () => {
  describe('fetchJobs', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'jobs:FETCH_JOBS',
        payload: 'config'
      }

      expect(
        actions.fetchJobs('config')
      ).toEqual(expected)
    })
  })

  describe('fetchJobsSuccessful', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'jobs:FETCH_JOBS_SUCCESSFUL',
        payload: { jobConfig: 'config', jobs: 'jobs' }
      }

      expect(actions.fetchJobsSuccessful(expected.payload)).toEqual(expected)
    })
  })

  describe('fetchJobsFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'jobs:FETCH_JOBS_FAILURE',
        payload: { jobConfig: 'config', error: 'jobs' }
      }

      expect(actions.fetchJobsFailure(expected.payload)).toEqual(expected)
    })
  })
})
