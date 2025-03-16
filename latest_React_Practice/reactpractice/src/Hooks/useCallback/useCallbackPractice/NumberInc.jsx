import React, { useCallback, useState } from 'react'

const NumberInc = () => {
    const [count, setCount] = useState(0);
    
    //With useCallback handler
    // const increament = useCallback(() => {
    //     setCount((prev) => prev + 1)
    // }, [])

    //Normal Handler
    const increament = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h2>Count Incr : {count}</h2>
        <button onClick={increament}>Incr</button>
    </div>
  )
}

export default NumberInc