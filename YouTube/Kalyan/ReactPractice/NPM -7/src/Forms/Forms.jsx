import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {

    const [userName, setUserName] = useState("")
    const [newuserDetails, setNewUserDetails] = useState()

    const notify = () => toast("Your data added successfully..!");

const getUserName = (event) => {
   setUserName(event.target.value)
}

const userDetails = (event) => {
    event.preventDefault()
    setNewUserDetails(userName)
    notify()
}
  return (
    <div>
        <h2>Form Handling</h2>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h4>Registeration Form</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={userDetails}>
                                <h4>Hello, {newuserDetails}</h4>
                                <ToastContainer/>
                                <div className='form-group'>
                                    <input type="text" placeholder='Enter your Name' className='form-control' onChange={getUserName} />
                                </div> <br />
                                <input type="submit" value="Signin" className='btn btn-success' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forms