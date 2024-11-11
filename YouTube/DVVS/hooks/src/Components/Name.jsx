import React,{useState} from 'react'

const Name = () => {

    const [username, setUsername] = useState("")
    const [error, setError] = useState("")


    const updateName = (e) => {
       setUsername(e.target.value)
    }

    const validName = (e) => {
        if(username === "" || username === null)
        {
            setError("Name should not be blank")
        }
        else if(username.length < 4)
        {
            setError("Username must be more then 4 Charecter")
        }
        else if (username.length > 8)
        {
            setError("Username sholud be 4 to 8 character only!")
        }
        else 
        {
            setError(" Valid Username...!✅")
        }
     }

  return (
    <div>
        <h5>Username Validation</h5>
        <div className='form-group'>
        <label htmlFor='username'>UserName :</label>
        <input type="text" name='username' value={username} onChange={updateName}
         className='form-control col-md-5' />
        <span style={{color:"red"}}>{error}</span>
        </div>

        <input type="sumbit" value="Submit" onClick={validName} className='btn btn-primary col-md-2' />
    </div>
  )
}

export default Name