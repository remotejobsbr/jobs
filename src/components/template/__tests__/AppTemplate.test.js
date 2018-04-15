import React from 'react'
import { shallow } from 'enzyme'

import AppTemplate from '../AppTemplate'

const wrapper = shallow(<AppTemplate><p>Mock</p></AppTemplate>)

describe('(Component) AppTemplate', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
