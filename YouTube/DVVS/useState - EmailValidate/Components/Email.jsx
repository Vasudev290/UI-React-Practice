import React,{useState} from 'react'

const Email = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const validateEmail = () => {
        var emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
                          // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)$/;

        if(!emailformat.test(email))
        {
            setEmail('Email should contains @ and .com so please enter correct email Adderss..!' )
        }
        else
        {
            setError("You have entred correct email Address..!✅")
        }
    }
  return (
    <div>
        <h3>Email Validation</h3>
        <div className='form-group'>
        <label htmlFor="email"></label>
        <input type="email" name='email' value={email} 
        className='form-control col-md-5' onChange={updateEmail} />
        <span style={{color:"red"}}>{error}</span>
        </div>

        <input type="submit" value="Validate Email" className='btn btn-success' onClick={validateEmail} />
    </div>
  )
}

export default Email