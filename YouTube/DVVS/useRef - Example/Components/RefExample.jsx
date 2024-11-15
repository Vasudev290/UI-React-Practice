import React, { useRef } from 'react'

const RefExample = () => {
    const count = useRef(0)

    const CheckValue = () => {
        count.current++;
        console.log("Current Value :"+count.current);
    }
  return (
    <div>
        <h2>useRef Example</h2>
        <h3>{count.current}</h3>
        <button onClick={CheckValue}>Check Value</button>
    </div>
  )
}

export default RefExample