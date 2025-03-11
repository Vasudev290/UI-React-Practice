import React, { useRef, useState } from "react";

const ArrayRef = () => {
  const arrayRef = useRef([]);
  const [show, setShow] = useState(false);
  const arrayItemHandler = () => {
    arrayRef.current.push(`Item ${arrayRef.current.length + 1}`);
    
  };
  return (
    <div>
      <h2>Array Ref</h2>
      <button onClick={arrayItemHandler}>Add Item</button>
      <button onClick={() => setShow(!show)}>Show Item</button>
      {
        <ul>
          {
            arrayRef.current.map((item, index) => (
                <li key={index}>{item}</li>
            ))
          }
        </ul>
      }
    </div>
  );
};

export default ArrayRef;
