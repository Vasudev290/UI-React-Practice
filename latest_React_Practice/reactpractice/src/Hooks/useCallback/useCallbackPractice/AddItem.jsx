import React, { useCallback, useEffect, useRef, useState } from 'react'

const AddItem = () => {
    const[items, setItems] =useState(['Apple', 'Banana', 'Cherry', 'Orange']);

    //With useCallback way
    const addItem = useCallback(() => {
        setItems((prev) => [...prev, `Item ${items.length + 1}`])
    }, [items])

    //With Normal Way
    // const itemsRefCount = useRef(items.length);
    // useEffect(() => {
    //     itemsRefCount.current = items.length;
    // }, [items])
    // const addItem = () => {
    //     setItems((prev) => [...prev, `Item ${itemsRefCount.current + 1}`])
    // }

  return (
    <div>
        <h2>Adding Item in Cart 🛒🛒🛒🙄</h2>
        <h3>Items: </h3>
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        <button onClick={addItem}>Add Items</button>
    </div>
  )
}

export default AddItem