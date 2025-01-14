import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='d-inline p-2 navbar-nav mx-auto'>
                <span className='btn btn-primary'>Cart Item: {0}</span> &nbsp;
                <span className='btn btn-primary'>Total Price: {0}</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar