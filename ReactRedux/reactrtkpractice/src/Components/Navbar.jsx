import React from 'react'
import {useSelector} from 'react-redux'
const Navbar = () => {
    const updatedLike = useSelector((state) => state.counter.value)
  return (
    <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers: 
        </div>
        <div className="navComments">
            Comments: 
        </div>
        <div className="navLikes">
            Likes: {updatedLike}
        </div>
    </div>
  )
}

export default Navbar