import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {gmHandler,gnHandler} from '../redux//Message/Message.action'
const Message = () => {
    let dispatch = useDispatch()
    let message = useSelector((state)=>{
                  return state;
                  })
  return (
    <div>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h3>Value:{message.msg}</h3>
        <button onClick={()=>{
            dispatch(gmHandler())
        }}>GM</button>
        <button onClick={()=>{
            dispatch(gnHandler())
        }}>GN</button>
    </div>
  )
}

export default Message