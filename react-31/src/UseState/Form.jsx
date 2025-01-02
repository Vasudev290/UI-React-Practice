import React,{useState} from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
  return (
    <div>
        <label> Name == </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/> <br /> <br />
        <label>Age ===</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age'/>
        <p>{`Name:${name} , Age: ${age} `}</p>
    </div>
  )
}

export default Form