import React, { useEffect, useState, useRef } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }
  };

  const stopHandler = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const restartHandler = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setCount(0);
  };

  return (
    <div>
      <h2>Timer Count: {count}</h2>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={restartHandler}>Restart</button>
    </div>
  );
};

export default Count;
