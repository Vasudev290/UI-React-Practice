import React from 'react'
import NewUser from './NewUser'
import NewComments from './NewComments'
import UserForm from './UserForm'
import CommentForm from './CommentForm'
const PostDisplay = () => {
  return (
    <div className='postSection'>
        <div className='poster'>
            <div className='postImage'>
                <img src="assets/i13.jpg" alt="" />
            </div>
            <div className='postButtons'>
                <button>Subscribe</button>
                <button>Comments</button>
                <button>Like</button>
            </div>
            <div className='userForm'>
                {}
                {}
            </div>
        </div>
        <div className='subSection'>
            <NewUser/>
            <NewComments/>
        </div>
    </div>
  )
}

export default PostDisplay