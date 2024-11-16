import React,{useCallback, useState} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

const MyParent = () => {
    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(10000);

    const updateAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const updateSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    console.log("My Parent Component Running Successfully...!");
    
  return (
    <div>
        <h4>MyParent Component</h4>
        
        <Title />
        {/* <button onClick={updateAge}>updateAge</button> */}
        <Count text="Age" count={age}></Count>
        <Button handleClick={updateAge}>UpdateAge</Button>

       {/*  <button onClick={updateSalary}>updateSalary</button> */}
       <Count text="Salary" count={salary}></Count>
       <Button handleClick={updateSalary}>UpdateSalary</Button>
    </div>
  )
}

export default MyParent