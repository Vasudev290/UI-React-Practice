import React, { useState } from 'react'
import ReveciedTheme from './ReveciedTheme'

const ThemePorps = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => !prevTheme)
    }
  return (
    <div>
        <h2>Theme Porps</h2>
        <ReveciedTheme isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default ThemePorps