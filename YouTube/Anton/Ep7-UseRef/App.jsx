import React, { useEffect, useRef, useState } from 'react'

const App = () => {

const [input,setInput] = useState("")
const inputRef = useRef();
console.log("Getting Render..!");

useEffect(() => {
  inputRef.current = input
}, [input]);

const display = () => {
  console.log(inputRef.current);
};

  return (
    <div>
      <h2>App Component</h2>
      <input type="text" ref={inputRef}
      value={input} 
      onChange={(event) => setInput(event.target.value)}
      />

      <h4>My Name is {input}</h4>
      <h4>My Name is {inputRef.current}</h4>
      <button onClick={display}>Get Details</button>
    </div>
  )
}

export default App