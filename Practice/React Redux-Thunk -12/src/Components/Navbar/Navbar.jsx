import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="/">Redux-Thunk Example</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li><Link to="/home" className='nav-link'>Home</Link></li>
            <li><Link to="/reg" className='nav-link'>Regsitration - UseRef()</Link></li>
            <li><Link to="/memo" className='nav-link'>Use Memo</Link></li>
            <li><Link to="/users" className='nav-link'>Users</Link></li>
        </ul>
    </div>
  </nav>
}

export default Navbar