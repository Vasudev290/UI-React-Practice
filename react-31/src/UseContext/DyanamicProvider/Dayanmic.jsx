import React, { createContext, useState } from 'react'
import ThemeButton from './ThemeButton'
export const ThemeContext = createContext()

const Dayanmic = () => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <h2>Dynamic Provider</h2>
        <ThemeContext.Provider value={{theme, toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')}}>
            <ThemeButton/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Dayanmic