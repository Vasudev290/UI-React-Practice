import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, []) //Runs Once
  return (
    <div>
        <h3>Seconds : {seconds} </h3>
    </div>
  )
}

export default Timer