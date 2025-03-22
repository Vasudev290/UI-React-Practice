import React from 'react'
import { useSelector } from 'react-redux'

const NewUser = () => {
  const subscriber = useSelector((state) => state.subscriber.users)
  return (
    <div className='userSection'>
        Subscribers:
        {subscriber.map((user, index) => {
          return (
            <div>
              <ul style={{listStyle: 'none'}}>
                <li key={index}>{user}</li>
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default NewUser