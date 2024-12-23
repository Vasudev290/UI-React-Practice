import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="#" className="navbar-brand">White Wings</Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
