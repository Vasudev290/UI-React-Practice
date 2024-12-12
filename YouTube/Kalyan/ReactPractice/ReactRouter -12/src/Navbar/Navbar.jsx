import React from 'react'
//import './Nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href='#' className='navbar-brand'>React Router Dom</a>
        <div className="navSection">
            <ul className='navbar-nav ms-4'>
                <li><Link to="/home" className='nav-link'>Home</Link></li>
                <li><Link to="/about" className='nav-link'>About</Link></li>
                <li><Link to="/service" className='nav-link'>Service</Link></li>
                <li><Link to="/login" className='nav-link'>Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar