import React, { useEffect, useState } from 'react'

const UseStateTimer = () => {
    const [time, setTime] = useState(0)
     useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 100);

        return () => clearInterval(interval)
    }, [])
  return (
    <div>
        <h2>Timer App</h2>
        <h1> Times :{time}s</h1>
    </div>
  )
}

export default UseStateTimer