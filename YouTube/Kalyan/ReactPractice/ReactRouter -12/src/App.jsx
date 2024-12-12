import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Login from './Components/Login'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <div>
      <h3>App Components</h3>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      
    </div>
  )
}

export default App