import React, { createContext, useState } from 'react'
import Login from './Login'
export const AuthContext = createContext()
const AuthProvider = () => {
    const [data, setData] = useState({name: "Vasu", age: 23, loc: "Bangalore"})
  return (
    <div>
        <h1>Authentication Provider</h1>
        <AuthContext.Provider value={{data, setData}}>
            <Login/>
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider