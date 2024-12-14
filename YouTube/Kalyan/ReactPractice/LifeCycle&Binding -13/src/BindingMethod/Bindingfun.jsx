import React, { useState } from 'react'

const Binding = () => {
    const [wish, setWish] = useState("")

 const handleWish = (msg) => {
    setWish(msg)
 }
const gmHandler = () => {
    setWish("Good Moring ✨🔆")
}
const gaHandler = () => {
    setWish("Good Afternoon 😴💤")
}
const geHandler = () => {
    setWish("Good Evening 🍵")
}
const gnHandler = () => {
    setWish("Good Night 🍽️🍜")
}
  return (
    <div>
        <h4>Event Binding Method</h4>
        <h4>Hello,{wish} </h4>
        
        <button className='btn btn-info m-2' onClick={gmHandler}>GA</button>
        <button className='btn btn-success m-2' onClick={gaHandler}>GA</button>
        <button className='btn btn-primary m-2' onClick={geHandler}>GE</button>
        <button className='btn btn-secondary m-2' onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Binding