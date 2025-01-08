import React, { useEffect, useRef } from 'react'

const InputField = () => {
    const inputRef = useRef(null)
useEffect(() => {
    inputRef.current.focus()
}, [])
  return (
    <div>
        <h2>Auto-Focus Input field</h2>
        <div>
            <form>
                <label>Enter Name</label>
                <input type="text" ref={inputRef} placeholder='type Something..!' /> <br />
                
            </form>
        </div>
    </div>
  )
}

export default InputField