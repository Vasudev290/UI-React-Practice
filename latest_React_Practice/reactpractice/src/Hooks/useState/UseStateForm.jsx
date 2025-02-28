import React, { useState } from 'react'

const UseStateForm = () => {
    const [input, setInput] = useState({name: "", age: "", email: ""})
    const inputHandler = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(input)
    }
  return (
    <div>
        <h2>Application Form</h2>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder='Name' name='name' value={input.name} onChange={inputHandler} /> <br /> <br />
        <input type="number" placeholder='Age' name='age' value={input.age} onChange={inputHandler} /> <br /> <br />
        <input type="email" placeholder='Email' name='email' value={input.email} onChange={inputHandler} /> <br /> <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UseStateForm