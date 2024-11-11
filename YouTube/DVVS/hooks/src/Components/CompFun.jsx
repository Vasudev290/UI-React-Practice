import React,{useState} from 'react'

const CompFun = () => {

    const details = {
        name : "",
        age : "",
        gender : "",
        email : "",
        city : '',
    };

    const [inputFilled, setInputFilled] = useState(details)

    /* const updateForm = (e) => {setInputFilled({[e.target.name] : [e.target.value]})} */

    /* const updateForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputFilled({[name] : [value]});
        }; */
        
    const updateForm = (e) => {
        setInputFilled((perv) => ({
            ...perv,[e.target.name] : e.target.value
        }));
};

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Form submited Successfully..!")
    }

  return (
    <div>
        <h1>Form Component</h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Form Details</h3>
                            </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>

                                <div className='form-group'>
                                    <input type="text" value={inputFilled.name} onChange={updateForm} name="name" placeholder='Name' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <input type="number" value={inputFilled.age} onChange={updateForm} name='age' placeholder='Age' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <input type="text" value={inputFilled.gender} onChange={updateForm} name='gender' placeholder='Gender' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <input type="email" value={inputFilled.email} onChange={updateForm} name='email' placeholder='Email' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <input type="text" value={inputFilled.city} onChange={updateForm} name='city' placeholder='City' className='form-control'/>
                                </div>
                                <input type="submit" value="Sumbit" className='btn btn-primary'  />
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompFun