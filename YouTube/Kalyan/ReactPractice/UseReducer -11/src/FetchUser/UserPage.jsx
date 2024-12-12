import React, { useEffect, useState } from 'react'
const userDetails = "https://jsonplaceholder.typicode.com/users"

const UserPage = () => {
    const [user, setUser] = useState([])

    const userHandler = async () => {
        const response = await fetch(userDetails)
        const newData =  await response.json()
        setUser(newData)
    }
    useEffect(() => {
        userHandler()
    }, [])
    //console.log(userHandler())
    console.log(user)
  return (
    <div>
        <h2>User Details Fetching Methods</h2>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <pre>{JSON.stringify(user)}</pre>
                    <table className='table'>
                        <thead style={{color: 'green'}}>
                            <tr>
                            <th>S.No</th>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((item, value) => {
                                return <tr key={value}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
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

export default UserPage