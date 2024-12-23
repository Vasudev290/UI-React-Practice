import React from 'react'

const ContactList = (props) => {
    let userSelector = (contact) => {
        props.selContact(contact)
    }
  return (
    <div>
        <h3>Contact List</h3>
        <div className="container">
        <pre>{JSON.stringify(props)}</pre>
        <div className="row">
            <table className='table'>
                <thead className='bg-primary text-white' >
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Users.map((item, index) => {
                            return <tr key={index} onMouseOver={ () =>userSelector(item)}>
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