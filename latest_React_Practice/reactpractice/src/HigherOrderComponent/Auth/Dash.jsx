import React from "react";
import Auth from "./Auth";

const Dash = (props) => {
  const { firstName, lastName, email } = props.userDetails; // Fixed: 'userDetails'

  return (
    <div>
      <h4>
        {firstName} {lastName}, Welcome to the Dashboard
      </h4>
     
    </div>
  );
};
const UserAuthenticated = Auth(Dash)
export default UserAuthenticated;
