import React, { useEffect, useMemo, useState } from "react";

const UseMemoEx = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const changeThemeStyle = useMemo(() => {
    return {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      }
  }, [theme])

  const doubleValue = useMemo(() => {
    return slowIncreament(number)
  }, [number])

// const [doubleValue, setDoubleValue] = useState(0);
// useEffect(() => {
//     setDoubleValue(slowIncreament(number))
// }, [number])

useEffect(() => {
    console.log("Theme is Changing........!")
}, [changeThemeStyle])

  return (
    <center>
      <div>
        <h2>UseMemo Example</h2>
        <input
          type="number"
          value={number}
          placeholder="Enter Value..!"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setTheme((prev) => !prev)}>Theme Change</button>
        <h3 style={changeThemeStyle}>Count Value :{doubleValue}</h3>
      </div>
    </center>
  );
};

export default UseMemoEx;

function slowIncreament(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
