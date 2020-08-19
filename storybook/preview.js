import React from 'react'
import { addDecorator } from '@storybook/react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from '../src/styles'
import 'typeface-roboto'

addDecorator((Story) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </MuiThemeProvider>
))
