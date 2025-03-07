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
      <Details props={userData} />
    </div>
  );
};

export default User;
