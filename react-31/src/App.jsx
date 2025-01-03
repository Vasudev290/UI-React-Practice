import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Header/Components/Navbar'
import Count from './UseState/Count'
import Toggle from './UseState/Toggle'
import Form from './UseState/Form'
import Task from './UseState/Task'
import Theme from './UseState/Theme'
import Visible from './UseState/Visible'
import Check from './UseState/Check'
import Model from './UseState/Model'


const App = () => {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/count' element={<Count/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/theme' element={<Theme/>}></Route>
      <Route path='/toggle' element={<Toggle/>}></Route>
      <Route path='/visibile' element={<Visible/>}></Route>
      <Route path='/check' element={<Check/>}></Route>
      <Route path='/model' element={<Model/>}></Route>
    </Routes>
    </Router>
      </div>
  
}

export default App