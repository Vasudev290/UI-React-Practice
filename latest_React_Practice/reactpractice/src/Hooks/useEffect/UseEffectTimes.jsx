import React, { useEffect, useState } from 'react'

const UseEffectTimes = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSec) => prevSec + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
  return (
    <div>
        <h1>Timer App</h1>
        <h2> The Seconds was {seconds}s</h2>
    </div>
  )
}

export default UseEffectTimes