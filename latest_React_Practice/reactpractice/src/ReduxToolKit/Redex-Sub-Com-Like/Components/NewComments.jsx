import React from 'react'
import { useSelector } from 'react-redux'

const NewComments = () => {
  const comments = useSelector((state) => state.comments.comments)
  return (
    <div className='commentScetion'>
        Comments:
        {comments.map((comment, index) => {
          return (
            <div>
              <ul style={{listStyle: 'inside'}}>
                <li key={index}>{comment}</li>
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default NewComments