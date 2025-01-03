import React,{useState} from 'react'
import FormError from './FormError'

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
  return (
    <div>
       <div className='form-group md-4'>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='form-control'/>
       </div>
        <div className='form-group'>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' className='form-control'/>
        </div>
        
        <p>{`Name:${name} , Age: ${age} `}</p>
        <div>
          <FormError/>
        </div>
    </div>
    
  )
}

export default Form