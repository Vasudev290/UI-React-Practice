// import React from 'react'
// import User from './Hooks/useContext/Props/User'
// import ApiData from './Hooks/useContext/Props/ApiProps/ApiData'
// import ThemePorps from './Hooks/useContext/Props/ThemeProps/ThemePorps'
// import PropsEx1 from './Hooks/useContext/PropsExample/PropsEx1'
// import UseRefCountEx from './Hooks/useRef/UseRefCountEx'
// import UseRefInput from './Hooks/useRef/UseRefInput'
// import UseRefStateRef from './Hooks/useRef/UseRefStateRef'
// import UseRefStateEffect from './Hooks/useRef/UseRefStateEffect'
// import UseRefStopWatch from './Hooks/useRef/UseRefStopWatch'
// import UseStateEffectRefContext from './Hooks/UseStateEffectRefContext'
// import CompA from './Hooks/useContext/PropsDrillingEx/CompA'
// import Provider from './Hooks/useContext/useContextEx/Provider'
// import Parent from './Hooks/useContext/useContextEx1/Parent'
// import CompA from './Hooks/useContext/useContextString/CompA'
// import JsonUser from './Hooks/useContext/useContextJSON/JsonUser'
// import ThemeProvider from './Hooks/useContext/useContextToggle/ThemeProvider'
// import AuthProvider from './Hooks/useContext/useContextAuth/AuthProvider'
// import CountProvider from './Hooks/useContext/useContextCounter/CountProvider'
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
// import Counter from "./Hooks/useState/UseStateTasks/Counter"
// import InputField from "./Hooks/useState/UseStateTasks/InputField"
// import MiniToDoList from "./Hooks/useState/UseStateTasks/MiniToDoList"
// import ToggleText from "./Hooks/useState/UseStateTasks/ToggleText"
// import Theme from "./Hooks//useState//UseStateTasks//Theme"
// import FormValidation from "./Hooks//useState//UseStateTasks/FormValidation";
// import ArrayFetch from "./Hooks/useEffect/UseEffectTask/ArrayFetch"
// import FetchData from "./Hooks/useEffect/UseEffectTask/FetchData"
// import FetchFilter from "./Hooks/useEffect/UseEffectTask/FetchFilter"

import CounterWthReRender from "./Hooks/useRef/useRefTasks/CounterWthReRender"
import InputField from "./Hooks/useRef/useRefTasks/InputField"
import PrevState from "./Hooks/useRef/useRefTasks/PrevState"
import StopWatch from "./Hooks/useRef/useRefTasks/StopWatch"

const App = () => {
  return (
    <div>
      <h2>UseRef Example</h2>
      <hr />
      <InputField/>
      <hr />
      <CounterWthReRender/>
      <hr />
      <PrevState/>
      <hr />
      <StopWatch/>
    </div>
  )
}

export default App