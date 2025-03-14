import React, { useCallback, useMemo, useState } from "react";
import ListElements from "./ListElements";

const UseMemoBasicEx = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  // const getItem = () => {
  //   return [number + 1, number + 2, number + 3];
  // }

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    textAlign: "center",
    margin: "25px"
  };

  return (
    <div style={themeStyle}>
      <h2>Basic Example of UseCallBack</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle</button> <br />
      <ListElements getItem={getItem}/>
    </div>
  );
};

export default UseMemoBasicEx;
