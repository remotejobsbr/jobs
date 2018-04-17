import React from 'react'
import PropTypes from 'prop-types'

import {
  container
} from './styles/WidthContainer.style'

const WidthContainer = ({ children }) => {
  return (
    <div className={container}>
      {children}
    </div>
  )
}

WidthContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.element
  ]).isRequired
}

export default WidthContainer
