import React,{useState} from 'react'

const Form = () => {
    const [user, setUser] = useState({userName: "", userEmail: "", userPassword: "", })

    const userHandler = (e) => {
        setUser({...user, userName:e.target.value})
    }

    const emailHandler = (e) => {
        setUser({...user, userEmail: e.target.value})
    }

    const passwordHandler = (e) => {
        setUser({...user, userPassword:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(user)
    }
  return (
    <div>
        <h2>Login form</h2>
        <div className="container">
            <pre>{JSON.stringify(user)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h3>Registation Form</h3>
                        </div>
                        <form onSubmit={submitHandler}>
                        <div className="card-body">
                            <div className='form-group'>
                                <input type="text" placeholder='Name' className='form-control' onChange={userHandler} />
                            </div>
                            <div className='form-group'>
                                <input type="email" placeholder='Email' className='form-control' onChange={emailHandler} />
                            </div>
                            <div className='form-group'>
                                <input type="text" placeholder='Password' className='form-control' onChange={passwordHandler} />
                            </div>
                            <input type="submit" value="Register" className='btn btn-success' />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form