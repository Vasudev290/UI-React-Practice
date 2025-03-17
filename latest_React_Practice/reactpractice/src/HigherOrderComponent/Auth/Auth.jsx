import React from "react";

const Auth = (Component) => {
  const userDetails = {
    firstName: "Vasu",
    lastName: "Dev",
    email: "vasu@gmail.com",
  };
  const isLoggedIn = true; // Fixed typo (was 'isLOggedIn')

  return (props) => {
    if (isLoggedIn) {
      return <Component {...props} userDetails={userDetails} />;
    } else {
      return <p>Oops😂😂, Sorry! You're not an authorized user..!🙏🙏</p>;
    }
  };
};

export default Auth;
