import React from 'react'

const CustomerView = ({customers}) => {
  return (
    <div>
        <h3>Customer List</h3>
        <ul style={{listStyle: 'none'}}>
            {
                customers.map((cust, index) => <li key={index}>{cust}</li>)
            }
        </ul>
    </div>
  )
}

export default CustomerView