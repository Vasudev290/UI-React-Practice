import React from 'react'
import UseStateString from './Hooks/useState/UseStateString'
import UseStateNumber from './Hooks/useState/UseStateNumber'
import UseStateBoolean from './Hooks/useState/UseStateBoolean'

const App = () => {
  return (
    <div>
      <UseStateString/>
      <hr />
      <UseStateNumber/>
      <hr />
      <UseStateBoolean/>
    </div>
  )
}

export default App