import React, { useEffect, useMemo, useState } from "react";

const TextReversed = () => {
  const [text, setText] = useState("");
  const [reversedText, setReversedText] = useState("");

  //Performance optimizition while using with useMemo();
  // Go with other another method have to create another hook like useState..!
  //While write with useMemo() code more easy to write

  // const reversedText = useMemo(() => {
  //     console.log("Text Reversed..!")
  //     return text.split("").reverse().join("")
  // }, [text])

  useEffect(() => {
    console.log("Text Reversed..!");
    setReversedText(text.split("").reverse().join(""));
  }, [text]);
  
  return (
    <div>
      <h2>Text Reversed</h2>
      <h3>Original Text : {text}</h3>
      <h3>Resersed Text : {reversedText}</h3>
      <input
        type="text"
        value={text}
        placeholder="Type Here..!"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextReversed;
