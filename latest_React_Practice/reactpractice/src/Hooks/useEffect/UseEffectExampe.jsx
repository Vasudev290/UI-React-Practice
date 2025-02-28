import React, { useEffect, useState } from 'react'

const UseEffectExampe = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    },[count])
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Count Value Rendered : {count} Times</h2>
    </div>
  )
}

export default UseEffectExampe