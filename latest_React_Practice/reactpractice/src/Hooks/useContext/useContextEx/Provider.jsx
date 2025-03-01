import React from 'react'
import ConsumeComp from './ConsumeComp';
export const Context = React.createContext(); //instence of a Context API
const Provider = () => {
    const data = [{id: 101, name: "Vasu", age: 23, loc: "Bangalore"}];
  return (
    <div>
        <h2>Provider Context API</h2>
        <Context.Provider value={data}>
            <ConsumeComp/>
        </Context.Provider>
    </div>
  )
}

export default Provider