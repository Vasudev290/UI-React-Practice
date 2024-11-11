import React,{useState,useEffect} from 'react'
//import Axios from 'axios'

const ApiIntegration = () => {

    const [array, setArray] = useState([ ])

    useEffect(() =>{
        //Axios.get(); //Installed from npm (library) 
        //window.fetch(); //This from windows BOW (Browser Object Windows)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((json) =>{
            setArray(json)
        })
    }, [])
  return (
    <div>
        <h2>Api Integration</h2>
        <table className='table'>
            <tr className='bg-success text-white'>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            {
            array.map((item) => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                </tr>
            ))
            }
        </table>
    </div>
  )
}

export default ApiIntegration