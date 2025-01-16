import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>React Redux-Toolkit Practice</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/user" className='nav-link'>User</Link></li>
                <li><Link to="/about" className='nav-link'>About</Link></li>
                <li><Link to="/login" className='nav-link'>Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar