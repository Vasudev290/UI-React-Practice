import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gmAction,gaAction,geAction,gnAction} from '../../redux/message/message.action'

const Message = () => {
    let dispatch= useDispatch()
    let message= useSelector((state)=>{
        return state.message
    })

    let gmHandler= ()=>{
        dispatch(gmAction())
    }
    let gaHandler= ()=>{
        dispatch(gaAction())
    }
    let geHandler= ()=>{
        dispatch(geAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
    <div>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h4>Value:{message.msg}</h4>
        <button onClick={gmHandler} className='btn btn-dark ml-2'>GM</button>
        <button onClick={gaHandler} className='btn btn-secondary ml-2'>GA</button>
        <button onClick={geHandler} className='btn btn-success ml-2'>GE</button>
        <button onClick={gnHandler} className='btn btn-primary ml-2'>GN</button>
    </div>
  )
}

export default Message