import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const RouteWithTemplate = ({
  component: Component,
  template: Template,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Template {...props}>
        <Component {...props} />
      </Template>
    )}
  />
)

RouteWithTemplate.propTypes = {
  component: PropTypes.func.isRequired,
  template: PropTypes.func.isRequired
}

export default RouteWithTemplate
