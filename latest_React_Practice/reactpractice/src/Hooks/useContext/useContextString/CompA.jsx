import React, { createContext, useState } from 'react'
import CompB from './CompB'
export const CompContext = createContext()
const CompA = () => {
    const [str, setStr] = useState("Vasu")
  return (
    <div>
        <h2>Component A</h2>
        <CompContext.Provider value={str}>
            <CompB/>
        </CompContext.Provider>
    </div>
  )
}

export default CompA