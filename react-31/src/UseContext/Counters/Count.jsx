import React, { createContext, useState } from 'react'
import Incre from './Incre'

export const IncreContext = createContext()
const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Counting Mechine</h2>
        <IncreContext.Provider value={{count, setCount}}>
            <Incre/>
        </IncreContext.Provider>
    </div>
  )
}

export default Count