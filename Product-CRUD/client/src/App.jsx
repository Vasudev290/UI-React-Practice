import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Products/Home'
import Product from './Component/Products/Product'
import Admin from './Component/Products/Admin'
import CreateProduct from './Component/Products/Cproduct'
import UpdateProduct from './Component/Products/UpdateProduct'
let App = ()=>{
  return<div>

     <Router>
           <Navbar />
           <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/product' element={<Product />}/>
              <Route path='/admin' element={<Admin />}/>
              <Route path='/create' element={<CreateProduct />}/>
              <Route path='/updateProduct/:id' element={<UpdateProduct />}/>
           </Routes>
    </Router>
  </div>
}
export default App