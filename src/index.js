import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './store/configureStore'

import './index.style'

const { store } = configureStore()

const renderApp = NextApp => {
  render(
    <Provider store={store}>
      <NextApp />
    </Provider>,
    document.getElementById('app')
  )
}

renderApp(App)
