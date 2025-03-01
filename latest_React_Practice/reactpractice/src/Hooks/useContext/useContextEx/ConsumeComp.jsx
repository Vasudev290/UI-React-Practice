import React, { useContext } from 'react'
import { Context } from './Provider'
const ConsumeComp = () => {
    const data = useContext(Context)

    if(!data || data.length === 0){
        return <h2>No Data Available</h2>
    }
  return (
    <div>
        <h1>Consume Component</h1>
        {/* If Data was in object we can written like this! */}

        {/* <h2>Recevied Data from Provider : {data.id}</h2>
        <h2>Recevied Data from Provider : {data.name}</h2>
        <h2>Recevied Data from Provider : {data.age}</h2>
        <h2>Recevied Data from Provider : {data.loc}</h2> */}

        {/* if data was in array we can written like this */}
        {data.map((item, index) => (
            <ul key={index}>
                <li>Id :{item.id}</li>
                <li>Name :{item.name}</li>
                <li>Age :{item.age}</li>
                <li>Location :{item.loc}</li>
            </ul>
        ))}
    </div>
  )
}

export default ConsumeComp