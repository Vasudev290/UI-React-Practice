import React, { useContext } from 'react'
import { CounterContext } from './CountProvider'
const CountUpdate = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
        <h2>Count Value : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Incr</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count ? count - 1 : 0)}>Decr</button>
    </div>
  )
}

export default CountUpdate