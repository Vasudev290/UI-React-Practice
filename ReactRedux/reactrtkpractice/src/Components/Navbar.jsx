import React from 'react'
import {useSelector} from 'react-redux'
const Navbar = () => {
    const updatedLike = useSelector((state) => state.counter.value)
    const userCount = useSelector((state) => state.newSubscriber.users)
    const commentCount = useSelector((state) => state.newComments.comments)
  return (
    <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers: {userCount.length}
        </div>
        <div className="navComments">
            Comments: {commentCount.length}
        </div>
        <div className="navLikes">
            Likes: {updatedLike}
        </div>
    </div>
  )
}

export default Navbar