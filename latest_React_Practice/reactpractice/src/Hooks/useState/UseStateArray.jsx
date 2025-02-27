import React, {useState} from 'react'

const UseStateArray = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
    const addItem = () => {
        setItems([...items, "Mango", "Graps", "PineApple", "Orange"])
    }
  return (
    <div>
        <h1>Fruits :</h1>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={addItem}>Add Mongo</button>
    </div>
  )
}

export default UseStateArray