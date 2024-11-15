import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import RefExample from './Components/RefExample'
import LogButton from './Components/LogButton'
import Input from './Components/Input'
import StopWatch from './Components/StopWatch'

const App = () => {
  return (
    <div>
      <h2>App Component</h2>
      <hr />
    <LogButton />
    <hr />
    <Input />
    <hr />
    <StopWatch />
    </div>
  )
}

export default App