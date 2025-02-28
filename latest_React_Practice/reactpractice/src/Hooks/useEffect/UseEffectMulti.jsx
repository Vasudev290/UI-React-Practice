import React, { useEffect, useState } from 'react'

const UseEffectMulti = () => {
    const [count, setCount] = useState(0);
    const [mul, setMul] = useState(0);
    useEffect(() => {
        setMul(count * 2)
    }, [count])
  return (
    <div>
        <h3>Count Value : {count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>Multiple Value is : {mul}</h2>
    </div>
  )
}

export default UseEffectMulti