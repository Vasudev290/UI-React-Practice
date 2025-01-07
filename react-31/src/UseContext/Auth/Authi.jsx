import React, { createContext } from 'react'
import Dashboard from './Dashboard'
export const AuthContext = createContext()
export const ThemeContext = createContext()
const Authi = () => {
  return (
    <div>
        <h1>Authtication Process</h1>
        <AuthContext.Provider value={{isAuthenticated: true}}>
            <ThemeContext.Provider value="light">
                <Dashboard/>
            </ThemeContext.Provider>
        </AuthContext.Provider>
    </div>
  )
}

export default Authi