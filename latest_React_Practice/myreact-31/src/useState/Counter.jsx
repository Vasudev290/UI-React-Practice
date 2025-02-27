import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 border border-slate-900 w-80 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-serif p-3 mb-2 text-center bg-red-600 text-white rounded-t-lg">
          Counter App
        </h1>
        <div className="flex flex-col items-center">
          <h3 className="m-5 p-2 text-2xl font-bold">{count}</h3>
          <div className="flex gap-4">
            <button
              className="p-3 rounded bg-green-500 text-white"
              onClick={incrHandler}
            >
              Incr
            </button>
            <button
              className="p-3 rounded bg-red-500 text-white"
              onClick={() => setCount(count ? count - 1 : 0)}
            >
              Decr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
