import React from 'react'
import useCounter from './useCounter'

const CountComponent = () => {
    const {count, increament, decreament, reset} = useCounter(0)
  return (
    <div>
        <h2>Count Component</h2>
        <h3>Count Value : {count}</h3>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountComponent