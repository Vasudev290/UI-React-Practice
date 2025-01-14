import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reduxToolkit/UserSlices/userSlice'
const UserForm = () => {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

const userNameHandler =(e)=>{
        setUsername(e.target.value)
}
const submitHandler =(e)=>{
    e.preventDefault()
    dispatch(addUser(username))
    setUsername("")
    console.log("This is UserName :", username)
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