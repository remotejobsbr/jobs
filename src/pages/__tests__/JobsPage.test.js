import React from 'react'
import { shallow } from 'enzyme'

import JobsPage from '../JobsPage'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('(Component) JobsPage', () => {
  it('renders without crash', () => {
    const store = mockStore({})
    const wrapper = shallow(<JobsPage store={store} />)

    expect(wrapper).toHaveLength(1)
  })
})
