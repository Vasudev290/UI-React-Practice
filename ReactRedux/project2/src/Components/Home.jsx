import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addUsers} from '../Redux/Slices/userSlice.js'
const Home = () => {
    const [formInput, setFormInput] = useState({name:"", age:"", email:"", contact:"", location:""})
    const dispatch = useDispatch()
    
    const dataHandler = (event) => {
        setFormInput({...formInput, [event.target.name]: event.target.value});
    };
    const formSumbitHandler = (e) => {
        e.preventDefault();
        alert("User Application Submited Successfully..!")
        console.log(formInput)
    }
    const addUser = () => {
        dispatch(addUsers(formInput))
    } 

  return (
    <div>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat autem quo obcaecati enim laboriosam qui architecto dicta, voluptatum eligendi est beatae perferendis non laborum ea expedita earum nisi dolores!</p>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>User Form Details</h3>
                        </div>
                        <div className="card-body bg-dark">
                            <form onSubmit={formSumbitHandler}>
                                <div className='form-group'>
                                <input type="text" placeholder='Name' value={formInput.name} name='name' onChange={dataHandler} className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="number" placeholder='Age' value={formInput.age} name='age' onChange={dataHandler} className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="email" placeholder='Email' value={formInput.email} name='email' onChange={dataHandler} className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="number" placeholder='Contact' value={formInput.contact} name='contact'  onChange={dataHandler}className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="text" placeholder='Location' value={formInput.location} name='location' onChange={dataHandler} className='form-control' />
                                </div>
                                <input type="submit" value="Add" onClick={addUser} className='btn btn-primary' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home