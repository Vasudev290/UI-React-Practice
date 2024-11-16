import React, { useReducer } from 'react'

const initialState = { count : 0};
function reducer (state, action) 
{
    switch(action.type)
    {
        case 'increase' : return {count : state.count + 1};

        case 'decrease' : return {count : state.count - 1};

        case 'reset' : return {count : state.count = 0};

        default : return {count : state.count}
    }
}

const Reduce = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //const [state, setState] = useState(initialState)
    //It's Similar to useState hook method
  return (
    <div>
        <h3>UseReducer Example</h3>
        <h2>Counter Value :{state.count}</h2>
        <button className='btn btn-success ml-3' onClick={ () => dispatch({type: 'increase'})}>Increase</button>
        <button className='btn btn-dark ml-3' onClick={ () => dispatch({type: 'reset'})}>Reset</button> 
        <button className='btn btn-danger ml-3' onClick={ () => dispatch({type: 'decrease'})}>Decrease</button>
    </div>
  )
}

export default Reduce