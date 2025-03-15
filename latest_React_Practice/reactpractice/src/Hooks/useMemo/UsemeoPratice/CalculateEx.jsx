import React, { useMemo, useState } from "react";

const CalculateEx = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const [toggle, setToggle] = useState(false);
  const toggleStyle = {
    backgroundColor: toggle ? "black" : "white",
    color: toggle ? "white" : "black",
    padding: "20px",
    textAlign: "center"
  };

  const CalculationValue = useMemo(() => {
    return CostlyCalculation(count);
  }, [count])
  return (
    <div style={toggleStyle}>
      <h2>
        Calculate the Expenses..!{" "}
        <button onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "Light Theme" : "Dark Theme"} Mode
        </button>
      </h2>
      <h2>My Todos</h2>
      {todo.map((todo, index) => {
        return <h3 key={index}>{todo}</h3>;
      })}
      <button onClick={() => setTodo((prev) => [...prev, "New Todo"])}>
        Add Todo
      </button>
      <hr />
      <div>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increament</button>
      </div>
      <h2>Simple Calculation</h2>
      {CalculationValue}
    </div>
  );
};

export default CalculateEx;


function simpleExecution(num){
    console.log("I'm Simple Execution..!")
    for(let i=0; i<10; i++){ }
    return num += 1
}

function CostlyCalculation(num){
    console.log("I'm Costly Function Executing.!")
    for(let i= 0; i < 1000000000; i++){}
    return num += 1
}