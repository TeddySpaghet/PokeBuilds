import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { UserProvider } from './UserContext'
import { HistoryProvider } from './HistoryContext'
import './fonts/Pokemon-Hollow.ttf'
import './index.scss'

ReactDOM.render(
  // StrictMode is a tool for highlighting potential
  // problems in an application. Like Fragment,
  // StrictMode does not render any visible UI.
  // It activates additional checks and warnings for
  // its descendants.
  <React.StrictMode>
    <Router>
      <HistoryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </HistoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
