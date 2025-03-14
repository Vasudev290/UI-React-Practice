import React, { useEffect, useMemo, useState } from "react";

const InputFieldText = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const [doubleNumber, setDoubleNumber] = useState(0);
  // useEffect(() => {
  //   setDoubleNumber(slowFunction(number))
  // }, [number])

  useEffect(() => {
    console.log("Theme Changing..!");
  }, [themeStyle]);

  return (
    <center>
      <div>
        <h2>Input Field Text</h2>
        <input
          type="number"
          value={number}
          placeholder="type Here..!"
          onChange={(e) => setNumber(e.target.value)}
        /> <br /> <br />
        <button onClick={() => setDark((prev) => !prev)}>Increament</button>
        <h2 style={themeStyle}> Increament Value :{doubleNumber}</h2>
      </div>
    </center>
  );
};

export default InputFieldText;

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
