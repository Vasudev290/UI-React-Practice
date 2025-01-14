import React from 'react'
import { useSelector } from 'react-redux'
const NewCommects = () => {
  const newComment = useSelector((state) => state.newComments.comments)
  return (
    <div className='commentSection'>
        Commects:{newComment.map((item, index) => {
          return(
            <div key={index}>
              {item}
            </div>
          )
        })}
    </div>
  )
}

export default NewCommects