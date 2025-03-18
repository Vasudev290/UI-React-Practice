import React from 'react'
import withApiAuth from './withApiAuth'

const UserList = ({data}) => {
    // console.log("Recevied Props :"), data
  return (
    <div>
        <h3>User List</h3>
        <ul>
            {data.map((users, index) => {
                return <li key={index}>{users.name}</li>
            })}
        </ul>
    </div>
  )
}
const UserListwithLoading = withApiAuth(UserList, "https://jsonplaceholder.typicode.com/users")
export default UserListwithLoading