import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import Login from './Components/Login'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App