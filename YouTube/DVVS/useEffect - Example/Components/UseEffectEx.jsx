import React,{useEffect, useState} from 'react'

const UseEffectEx = () => {

    const [count, setCount] = useState(0)

    useEffect(() =>{
        setTimeout(() =>{
            setCount(count + 1)
        },1000)
    },[])
    console.log("UseEffect Executing..!");
    
  return (
    <div>
        <h2>UseEffect Examples..!</h2>
        <h3>Count Value :{count}</h3>
    </div>
  )
}

export default UseEffectEx