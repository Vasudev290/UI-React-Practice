import React, { useEffect, useState } from "react";

const ListElements = ({ getItem }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItem());
    console.log("Setting Item..!")
  }, [getItem]);
  return (
    <div>
      <h2>List Elements</h2>
      {item.map((item, index) => {
       return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default ListElements;
