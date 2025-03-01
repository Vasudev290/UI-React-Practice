import React, { createContext, useState } from 'react'
import ThemeSwichar from './ThemeSwichar'
export const ThemeContext = createContext()
const ThemeProvider = () => {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <ThemeSwichar/>
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider