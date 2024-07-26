import React from 'react'
import { Link } from 'react-router-dom'

let Admin= ()=> {
  return (
    <div>
        <Link to="/create" className='btn btn-success'>Create Products</Link>
    </div>
  )
}

export default Admin