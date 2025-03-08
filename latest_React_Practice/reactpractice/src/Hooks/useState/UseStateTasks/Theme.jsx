import React, { useState } from 'react'

const Theme = () => {
    const [isToggle, setIsToggle] = useState(true)
    const styleTheme = {
        backgroundColor: isToggle ? "black" : "white",
        color: isToggle ? "white" : "black",
        textAlign: "center",
        padding: "20px",
        transition: "0.3s"
    }
  return (
    <div style={styleTheme}>
        <h2>Theme Changer</h2>
        <h3>Current Theme: {isToggle ? "Dark" : "Light"} Mode</h3>
        <button onClick={() => setIsToggle(!isToggle)}>Change Toggle {isToggle ? "Light" : "Dark"}</button>
    </div>
  )
}

export default Theme