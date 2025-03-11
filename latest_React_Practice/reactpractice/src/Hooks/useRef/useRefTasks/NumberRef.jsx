import React, { useRef, useState } from 'react'

const NumberRef = () => {
    const clickRef = useRef(0) ;
    const [showClick, setShowClick] = useState(false)
    const clickHandler = () => {
        clickRef.current += 1;
    }
  return (
    <div>
        <h2>Number Ref</h2>
        <button onClick={clickHandler}>Click Me</button>
        <button onClick={() => setShowClick(!showClick)}>Show Click</button>
        {showClick && <h2>Click Times :{clickRef.current}</h2>}
    </div>
  )
}

export default NumberRef