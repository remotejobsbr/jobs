import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, IconButton } from 'material-ui'
import { withRouter } from 'react-router-dom'
import BackIcon from '@material-ui/icons/ArrowBack'

import {
  fixedAppBar,
  placeholder
} from './styles/BackAppbar.style'

const BackAppbar = ({ to, history }) => {
  return (
    <div>
      <div className={fixedAppBar}>
        <AppBar
          iconElementLeft={(
            <IconButton onClick={() => history.push(to)}>
              <BackIcon />
            </IconButton>
          )}
        />
      </div>

      <div className={placeholder} />
    </div>
  )
}

BackAppbar.propTypes = {
  to: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(BackAppbar)
