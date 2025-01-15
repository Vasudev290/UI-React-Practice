import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const countCart = useSelector((state) => state.cartInfo.cartValue.length)
  const priceCart = useSelector((state) => state.cartInfo.totalPrice)
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='d-inline p-2 navbar-nav mx-auto'>
                <span className='btn btn-primary'>Cart Item: {countCart}</span> &nbsp;
                <span className='btn btn-primary'>Total Price: {priceCart}</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar