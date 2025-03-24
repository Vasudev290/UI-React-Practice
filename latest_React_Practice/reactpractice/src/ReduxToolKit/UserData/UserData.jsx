import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, getUser, updateUser } from "./Slices/userSlices";

const UserData = () => {
  const [newUser, setNewUser] = useState("");
  const [userId, setUserId] = useState(""); 
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  return (
    <div>
      <h3>User Data</h3>
      {users.length > 0 &&
        users.map((user, index) => (
          <p key={index}>
            {user.name}{" "}
            <button
              onClick={() => {
                setUserId(user.id);
                setNewUser(user.name);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser(user.id)); 
              }}
            >
              Del
            </button>
          </p>
        ))}
      <input
        type="text"
        value={newUser}
        placeholder="Enter Name"
        onChange={(e) => setNewUser(e.target.value)}
      />{" "}
      <br />
      <button
        onClick={() => {
          if (userId) {
            dispatch(updateUser({ id: userId, name: newUser })); 
            setNewUser("");
          } else {
            dispatch(addUser({ name: newUser }));
            setNewUser(""); 
          }
        }}
      >
        {userId ? "Update" : "Save"}
      </button>

      <button onClick={() => dispatch(getUser())}>Get All Users</button>
    </div>
  );
};

export default UserData;
