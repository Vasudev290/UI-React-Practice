import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [count, setCount] = useState(0)
    const timer = useRef()

    const startHandler = () => {
        timer.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }
    const restHandler = () => {
        setCount(0)
    }
    const stopHandler = () => {
        clearInterval(timer.current)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={startHandler} className='btn btn-success m-1'>Start</button>
        <button onClick={restHandler} className='btn btn-info m-1'>Rest</button>
        <button onClick={stopHandler} className='btn btn-success m-1'>Stop</button>
    </div>
  )
}

export default StopWatch