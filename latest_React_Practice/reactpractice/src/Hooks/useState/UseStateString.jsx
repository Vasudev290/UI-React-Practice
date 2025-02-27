import React,{useState} from 'react'

const UseStateString = () => {
    const Names = ["Vasu", "Dev","Murugan", "Krishna", "Shiva", "Bharma", "Vishnu", "Ganga", "AThali"]
    const [name, setName] = useState(Names[0])
    const genarateRandomName = () => {
        const randomName = Math.floor(Math.random() * Names.length);
        setName(Names[randomName])
    }
  return (
    <div>
        <h3>Task-1 Genarate Random Names</h3>
        <h1>The Name is &rarr; {name}</h1>
        <button onClick={genarateRandomName}>Change Names</button>
    </div>
  )
}

export default UseStateString