import React, {useState} from 'react'

const UseStateCount = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
  return (
    <div>
        <h3>Counter Value </h3>
        <h4> Counter :{count}</h4>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} /> <br /> <br />
        <button onClick={() => setCount(count + step)}>INCR</button>
        <button onClick={() => setCount(count - step >= 0 ? count - step : 0)}>DECR</button>
        <button onClick={() => setCount(0)}>RESET</button>
    </div>
  )
}

export default UseStateCount