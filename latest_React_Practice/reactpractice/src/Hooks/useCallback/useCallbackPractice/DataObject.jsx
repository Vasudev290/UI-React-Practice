import React, { useCallback, useEffect, useState } from 'react'

const DataObject = () => {
    const [person, setPerson] = useState({name: "Vasu", age: 20});
    // const [updateAge, setUpdateAge] = useState(false)

    //With Nrmal Method
    // useEffect(() => {
    //     if(updateAge){
    //         setPerson((prev) => ({...prev, age: prev.age + 1}))
    //         setUpdateAge(false)
    //     }
    // }, [updateAge])

    const incr = useCallback(() => {
        setPerson((prev) => ({...prev, age: prev.age + 1}))
    }, [person])

  return (
    <div>
        <h1>User Details</h1>
        <h3>Name: {person.name}   Age: {person.age}</h3>

        {/* with Normal Method */}
        {/* <button onClick={() => setUpdateAge(true)}>Increament</button> */}

        {/* with useCallBack */}
        <button onClick={incr}>Increament AGE</button>
    </div>
  )
}

export default DataObject