import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Counter Value :{count}</h3>
        <button onClick={() => setCount((prevCount) => prevCount+1)}>Incr</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount ? count - 1: 0)}>Decr</button>
    </div>
  )
}

export default Counter