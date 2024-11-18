import React,{useState} from 'react'

const CompFun = () => {
    const details = {
        name: 'vasu',
        age : 23,
        city: "Bangalore"
    }
    const [inputFilled, setInputFilled] = useState(details)

    const updateForm = (e) => {
        setInputFilled((prev) => ({
            ...prev,[e.target.name] : e.target.value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <h3>Form validation</h3>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" placeholder='Name' value={inputFilled.name} onChange={updateForm} name='name' />
            <label>Age</label>
            <input type="text" placeholder='Name' value={inputFilled.age} name='age' onChange={updateForm} />
            <label>City</label>
            <input type="text" placeholder='Name' value={inputFilled.city} name='city' onChange={updateForm} />
        </form>
    </div>
  )
}

export default CompFun;