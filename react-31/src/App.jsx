import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Comoponent/Header'
import Slider from './Comoponent/Slider'
import Footer from './Comoponent/Footer'
import Movies from './Movies'
let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      < Movies />
    </div>
  )
}

export default App