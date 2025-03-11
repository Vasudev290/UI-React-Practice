import React, { useRef, useState } from "react";

const ObjectRef = () => {
  const updateRef = useRef({ name: "Vasu", age: 10 });
  const [update, setUpdate] = useState(false);
  const updateAge = () => {
    updateRef.current.age += 1;
  };
  return (
    <div>
      <h2>Object Ref</h2>
      <button onClick={updateAge}>Increase Age</button>
      <button onClick={() => setUpdate(!update)}>Show Details</button>
      {update && (
        <h3>
          Name :{updateRef.current.name} Age :{updateRef.current.age}
        </h3>
      )}
    </div>
  );
};

export default ObjectRef;
