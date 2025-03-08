import React, { useState } from 'react'

const MiniToDoList = () => {
  const [tasks, setTasks] = useState([])
  const[task, setTask] = useState("")
  const addTaskHandler = ()=> {
    if(task){
      setTasks([...tasks, task])
      setTask("")
    }
  }
  return (
    <div>
      <h2>Mini TO-DO List</h2>
      <input type="text" placeholder='Type something..!' onChange={(e) => setTask(e.target.value)}/> <br /><br />
      <button onClick={addTaskHandler}>Add Tasks</button>
      <ul>
        {tasks.map((tas, index) => (
          <li key={index}>{tas}</li>
        ))}
      </ul>
    </div>
  )
}

export default MiniToDoList