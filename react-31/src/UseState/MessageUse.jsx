import React, { useState } from 'react'

const MessageUse = () => {

  const [msg, setMsg]=useState("Yeloo")

  const gmHandler= ()=> {
    setMsg("Good Morning Macha...!")
  }
  const gnHandler= ()=> {
    setMsg("Good Night..!")
  }
  return (
    <div>
      <h2>Message With UseState</h2>
      <h3> Message Value:{msg}</h3>
      <button onClick={gmHandler} className='btn btn-success ml-2'>GM</button>
      <button onClick={gnHandler} className='btn btn-primary ml-2'>GN</button>
    </div>
  )
}

export default MessageUse