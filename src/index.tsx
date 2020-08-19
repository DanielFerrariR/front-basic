import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollToTop } from 'src/utils'
import Routes from 'src/routes'
import { Provider } from 'react-redux'
import store from 'src/utils/redux'
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
