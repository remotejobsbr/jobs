import React from 'react'
import { shallow } from 'enzyme'

import JobDetailPage from '../JobDetailPage'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('(Component) JobDetailPage', () => {
  it('renders without crash', () => {
    const store = mockStore({})
    const wrapper = shallow(<JobDetailPage store={store} />)

    expect(wrapper).toHaveLength(1)
  })
})
