import React, { useState } from 'react'
import Axios from 'axios'
const User = () => {
    let [user, setUser]=useState([])

    let getUser= ()=> {
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((resp)=>{
        setUser(resp.data)
       })
       .catch(()=> {})
    }
  return (
    <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(user)}</pre>
        <button onClick={getUser} className='btn btn-success mb-4'>Click Here to get the data</button>
        
        <table className='table'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.length > 0 ? <>
                    {
                        user.map((users, index)=> {
                            return<tr key={index}>
                              <td>{users.id}</td>
                              <td>{users.name}</td>
                              <td>{users.email}</td>
                              <td>{users.address.city}</td>

                            </tr>
                        })
                    }
                    
                    
                    </>: <React.Fragment></React.Fragment>
                }
            </tbody>
        </table>
    </div>
  )
}

export default User