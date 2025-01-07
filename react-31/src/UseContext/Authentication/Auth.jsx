import React, { createContext, useState } from 'react'
import Process from './Process'
export const AuthContext = createContext()
const Auth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)
  return (
    <div>
        <h3>User Authentication</h3>
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            <Process/>
        </AuthContext.Provider>
    </div>
  )
}

export default Auth