import React, { useRef } from 'react'

const InputField = () => {
    const inputRef = useRef("")
    const inputFocus = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'lightyellow'
    }
  return (
    <div>
        <h2>Input Field</h2>
        <input type="text" placeholder='type something..!' ref={inputRef}/> <br /><br />
        <p>{inputRef.current}</p>
        <button onClick={inputFocus}>Submit</button>
    </div>
  )
}

export default InputField