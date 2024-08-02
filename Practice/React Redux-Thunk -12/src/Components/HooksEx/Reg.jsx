import React, { useRef, useState } from 'react'

const Reg = () => {
    let buttonRef= useRef(null)
    let passwordRef= useRef(null)
    let [terms,setTerms]= useState(false)
    let tcHandler= (event)=>{
        setTerms(event.target.checked)
        if(event.target.checked == true){
            buttonRef.current.disabled = false
            passwordRef.current.type= "text"
        }
        else{
            buttonRef.current.disabled = true
             passwordRef.current.type= "password"
        }
    }
  return <div className="container mt-5">
    <pre>{JSON.stringify(terms)}</pre>
    <div className="row">
        <div className="col-md-5">
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h2>Regsitration Page</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <input type="text" className='form-control' placeholder='User' />
                        </div>
                        <div className='form-group'>
                            <input type="email" className='form-control' placeholder='Email' />
                        </div>
                        <div className='form-group'>
                            <input ref={passwordRef} type="password" className='form-control' placeholder='Password' />
                        </div>
                        <div className='form-check'>
                            <input type="checkbox" className='form-check-input' onClick={tcHandler} /> 
                            <label htmlFor="">Please Accept Teams & Conditions</label>
                        </div>
                        <input type="submit" ref={buttonRef} value="Registertion" className='btn btn-success' disabled />
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
}

export default Reg