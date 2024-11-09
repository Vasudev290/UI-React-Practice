import React from 'react'

const User = ({name,age, gender, phone, email}) => {
  return (
    <div>
        <h2>User Data</h2>
        
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{gender}</h2>
        <h2>{phone}</h2>
        <h2>{email}</h2>
    </div>
  )
}

export default User