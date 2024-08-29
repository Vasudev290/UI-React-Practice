import React, { useState } from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
//import {Link} from 'react-router-dom'
const Form = () => {
let [passwordVisible, setPasswordVisible] = useState(false);
const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    }

  return (
    <div>
        <h1>Login Details</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor harum, ex corporis molestias quae deserunt. Totam error officia nam, soluta aliquam atque. Quibusdam id explicabo, delectus facere in odio vero ut quia deleniti, temporibus assumenda.</p>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h3>Login Page</h3>
                        </div>
                        <div className="card-body">
                        <form className='table'>
                        <div className='form-group'>
                            <input type="text" placeholder='User' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type="number" placeholder='Mobile' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type={passwordVisible ? 'text' : "password"} 
                            placeholder='Password' 
                            className='form-control' />
                            <span onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>

                        </div>
                        <div className='form-check form-check-inline'>
                            <input type="radio" name='GenderValue' className='form-check-input ml-3' /> Male
                            <input type="radio" name='GenderValue' className='form-check-input ml-3' /> Female
                        </div>
                        <div className='form-group'>
                            <textarea placeholder="Address" rows="3" className='form-control'></textarea>
                        </div>
                        <div className='form-check form-check-inline'>
                             <input type="checkbox" className='form-check-input' /> Please Accept Teams & Conditions 
                        </div>
                        <button className='btn btn-success'disabled>Submit</button>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form