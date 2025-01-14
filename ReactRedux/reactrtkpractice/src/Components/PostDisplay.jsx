import React,{useState} from 'react'
import NewCommects from './NewCommects'
import NewUser from './NewUser'
import UserForm from './UserForm'
import CommentForm from './CommentForm'

const PostDisplay = () => {
    const [showUser, setShowUser] = useState(false)
    const [showCommect, setShowCommect] = useState(false)

    const likeHandler = () => {

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