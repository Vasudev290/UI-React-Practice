import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Count from './UseState/Count'
import Toggle from './UseState/Toggle'
//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return <div>
    <h2>App Component</h2> 
    <Count/>
    <hr />
    <Toggle/>
    </div>
  
}

export default App