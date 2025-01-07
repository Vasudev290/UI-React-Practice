import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//useState import Navbar from './Header/Components/Navbar'
import Navbar from './Header/Components1/Navbar' //useEffect
//import Count from './UseState/Count'
//import Toggle from './UseState/Toggle'
//import Form from './UseState/Form'
//import Task from './UseState/Task'
//import Theme from './UseState/Theme'
//import Visible from './UseState/Visible'
//import Check from './UseState/Check'
//import Model from './UseState/Model'
import Basic from './UseEffect/Basic'
import FetchData from './UseEffect/FetchData'
import Timer from './UseEffect/Timer'
import Dependency from './UseEffect/Dependency'
import Table from './UseEffect/Table'
import FetchTable from './UseEffect/FetchTable'
import Calculate from './UseEffect/Calculate'
import Props from './UseContext/A'
import Provider from './UseContext/Provider'
import Data from './UseContext/Contexts/Data'

const App = () => {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/basic' element={<Basic/>}></Route>
      <Route path='/fetch' element={<FetchData/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
      <Route path='/count' element={<Dependency/>}></Route>
      <Route path='/table' element={<Table/>}></Route>
      <Route path='/fetchtable' element={<FetchTable/>}></Route>
      <Route path='/cal' element={<Calculate/>}></Route>
      <Route path='/propDrilling' element={<Props/>}></Route>
      <Route path='/context' element={<Provider/>}></Route>
      <Route path='/origin' element={<Data/>}></Route>
      
    </Routes>
    </Router>
      </div>
  
}

export default App