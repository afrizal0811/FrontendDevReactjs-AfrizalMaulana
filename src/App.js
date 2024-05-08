// import EditApi from './components/edit_api/EditApi'
import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteHandler from './RouteHandler'
function App() {
  return (
    <div className='App'>
      <Router>
        <RouteHandler />
      </Router>
      {/* <EditApi /> */}
    </div>
  )
}

export default App
