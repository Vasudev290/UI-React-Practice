import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Products/Home'
import CreateProduct from './Components/Products/CreateProduct'
import Admin from './Components/Products/Admin'
const App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/product' element={<CreateProduct />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App