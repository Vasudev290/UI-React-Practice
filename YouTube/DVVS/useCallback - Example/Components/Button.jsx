import React,{memo} from 'react'

const Button = (props) => {
    console.log("Button Component");
    
  return (
    <div>
        <button className='btn btn-success' onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default memo(Button)