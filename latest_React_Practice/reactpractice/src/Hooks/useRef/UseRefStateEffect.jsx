import React, { useEffect, useRef, useState } from 'react'

const UseRefStateEffect = () => {
    const renderCount = useRef(0)
    const [render, setRender] = useState(0)
    useEffect(() => {
        renderCount.current +=1
    })
  return (
    <div>
        <h2>Component Renders :{renderCount.current}</h2>
        <button onClick={() => setRender(render + 1)}>Increment Count</button>
    </div>
  )
}

export default UseRefStateEffect