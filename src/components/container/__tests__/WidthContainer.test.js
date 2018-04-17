import React from 'react'
import { shallow } from 'enzyme'

import WidthContainer from '../WidthContainer'

const wrapper = shallow(<WidthContainer><p>Mock</p></WidthContainer>)

describe('(Component) WidthContainer', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
