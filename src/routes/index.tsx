import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'src/components/pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default hot(Routes)
