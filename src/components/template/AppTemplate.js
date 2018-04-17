import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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

const AppTemplate = ({ children, history }) => (
  <Container>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>

    <BottomContainer>
      <BottomNavigation selectedIndex={0}>
        <BottomNavigationItem
          label='Vagas'
          icon={<Work />}
          onClick={() => history.push('/')}
        />

        <BottomNavigationItem
          label='Meus Favoritos'
          icon={<Favorite />}
          onClick={() => history.push('/')}
        />
      </BottomNavigation>
    </BottomContainer>
  </Container>
)

AppTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.array
  ]).isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(AppTemplate)
