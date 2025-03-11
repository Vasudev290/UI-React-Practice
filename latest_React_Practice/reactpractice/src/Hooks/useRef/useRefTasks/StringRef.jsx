import React, { useRef, useState } from "react";

const StringRef = () => {
  const [text, setText] = useState("");
  const lastTypeRef = useRef("");
  const textHandler = (e) => {
    lastTypeRef.current = text;
    setText(e.target.value);
  };
  return (
    <div>
      <h3>String Previous State</h3>
      <h3>Previous Text :{lastTypeRef.current}</h3>
      <h3>Current Text :{text}</h3>
      <input
        type="text"
        value={text}
        onChange={textHandler}
        placeholder="type here..!"
      />
    </div>
  );
};

export default StringRef;
