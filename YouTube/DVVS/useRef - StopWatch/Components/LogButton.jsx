import React, { useRef } from 'react'

const LogButton = () => {
    const count = useRef(0)
    const CheckRef = () => {
        count.current++;
        console.log("Count Value :"+count.current);    
    }
  return (
    <div>
        <h3>Login Button</h3>
        <h3>{count.current}</h3>
        <button onClick={CheckRef}>Check Ref</button>
    </div>
  )
}

export default LogButton