import React from 'react'
import Employee_Data from './EmployeeData'
const Employee = () => {
    let Employee= Employee_Data;
  return (
    <div>
        <h1>Employee Data</h1>
        <pre>{JSON.stringify(Employee)}</pre>
        <table className='table table-dark'>
            <thead className='bg-dark text-white'>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                {
                    Employee.map((emp, index) => {
                        return <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Employee