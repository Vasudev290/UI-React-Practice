import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef(null)
    const startTimerHandler = () => {
        if(!timerRef.current){
            timerRef.current = setInterval(() => {
                setTimer((prev) => prev + 1)
            }, 1000);
        }
    }
    const stopTimerHandler = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
    }
    const resetTimerHandler = () => {
        setTimer(0)
        stopTimerHandler()
    }
  return (
    <div>
        <h2>Stop Watch</h2>
        <h3>Timer Count :{timer}s</h3>
        <button onClick={startTimerHandler}>Start</button>
        <button onClick={resetTimerHandler}>Reset</button>
        <button onClick={stopTimerHandler}>Stop</button>
    </div>
  )
}

export default StopWatch