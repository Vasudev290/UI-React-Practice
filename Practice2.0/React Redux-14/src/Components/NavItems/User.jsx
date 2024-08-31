import React, { useEffect } from 'react'
import {userAction} from '../../Redux/User/user.action'
import {useDispatch, useSelector} from 'react-redux'
const User = () => {
    let dispatch= useDispatch()
    let {users=[]}=useSelector((state)=>{
      return state
    })
    useEffect(()=>{
        dispatch(userAction())
    },[])
  return (
    <div>
        <h2>User Component</h2>
        <div className="container mt-3">
        <pre>{JSON.stringify(users)}</pre>
          <div className="row">
            <div className="col-md-8">
            <table className='table'>
          <thead className='bg-success text-white'>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>ZipCode</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user,index)=>{
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          })}
          </tbody>
        </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default User