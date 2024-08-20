import  Axios  from 'axios'
import React, { Component } from 'react'

class UserCls extends Component {
    state={users:[]}

    componentDidMount(){
        this.getUserData()
    }
    getUserData= ()=>{
Axios.get("https://jsonplaceholder.typicode.com/users")
.then((resp)=>{
    this.setState({users:resp.data})
})
.catch(()=>{})
    }
  render() {
    return (
      <div>
        <h2>User Component with class</h2>
        <pre>{JSON.stringify(this.state.users)}</pre>
        {/* <button onClick={this.getUserData} className='btn btn-success mb-3'> Click here to Get Data</button> */}
        <table className='table'>
            <thead className='bg-success text-white'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zipcode</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.length > 0 ? <>
                    {
                        this.state.users.map((users, index)=>{
                            return <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.address.city}</td>
                                <td>{users.address.zipcode}</td>
                            </tr>
                        })
                    }
                    </> : <React.Fragment></React.Fragment>
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default UserCls