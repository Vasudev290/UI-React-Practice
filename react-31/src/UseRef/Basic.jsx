import React, { useRef } from 'react'

const Basic = () => {
    const count = useRef(0)
    const increHandler = () => {
        count.current ++;
        console.log("Count Value: ", count.current)
    }; // returns an object but it's doesn't cause component to re-render

  return (
    <div>
        <h2>{count.current}</h2>
        <button onClick={increHandler}>Count Value</button>
    </div>
  )
}

export default Basic