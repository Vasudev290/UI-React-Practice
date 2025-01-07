import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <Link to='/' className='navbar-brand fw-bold'>UseContext</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/propDrilling' className='nav-link'>Props Drilling</Link></li>
                <li><Link to='/context' className='nav-link'>UseContext</Link></li>
                <li><Link to='/origin' className='nav-link'>Origin Company</Link></li>
                <li><Link to='/theme' className='nav-link'>Theme</Link></li>
                <li><Link to='/details' className='nav-link'>Details</Link></li>
                <li><Link to='/auth' className='nav-link'>Authentication</Link></li>
                <li><Link to='/count' className='nav-link'>Count</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar