import React, { useState } from 'react'

const Binding = () => {
    const [wish, setWish] = useState("")

 const handleWish = (msg) => {
    setWish(msg)
 }

  return (
    <div>
        <h4>Event Binding Method</h4>
        <h4>Hello,{wish} </h4>
        <button className='btn btn-info m-2' onClick={handleWish.bind(null,"Good Morning...!")}>GM</button>
        <button className='btn btn-success m-2' onClick={handleWish.bind(null,"Good After")}>GM</button>
        <button className='btn btn-primary m-2' onClick={handleWish.bind(null, "Good Eveving..!")}>GM</button>
        <button className='btn btn-danger m-2' onClick={handleWish.bind(null, "Good Night")}>GM</button>
    </div>
  )
}

export default Binding