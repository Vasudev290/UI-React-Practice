import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <Link to='/' className='navbar-brand fw-bold'>UseState</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/count' className='nav-link'>Count</Link></li>
                <li><Link to='/form' className='nav-link'>Form</Link></li>
                <li><Link to='/task' className='nav-link'>Task</Link></li>
                <li><Link to='theme' className='nav-link'>Theme</Link></li>
                <li><Link to='/toggle' className='nav-link'>Toggle</Link></li>
                <li><Link to='/visibile' className='nav-link'>Visible</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar