import React,{useState} from 'react'

const Toggle = () => {
    const [isOne, setIsOne] = useState(true)
  return (
    <div>
        <h3>Light💡⚡⚡</h3>
        <button onClick={() => setIsOne(!isOne)}>
            {
                isOne ? 'ONE' : 'OFF'
            }
        </button>
    </div>
  )
}

export default Toggle