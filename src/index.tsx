import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollToTop } from 'src/utils'
import Routes from 'src/routes'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
