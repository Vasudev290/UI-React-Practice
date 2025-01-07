import React, { useContext } from 'react'
import {DetailsContext} from './Details'
const Profile = () => {
    const data = useContext(DetailsContext)
  return (
    <div>
        <h2>Profile Details</h2>
        <h4>Name: {data.name}</h4>
        <h4>Role :{data.role}</h4>
        <h4>Salary :{data.salary}</h4>
    </div>
  )
}

export default Profile