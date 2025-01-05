import React,{useEffect, useState} from 'react'
//import { json } from 'react-router-dom'

const FetchTable = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setData(data)
        }catch(err){
            if(err) throw err
        }
    }
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((response) =>response.json())
        // .then((json) => setData(json))
        fetchData()
    }, [])
  return (
    <div>
        <h3>Fetch Table</h3>
        <div className="cantainer mt-5">
            <div className="row">
                <pre>{JSON.stringify(data)}</pre>
                <div className="col-md-12">
                    <table className='table'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.address.zipcode}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FetchTable