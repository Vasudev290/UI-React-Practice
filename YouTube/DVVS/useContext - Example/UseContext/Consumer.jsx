import React, { useContext } from 'react'
const Context = React.createContext()
const Consumer = () => {
    const Value = {id:101,Name:"Vasu",City:"Bangalore"}
  return (
    <div>
        <h2>Consumer Provider</h2>
        <Context.Provider value={Value}>
            <R />
        </Context.Provider>
    </div>
  )
}
function A()
{
    return "A-Component"
}
function R(){
    const data = useContext(Context)
    return(<div>
        <h3> Consumer id :{data.id}</h3>
        <h3>Consumer Name :{data.Name}</h3>
        <h3>Consumer City :{data.City}</h3>
    </div>)
}

export default Consumer