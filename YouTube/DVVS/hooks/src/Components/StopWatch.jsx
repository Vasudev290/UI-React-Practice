import React, { useRef,useState } from 'react'

const StopWatch = () => {
    const [count, setCount] = useState(0)
    const timer = useRef();

    const startTimer = () => {
        timer.current = setInterval(() => {
            setCount(count => count +1)
            
        }, 100);
    }

    const stopTimer = () => {
        clearInterval(timer.current)
    }
    
  return (
    <div>
        <h3>Stop Watch</h3>
        <button onClick={startTimer} className='btn btn-success'>Start</button>
        <h3>{count}</h3>
        <button onClick={stopTimer} className='btn btn-danger'>Stop</button>
    </div>
  )
}

export default StopWatch