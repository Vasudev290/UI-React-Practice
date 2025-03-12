import React, { useEffect, useMemo, useState } from "react";

const slowFun = (num) => {
  for (let i = 0; i < 1000000; i++) {}
  return num * 2;
};
const InputField = () => {
  const [theme, setTheme] = useState(false);
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    return slowFun(number);
  }, [number]);

  const styleTheme = useMemo(() => {
    return {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "10px",
      };
  }, [theme])

  useEffect(() => {
    console.log("Theme Changed!")
  }, [styleTheme])

  return (
    <div>
      <h2>Input Field</h2>
      <input
        type="number"
        value={number}
        placeholder="Enter Number"
        onChange={(e) => setNumber(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={() => setTheme((prev) => !prev)}>Toggle Theme</button>
      <h3 style={styleTheme}>{doubleNumber}</h3>
    </div>
  );
};

export default InputField;
