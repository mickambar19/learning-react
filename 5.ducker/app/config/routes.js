import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer } from '../containers'

const routes = (
  <Router>
    <Switch>
      <Route path="/" component={MainContainer} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </Router>
)

export default routes
