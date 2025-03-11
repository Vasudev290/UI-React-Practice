import React, { useRef, useState } from 'react'

const ArrayRef = () => {
    const ItemRef = useRef([]);
    const [show, setShow] = useState(false)
    const addingItem = () => {
        ItemRef.current.push(`Item ${ItemRef.current.length + 1}`)
        setShow((prev) => !prev)
    }
  return (
    <div>
        <h2>Adding the Items in List</h2>
        <button onClick={addingItem}>Add Item</button>
        <button onClick={() => setShow(!show)}>Show Item</button>
        {
            <ul>
                {ItemRef.current.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        }
    </div>
  )
}

export default ArrayRef