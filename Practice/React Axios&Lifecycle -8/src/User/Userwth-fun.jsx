import React,{useState, useEffect} from "react"
import  Axios  from "axios"
let User= ()=>{
let[users,setUsers]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch(()=>{})
    })
    return <div className="container mt-3">
    <div className="row">
        <div className="col-md-8">
        <div>
         <pre>{JSON.stringify(users)}</pre> 
        <h2>User Components</h2>
        <hr />
        <table className='table'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                 {
                   users.length >0 ? <>
                    {
                        users.map((user,index)=>{
                            return<tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
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

export default User