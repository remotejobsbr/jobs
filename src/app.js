import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes/Routes'

const supportsHistory = 'pushState' in window.history

const App = () => (
  <Router forceRefresh={!supportsHistory} keyLength={12}>
    <Routes />
  </Router>
)

export default hot(module)(App)
