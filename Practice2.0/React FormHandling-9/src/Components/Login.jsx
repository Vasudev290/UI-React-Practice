import React, { useState } from 'react'

const Login = () => {
  let [user, setUser]=useState({
    User:"",
    Uemail: "",
    Upassword:""
  })
  let updateHandler= (event)=> {
    setUser({...user, [event.target.name]:[event.target.value]})
  }
  let submitHandler= (event)=>{
    alert(JSON.stringify(user))
    event.preventDefault()
    console.log(user);
    
  }
  return (
    <div>
        <h3>Login Page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Commodi modi iste necessitatibus ad excepturi eos iure harum magnam voluptatum 
        nobis quam magni, in facere cumque similique tempora laudantium ipsum ut voluptatibus sunt? Hic, 
        cumque dignissimos iusto, aspernatur explicabo molestias delectus cum, odit ad repudiandae eos sapiente?</p>
        <form onSubmit={submitHandler}>
          <>
          <div className='form-group'>
            <input type="text" placeholder='User' name='User' className='form-control col-md-3' onChange={updateHandler} />
          </div>
          <div className='form-group'>
            <input type="email" placeholder='Email' name='Uemail' className='form-control col-md-3' onChange={updateHandler} />
          </div>
          <div className='form-group'>
            <input type="text" placeholder='Password' name='Upassword' className='form-control col-md-3' onChange={updateHandler} />
          </div>
          <input type="submit" className='btn btn-primary' value="Registrtion" />
          </>
        </form>
    </div>
  )
}

export default Login