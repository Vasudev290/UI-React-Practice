import React, { createContext, useState } from 'react'
import ReceviedProvider from './ReceviedProvider'
export const UserContext = createContext()
const UseStateEffectRefContext = () => {
    const [user, setUser] = useState("")
  return (
    <div>
        <h2>User Authentication</h2>
        <UserContext.Provider value={{user, setUser}}>
            <ReceviedProvider/>
        </UserContext.Provider>

    </div>
  )
}

export default UseStateEffectRefContext