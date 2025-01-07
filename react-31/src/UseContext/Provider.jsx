import React,{createContext, useContext} from 'react'
const context = createContext()
function Provider() {
    const data = {id:101, name:"Arjun", email:"vasu@gmail.com"};
  return (
    <div>
        <h2>Provider</h2>
        <context.Provider value={data}>
            <Consumer/>
        </context.Provider>
    </div>
    
  )
}


function Consumer() {
    const data1 = useContext(context)
    return(
        <div>
            <h2>Consumer Products</h2>
            <h3>Id: {data1.id}</h3>
            <h3>Name: {data1.name}</h3>
            <h3>Email: {data1.email}</h3>
        </div>
    )
}

export default Provider