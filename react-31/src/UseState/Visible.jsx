import React,{useState} from 'react'

const Visible = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)} className='btn btn-secondary'>
            {
                isVisible ? 'Hide' : 'Show'
            } Paragraph
        </button>
        {isVisible && <p>This is a Toggleable Paragraph</p>}
    </div>
  )
}

export default Visible