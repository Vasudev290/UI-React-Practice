import React, { useEffect, useState } from "react";

const FetchFilter = () => {
  const [female, setFemale] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        const femaleData = data.users.filter(
          (user) => user.gender === "female"
        );
        setFemale(femaleData);
      })
      .catch((err) => console.error("Error Fetching Data :", err));
  }, []);
  return (
    <div>
      <h2>Filter Method</h2>
      <ul>
        {female.map((femal) => {
          return (
            <li key={femal.id}>
              {femal.firstName}, {femal.lastName} = {femal.gender}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchFilter;
