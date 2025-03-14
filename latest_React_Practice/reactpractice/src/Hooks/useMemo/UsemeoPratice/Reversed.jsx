import React, { useEffect, useMemo, useState } from 'react'

const Reversed = () => {
    const [text, setText] = useState("")
    // const [reverse, setReverse] = useState("")
    // useEffect(() => {
    //      setReverse(text.split("").reverse().join(""))
    // }, [text])

    const reverse = useMemo(() => {
        return text.split("").reverse().join("")
    }, [text])
    
  return (
    <div>
        <h3>Reversed String..!</h3>
        <h2>Original Value : {text}</h2>
        <h2>Reversed Value : {reverse}</h2>
        <input type="text" placeholder='Type Something..!' value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Reversed