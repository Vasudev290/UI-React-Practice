import React,{useState} from 'react'

const UserForm = () => {
    const [username, setUsername] = useState('')
    const userNameHandler =(e)=>{
        setUsername(e.target.value)
    }

const submitHandler =(e)=>{
    e.preventDefault()
}
  return (
    <div >
        <form className='formSection' onSubmit={submitHandler}>
            <h4>User Name</h4>
            <div className="userInput">
                <input type="text" value={username} onChange={userNameHandler}/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm