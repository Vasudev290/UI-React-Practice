import React, { createContext, useState } from 'react'
import Child from './Child';
export const userContext = createContext();
const Parent = () => {
    const [user, setUser] = useState("Vasu")
  return (
    <div>
        <h2>Parent Component</h2>
        <userContext.Provider value={user}>
            <Child/>
        </userContext.Provider>
    </div>
  )
}

export default Parent