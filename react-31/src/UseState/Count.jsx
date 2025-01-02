import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const decrHandler = () => {
        if (count > 0){
            setCount( count - 1)
        }
    }
  return (
    <div>
        <h2>Count :{count}</h2>
        <button onClick={() => setCount(count + 1)}>Incr</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={decrHandler}>Decr</button>
    </div>
  )
}

export default Count