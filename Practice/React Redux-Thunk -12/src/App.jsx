import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/MainFiles/Home'
import Reg from './Components/HooksEx/Reg'
import Users from './Components/MainFiles/Users'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import Memo from './Components/HooksEx/Memo'
let App = () => {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/memo' element={<Memo />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/users' element={<Users/>} /> 
         </Routes>
      </Router>
      </Provider>
    </div>
  )
}

export default App