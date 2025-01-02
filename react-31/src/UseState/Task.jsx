import React, { useState } from 'react'

const Task = () => {
    const [tasks, setTasks] = useState([])
    const addTasks = () => {
        setTasks([...tasks, `Tasks${tasks.length + 1}`])
    }
  return (
    <div>
       <button onClick={addTasks}>Add Tasks</button>
       <ul>
        {
            tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default Task