import React, { useState } from 'react'

const UserForm = () => {
    const [userName, setUserName] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("This is username :", userName)
    }
  return (
    <div>
        <form className='formSection' onSubmit={submitHandler}>
            <h4>User Name :</h4>
            <div className='userInput'>
                <input type="text" value={userName} placeholder='Type Something..!' onChange={(e) => setUserName(e.target.value)} />
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm