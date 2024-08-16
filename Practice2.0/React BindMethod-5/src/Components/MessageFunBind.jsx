import React, { useState } from 'react'

const MessageFunBind = () => {
    let [msg, setMsg]=useState("Hello...!")

    let updateHandler= (Value) => {
        setMsg(Value)
    }
  return (
    <div>
        <h2>Message Component With Function</h2>
        <hr/>
        <h3>Message Values:{msg}</h3>
        <button className='btn btn-primary ml-2' onClick={updateHandler.bind(null,"Good MORNING Harish Sir")}>GM</button>
        <button className='btn btn-secondary ml-2' onClick={updateHandler.bind(null,"Good Afternoon sir")}>GA</button>
        <button className='btn btn-success ml-2' onClick={()=>{setMsg("Good Evening..!")}}>GE</button>
        <button className='btn btn-info ml-2' onClick={updateHandler.bind(null,"Good Night..!")}>GN</button>
    </div>
  )
}

export default MessageFunBind