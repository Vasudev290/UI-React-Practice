import React,{memo} from 'react'

const Count = (props) => {
    console.log("Count Component");
    
  return (
    <div>
       <h3>{props.text}is {props.count}</h3>
    </div>
  )
}

export default memo(Count)