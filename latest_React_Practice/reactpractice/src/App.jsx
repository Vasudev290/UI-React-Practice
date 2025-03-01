import React from 'react'
//import CompA from './Hooks/useContext/PropsDrillingEx/CompA'
import Provider from './Hooks/useContext/useContextEx/Provider'
import Parent from './Hooks/useContext/useContextEx1/Parent'
import CompA from './Hooks/useContext/useContextString/CompA'
import JsonUser from './Hooks/useContext/useContextJSON/JsonUser'
// import UseStateString from './Hooks/useState/UseStateString'
// import UseStateNumber from './Hooks/useState/UseStateNumber'
// import UseStateBoolean from './Hooks/useState/UseStateBoolean'
// import UseStateObject from './Hooks/useState/UseStateObject'
// import UseStateArray from './Hooks/useState/UseStateArray'
// import UseStateJson from './Hooks/useState/UseStateJson'
// import UseStateForm from './Hooks/useState/UseStateForm'
// import UseStateCount from './Hooks/useState/UseStateCount'
// import UseStateFetch from './Hooks/useState/UseStateFetch'
// import UseStateTimer from './Hooks/useState/UseStateTimer'
// import UseEffectExampe from './Hooks/useEffect/UseEffectExampe'
// import UseEffectApi from './Hooks/useEffect/UseEffectApi'
// import UseEffectMulti from './Hooks/useEffect/UseEffectMulti'
// import UseEffectString from './Hooks/useEffect/UseEffectString'
// import UseEffectTimes from './Hooks/useEffect/UseEffectTimes'
const App = () => {
  return (
    <div>
      {/* <CompA/> */}
      <Provider/>
      <hr/>
      <Parent/>
      <hr />
      <CompA/>
      <hr />
      <JsonUser/>
    </div>
  )
}

export default App