import React from 'react'
import withApiAuth from './withApiAuth'

const UserList = ({data}) => {
  return (
    <div>
        <h3>User List</h3>
        <ul>
            {data.map((user, index) => {
                return <li key={index}>{user.email}</li>
            })}
        </ul>
    </div>
  )
}
const UserListwithLoading = withApiAuth(UserList, "https://jsonplaceholder.typicode.com/users")
export default UserListwithLoading;