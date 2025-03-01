import React, { useContext } from 'react'
import { fetchContext } from './JsonUser'
const JsonRecevied = () => {
    const userData = useContext(fetchContext)
  return (
    <div>
        <h2>Recevied Data</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
            </tr>
            {
                userData.map((item, index) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default JsonRecevied