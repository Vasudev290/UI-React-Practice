import React, { useMemo, useState } from "react";

const Filtering = () => {
  const [query, setQuery] = useState("");

  const users = [
    "Vasu",
    "John",
    "Michael",
    "Emma",
    "Sophia",
    "David",
    "Olivia",
  ];

  const filteringUser = useMemo(() => {
    console.log("Filtering User..!");
    return users.map((user) =>
      user.toLowerCase().includes(query.toLowerCase())
    );
  }, [users]);

  return (
    <div>
      <h2>Filtering Process</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteringUser.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filtering;
