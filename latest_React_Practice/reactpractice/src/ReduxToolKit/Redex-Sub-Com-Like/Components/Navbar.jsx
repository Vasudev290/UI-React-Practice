import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const updatedLikeButton = useSelector((state) => state.count.value)
  return (
    <div className='navSection'>
        <div className='navTitle'>
            Redux
        </div>
        <div className='navUser'>
            Subscribe:
        </div>
        <div className='navComments'>
            Comments:
        </div>
        <div className='navLikes'>
            Likes:{updatedLikeButton}
        </div>
    </div>
  )
}

export default Navbar