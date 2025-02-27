import React from 'react'
import UseStateString from './Hooks/useState/UseStateString'
import UseStateNumber from './Hooks/useState/UseStateNumber'
import UseStateBoolean from './Hooks/useState/UseStateBoolean'
import UseStateObject from './Hooks/useState/UseStateObject'
import UseStateArray from './Hooks/useState/UseStateArray'

const App = () => {
  return (
    <div>
      <UseStateString/>
      <hr />
      <UseStateNumber/>
      <hr />
      <UseStateBoolean/>
      <hr />
      <UseStateObject/>
      <hr />
      <UseStateArray/>
    </div>
  )
}

export default App