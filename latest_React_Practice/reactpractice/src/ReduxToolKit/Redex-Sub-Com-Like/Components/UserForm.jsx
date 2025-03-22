import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSubscriber } from '../Slices/subscribeSlice'
const UserForm = () => {
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        setUserName("")
        dispatch(addSubscriber(userName))
        console.log("This is username :", userName)
    }
  return (
    <div>
        <form className='formSection' onSubmit={submitHandler}>
            <h4>User Name :</h4>
            <div className='userInput'>
                <input type="text" value={userName} placeholder='Enter the User..!' onChange={(e) => setUserName(e.target.value)} />
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm