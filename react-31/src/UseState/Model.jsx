import React,{useState} from 'react'

const Model = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)} className='btn btn-success'>Open Model</button>
    
            {isOpen && (
                <div style={{border: '1px solid black', padding: '10px', width: '200px'}}>
                    <p>This is a Model</p>
                    <button onClick={() => setIsOpen(false)} className='btn btn-danger'>Close Model</button>
                </div>
            )}
        
    </div>
  )
}

export default Model