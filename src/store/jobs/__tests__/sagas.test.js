import {
  runSaga
} from 'redux-saga'

// Import Actions
import * as actions from '../actions'

import * as services from '../services'

import {
  signIn
} from '../sagas'

const getArgFromCall = mockedFn => mockedFn.mock.calls[0][0]

function * signInWithArgs () { yield signIn({ payload: 'mock' }) }

describe('app sagas', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('signIn saga function', () => {
    it('must to return correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = { mock: 'mock' }

      jest
        .spyOn(services, 'signIn')
        .mockImplementation(() => Promise.resolve(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, signInWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.signInSuccessful(successResultMock))
    })

    it('must to return correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = { mock: 'mock' }

      jest
        .spyOn(services, 'signIn')
        .mockImplementation(() => Promise.reject(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, signInWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.signInFailure(successResultMock))
    })
  })
})
