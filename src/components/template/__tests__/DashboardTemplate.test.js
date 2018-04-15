import React from 'react'
import { shallow } from 'enzyme'

import DashboardTemplate from '../DashboardTemplate'

const wrapper = shallow(<DashboardTemplate><p>Mock</p></DashboardTemplate>)

describe('(Component) DashboardTemplate', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
