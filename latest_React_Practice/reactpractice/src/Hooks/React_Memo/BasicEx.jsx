import React, { memo, useState } from 'react'

const ChildComp = memo(({name}) => {
    console.log("Child Comp Re- Render!")
    return <h3>Hello, {name}</h3>
})

const BasicEx = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Counter Value : {count}</h2>
        <ChildComp name={"Vasu"}/>
        <button onClick={() => setCount(count + 1)}>Incr</button>
    </div>
  )
}

export default BasicEx