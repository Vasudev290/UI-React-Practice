import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Message/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App