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
    updateHandler= (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler= (event)=>{
        //alert(JSON.stringify(this.state))
        event.preventDefault()
        console.log(this.state);
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
              <input type="text" className='form-control' name='Uname' placeholder='User Name' onChange={this.updateHandler}/>
            </div>
            <div className='form-group'>
              {/* <label>Email</label> */}
              <input type="email" className='form-control' name='Uemail' placeholder='Email' onChange={this.updateHandler}/>
            </div>
            <div className='form-group'>
              {/* <label>Password</label> */}
              <input type="password" className='form-control' name='Upassword' placeholder='Password' onChange={this.updateHandler}/>
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