import React from 'react'
import PropTypes from 'prop-types'

import reduxImage from '../../assets/redux.png'

import {
  Container,
  ChildrenContainer
} from './styles/DashboardTemplate.style'

const DashboardTemplate = ({ children }) => (
  <Container>
    <div>
      <img src={reduxImage} alt='' />
    </div>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
)

DashboardTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.array
  ]).isRequired
}

export default DashboardTemplate
