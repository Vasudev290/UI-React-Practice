import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Items/Home'
import Users from './Component/Items/Users'
let App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </Router>
  </>
}

export default App