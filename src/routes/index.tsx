import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Next from './Next'
import App from './App'
import Error404 from './Error404'

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/next" component={Next} />
      <Route exact path="/app" component={App} />
      <Route path="*" component={Error404} />
    </Switch>
  </Router>
)

export { Main, Next, App, routes }
