import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-dark justify-content-center">
      
        <li className="nav-link text-white">
          <Link to="/" className="nav-link"></Link>Refresh
        </li>
        <li className="nav-link text-white">
          <Link to="/sidebar" className="nav-link"></Link>SideBar
        </li>
        <li className="nav-link text-white">
          <Link to="/dashboard" className="nav-link"></Link>Dashboard
        </li>
        <li className="nav-link text-white">
          <Link to="/projects" className="nav-link"></Link>My Projects
        </li>
        <li className="nav-link text-white">
          <Link to="/topic" className="nav-link"></Link>My Topic
        </li>
        <li className="nav-link text-white">
          <Link to="/about" className="nav-link"></Link>About
        </li>
        <li className="nav-link text-white">
          <Link to="/contact" className="nav-link"></Link>Contact Us
        </li>
        <li className="nav-link text-white">
          <Link to="/login" className="nav-link"></Link>Login
        </li>
        <li className="nav-link text-white">
          <Link to="/logout" className="nav-link"></Link>Logout
        </li>
        <li className="nav-link text-white">
          <Link to="/subscription" className="nav-link"></Link>Subscription
        </li>
    </nav>
  );
};

export default Navbar;
