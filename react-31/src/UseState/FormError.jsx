import React,{useState} from 'react'

const FormError = () => {
    const [isVaild, setIsVaild] = useState(true)
  return (
    <div>
        <button onClick={() => setIsVaild(true)}>Submit</button>
        {!isVaild && <p style={{color: 'red'}}>Form Submission failed..! Please Try After some time</p>}
    </div>
  )
}

export default FormError