import React, { useEffect, useState } from 'react';

const Names = [
  "Vasu",
  "Dev",
  "Murugan",
  "Krishna",
  "Shiva",
  "Bharma",
  "Vishnu",
  "Ganga",
  "Athali"
];

const UseEffectString = () => {
  const [name, setName] = useState(Names[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Names.length);
      setName(Names[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <h2>Hello, {name}</h2>
      <button onClick={() => setName(Names[Math.floor(Math.random() * Names.length)])}>
        Change Name
      </button>
    </div>
  );
};

export default UseEffectString;
