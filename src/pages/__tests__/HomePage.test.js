import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '../HomePage'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('(Component) HomePage', () => {
  it('renders without crash', () => {
    const store = mockStore({})
    const wrapper = shallow(<HomePage store={store} />)

    expect(wrapper).toHaveLength(1)
  })
})
