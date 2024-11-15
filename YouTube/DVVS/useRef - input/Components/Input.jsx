import React, { useRef } from 'react'

const Input = () => {
    const inputValues = useRef("")
    const focusInput = () => {
        inputValues.current.focus();
    }
  return (
    <div>
        <h3>Input Value</h3>
        <input type="text" ref={inputValues} />
        <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default Input