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
// import ApiJson from "./Hooks/useRef/useRefTasks/ApiJson"
// import ArrayRef from "./Hooks/useRef/useRefTasks/ArrayRef"
// import CounterWthReRender from "./Hooks/useRef/useRefTasks/CounterWthReRender"
// import InputField from "./Hooks/useRef/useRefTasks/InputField"
// import NumberRef from "./Hooks/useRef/useRefTasks/NumberRef"
// import ObjectRef from "./Hooks/useRef/useRefTasks/ObjectRef"
// import PrevState from "./Hooks/useRef/useRefTasks/PrevState"
// import StopWatch from "./Hooks/useRef/useRefTasks/StopWatch"
// import StringRef from "./Hooks/useRef/useRefTasks/StringRef"
// import ToggleText from "./Hooks/useRef/useRefTasks/ToggleText"
// import BasicEx from "./Hooks/React_Memo/BasicEx"
// import InputField from "./Hooks/useMemo/UseMemoPractice/InputField"
// import ApiData from "./Hooks/useMemo/UsemeoPratice/ApiData"
// import ApiUseMemo from "./Hooks/useMemo/UsemeoPratice/ApiUseMemo"
// import FactorialCalculator from "./Hooks/useMemo/UsemeoPratice/FactorialCalculator"
// import Filtering from "./Hooks/useMemo/UsemeoPratice/Filtering"
// import InputFieldText from "./Hooks/useMemo/UsemeoPratice/InputFieldText"
// import Reversed from "./Hooks/useMemo/UsemeoPratice/Reversed"
// import TextReversed from "./Hooks/useMemo/UsemeoPratice/TextReversed"
// import UseMemoEx from "./Hooks/useMemo/UsemeoPratice/UseMemoEx"
// import UseMemoBasicEx from "./Hooks/useCallback/UseCallbackBasicEx"
// import UseMemoBasicEx from "./Hooks/useCallback/UseCallbackBasicEx"
// import CalculateEx from "./Hooks/useMemo/UsemeoPratice/CalculateEx"
// import AddItem from "./Hooks/useCallback/useCallbackPractice/AddItem"
// import ApiData from "./Hooks/useCallback/useCallbackPractice/ApiData"
// import DataObject from "./Hooks/useCallback/useCallbackPractice/DataObject"
// import ExpensiveCalculation from "./Hooks/useCallback/useCallbackPractice/ExpensiveCalculation"
// import InputFieldString from "./Hooks/useCallback/useCallbackPractice/InputFieldString"
// import IsVisibile from "./Hooks/useCallback/useCallbackPractice/IsVisibile"
// import NumberInc from "./Hooks/useCallback/useCallbackPractice/NumberInc"
// import PropsManage1 from "./Hooks/useCallback/useCallbackPractice/PropsManage1"
// import CountComponent from "./Hooks/CustomHooks/UseCounter/CountComponent"
// import User from "./Hooks/CustomHooks/UseFetch/User"

import UserAuthenticated from "./HigherOrderComponent/Auth/Dash"
import Dashboard from "./HigherOrderComponent/Authentication/Dashboard"
import Profile from "./HigherOrderComponent/Authentication/Profile"
import FetchPosts from "./HigherOrderComponent/FetchComponents/FetchPosts"
import FetchTodos from "./HigherOrderComponent/FetchComponents/FetchTodos"
const App = () => {
  return (
    <div>
      <h2>Higher Order Component Example</h2>
      <hr />
      <Profile/>
      <Dashboard/>
      <hr />
      <UserAuthenticated/>
      <hr />
      <FetchTodos name="Vasu"/>
      <hr />
      <FetchPosts name="Vasu"/>
    </div>
  )
}

export default App