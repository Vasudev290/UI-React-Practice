import React,{useEffect, useState} from 'react'

const UseEffectApi = () => {

    const [userList, setUserList] = useState([])

    /* const userData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.json())
        .then((json) => {
            setUserList(json.data)
        }); 
    };*/
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.json())
        .then((json) => {
            setUserList(json)
        })
    }, []);

  return (
    <div>
        <h2>UseEffect Api Ingreation</h2>
        <table className='table'>
            <tr className='bg-dark text-white' >
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Zip Code</th>
            </tr>
            {
                userList.map((item) => (
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.address.zipcode}</td>
                     </tr>
                ))
            }
        </table>
    </div>
  )
}

export default UseEffectApi

