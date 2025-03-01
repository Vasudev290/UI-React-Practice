import React, { createContext, useState } from 'react'
import CountUpdate from './CountUpdate'
export const CounterContext = createContext()
const CountProvider = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter App</h1>
        <CounterContext.Provider value={{count, setCount}}>
            <CountUpdate/>
        </CounterContext.Provider>
    </div>
  )
}

export default CountProvider