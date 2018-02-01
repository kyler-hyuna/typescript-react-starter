import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const rootEl = document.getElementById(oot')

ReactDOM.render(<App />, rootEl)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default

    ReactDOM.render(<NextApp />, rootEl)
  })
}
