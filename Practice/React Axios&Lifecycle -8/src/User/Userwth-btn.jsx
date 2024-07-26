import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props){
         super(props)
         this.state={
            users:[]
         }
    }
    getUserData= ()=>{
         Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
         })
         .catch()
    }
  render() {
   return <div className="container mt-3">
    <div className="row">
        <div className="col-md-8">
        <div>
        {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
        <h2>User Components</h2>
        <button className='btn btn-primary' onClick={this.getUserData}>Get Data</button>
        <hr />
        <table className='table'>
            <thead className='bg-dark text-white'>
                
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                
            </thead>
            <tbody>
                 {
                   this.state.users.length >0 ? <>
                    {
                        this.state.users.map((user,index)=>{
                            return<tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                   </> :<React.Fragment></React.Fragment>
                 }
            </tbody>
        </table>
      </div>
        </div>
    </div>
   </div>
  }
}

export default User