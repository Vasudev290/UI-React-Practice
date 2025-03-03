import React, { useRef, useState } from 'react'

const UseRefStopWatch = () => {
  const [time, setTime] = useState(0)
  const timeRef = useRef()

  const startHandler = () => {
    if(!timeRef.current){
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000);
    }
  }
  const restartHandler = () => {
    setTime(0)
    stopHandler()
  }
  const stopHandler = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
  }
  return (
    <div>
      <h2>Stop Watch</h2>
      <h1>Timer : {time}s</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={restartHandler}>Restart</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
  )
}

export default UseRefStopWatch