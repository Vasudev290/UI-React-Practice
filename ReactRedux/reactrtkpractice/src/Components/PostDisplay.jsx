import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import NewCommects from './NewCommects'
import NewUser from './NewUser'
import UserForm from './UserForm'
import CommentForm from './CommentForm'
import {increament} from '../reduxToolkit/CreateSlices/counterSlice'

const PostDisplay = () => {
    const [showUser, setShowUser] = useState(false)
    const [showCommect, setShowCommect] = useState(false)

    const dispatch = useDispatch()

    const likeHandler = () => {
        dispatch(increament())
    }
    const userHandler =() => {
        setShowUser(true)
    }
    const commentHandler = () => {
        setShowCommect(true)
    }
  return (
    <div className='postSection' >
    <div className="poster">
    <div className="postImage">
             <img src="assets/i13.jpg" alt="" />
         </div>
         <div className="postButtons">
             <button onClick={userHandler}>Subscribe</button>
             <button onClick={commentHandler}>Comment</button>
             <button onClick={likeHandler}>Like</button>
         </div>
         <div className="userForm">
          {showUser && <UserForm />}
         {showCommect && <CommentForm />}
         </div>
    </div>
         <div className="subSection">
             <NewUser />
             <NewCommects />
         </div>
     </div>
  )
}

export default PostDisplay