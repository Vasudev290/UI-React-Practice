import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    city: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert("Form Submited Successfull!")
    console.log("Submitted Data:", user);
  };

  const updateHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#333" }}>Form Validation</h3>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Name"
          onChange={updateHandler}
          style={{
            width: "90%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #aaa",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          value={user.age}
          name="age"
          placeholder="Age"
          onChange={updateHandler}
          style={{
            width: "90%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #aaa",
            borderRadius: "5px",
          }}
        />
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={updateHandler}
          style={{
            width: "90%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #aaa",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          value={user.phone}
          name="phone"
          placeholder="Phone"
          onChange={updateHandler}
          style={{
            width: "90%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #aaa",
            borderRadius: "5px",
          }}
        />
        <input
          type="text"
          value={user.city}
          name="city"
          placeholder="City"
          onChange={updateHandler}
          style={{
            width: "90%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #aaa",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
