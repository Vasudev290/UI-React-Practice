import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <Link to='/' className='navbar-brand fw-bold'>UseEffect</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/basic' className='nav-link'>Basic</Link></li>
                <li><Link to='/fetch' className='nav-link'>FerchData</Link></li>
                <li><Link to='/timer' className='nav-link'>Timer</Link></li>
                <li><Link to='/count' className='nav-link'>Count</Link></li>
                <li><Link to='/table' className='nav-link'>Table</Link></li>
                <li><Link to='/fetchtable' className='nav-link'>FetchTable</Link></li>
                <li><Link to='/cal' className='nav-link'>Calculate</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar