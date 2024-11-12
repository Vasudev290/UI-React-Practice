import React,{useState,useEffect} from 'react'

const Multiplecation = () => {
const [count, setCount] = useState(0)
const [multiple, setMultiple] = useState(0)


const increse = (e) => {
    setCount(count + 1)
}

useEffect(() => {
    setMultiple(count * 2)
}, [count])
  return (
    <div>
        <h2>Multiplecation Value..!</h2>
        <h3>Count Value :{count}</h3>
        <button onClick={increse} className='btn btn-success'>+</button>

        <h2>Mulitplecation Value :{multiple} </h2>
    </div>
  )
}

export default Multiplecation