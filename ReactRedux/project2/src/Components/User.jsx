import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteUsers } from '../Redux/Slices/userSlice'
const User = () => {
  const users = useSelector((state) =>state.userInfo.userData)
  console.log(users)
  const dispatch = useDispatch()
  const deleteUsersInfo = (index) => {
    dispatch(deleteUsers(index))
  }
  return (
    <div>
      <h2>User Data</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores beatae odio? Perferendis soluta omnis voluptatum temporibus totam at dolorem, vitae ullam tempora quod voluptates porro natus veniam saepe alias.</p>
      <div className="container mt-3">
        <div className="row">
          <pre>{JSON.stringify(users)}</pre>
          <div className="col-10">
            <table className='table'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((data, index) => {
                  return <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.location}</td>
                  <td><button onClick={() => deleteUsersInfo(index)} className='btn btn-danger'>Delete</button></td>  
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