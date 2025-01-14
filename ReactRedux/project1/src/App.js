import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default App