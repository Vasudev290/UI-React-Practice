import React,{useState} from 'react'

const Check = () => {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
       <h3>Checked Form</h3>
       <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        Accept the tearms & Conditions
       </label>
       <br />
       <button disabled={!isChecked} className='btn btn-success'>Submit</button>
    </div>
  )
}

export default Check

