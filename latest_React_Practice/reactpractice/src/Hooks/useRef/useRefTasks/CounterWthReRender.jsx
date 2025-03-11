import React, { useRef, useState } from 'react'

const CounterWthReRender = () => {
    const countRef = useRef(0);
    const [countRender, setCountRender] = useState(0)
    const refIncrHandler = () => {
        countRef.current += 1
        console.log("Count :", countRef.current)
    }
  return (
    <div>
        <h2>Counter With Re-render</h2>
        <h3>Counter (useState) :{countRender} times</h3>
        <h3>Counter (useRef) :{countRef.current} times</h3>
        <button onClick={() => setCountRender(countRender + 1)}>Incr (useState)</button>
        <button onClick={refIncrHandler}>Incr (useRef)</button>
    </div>
  )
}

export default CounterWthReRender