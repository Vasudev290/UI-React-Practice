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

    /* if (loading) return <p>Loading...!</p>
    if (error) return <p>{error}</p> */
  return (
    <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(users)}</pre>
        <table className='table'>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>ZipCode</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
    </div>
  )
}

export default User