import React, { useEffect } from 'react'
import {userAction} from '../../Redux/User/user.action'
import {useDispatch} from 'react-redux'
const User = () => {
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(userAction())
    },[])
  return (
    <div>
        <h2>User Component</h2>
    </div>
  )
}

export default User