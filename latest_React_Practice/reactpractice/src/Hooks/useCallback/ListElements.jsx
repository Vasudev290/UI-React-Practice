import React, { useEffect, useState } from "react";

const ListElements = ({ getItem }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    console.log("Setting Item !");
    setItem(getItem(10));
  }, [getItem]);
  return (
    <div>
      <h3>List Item</h3>
      {item.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default ListElements;
