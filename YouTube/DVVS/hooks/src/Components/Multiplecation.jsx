import React,{useState,useEffect} from 'react'

const Multiplecation = () => {
const [count, setCount] = useState(0)

useEffect(() => {
    var id = 20
   let timer = setTimeout(()=>{
        setCount(count + 1)
    },1000)
    return () => clearInterval(timer)
}, [])
  return (
    <div>
        <h2>Multiplecation Value..!</h2>
        <h3>Count Value :{count}</h3>
       
         
    </div>
  )
}

export default Multiplecation