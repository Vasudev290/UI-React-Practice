import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Login from './Components/Login'
import User from './Components/User'
import Registration from './Components/Registration'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
let App = () => {
  return <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/index' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/reg' element={<Registration />}></Route>
        
      </Routes>
    </Router>
  </div>
}

export default App