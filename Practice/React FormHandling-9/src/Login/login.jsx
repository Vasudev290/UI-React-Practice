import React,{useState} from "react"
let Login= ()=>{
let [user,setUser]=useState({email:"", password:""})
let updateEmail= (event)=>{
    /* console.log(event);
    console.log(event.target);
    console.log(event.target.value); */
    setUser({...user,email:event.target.value})
}
let updatePassword= (event)=>{
    setUser({...user,password:event.target.value})
}
let submitHandler= (event)=>{
    alert(JSON.stringify(user))
}
    return<div>
        <h2>Login Form</h2> <br />
        <pre>{JSON.stringify(user)}</pre>
        <form onSubmit={submitHandler}>
            <label>Email ID</label>
            <input type="text" onChange={updateEmail}/> <br /> <br />
            <label>Password</label>
            <input type="text" onChange={updatePassword}/> <br /> <br />
            <input type="submit" value="Login" />
        </form>
    </div>
}

export default Login