import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/NavItems/Home'
import User from './Components/NavItems/User'
const App = () => {
  return <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/users' element={<User />}></Route>
        </Routes>
    </Router>
    </div>
  
}

export default App