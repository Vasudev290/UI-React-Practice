import React, { useRef } from 'react'

const ToggleText = () => {
    const toggleTextRef = useRef(null)
    const changeToggleHandler = () => {
        toggleTextRef.current.style.color = toggleTextRef.current.style.color === "red" ? "blue" : "red"
    }
  return (
    <div>
        <h3 ref={toggleTextRef}>Change Toggle Text Color</h3>
        <button onClick={changeToggleHandler}>Change Color</button>
    </div>
  )
}

export default ToggleText