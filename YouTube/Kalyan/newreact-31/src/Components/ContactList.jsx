import React from 'react'

const ContactList = (props) => {
  return (
    <div>
        <h3>Contact List</h3>
        <div className="container">
        <pre>{JSON.stringify(props)}</pre>
        <div className="row">
            <table className='table'>
                <thead className='bg-primary text-white' >
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Country</th>
                </thead>
                <tbody>
                    {
                        props.conatact.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name.first}</td>
                                <td>{item.email}</td>
                                <td>{item.location.city}</td>
                                <td>{item.phone}</td>
                                <td>{item.location.country}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>

    </div>
  )
}

export default ContactList