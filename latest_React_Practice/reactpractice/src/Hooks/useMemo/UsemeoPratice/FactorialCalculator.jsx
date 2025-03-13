import React, { useState, useMemo } from "react";

// function factorialRecursive (n)  {
//     return n <= 1 ? 1 : n * factorialRecursive(n - 1);
//   };

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating Factorial...");

    const factorialRecursive = (n) => {
      return n <= 1 ? 1 : n * factorialRecursive(n - 1);
    };

    return factorialRecursive(number);
  }, [number]);

  return (
    <div>
      <h2>
        Factorial of {number}: {factorial}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
      />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default FactorialCalculator;
