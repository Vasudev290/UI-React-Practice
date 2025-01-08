import React, {  useRef } from 'react'

const Focus = () => {
    const inputValue = useRef("")
    // useEffect(()  => {
    //     inputValue.current.focus()
    // }, [])
    const focusInput = () => {
        inputValue.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputValue}/>
        <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default Focus