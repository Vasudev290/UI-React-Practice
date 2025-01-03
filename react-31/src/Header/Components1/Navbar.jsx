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
                <li><Link to='/task' className='nav-link'>Task</Link></li>
                <li><Link to='theme' className='nav-link'>Theme</Link></li>
                <li><Link to='/toggle' className='nav-link'>Toggle</Link></li>
                <li><Link to='/visibile' className='nav-link'>Visible</Link></li>
                <li><Link to='/check' className='nav-link'>Checked</Link></li>
                <li><Link to='/model' className='nav-link'>Model</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar