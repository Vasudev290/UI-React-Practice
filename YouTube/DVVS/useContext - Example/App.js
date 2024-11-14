import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import CompA from './Components/CompA'
import Provider from './UseContext/Provider'
import Consumer from './UseContext/Consumer'
/* import CompB from './Components/CompB'
import CompC from './Components/CompC'
import CompD from './Components/CompD' */



const App = () => {
  return (
    <div>
      <h2>App Component</h2>
      <hr />
    <Provider />
    <hr />
    <Consumer />
   {/*  <CompB />
    <hr />
    <CompC />
    <hr />
    <CompD /> */}
    </div>
  )
}

export default App