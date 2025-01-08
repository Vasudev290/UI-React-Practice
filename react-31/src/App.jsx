import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//useState import Navbar from './Header/Components/Navbar'
//import Navbar from './Header/Components1/Navbar' //useEffect
//import Navbar from './Header/Components2/Navbar'  //useContext
import Navbar from './Header/Components3/Navbar'
//import Count from './UseState/Count'
//import Toggle from './UseState/Toggle'
//import Form from './UseState/Form'
//import Task from './UseState/Task'
//import Theme from './UseState/Theme'
//import Visible from './UseState/Visible'
//import Check from './UseState/Check'
//import Model from './UseState/Model'
// import Basic from './UseEffect/Basic'
// import FetchData from './UseEffect/FetchData'
// import Timer from './UseEffect/Timer'
// import Dependency from './UseEffect/Dependency'
// import Table from './UseEffect/Table'
// import FetchTable from './UseEffect/FetchTable'
// import Calculate from './UseEffect/Calculate'
// import Props from './UseContext/A'
// import Provider from './UseContext/Provider'
// import Data from './UseContext/Contexts/Data'
// import Light from './UseContext/Themes/Light'
// import Details from './UseContext/User/Details'
// import Authi from './UseContext/Auth/Authi'
// import Count from './UseContext/Counters/Count'
// import Dayanmic from './UseContext/DyanamicProvider/Dayanmic'
// import Color from './UseContext/ThemeToggles/Color'
// import Auth from './UseContext/Authentication/Auth'
import Basic from './UseRef/Basic'
import Focus from './UseRef/Focus'
import StopWatch from './UseRef/StopWatch'

const App = () => {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/basic' element={<Basic/>}></Route>
      <Route path='/focus' element={<Focus/>}></Route>
      <Route path='/watch' element={<StopWatch/>}></Route>
    </Routes>
    </Router>
      </div>
  
}

export default App