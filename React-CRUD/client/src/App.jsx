import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Products/Home'
import Product from './Components/Products/Product'
import Admin from './Components/Products/Admin'
import CreateProduct from './Components/Products/CreateProduct'
import UpdateProduct from './Components/Products/UpdateProduct'
const App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/createproduct' element={<CreateProduct />}></Route>
                <Route path='/updateProduct/:id' element={<UpdateProduct />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App