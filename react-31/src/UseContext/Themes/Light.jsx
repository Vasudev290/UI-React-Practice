import React, {createContext} from 'react'
import Dark from './Dark'
export const ThemeContext = createContext("light") 
const Light = () => {
  return (
    <div>
        <h2>Light Theme</h2>
        <ThemeContext.Provider value='dark'>
            <Dark/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Light