import React, { useCallback, useMemo, useState } from "react";
import ListElements from "./ListElements";
const UseCallbackBasicEx = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  //with useMemo but don't give to execution method like ()
  // const getItem = useMemo(() => {
  //   return [number + 1, number + 2, number + 3];
  // }, [number])


  // It;s Can't Going to work bcoz, useMemo will return value (state) , useCallback will return function..!
  // const getItem = useMemo(() => {
  //   return [number + Increament + 1, number + Increament + 2, number + Increament + 3];
  // }, [number])

  const getItem = useCallback((Increament) => {
    return [number + Increament + 1, number + Increament + 2, number + Increament + 3];
  }, [number])

  const themeStyle = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      <h2>Basic useCallback Usage</h2>
      <input
        type="number"
        value={number}
        placeholder="Type Something..!"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme((prev) => !prev)}>
        {theme ? "Black" : "White"}
      </button>
      <ListElements getItem={getItem} />
    </div>
  );
};

export default UseCallbackBasicEx;
