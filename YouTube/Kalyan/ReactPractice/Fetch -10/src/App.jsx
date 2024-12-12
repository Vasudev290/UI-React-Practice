import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import SampleArray from './Arrays/SampleArray'
//import ObjectArray from './DummyArrays/ObjectArray'
import UserPage from './FetchUser/UserPage'


const App = () => {
  return (
    <div>
      <h2>App Component</h2>
      <hr />
      <UserPage/>
    </div>
  )
}

export default App