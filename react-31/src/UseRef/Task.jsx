import React, { useRef, useState } from 'react'

const Task = () => {
   const[time, setTime] = useState(0)
   const timeRef = useRef(null)
   const startTimer = () => {
    if(!timeRef.current){
        timeRef.current = setInterval(() => {setTime((s) => s+1)}, 1000)
    }
   }
   const restTimer = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
    setTime(0)
   }
   const stopTimer = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
   }
  return (
    <div>
        <h2>Time: {time}s</h2>
        <button className='btn btn-success m-1' onClick={startTimer}>Start</button>
        <button className='btn btn-dark m-1' onClick={restTimer}>Rest</button>
        <button className='btn btn-danger m-1'onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Task