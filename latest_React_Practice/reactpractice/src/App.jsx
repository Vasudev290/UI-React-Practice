import React from 'react'
import UseStateString from './Hooks/useState/UseStateString'
import UseStateNumber from './Hooks/useState/UseStateNumber'
import UseStateBoolean from './Hooks/useState/UseStateBoolean'
import UseStateObject from './Hooks/useState/UseStateObject'
import UseStateArray from './Hooks/useState/UseStateArray'
import UseStateJson from './Hooks/useState/UseStateJson'
import UseStateForm from './Hooks/useState/UseStateForm'
import UseStateCount from './Hooks/useState/UseStateCount'

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
      <hr />
      <UseStateJson/>
      <hr />
      <UseStateForm/>
      <hr />
      <UseStateCount/>
    </div>
  )
}

export default App