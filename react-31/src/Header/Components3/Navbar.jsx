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
                <li><Link to='/count' className='nav-link'>Counter</Link></li>
                <li><Link to='/timer' className='nav-link'>Timer</Link></li>
                <li><Link to='/animate' className='nav-link'>Animate Box</Link></li>
                <li><Link to='/input' className='nav-link'>Input Field</Link></li>
                <li><Link to='/task' className='nav-link'>Task</Link></li>
                <li><Link to='/care' className='nav-link'>Carousel</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar