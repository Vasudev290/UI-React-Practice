import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {store} from './Redux/store.js'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Product from './Product/Product.jsx'
const App = () => {
  return (
    <div>
      <Provider store={store}>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Message />} />
        <Route path='/pro' element={<Product />} />
      </Routes>
     </Router>
     </Provider>
    </div>
  )
}

export default App