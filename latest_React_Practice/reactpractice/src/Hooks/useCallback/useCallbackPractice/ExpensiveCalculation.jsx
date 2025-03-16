import React, { useCallback, useMemo, useState } from 'react'

const ExpensiveCalculation = () => {
    const[number, setNumber] = useState(5)
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)


    const FactorialCalculator = useMemo(() => {
        console.log("Calculate factorial value..!")
        const computedFactorialValue = (n) => (n <= 1 ? 1 : n * computedFactorialValue(n - 1))
        return computedFactorialValue(number)
    }, [number])

    const increament = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    const themeStyle = {
        backgroundColor: toggle ? "black" : "white",
        color: toggle ? "white" : "black",
        padding: "20px",
        textAlign: "center" 
    }
  return (
    <div style={themeStyle}>
        <h2>Expensive Calculation</h2>
        <h2>Factorial value of {number} : {FactorialCalculator}</h2>
        <input type="number" value={number} placeholder='Enter value..' onChange={(e) => setNumber(Number(e.target.value))} />
        <br /> <br />
        <button onClick={increament}>Increament ({count})</button>
        <br /> <br />
        <button onClick={() => setToggle(!toggle)}>{toggle ? "White" : "Dark"} Mode</button>
    </div>
  )
}

export default ExpensiveCalculation