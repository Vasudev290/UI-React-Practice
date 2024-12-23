import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App