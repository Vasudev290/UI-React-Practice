import React, { useState } from 'react'

const Registration = () => {
    let [user, setUser]=useState({
        user:"",
        email:"",
        mobile:"",
        dob:"",
        password:""
    })

    let updateHandler= (event)=> {
        setUser({...user, [event.target.name]:[event.target.value]})
    }

    let submitHandler= (event)=> {
        alert(JSON.stringify(user))
        event.preventDefault()
        console.log(user);
        
    }

  return (
    <div>
        <div className="container mt-3">
        <pre>{JSON.stringify(user)}</pre>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h2>Registration Details</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                            <div className='form-group'>
                                <input type="text" placeholder='User' name='user' className='form-control' onChange={updateHandler} required />
                            </div>
                            <div className='form-group'>
                                <input type="email" placeholder='Email' name='email' className='form-control' onChange={updateHandler} required />
                            </div>
                            <div className='form-group'>
                                <input type="number" placeholder='Mobile' name='mobile' className='form-control' onChange={updateHandler} required />
                            </div>
                            <div className='form-group'>
                                <input type="date" placeholder='Dob' name='dob' className='form-control' onChange={updateHandler} required />
                            </div>
                            <div className='form-group'>
                                <input type="password" placeholder='Password'name='password' className='form-control' onChange={updateHandler} required />
                            </div>
                            <input type="submit" value="Sign In" className='btn btn-success' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration