import React, { useCallback, useRef, useState } from 'react'

const IsVisibile = () => {
    const[isVisibile, setIsVisibile] = useState(false);

    //With Callback
    // const tapToggle = useCallback(() => {
    //     setIsVisibile((prev) => !prev)
    // }, [isVisibile])

    //Normal
    const tapToggle = useRef()
    const toggleHandler = () => {
        setIsVisibile((prev) => !prev)
    }
  return (
    <div>
        <h3>Visibility :{isVisibile ? "Visibile" : "Hidden"}</h3>
        <button ref={tapToggle} onClick={toggleHandler}>Toggle</button>
    </div>
  )
}

export default IsVisibile