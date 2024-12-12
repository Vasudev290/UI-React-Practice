import React from 'react'
import userDetails from './data'

let furits = ["apple", "Mongo"]

const ObjectArray = () => {
  return (
    <div>
        <h2>Objects of Arrays</h2>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <pre>{JSON.stringify(userDetails)}</pre>
                        <h3>User Details</h3>
                        <hr />
                        <table className='table'>
                            <thead className='bg-black text-white'>
                                <th>S.No</th>
                                <th>User Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Phone Number</th>
                                <th>Website</th>
                            </thead>
                            <tbody>
                                {userDetails.map((user, value) => {
                                    return <tr key={value}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ObjectArray