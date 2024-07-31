import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { gmAction,gaAction, geAction, gnAction } from '../../Redux/Message/Message.action'
let Message = () => {
    let dispatch = useDispatch()
   let message= useSelector((state)=>{
        return state.message
    })

let gmHandler= ()=>{
    dispatch(gmAction())
}    
let geHandler= ()=>{
    dispatch(geAction())
}    
let gnHandler= ()=>{
    dispatch(gnAction())
}    
  return (
    <div>
        <h2>Message components</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h3>Value:{message.msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={()=>{
            dispatch(gaAction())
        }}>GA</button>
        <button onClick={geHandler}>GE</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message