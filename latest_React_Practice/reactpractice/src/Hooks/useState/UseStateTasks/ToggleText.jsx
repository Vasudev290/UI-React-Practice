import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <div>
      <h2>Toggle Text</h2>
      <button onClick={() => setisVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is Secrat message 🙄🙄!</p>}
    </div>
  );
};

export default ToggleText;
