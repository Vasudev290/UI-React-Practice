import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getDataHadler
    }, [])
    const getDataHadler = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data)
            console.log(res)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(users)}</pre>
        <button onClick={getDataHadler} className='btn btn-success'>Data</button>
        {
            users.length > 0 ? <>
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className='table'>
                        <thead className='bg-success text-white'>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Location</th>
                        </thead>
                        <tbody>
                            {users.map((item, index) => {
                                return(
                                    <tr key={index} >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            
            </> : <h3> No Data</h3>
        }
    </div>
  )
}

export default Users