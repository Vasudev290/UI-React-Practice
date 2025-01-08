import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <Link to='/' className='navbar-brand fw-bold'>UseRef</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/basic' className='nav-link'>Basic</Link></li>
                <li><Link to='/focus' className='nav-link'>Form Focus</Link></li>
                <li><Link to='/watch' className='nav-link'>Stop Watch</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar