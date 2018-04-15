import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui'

import { Favorite, Work } from '@material-ui/icons'

import {
  Container,
  ChildrenContainer,
  BottomContainer
} from './styles/AppTemplate.style'

const AppTemplate = ({ children }) => (
  <Container>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>

    <BottomContainer>
      <BottomNavigation>
        <Link to='/'>
          <BottomNavigationItem
            label='Recents'
            icon={<Work />}
          />
        </Link>

        <Link to='/'>
          <BottomNavigationItem
            label='Favorites'
            icon={<Favorite />}
          />
        </Link>
      </BottomNavigation>
    </BottomContainer>
  </Container>
)

AppTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.array
  ]).isRequired
}

export default AppTemplate
