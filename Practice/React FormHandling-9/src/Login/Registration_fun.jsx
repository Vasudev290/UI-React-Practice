import React, {useState} from "react"
let Registration= ()=>{
let [user,setUser]= useState({
            Uname:"",
            Uemail:"",
            Upassword:""
})
let updateHandler= (event)=>{
    setUser({...user,[event.target.name]:(event.target.value)})
}
let submitHandler= (event)=>{
    //alert(JSON.stringify(user))
    event.preventDefault()
    console.log(user);
}
    return (
        <div className='container mt-3'>
          <pre>{JSON.stringify(user)}</pre>
          <div className="row">
              <div className="col-md-5">
              <h2>Regostration Form</h2>
              <form onSubmit={submitHandler}>
              <div className='form-group'>
                {/* <label>User Name</label> */}
                <input type="text" className='form-control' name='Uname' placeholder='User Name' onChange={updateHandler}/>
              </div>
              <div className='form-group'>
                {/* <label>Email</label> */}
                <input type="email" className='form-control' name='Uemail' placeholder='Email' onChange={updateHandler}/>
              </div>
              <div className='form-group'>
                {/* <label>Password</label> */}
                <input type="password" className='form-control' name='Upassword' placeholder='Password' onChange={updateHandler}/>
              </div>
              <input type="submit" className='btn btn-primary' value="Registrtion" />
          </form>
              </div>
          </div>
          
        </div>
      )
}

export default Registration