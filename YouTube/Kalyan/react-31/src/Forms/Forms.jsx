import React, { useState } from 'react'

const Forms = () => {

    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState()

const getUserName = (event) => {
   setUserName(event.target.value)
}

const getAge = (event) => {
    setUserAge(event.target.value)
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
                            <form>
                                <h4> Hello Name :{userName}  Age is :{userAge}</h4>
                                <div className='form-group'>
                                    <input type="text" placeholder='Enter your Name' className='form-control' onChange={getUserName} />
                                </div> <br />
                                <div className='form-group'>
                                    <input type="number" placeholder='Enter your age' className='form-control' onChange={getAge} />
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