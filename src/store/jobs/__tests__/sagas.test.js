import {
  runSaga
} from 'redux-saga'

// Import Actions
import * as actions from '../actions'

import * as services from '../services'

import {
  fetchJobs
} from '../sagas'

const getArgFromCall = mockedFn => mockedFn.mock.calls[0][0]

function * fetchJobsWithArgs () { yield fetchJobs({ payload: 'mock' }) }

describe('app sagas', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('fetchJobs saga function', () => {
    it('must to return correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'mock'

      jest
        .spyOn(services, 'fetchJobs')
        .mockImplementation(() => Promise.resolve(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchJobsWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchJobsSuccessful({ jobConfig: 'mock', jobs: 'mock' }))
    })

    it('must to return correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'mock'

      jest
        .spyOn(services, 'fetchJobs')
        .mockImplementation(() => Promise.reject(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchJobsWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchJobsFailure({ jobConfig: 'mock', error: 'mock' }))
    })
  })
})
