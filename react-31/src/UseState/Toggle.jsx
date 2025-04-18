import React,{useState} from 'react'

const Toggle = () => {
    const [isOne, setIson] = useState(false)
  return (
    <div>
        <h3>Light💡</h3>
        <button onClick={() => setIson(!isOne)} className='btn btn-primary'>
            {
                isOne ? 'On' : 'Off'
            }
        </button>
    </div>
  )
}

export default Toggle