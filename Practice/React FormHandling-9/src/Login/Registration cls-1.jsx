import React, { Component } from 'react'

class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            Uname:"",
            Uemail:"",
            Upassword:""
        }
    }
    userHandler= (event)=>{
        this.setState({Uname:event.target.value})
    }
    emailHandler= (event)=>{
        this.setState({Uemail:event.target.value})
    }
    passwordHandler= (event)=>{
        this.setState({Upassword:event.target.value})
    }
    submitHandler= ()=>{
    alert(JSON.stringify(this.state))
    }
  render() {
    return (
      <div className='container mt-3'>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-md-5">
            <h2>Regostration Form</h2>
            <form onSubmit={this.submitHandler}>
            <div className='form-group'>
              {/* <label>User Name</label> */}
              <input type="text" className='form-control' placeholder='User Name' onChange={this.userHandler}/>
            </div>
            <div className='form-group'>
              {/* <label>Email</label> */}
              <input type="email" className='form-control' placeholder='Email' onChange={this.emailHandler}/>
            </div>
            <div className='form-group'>
              {/* <label>Password</label> */}
              <input type="password" className='form-control' placeholder='Password' onChange={this.passwordHandler}/>
            </div>
            <input type="submit" className='btn btn-primary' value="Registrtion" />
        </form>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Registration