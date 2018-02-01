import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { routes as Routes } from '@routes'
import { configureStore } from './store/configureStore'
import './index.scss'

const store = configureStore()

export default () => (
  <AppContainer>
    <Providestore={store}>
      <Routes />
    </Provider>
  </AppContainer>
)
