import React,{useState} from 'react'

const Check = () => {
    const [isCheched, setIsChecked] = useState(false)
  return (
    <div>
       <h3>Checked Form</h3>
       <label>
        <input type="checkbox" checked={isCheched} onChange={() => setIsChecked(!isCheched)} />
        Accept the tearms & Conditions
       </label>
       <br />
       <button disabled={!isCheched} className='btn btn-success'>Submit</button>
    </div>
  )
}

export default Check