import React, { useRef } from 'react'

const UseRefInput = () => {
    const inputRef = useRef()
    const inputFocus = () => {
        inputRef.current.style.backgroundColor = "lightgreen"
    }
  return (
    <div>
        <h2>Input feild</h2>
        <input type="text" ref={inputRef} placeholder='Type something..!' /> <br /><br />
        <button onClick={inputFocus}>Sub</button>
    </div>
  )
}

export default UseRefInput