import React, { useRef, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const timerRef = useRef(null)
    const startTimer = () => {
        timerRef.current = setInterval(() => {setSeconds((s) => s + 1)}, 1000)
    }
    const stopTimer = () => {
        clearInterval(timerRef.current)
    }
  return (
    <div>
        <h2>Seconds: {seconds}</h2>
        <button onClick={startTimer} className='btn btn-success m-1'>Start</button>
        <button onClick={stopTimer} className='btn btn-danger m-1'>Stop</button>
    </div>
  )
}

export default Timer