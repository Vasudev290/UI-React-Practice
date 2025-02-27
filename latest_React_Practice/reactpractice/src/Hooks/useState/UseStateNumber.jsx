import React, { useState } from 'react'

const UseStateNumber = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Count : {count}</h2> 
        <button onClick={() => setCount(count + 1)}>Incr</button> 
        <button onClick={() => setCount(count ? count - 1 : 0)}>Decr</button>
    </div>
  )
}

export default UseStateNumber