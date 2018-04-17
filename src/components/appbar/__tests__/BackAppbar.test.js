import React from 'react'
import { shallow } from 'enzyme'

import BackAppbar from '../BackAppbar'

const wrapper = shallow(<BackAppbar to='/' />)

describe('(Component) BackAppbar', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
