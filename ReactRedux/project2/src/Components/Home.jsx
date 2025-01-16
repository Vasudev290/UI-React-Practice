import React from 'react'

const Home = () => {
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
                            <form>
                                <div className='form-group'>
                                <input type="text" placeholder='Name' className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="number" placeholder='Age' className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="email" placeholder='Email' className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="number" placeholder='Contact' className='form-control' />
                                </div>
                                <div className='form-group'>
                                <input type="text" placeholder='Location' className='form-control' />
                                </div>
                                <input type="submit" value="Add" className='btn btn-primary' />
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