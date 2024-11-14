import React, { useContext } from 'react'
const Context = React.createContext();  //First to create Object of context API

function Provider()
{
    //const data = 920;
    const data = {id:143,name:"Vasu",City:"Bangalore"};
    return(
        <div>
            <h2>Context Provider</h2>
            <Context.Provider value={data}>
                <E />
            </Context.Provider>
        </div>
    )
}
function A()
{
    return "A Component";
}

function E()
{
    const data = useContext(Context);
    return(<div>
        {/* <h2>{data}</h2> */}
        <h3>User ID: {data.id}</h3>
        <h3>User Name{data.name}</h3>
        <h3>User City :{data.City}</h3>

    </div>)
}
export default Provider