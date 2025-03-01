import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
const ThemeSwichar = () => {
    const {darkMode, setDarkMode } = useContext(ThemeContext)
  return (
    <div style={{ background: darkMode ? "black" : "white", color: darkMode ? "white" : "black", height: "50vh" }}>
        <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  )
}

export default ThemeSwichar