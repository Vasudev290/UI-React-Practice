import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="/" className='navbar-brand'>React CRUD</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/product" className='nav-link'>Product</Link></li>
            <li><Link to="/admin" className='nav-link'>Admin</Link></li>
        </ul>
    </div>
  </nav>
}

export default Navbar