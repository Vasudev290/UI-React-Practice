import React, { useRef } from 'react'

const UseRefCountEx = () => {
    const countRef = useRef(0)
    const checkValueHandler = () => {
        console.log(countRef.current += 1)
    }
  return (
    <div>
        <h2>Counter App</h2>
        <h3>{countRef.current}</h3>
        <button onClick={checkValueHandler}>Check Value</button>
    </div>
  )
}

export default UseRefCountEx