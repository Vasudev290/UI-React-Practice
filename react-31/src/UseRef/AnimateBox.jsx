import React, { useRef } from 'react';

function AnimateBox() {
  const boxRef = useRef(null);

  const handleMove = () => {
    boxRef.current.style.transform = 'translateX(100px)';
    boxRef.current.style.transition = 'all 0.5s ease';
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
        }}
      ></div>
      <button onClick={handleMove}>Move</button>
    </div>
  );
}

export default AnimateBox;
