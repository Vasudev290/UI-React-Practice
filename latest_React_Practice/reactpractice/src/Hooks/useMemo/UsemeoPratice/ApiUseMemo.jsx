import React, { useEffect, useMemo, useState } from "react";

const ApiUseMemo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.title.localeCompare(b.title));
  }, []);
  return (
    <div>
      <h2>Api Integration Value</h2>
      <hr />
      {sortedUsers.slice(0,10).map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
};

export default ApiUseMemo;
