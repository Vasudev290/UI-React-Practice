import React,{memo} from 'react'

const Title = () => {
    console.log("Title Componet Running...!");
    
  return (
    <div>
        <h2>UseCallback Example</h2>
    </div>
  )
}

export default memo(Title)