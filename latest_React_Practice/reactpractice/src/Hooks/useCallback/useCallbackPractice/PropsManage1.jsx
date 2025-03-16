import React, { useCallback, useState } from 'react'
import PropsManage2 from './PropsManage2'

const PropsManage1 = () => {
  const[count, setCount] = useState(0)

  const increament = useCallback(() =>{
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>
      <h2>Counter Increament : {count}</h2>
      <button onClick={increament}>Increamnet</button> <br /><br />
      <PropsManage2 handleClick={increament}/>
    </div>
  )
}

export default PropsManage1