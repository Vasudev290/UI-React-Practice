import React, { useEffect, useRef, useState } from 'react'

const PrevState = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    useEffect(() => {
        countRef.current = count
    }, [count])
  return (
    <div>
        <h2>Previous State</h2>
        <h4>Current State Value : {count}</h4>
        <h4>Previous State Value : {countRef.current}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count ? count - 1 : 0)}>Decrement</button>
    </div>
  )
}

export default PrevState