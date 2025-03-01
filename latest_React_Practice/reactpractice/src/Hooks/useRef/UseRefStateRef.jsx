import React, { useRef, useState } from 'react'

const UseRefStateRef = () => {
  const countRef = useRef(0);
  const [render, setRender] = useState(0);

  //for useRef 
  const increment = () => {
    countRef.current +=1;
    console.log("Count from useRef :", countRef.current)
  }
  return (
    <div>
      <h2>Count Re-Render App</h2>
      <h3>Render Count :{render}</h3>
      <button onClick={() => setRender(render + 1)}>Re-Render</button> <br /><br />
      <button onClick={increment}>Increment(No Re-Render)</button>
    </div>
  )
}

export default UseRefStateRef