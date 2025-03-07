import React from "react";
import Details from "./Details";

const User = () => {
  const userData = {
    name: "Vasu",
    age: 23,
    email: "vasu@gmail.com",
    loc: "Bangalore",
    country: "India",
  };
  return (
    <div>
      <h2>User Details</h2>
      {JSON.stringify(userData)}
      <Details
        name={userData.name}
        age={userData.age}
        email={userData.email}
        loc={userData.loc}
        country={userData.country}
      />
    </div>
  );
};

export default User;
