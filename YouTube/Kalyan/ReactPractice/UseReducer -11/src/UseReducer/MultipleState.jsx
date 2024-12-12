import React, { useEffect, useReducer } from 'react'

//Type
const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

const initialState = {
    loading : true,
    data: null,
    error: null
};

//Reducer Function
const dataReducer = (state, action) => {
    switch (action.type) {
            case FETCH_INIT:
                return{...state, loading:true, error:null}
            case FETCH_START:
                return{...state, loading:false, data: action.payload}
            case FETCH_ERROR:
                return{...state, loading:false, error:action.payload}
            default:
            return state;
    }
};

const MultipleState = () => {

   const [state, dispatch] =useReducer(dataReducer, initialState)

   const dataHandler = async () => {
    try {
        dispatch({type: FETCH_INIT});
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const newData = await response.json()
        dispatch({type: FETCH_START, payload: newData })
    } catch(error) {
        dispatch({type: FETCH_ERROR, payload: error.message })
    }

   };
   useEffect(() => {
    dataHandler()
    //console.log(dataHandler())
   }, [])
  return (
    <div>
        <h2>UseReducer Methed</h2>
        {state.loading && <h4>Loading...!</h4>}
        {state.data && state.data.map((item, index) => {
            return (
                <div key={index}>
                    <h4>{item.name}</h4>
                </div>
            )
        })}
        {state.error && <h4>Error: {state.error}</h4>}
    </div>
  )
}

export default MultipleState