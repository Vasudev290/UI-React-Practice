import React, { useCallback, useEffect, useState } from "react";

const InputFieldString = () => {
  const [text, setText] = useState("hello");
  const [convertToUpper, setConvertToUpper] = useState("");

  //With UseCallback
//   const convertToUpper = useCallback(() => {
//     return text.toUpperCase();
//   }, [text]);

//Normal method
useEffect(() => {
    setConvertToUpper(text.toUpperCase())
}, [text]);

  return (
    <div>
      <h2>Original : {text}</h2>
      <h2>UpperCase : {convertToUpper}</h2>
      <input
        type="text"
        value={text}
        placeholder="Type Here..!"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default InputFieldString;
