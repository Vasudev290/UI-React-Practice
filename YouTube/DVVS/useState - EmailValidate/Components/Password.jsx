import React,{useState} from 'react'

const Password = () => {

    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [error, setError] = useState("")


    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const confirmPassword = (e) => {
        setCpassword(e.target.value)
    }

    const validatePassword = (e) => {


        const regExpSpecialChar = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,8}$/;

        if(password === "" || password === null)
        {
            setError("Password should not be black")
        }
        else if(password.length < 4)
        {
            setError("Password should be more then 4 Characters..!")
        }
        else if(!regExpSpecialChar.test(password))
        {
            setError("Password sholud be at least 1 digit 2 speacial chars, 1 lower and upper case")
        }
        else if (password !== cpassword)
        {
            setError("Password Should Match..!✅")
        }
        else{
            setError("Strong password..!✅")
            // for example :abcD1@#
        }
    }

  return (
    <div>
        <h3>Password Validation</h3>
        
        <div className='form-group'>
        <label htmlFor="password">Password</label>
        <input type="text" name='password' value={password} onChange={updatePassword}
         className='form-control col-md-5' /><span style={{color:"red"}}>{error}</span>
        </div>

        <div className='form-group'>
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name='cpassword' value={cpassword} onChange={confirmPassword}
         className='form-control col-md-5' /><span style={{color:"red"}}>{error}</span>
        </div>

        <input type="submit" value="Vallidate Password" onClick={validatePassword} className='btn btn-success' />

    </div>
  )
}

export default Password