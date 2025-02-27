import React, { useState } from 'react'

const UseStateObject = () => {
    const [user, setUser] = useState({name: "Vasu", age: 23, loc: "Bangalore"})
  return (
    <div>
        <h1>Name :{user.name}</h1>
        <h2>Age :{user.age}</h2>
        <button onClick={() => setUser({...user, age: user.age + 1})}>Increase Age</button>
    </div>
  )
}

export default UseStateObject