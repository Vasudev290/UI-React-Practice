import React, { useEffect, useRef, useState } from 'react'

const PrevState = () => {
    const[count, setCount] = useState(0)
    const prevRef = useRef()
    useEffect(() => {
        prevRef.current = count;
    })
    const prevCount = prevRef.current
  return (
    <div>
        <h2>Pervious State</h2>
        <h3>Current Count :{count}</h3>
        <p>Previous Count: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Rest</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrment</button>
    </div>
  )
}

export default PrevState