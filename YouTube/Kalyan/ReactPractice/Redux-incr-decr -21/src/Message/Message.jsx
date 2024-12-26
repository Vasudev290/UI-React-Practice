import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {gnAction, gmAction} from '../Redux/Msg/message.action.js'

const Message = () => {
  let dispatch = useDispatch()

  let message = useSelector((state) => {
    return state;
  });

  let gmHalder = () => {
    dispatch(gmAction())
  }
  let gnHandler = () => {
    dispatch(gnAction())
  }
  return (
    <div>
      
        <h3>Message Component</h3>
        <pre>{JSON.stringify(message)}</pre>
        <hr />
        <h3>Value : {message.msg}</h3>
        <button onClick={gmHalder} className='btn btn-success mr-3'>GM</button>
        <button onClick={gnHandler} className='btn btn-primary mr-3'>GN</button>
    </div>
  )
}

export default Message