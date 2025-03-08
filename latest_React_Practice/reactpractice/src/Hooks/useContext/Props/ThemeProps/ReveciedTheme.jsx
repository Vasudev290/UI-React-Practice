import React from 'react'

const ReveciedTheme = ({isDarkMode, toggleTheme}) => {
    const styleTheme = {
        backgroundColor : isDarkMode ? "white" : "black",
        color: isDarkMode ? "black" : "white",
        padding: '20px',
        textAlign: "center",
        transition: "0.3s"
    }
  return (
    <div style={styleTheme}>
        <h2>Revecied Theme</h2>
        <h3>Current Toggle :{isDarkMode ? "Light" : "Dark"}</h3>
        <button onClick={toggleTheme}> Change Toggle{isDarkMode ? "Dark" : "Light"} Mode</button>
    </div>
  )
}

export default ReveciedTheme