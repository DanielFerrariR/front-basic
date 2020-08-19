import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'src/components/pages'
import { theme } from 'src/styles'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'

const Routes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </MuiThemeProvider>
  )
}

export default hot(Routes)
