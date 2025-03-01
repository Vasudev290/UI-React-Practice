import React, { useRef, useState } from "react";

const UseRefStopWatch = () => {
  const [time, setTime] = useState(0);
  const timrRef = useRef(0);

  const startTimer = () => {
    if (!timrRef.current) {
      timrRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };
  const resatrtTimer = () => {
    stopTimer();
    setTime(0);
  };
  const stopTimer = () => {
    clearInterval(timrRef.current);
    timrRef.current = null;
  };
  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>Time {time}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={resatrtTimer}>Restart</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default UseRefStopWatch;
